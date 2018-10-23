import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Partner, WeddingRoleEnum } from '~/root-store/wedding-store/models';


@Component({
	moduleId: module.id,
	selector: 'create-couple-partner',
	templateUrl: 'create-couple-partner.component.html',
	styleUrls: ['../../create-profile-base.component.scss']
})
export class CreateCouplePartnerComponent {

	@Input() partnerNumber: number;
	@Output() nextStepEvent: EventEmitter<any> = new EventEmitter();
	@Output() previousStepEvent: EventEmitter<any> =  new EventEmitter();

	private values: Partner = {
		avatar: '',
		firstName: '',
		lastName: '',
		role: WeddingRoleEnum.Bride,
		birthDate: '',
		description: ''
	};
	public roles = [
		'Groom',
		'Bride'
	];

	constructor(
	) {
		console.log("---create-couple-partner---")
	}

	public nextStep(): void {
		this.values.role = <WeddingRoleEnum>this.values.role.toLowerCase();
		this.nextStepEvent.next(this.values);
	}

	public previousStep(): void {
		this.previousStepEvent.next();
	}

	public setValue(valueName: string, element: any, useParam?: string): void {
		this.values[valueName] = useParam ? element[useParam] : element;
		// console.log(this.values);
	}

}
