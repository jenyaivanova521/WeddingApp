import { Component, ElementRef, ViewChild } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field';
import { RouterExtensions } from 'nativescript-angular/router'; //2018.9.4
import { alert, prompt } from "tns-core-modules/ui/dialogs";

import { AuthService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	@ViewChild('passwordInput') passwordInputRef: ElementRef
	@ViewChild('emailInput') emailInputRef: ElementRef

	public email: string;
	public password: string;
	processing = false;

	constructor(
		private authService: AuthService, private routerExtensions: RouterExtensions
	){
		console.log("---SignIn---")
	}

	public signIn(): void {
		this.processing = true
		this.passwordInputRef.nativeElement.dismissSoftInput()

		console.log(this.email);
		console.log(this.password);
		if (!this.email || !this.password) {
			this.processing = false;
            this.alert("Please provide both an email address and password.");
            return;
		} 
		
		this.authService.login(this.email, this.password)
		.then(() => {
			this.processing = false;
		})
		.catch((error) => {
			console.log(error);
			this.processing = false;
			if(error.error.status==403){
				// this.alert("Unfortunately we could not find your account. Please confirm your email and password");
				this.alert(error.error.title);
			}
			else if(error.status==400) {
				this.alert("Invalid email format");
			}
			else {
				this.alert(error.error.title);				
			}
			this.passwordInputRef.nativeElement.text=""
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
