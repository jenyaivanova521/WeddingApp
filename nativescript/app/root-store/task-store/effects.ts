import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DialogType } from '~/shared/types/enum';

import { State } from '../../root-store';
import {
	TaskActionTypes,
	NoEffect,

	GetTasks,
	GetTasksSuccess,

	AddTask,
	AddTaskFailure,

	GetTaskDetails,
	GetTaskDetailsSuccess,
	GetTaskDetailsFailure,

	DeleteTask,
	DeleteTaskConfirm,
	DeleteTaskSuccess,
	DeleteTaskFailure,

	EditTask,
	EditTaskSuccess,
	EditTaskFailure,

	GetTaskStatsSuccess,
	SetTaskStatus,
	SetTaskStatusSuccess,
} from './actions';
import { DialogsService, TaskService } from '~/shared/services';

declare const confirm: any;

@Injectable()
export class TaskEffects {

	constructor(
		private actions$: Actions,
		private taskService: TaskService,
		private store: Store<State>,
		private dialogsService: DialogsService
	) { }

	private truncate(text: string): string {
		if (text.length > 40) {
			let limit = text.substr(0, 40).lastIndexOf(' ');
			text = text.substr(0, limit) + ' ...';
		}
		return text;
	};

	@Effect()
	getTasks$ = this.actions$.pipe(
		ofType<GetTasks>(TaskActionTypes.GET_TASKS),
		exhaustMap(action =>
			this.taskService
				.getTasks({ weddingId: action.payload.weddingId })
				.pipe(
					map((response: any) => {
						return new GetTasksSuccess({
							tasks: response.result
						})
					})
				)
		)
	);

	@Effect()
	addTask$ = this.actions$.pipe(
		ofType<AddTask>(TaskActionTypes.ADD_TASK),
		exhaustMap(action => {
			let task = action.payload.task;
			return this.taskService
				.addTask({
					weddingId: action.payload.weddingId,
					task: task
				})
				.pipe(
					map((response: any) => {
						this.dialogsService.showDialog(
							{
								type: DialogType.Success,
								message: 'Task added successfully'
							}
						);

						return new GetTasks({weddingId: action.payload.weddingId})
					}),
					catchError(error => of(new AddTaskFailure({ error: error.error })))
				)
		})
	);

	@Effect()
	getTaskDetails$ = this.actions$.pipe(
		ofType<GetTaskDetails>(TaskActionTypes.GET_TASK_DETAILS),
		exhaustMap(action =>
			this.taskService
				.getTask({ weddingId: action.payload.weddingId, taskId: action.payload.taskId })
				.pipe(
					map((response: any) => new GetTaskDetailsSuccess({
						task: response.result
					})),
					catchError(error => of(new GetTaskDetailsFailure({ error: error.error })))
				)
		)
	);

	@Effect({ dispatch: false })
	deleteTaskConfirm$ = this.actions$.pipe(
		ofType<DeleteTaskConfirm>(TaskActionTypes.DELETE_TASK_CONFIRM),
		tap(action => {
			const options: any = {
				title: action.payload.title,
				message: action.payload.text,
				okButtonText: 'Ok',
				cancelButtonText: 'No',
			};

			confirm(options).then((result: boolean) => {
				if (result) {
					this.store.dispatch(action.payload.confirm);
				}
			});
		})
	);

	@Effect()
	deleteTask$ = this.actions$.pipe(
		ofType<DeleteTask>(TaskActionTypes.DELETE_TASK),
		exhaustMap(action => {
			return this.taskService
				.deleteTask({
					weddingId: action.payload.weddingId,
					taskId: action.payload.taskId
				})
				.pipe(
					map(response => {
						this.dialogsService.showDialog(
							{
								type: DialogType.Success,
								message: 'Task deleted successfully'
							}
						);

						return new DeleteTaskSuccess({
							weddingId: action.payload.weddingId,
							taskId: action.payload.taskId
						})
					}),
					catchError(error => of(new DeleteTaskFailure({ error: error.error })))
				)
		})
	);

	@Effect()
	changeTaskStatusSuccess$ = this.actions$.pipe(
		ofType<any>(TaskActionTypes.TOGGLE_TASK_DETAILS, TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS),
		withLatestFrom(this.store),
		map(([action, store]) => {
			let taskId = action.payload.taskId;
			if (store.task.ui.taskDetails[taskId]) {
				return new GetTaskDetails({
					weddingId: action.payload.weddingId,
					taskId: taskId
				});
			} else {
				return new NoEffect();
			}
		})
	);

	@Effect()
	setTaskStatus = this.actions$.pipe(
		ofType<SetTaskStatus>(TaskActionTypes.SET_TASK_STATUS),
		exhaustMap(action => {
			return this.taskService.setTaskStatus(action.payload)
				.pipe(
					map(response => {
						this.dialogsService.showDialog(
							{
								type: DialogType.Success,
								message: 'Task status updated'
							}
						);

						return new SetTaskStatusSuccess({
							weddingId: action.payload.weddingId,
							taskId: action.payload.taskId,
							status: action.payload.status
						});
					}),
					catchError(err => of(new NoEffect()))
				)
		})
	);

	@Effect()
	editTask$ = this.actions$.pipe(
		ofType<EditTask>(TaskActionTypes.EDIT_TASK),
		exhaustMap(action => {
			let task = action.payload.task;
			return this.taskService
				.editTask({
					weddingId: action.payload.weddingId,
					task: task
				})
				.pipe(
					map(response => {
						this.dialogsService.showDialog(
							{
								type: DialogType.Success,
								message: 'Task updated successfully'
							}
						);

						return new EditTaskSuccess({
							weddingId: action.payload.weddingId,
							task: task
						})
					}),
					catchError(error => of(new EditTaskFailure({ error: error.error })))
				)
		})
	);

	@Effect()
	getTaskStats$ = this.actions$.pipe(
		ofType<any>(
			TaskActionTypes.GET_TASK_STATS,
			TaskActionTypes.ADD_TASK_SUCCESS,
			TaskActionTypes.DELETE_TASK_SUCCESS,
			TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS,
			TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS
		),
		exhaustMap(action =>
			this.taskService
				.getTaskStats({ weddingId: action.payload.weddingId })
				.pipe(
					map((response: any) => new GetTaskStatsSuccess({
						stats: response.result
					}))
				)
		)
	);

}
