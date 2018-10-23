import { Component, EventEmitter, Output } from '@angular/core';
import * as Toast from 'nativescript-toast';

@Component({
	moduleId: module.id,
	selector: 'create-couple-profile',
	templateUrl: 'create-couple-profile.component.html',
	styleUrls: ['../../create-profile-base.component.scss']
})
export class CreateCoupleProfileComponent {

	@Output() nextStepEvent: EventEmitter<any> =  new EventEmitter();

	private values: any = {
		avatar: '',
		name: '',
		description: '',
		events: [
			{
				type: 'reception',
				place_name: '',
				name: '',
				date: '',
				address: '',
				lng: '',
				lat: ''
			},
			{
				type: 'ceremony',
				place_name: '',
				name: '',
				date: '',
				address: '',
				lng: '',
				lat: ''
			}
		]
	};

	constructor(
	) {
		console.log("---create-couple-profile---")
	}

	public nextStep(): void {
		this.nextStepEvent.next(this.values);
		console.log(this.values);
	}

	public setValue(valueName: string, element: any, useParam?: string): void {
		this.values[valueName] = useParam ? element[useParam] : element;
	}

	public setEventDate(eventIterator: number, element: any): void {
		this.values.events[eventIterator].date = element;
	}

	public setEventLocation(eventIterator: number, location: any): void {
		console.log("location: ", location);
		if(location != null && location.geometry != null ){
			const event = this.values.events[eventIterator];
			event.place_name = location.name;
			event.name = location.name;
			event.address = location.formatted_address;			
			event.lng = location.geometry.location.lng + "";
			event.lat = location.geometry.location.lat + "";
		}
		else {
			Toast.makeText("Something wrong! please try again", "long").show();
		}
	}

}
