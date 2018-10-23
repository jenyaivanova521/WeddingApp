import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { VendorService } from '~/shared/services/vendor.service';
import { Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'create-vendor-profile',
	templateUrl: 'create-vendor-profile.component.html',
	styleUrls: ['../../create-profile-base.component.scss']
})
export class CreateVendorProfileComponent implements OnInit {

	@Output() nextStepEvent: EventEmitter<any> =  new EventEmitter();
	
	public rates: Array<any> = [
		'Inexpensive',
		'Affordable',
		'Moderate',
		'Expensive',
	];

	public values: any = {
		avatar:'',
		name:'',
		description:'',
		category: {
			id: null
		},
		rate: '',
		address: '',
		lng: '',
		lat: '',
		contacts: {
			phone: {
				type: 'phone',
				value: null,
				isPublic: false
			},
			email: {
				type: 'email',
				value: null,
				isPublic: false
			}
		}
	};
	vendorCategories: any = [];
	
	constructor(
		private vendorService: VendorService,
	) {
	}
	ngOnInit(): void {		
		Config.previousUrl = 'vendor';
		this.vendorService.getVendorCategories().toPromise().then(response => {
			console.log("get vendor categories");
			// console.log(response.result);
			for( var i = 0; i < response.result.length;i++){
				this.vendorCategories.push(response.result[i].name);
			}
		});
	}
	public nextStep(): void {
		this.nextStepEvent.next(this.values);
		console.log(this.values);
	}

	// public setValue(valueName: string, value: any): void {
	// 	this.values[valueName] = value;
	// }

	public setValue(valueName: string, element: any, useParam?: string): void {		
		this.values[valueName] = useParam ? element[useParam] : element;
	}
	public setContactValue(valueName: string, element: any, useParam?: string): void {
		console.log("set value : ", valueName);
		this.values.contacts[valueName].value = useParam ? element[useParam] : element;
	}
	setPublicContacts(valueName:string, event){
		this.values.contacts[valueName].isPublic = event;
	}
	setCategory(event){
		console.log(event);
		for( var i = 0; i < this.vendorCategories.length; i++ ) {
			if ( this.vendorCategories[i] == event ) {
				this.values.category.id = i+1;
			}
		}
	}
	setRate(event){
		console.log(event);
		for( var i = 0; i < this.rates.length; i++ ) {
			if ( this.rates[i] == event ) {
				this.values.rate = i+1;
			}
		}
	}
	public setEventLocation(location: any): void {
		// const event = this.values.events[eventIterator];
		// event.place_name = location.name;
		console.log("Location :",location);
		if( location != null ) {
			this.values.address = location.formatted_address;
			if( location.geometry != null ) {
				this.values.lng = location.geometry.location.lng;
				this.values.lat = location.geometry.location.lat;
			}
		}
	}

}
