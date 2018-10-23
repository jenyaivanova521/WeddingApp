import { Component } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from "nativescript-angular/router"; //2018.9.4
import { alert } from "tns-core-modules/ui/dialogs";


import { AuthService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: 'register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

	processing = false;
	private email: string;
	private password: string;
	private repeatPassword: string;
	private firstName: string;
	private lastName: string;
	
	public userType: string = 'couple';
	public userTypeId: Number = 2;

	constructor(
		private authService: AuthService, private routerExtensions: RouterExtensions
	) {
		console.log("---register---")
	}

	public setType(userType: string, userTypeId): void {
		this.userType = userType;
		this.userTypeId = userTypeId;
	}

	public signUp(): void {
		/*
		if (this.userType === 'guest') {
			this.routerExtensions.navigate(['/app', 'social-feed']);
		} else {
			this.routerExtensions.navigate(['/app', this.userType]);
		}
		 //2018.9.4 This is deleted after screen test
		/**/
		
		if (!this.email || !this.password || !this.repeatPassword || !this.firstName || !this.lastName) {
            this.alert("Please provide all required input.");
            return;
		}

		if (this.repeatPassword != this.password) {
            this.alert("Please confirm repeat password and password.");
            return;
		}
		this.processing = true
		this.authService.register({
			email: this.email,
			password: this.password,
			password_repeat: this.repeatPassword,
			first_name: this.firstName,
			last_name: this.lastName,
			account_type_id: this.userTypeId
		 })
		.then(() => {
			this.processing = false
			if (this.userType === 'guest') {
				this.routerExtensions.navigate(['/app', 'social-feed']);
			} else {
				// this.routerExtensions.navigate(['/app', this.userType]);
				this.routerExtensions.navigate(['/login']);
			}
		})
		.catch(() => {
			this.processing = false
			this.alert("Unfortunately we could not register your account. Please confirm your network connection");
			//--delete after test----------------------------------
			// if (this.userType === 'guest') {
			// 	this.routerExtensions.navigate(['/app', 'social-feed']);
			// } else {
			// 	this.routerExtensions.navigate(['/app', this.userType]);
			// }
			//-----------------------------------------------------------
		})
	}

	public onFieldChange(args: any, field: string): void {
		let textField = <TextField>args.object;
		this[field] = textField.text;
	}

	alert(message: string) {
        return alert({
            title: "Wedding App",
            okButtonText: "OK",
            message: message
        });
    }
}
