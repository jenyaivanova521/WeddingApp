import { FlashMessagesService } from 'angular2-flash-messages';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, withLatestFrom, concatMapTo, tap } from 'rxjs/operators';
import { CookieService } from 'angular2-cookie/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../root-store';

import {
    ProfileActionTypes,
    SetActiveProfile,
    SetActiveProfileSuccess,
    SetActiveProfileFailure,
} from './actions';

@Injectable()
export class ProfileEffects {

    constructor(
        private actions$: Actions,
        private store: Store<RootStoreState.State>,
        private _flashMessagesService: FlashMessagesService,
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
