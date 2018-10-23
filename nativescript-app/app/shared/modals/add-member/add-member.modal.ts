import { Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { screen } from 'tns-core-modules/platform';

@Component({
	selector: 'add-member',
	templateUrl: 'add-member.modal.html',
})
export class AddMemberModal {

	public width: any;
	public radioOptions: Array<string> = [
		'Not invited',
		'Not attending',
		'Invited',
		'Attending'
	];
	public roles: Array<string> = [
		'Groomsman',
		'Bridesmaid'
	];
	public sides: Array<string> = [
		'Groom\'s',
		'Bride\'s'
	];

	private values: any = {
		firstName: '',
		lastName: '',
		side: '',
		role: '',
		email: '',
		sendRSVP: ''
	};

	constructor(
		private params: ModalDialogParams
	) {
		this.width = screen.mainScreen.widthDIPs;
	}

	public close(values?: any): void {
		this.params.closeCallback(values);
	}

	public setValue(valueName: string, element: any): void {
		this.values[valueName] = element.value;
	}

	public setChecked(valueName: string, value: boolean): void {
		this.values[valueName] = value;
	}

	public submit(): void {
		this.close(this.values);
	}

}