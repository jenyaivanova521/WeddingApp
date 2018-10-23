import { Component, EventEmitter, Output } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router' //9.4
@Component({
	moduleId: module.id,
	selector: 'create-vendor-payment',
	templateUrl: 'create-vendor-payment.component.html',
	styleUrls: ['../../create-profile-base.component.scss']
})
export class CreateVendorPaymentComponent {

	@Output() previousStepEvent: EventEmitter<any> = new EventEmitter();
	@Output() createProfileEvent: EventEmitter<any> = new EventEmitter();

	public paymentMethod: string = 'paypal';
	public countries: Array<any> = [
		'Poland',
		'Great Britain',
		'Russia'
	];

	public values: any = {
		company_name:'',
		company_address:'',
		vat_number:'',
		country: ''

	};

	constructor(private routerExtensions: RouterExtensions
	) {
	}

	public previousStep(): void {
		this.previousStepEvent.next();
	}

	public createProfile(): void {
		this.createProfileEvent.next();
		// this.routerExtensions.navigate(['/app', 'social-feed'])
	}

	public setValue(name: string, value: any): void {
		this.values[name] = value;
	}

	public selectOperator(operatorName: string): void {
		this.paymentMethod = operatorName;
	}

}
