import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { catchError, exhaustMap, map, withLatestFrom, concatMap, concatMapTo } from 'rxjs/operators';
import * as applicationSettings from 'application-settings';

import { State } from '~/root-store';
import { GetTasks } from '~/root-store/task-store/actions';
import { PrivacySettingEnum, WeddingRoleEnum } from '~/root-store/wedding-store/models';
import { DialogsService, TaskService, WeddingService } from '~/shared/services';
import { DialogType } from '~/shared/types/enum';

import {
	WeddingActionTypes,
	GetWeddings,
	GetWeddingsSuccess,

	SetActiveWedding,
	SetActiveWeddingSuccess,
	SetActiveWeddingFailure,

	CreateWedding,
	CreateWeddingSuccess,
	CreateWeddingFailure,

	GetWeddingMembers,
	GetWeddingMembersSuccess,

	UpdateWedding,
	UpdateWeddingSuccess,
	UpdateWeddingFailure,
} from './actions';

@Injectable()
export class WeddingEffects {

	constructor(
		private actions$: Actions,
		private weddingService: WeddingService,
		private taskService: TaskService,
		private store: Store<State>,
		private dialogsService: DialogsService,
	) { }

	@Effect()
	getWeddings$ = this.actions$.pipe(
		ofType<GetWeddings>(WeddingActionTypes.GET_WEDDINGS),
		exhaustMap(() =>
			this.weddingService
				.getWeddings()
				.pipe(
					map(
						response => new GetWeddingsSuccess({
							weddings: response.result
						})
					)
				)
		)
	);

	@Effect()
	getWeddingsSuccess$ = this.actions$.pipe(
		ofType<GetWeddingsSuccess>(WeddingActionTypes.GET_WEDDINGS_SUCCESS),
		map((action) => {
			const weddings = action.payload.weddings;

			let activeWeddingId = applicationSettings.getString('activeWeddingId');

			if (!activeWeddingId && weddings[0]) {
				activeWeddingId = weddings[0].id;
				applicationSettings.setString('activeWeddingId', activeWeddingId);
			}

			return new SetActiveWedding();
		})
	);

	@Effect()
	setActiveWedding$ = this.actions$.pipe(
		ofType<SetActiveWedding>(WeddingActionTypes.SET_ACTIVE_WEDDING),
		withLatestFrom(this.store),
		map(([action, store]) => {
			const accountId = store.auth.authInfo.account.id;
			let activeWeddingId = action.payload ? action.payload.id : null;
			const localActiveWeddingId = applicationSettings.getString(`${accountId}-activeWeddingId`);
			let activeWedding = null;
			const weddings = store.wedding.weddings;

			if (!activeWeddingId && localActiveWeddingId) {
				activeWeddingId = localActiveWeddingId;
			} else if (!activeWeddingId && weddings[0]) {
				activeWeddingId = weddings[0].id;
			}

			if (activeWeddingId) {
				applicationSettings.setString(`${accountId}-activeWeddingId`, activeWeddingId);
			}

			if (activeWeddingId && weddings) {
				for (let i = 0; i < weddings.length; i++) {
					let wedding = weddings[i];
					if (wedding.id == activeWeddingId) {
						activeWedding = wedding;
						break;
					}
				}
			}

			if (!activeWedding) {
				applicationSettings.remove(`${accountId}-activeWeddingId`);
			}

			if (activeWedding) {
				return new SetActiveWeddingSuccess({
					wedding: activeWedding
				});
			} else {
				return new SetActiveWeddingFailure();
			}

		})
	);

	@Effect()
	setActiveWeddingSuccess$ = this.actions$.pipe(
		ofType<SetActiveWeddingSuccess>(WeddingActionTypes.SET_ACTIVE_WEDDING_SUCCESS),
		map(action => action.payload),
		concatMap(payload => [
				new GetWeddingMembers(),
				new GetTasks({weddingId: payload.wedding.id})
		])
	);

	@Effect()
	getWeddingMembers$ = this.actions$.pipe(
		ofType<GetWeddingMembers>(WeddingActionTypes.GET_WEDDING_MEMBERS),
		exhaustMap(action =>
			this.weddingService
				.getWeddingMembers()
				.pipe(
					map((response: any) => new GetWeddingMembersSuccess({
						weddingMembers: response.result
					}))
				)
		)
	);

	@Effect()
	createWedding$ = this.actions$.pipe(
		ofType<CreateWedding>(WeddingActionTypes.CREATE_WEDDING),
		exhaustMap(action =>
			this.weddingService
				.createWedding(action.payload)
				.pipe(
					concatMapTo([
						new GetWeddings(),
						new CreateWeddingSuccess()
					]),
					catchError(error => of(new CreateWeddingFailure(error)))
				)
		)
	);

	@Effect()
	updateWedding$ = this.actions$.pipe(
		ofType<UpdateWedding>(WeddingActionTypes.UPDATE_WEDDING),
		exhaustMap(action => {
			let wedding = action.payload.wedding;
			return this.weddingService
				.changeWeddingName({
					name: wedding.name
				})
				.pipe(
					map(response => {
						this.dialogsService.showDialog(
							{
								type: DialogType.Success,
								message: 'Wedding updated successfully'
							}
						);
						return new UpdateWeddingSuccess({
							wedding: wedding
						})
					}),
					catchError(error => {
						this.dialogsService.showDialog({
							type: DialogType.Alert,
							message: error.error.title
						});
						return of(new UpdateWeddingFailure({ error: error.error }));
					})
				)
		})
	);

}
