import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router'

import { AuthService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'remind-password',
	templateUrl: 'remind-password.component.html',
})
export class RemindPasswordComponent {

	public email: string = '';

	constructor(
		private authService: AuthService, private routerExtensions: RouterExtensions
	) {
		console.log("---RemindPassword---")
	}

	public remindPassword(): void {
		//this.authService.sendRemindPassword(this.email);
		this.routerExtensions.back() //9.4 This is deleted after screen test
	}

}
