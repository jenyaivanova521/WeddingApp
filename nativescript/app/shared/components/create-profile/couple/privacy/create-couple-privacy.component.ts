import { Component, EventEmitter, Output } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router' //9.4


import { PrivacySettingEnum } from '~/root-store/wedding-store/models';

@Component({
	moduleId: module.id,
	selector: 'create-couple-privacy',
	templateUrl: 'create-couple-privacy.component.html',
	styleUrls: ['../../create-profile-base.component.scss', './create-couple-privacy.component.scss']
})
export class CreateCouplePrivacyComponent {

	@Output() createProfileEvent: EventEmitter<any> = new EventEmitter();
	@Output() previousStepEvent: EventEmitter<any> =  new EventEmitter();

	public privacyType: PrivacySettingEnum = PrivacySettingEnum.Public;
	public PrivacySettingsEnum = PrivacySettingEnum;

	constructor( private routerExtensions: RouterExtensions
	) {
		console.log("---create-couple-privacy---")
	}

	public previousStep(): void {
		this.previousStepEvent.next();
	}

	public createProfile(): void {
		this.createProfileEvent.next(this.privacyType);
		//this.routerExtensions.navigate(['/app', 'social-feed'])
	}

	public selectPrivacyType(type: PrivacySettingEnum): void {
		this.privacyType = type;
	}

}
