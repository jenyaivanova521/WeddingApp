import { Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { screen } from 'tns-core-modules/platform';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
	selector: 'add-product',
	templateUrl: 'add-product.modal.html',
})
export class AddProductModal {

	public width: any;

	public currencies = [
		'USD',
		'PLN',
		'AUD',
		'GBP',
	];
	public units = [
		'aa',
		'bb'
	];

	private values: any = {
		name: '',
		price: '',
		currency: '',
		unit: '',
		description: '',
		photo: ''
	};

	constructor(
		private params: ModalDialogParams
	) {
		this.width = screen.mainScreen.widthDIPs;
	}

	public close(values?: any): void {
		this.params.closeCallback(values);
	}

	public setValue(fieldName: string, value: any): void {
		this.values[fieldName] = value;
	}

	public setTextValue(fieldName: string, args: any): void {
		let textField = <TextField>args.object;
		this.values[fieldName] = textField.text;
	}

	public submit(): void {
		this.close(this.values);
	}

}