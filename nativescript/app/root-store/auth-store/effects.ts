import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { RouterExtensions } from 'nativescript-angular';
import { of } from 'rxjs/observable/of';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import * as applicationSettings from 'tns-core-modules/application-settings';
import { State, ProfileSelectors } from '~/root-store';
import { GetWeddings } from '~/root-store/wedding-store/actions';

import {
	AuthActionTypes,
	GetAuthInfo,
	GetAuthInfoFailure,
	GetAuthInfoSuccess,
	Logout,
	LogoutSuccess,
	LogoutFailure
} from './actions';
import { AuthService } from '~/shared/services/auth.service';
import { selectActiveWedding } from '../wedding-store/selectors';
import { WeddingService } from '../../shared/services/wedding.service';
import { Config } from '~/shared/configs';
import { ISubscription } from 'rxjs/Subscription';
import { ProfileService } from '~/shared/services/profile.service';

@Injectable()
export class AuthEffects {
	subActiveProfile: ISubscription;
	constructor(
		private actions$: Actions,
		private authService: AuthService,
		private weddingService: WeddingService,
		private routerExt: RouterExtensions,
		private store: Store<State>,
		private profileService: ProfileService,
	) { }

	@Effect({ dispatch: false })
	login = this.actions$.pipe(
		ofType<GetAuthInfo>(AuthActionTypes.LOGIN),
		tap(() =>
			{				
				this.store.dispatch(new GetAuthInfo());
				// this.weddingService.getWeddingsID();

				this.routerExt.navigate(['/app', 'social-feed']);
			}
		)
	);

	@Effect()
	getAuthInfo$ = this.actions$.pipe(
		ofType<GetAuthInfo>(AuthActionTypes.GET_AUTH_INFO),
		exhaustMap(() =>
			this.authService
				.getAccountInfo()
				.pipe(
					concatMap((response) => {
						// console.log("Get Auth Info");
						// console.log(response);
						Config.authInfo = response.result.account;
						this.profileService.initProfiles();
						this.subActiveProfile = this.store.select(
							ProfileSelectors.selectActiveProfile
						).subscribe(activeProfile => {
							Config.activeProfile = activeProfile;
							console.log("Active Profile: " +  activeProfile);
							if (!activeProfile) {
								console.log("Config authinfo: ");
								console.log(Config.authInfo);
								if( Config.authInfo && ( Config.authInfo.accountType.name == 'couple' || 
									Config.authInfo.accountType.name == 'vendor') ){
									this.routerExt.navigate(['/app', Config.authInfo.accountType.name]);
								}
								else {
									console.log("go to social feed");
									// this.routerExt.navigate(['/app', 'social-feed']);	
								}
							}
							else {
								console.log("go to social feed");
								// this.routerExt.navigate(['/app', 'social-feed']);
							}
						});
						
						return [
							new GetAuthInfoSuccess(response.result),
							new GetWeddings(),							
						]
					}),
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
		ofType<LogoutSuccess>(AuthActionTypes.LOGOUT_SUCCESS),
		tap(authed => {
			applicationSettings.remove('jwt');

			this.routerExt.navigate(['/welcome'])
		})
	)
}
