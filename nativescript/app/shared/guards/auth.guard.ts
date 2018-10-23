import { Injectable, NgModule } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '~/shared/services';

@NgModule({
	providers: [AuthService]
  })
@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private authService: AuthService
	) { }

	public canActivate(): boolean {
		if (this.authService.getToken()) {
			return true;
		}
		this.router.navigate(['/login']);
		return false;
	}
}
