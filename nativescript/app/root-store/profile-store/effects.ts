import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mapTo, withLatestFrom, concatMapTo, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import {
    ProfileActionTypes,
    SetActiveProfile,
    SetActiveProfileSuccess,
    SetActiveProfileFailure,
} from './actions';
import { State } from '~/root-store/profile-store/state';

@Injectable()
export class ProfileEffects {

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private router: Router
    ) { }

    @Effect({ dispatch: false })
    setActiveProfile$ = this.actions$.pipe(
        ofType<SetActiveProfile>(ProfileActionTypes.SET_ACTIVE_PROFILE),
        tap(action => {
            if(action.payload.profile) {
                localStorage.setItem(action.payload.accountId + '-activeProfileId', action.payload.profile.id);
            }
        })
    );

}
