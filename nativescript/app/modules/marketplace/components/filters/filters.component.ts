import { Component, OnDestroy, OnInit } from '@angular/core';
import { screen } from 'tns-core-modules/platform';

import { RouterExtensions } from 'nativescript-angular/router'
import { VendorService } from '~/shared/services/vendor.service';
import { Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'filters',
	templateUrl: 'filters.component.html',
	styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

	public containerHeight;
	filters: any;
	public tasks: Array<any> = [];
	filter_location_text;

	vendorCategories: any;
	public DistanceOption: Array<string> = [
		'Any               ',
		'25 kilimeters',
		'5 kilometers ',
		'50 kilometers',
		'10 kilometers ',
		'100 kilometers'
	];
	DistanceOptionIndex = [
		undefined,
		25000,
		5000,
		50000,
		10000,
		100000,
	];
	DistanceSelectedIndex = 0;

	public Rating_starOption: Array<string> = [
		'Any                  ',
		'3 stars              ',
		'1 stars             ',
		'4 stars              ',
		'2 stars              ',
		'5 stars               '
	];
	RatingStarOptionIndex = [
		undefined,
		3,
		1,
		4,
		2,
		5
	];
	ReversIndex = [
		0,
		2,
		4,
		1,
		3,
		5,
	];
	public RatingOption: Array<string> = [
		'Any                   ',
		'$$$ - Moderate',
		'$ - Inexpensive   ',
		'$$$$ - Expensive',
		'$$ - Affordabe',		
	];
	RatingOptionIndex = [
		undefined,
		3,
		1,
		4,
		2,
	];
	filtersOptions: any;
	constructor(
		private routerExtensions: RouterExtensions,
		private vendorService: VendorService
	) {
		this.containerHeight = screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
	}


	ngOnInit(): void {		
		Config.previousUrl = 'filters';
		this.vendorService.getVendorCategories().toPromise().then(response => {
			console.log("get vendor categories");
			// console.log(response.result);
			this.vendorCategories = ['All'];
			for( var i = 0; i < response.result.length;i++){
				this.vendorCategories.push(response.result[i].name);
			}			
		});
		this.filters = Config.filters;
		this.filter_location_text = Config.filter_location_text;
		console.log("filter location text: ", this.filter_location_text);		
		
		if( this.filters.rad ) {
			for( var i = 0; i < this.DistanceOptionIndex.length; i++){
				if( this.DistanceOptionIndex[i] == this.filters.rad) {
					this.DistanceSelectedIndex = this.ReversIndex[i];
					break;
				}
			}			
		}
		
		this.filtersOptions = [
            {
                name: 'distance',
                title: 'Distance',
                modelName: 'rad',
                withHeader: false,
                showInRecommended: false,
                options: [{
                    value: undefined,
                    title: '5 kilometers'
                }, {
                    value: 10000,
                    title: '10 kilometers'
                }, {
                    value: 15000,
                    title: '15 kilometers'
                }, {
                    value: 25000,
                    title: '25 kilometers'
                }, {
                    value: 50000,
                    title: '50 kilometers'
                }, {
                    value: 100000,
                    title: '100 kilometers'
                }]
            },
            {
                name: 'rating',
                title: 'Rating',
                modelName: 'rating',
                withHeader: true,
                showInRecommended: true,
                options: [{
                    value: undefined,
                    title: 'any'
                }, {
                    value: 1,
                    title: '1 star'
                }, {
                    value: 2,
                    title: '2 stars'
                }, {
                    value: 3,
                    title: '3 stars'
                }, {
                    value: 4,
                    title: '4 stars'
                }, {
                    value: 5,
                    title: '5 stars'
                }]
            },
            {
                name: 'rate',
                title: 'Rates',
                modelName: 'rate',
                withHeader: true,
                showInRecommended: true,
                options: [{
                    value: undefined,
                    title: 'any'
                }, {
                    value: 1,
                    title: '$ - Inexpensive'
                }, {
                    value: 2,
                    title: '$$ - Affordable'
                }, {
                    value: 3,
                    title: '$$$ - Moderate'
                }, {
                    value: 4,
                    title: '$$$$ - Expensive'
                }]
            }
		];
	}

	ngOnDestroy(): void {
		//this.tasksSubscription.unsubscribe();
	}

	public setEventLocation(location: any): void {
		var place_name = location.name;
		var address = location.formatted_address;
		this.filters.lng = location.geometry.location.lng;
		this.filters.lat = location.geometry.location.lat;
	}
	setCategory(event){
		console.log(event);
		if( event == 'All') {
			this.filters.categoryId = undefined;
			return;
		}
		for( var i = 0; i < this.vendorCategories.length; i++ ) {
			if ( this.vendorCategories[i] == event ) {
				this.filters.categoryId = i;
			}
		}
	}
	location_text(event){
		this.filter_location_text = event;
	}
	cityInputChange(value) {
        if (value == '') {
            this.filters.lat = undefined;
            this.filters.lng = undefined;            
        }
	}
	valueChanged(type, event){
		console.log(type, event);
		switch(type){
			case 0://Distance Option
				for( var i = 0; i < this.DistanceOption.length; i++) {
					if( this.DistanceOption[i] == event.label ){
						this.filters.rad = this.DistanceOptionIndex[i];
						return;
					}
				}				
				this.filters.rad = undefined;
				break;
			case 1://Rating Star Option
				for( var i = 0; i < this.Rating_starOption.length; i++) {					
					if( this.Rating_starOption[i] == event.label ){						
						this.filters.rating = this.RatingStarOptionIndex[i];
						return;
					}
				}				
				this.filters.rating = undefined;				
				break;
			case 2://Rating Option
				for( var i = 0; i < this.RatingOption.length; i++) {
					if( this.RatingOption[i] == event.label ){
						this.filters.rate = this.RatingOptionIndex[i];
						return;
					}
				}				
				this.filters.rate = undefined;
				break;
		}
	}
	
	close() {
		Config.filters = {
            categoryId: undefined,
            lat: undefined,
            lng: undefined,
            rad: undefined,
            rating: undefined,
            rate: undefined
		}
		Config.filter_location_text = "";
		this.routerExtensions.back();
	}
	nextStep() {
		Config.filters = this.filters;
		Config.filter_location_text = this.filter_location_text;		
		this.routerExtensions.back();
	}

}
