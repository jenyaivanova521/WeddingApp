import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../root-store/services/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

	constructor(private injector: Injector) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const authService = this.injector.get(AuthService);
		const token = authService.getToken();
		const authorization = `Bearer ${token}`;
		const headers = {};
		if (token) {
			headers['Authorization'] = authorization
		}

		req = req.clone({
			setHeaders: headers
		});

		return next.handle(req);
	}
}
