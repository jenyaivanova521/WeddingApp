import { Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { screen } from 'tns-core-modules/platform';

@Component({
	selector: 'delete-edit',
	templateUrl: 'delete-edit.modal.html',
})
export class DeleteeditModal {

	public width: any;

	constructor(
		private params: ModalDialogParams
	) {
		this.width = screen.mainScreen.widthDIPs;
	}

	

}