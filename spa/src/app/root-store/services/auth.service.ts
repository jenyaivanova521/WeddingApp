import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'angular2-cookie/core';

import { environment } from '../../../environments/environment';
import { AuthInfo } from '../auth-store/models';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private cookies: CookieService
    ) {
    }

    private apiUrl: string = environment.apiUrl + '/auth';
    private apiUrlAccount: string = environment.apiUrl + '/account';

    public getToken(): string {
        return this.cookies.get('jwt');
    }

    public clearToken(): void {
        this.cookies.remove('jwt');
    }

    public getAccountInfo(): Observable<any> {
        const url = this.apiUrl + '/authenticate';
        return this.http.get<AuthInfo>(url);
    }

    public logout(): Observable<any> {
        return this.http.post(this.apiUrl + '/logout', {});
    }

    public changePassword({password_new, password_new_repeat, password}): Observable<any> {
        return this.http.post(`${this.apiUrl}/password/change`, {password_new, password_new_repeat, password});
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
