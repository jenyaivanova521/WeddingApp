import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';

import { AuthService, DialogsService } from '~/shared/services';
import { DialogType } from '~/shared/types/enum';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

	constructor(private injector: Injector) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const authService = this.injector.get(AuthService);
		const dialogsService = this.injector.get(DialogsService);

		const token = authService.getToken();
		const authorization = `Bearer ${token}`;
		const headers = {
			'Content-Type': 'application/json'
			// 'Content-Type':'application/x-www-form-urlencoded'
		};

		// console.log("Authorization: "+authorization);

		if (token) {
			headers['Authorization'] = authorization
		}

		req = req.clone({
			setHeaders: headers
		});

		return next.handle(req).catch((response) => {
			dialogsService.showDialog({
				type: DialogType.Alert,
				message: response.message
			});

			return throwError(response);
			// return Observable.throw(response);
		});
	}
}