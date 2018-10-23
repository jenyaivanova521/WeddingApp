import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterExtensions } from 'nativescript-angular';
import { Observable } from 'rxjs/Observable';
import * as applicationSettings from 'application-settings';

import { State } from '~/root-store';
import { AuthActionTypes } from '~/root-store/auth-store/actions';

import { API_URL, Config } from '~/shared/configs';
import { DialogsService } from '~/shared/services/dialogs.service';
import { DialogType } from '~/shared/types/enum';

@Injectable()
export class AuthService {

	private token: string
	private apiUrlAccount: string = API_URL + '/account';
	private apiUrl: string = API_URL + '/auth';
	constructor(
		private http: HttpClient,
		private store: Store<State>,
		private dialogsService: DialogsService,
		private routerExt: RouterExtensions
	) {
		console.log("---authService---")
		this.token = applicationSettings.getString('jwt', '');
		console.log(this.token)
		if (this.token) {
			setTimeout(() => {
				this.store.dispatch({type: AuthActionTypes.LOGIN});
			});
		}
	}

	getToken(): string {
		return this.token;
	}
	public clearToken(): void {
		applicationSettings.remove('jwt');
    }

	register(params: any) {
		console.log("---auth-register---")
		return new Promise((resolve, reject) => {
			this.http.post(`${API_URL}/auth/register`, 
			params
			).subscribe(
				(response: any) => {
					/*
					this.dialogsService.showDialog({
						type: DialogType.Info,
						message: 'Registered, please activate your email'
					});
					this.routerExt.navigate(['']);
					*/
					console.log(response)
					resolve()
				}, error => {
					console.log(error)
					reject()
				}
			)
		})
	}

	public registerSocial(params: any): Observable<any> {
		return this.http.post(API_URL+'/auth/register/social', params);
	}

	login(email: string, password: string) {

		return new Promise((resolve, reject) => {
            this.http.post(`${API_URL}/auth/authenticate`,
			{email, password}
			).subscribe(
				(response: any) => {
					this.token = response.result.token;
					Config.token = response.result.token;
					applicationSettings.setString('jwt', this.token);
					this.store.dispatch({type: AuthActionTypes.LOGIN});
					resolve()
				}, error => {
					// console.log(error);
					reject(error);
				}
			)
		})

	}

	public loginSocial(foreign_id: string, token: string, provider: string): Observable<any> {
		return this.http.post(`${API_URL}/auth/authenticate/social`,
			{foreign_id, token, provider}
			);
	}

	public activateAccount(hash: string): Observable<any> {
		return this.http.post(`${API_URL}/auth/activate`, {hash});
	}

	public sendRemindPassword(email: string): void {
		this.http.post(`${API_URL}/auth/password/remind`, {email})
			.subscribe(
				() => {
					this.dialogsService.showDialog({
						type: DialogType.Info,
						message: 'Email sent, should be there in 5 minutes'
					})
				}
			)
		;
	}

	public setPassword(hash: string, password: string, password_repeat: string): Observable<any> {
		return this.http.post(`${API_URL}/auth/password/set`,
			{hash, password, password_repeat}
			);
	}

	public logout(): Observable<any> {
		return this.http.post(`${API_URL}/auth/logout`, {});
	}
	
	public changePassword({password_new, password_new_repeat, password}): Observable<any> {
        return this.http.post(`${this.apiUrl}/password/change`, {password_new, password_new_repeat, password});
    }
	// ------------ END Register/login requests END ----------- //

	public getAccountInfo(): Observable<any> {
		return this.http.get(`${API_URL}/auth/authenticate`);
	}
	public deleteAccount({password}): Observable<any> {
        return this.http.post(`${this.apiUrl}/forget`, {password});
    }

    public updateAccount(account: any): Observable<any> {
        return this.http.patch(this.apiUrlAccount, account);
    }

    public setAccountAvatar(formData): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrlAccount, formData, {
            headers
        });
    }
}