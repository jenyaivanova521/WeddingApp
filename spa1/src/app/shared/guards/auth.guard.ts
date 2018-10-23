import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../root-store/services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService
    ) { }

    webUrl: string = environment.webUrl

    canActivate() {
        if (this.authService.getToken()) {
            return true;
        }
        let pathname = window.location.pathname;
        let redirect = pathname != '/' ? '?redirect=' + pathname + '&app=true' : '';
        window.location.replace(this.webUrl + '/login' + redirect);
        return false;
    }
}
