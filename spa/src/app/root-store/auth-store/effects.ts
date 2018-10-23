import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { CookieService } from 'angular2-cookie/core';
import { environment } from '../../../environments/environment';

import {
    AuthActionTypes,

    GetAuthInfo,
    GetAuthInfoFailure,
    GetAuthInfoSuccess,

    Logout,
    LogoutSuccess,
    LogoutFailure
} from './actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private cookies: CookieService
    ) { }

    private webUrl: string = environment.webUrl;

    @Effect()
    getAuthInfo$ = this.actions$.pipe(
        ofType<GetAuthInfo>(AuthActionTypes.GET_AUTH_INFO),
        exhaustMap(() =>
            this.authService
                .getAccountInfo()
                .pipe(
                    map(response => new GetAuthInfoSuccess(response.result)),
                    catchError(error => of(new GetAuthInfoFailure(error)))
                )
        )
    );

    @Effect()
    logout$ = this.actions$.pipe(
        ofType<Logout>(AuthActionTypes.LOGOUT),
        exhaustMap(() =>
            this.authService
                .logout()
                .pipe(
                    map(response => new LogoutSuccess()),
                    catchError(error => of(new LogoutFailure()))
                )
        )
    );

    @Effect({ dispatch: false })
    logoutSuccess$ = this.actions$.pipe(
        ofType<any>(AuthActionTypes.LOGOUT_SUCCESS, AuthActionTypes.GET_AUTH_INFO_FAILURE),
        tap(authed => {
            this.cookies.remove('jwt');
            window.location.replace(this.webUrl + '/login');
        })
    );

}
