import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { screen } from 'tns-core-modules/platform';

import { RouterExtensions } from 'nativescript-angular/router'; //2018.9.4
import { CreateTaskModal } from '~/modules/tasks/modals';
import { State, Task } from '~/root-store';
import { selectTasks } from '~/root-store/task-store/selectors';
import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { ModalService } from '~/shared/services/modal.service';
import { VendorService } from '~/shared/services/vendor.service';
import * as geolib from 'geolib';
import { Config } from '~/shared/configs';
import * as Toast from 'nativescript-toast';

@Component({
	moduleId: module.id,
	selector: 'marketplace-list',
	templateUrl: 'marketplace-list.component.html',
	styleUrls: ['./marketplace-list.component.scss']
})
export class MarketplaceListComponent implements OnInit, OnDestroy {

	public containerHeight;		

	vendors: any;
    defaultFilters: any; 
    
    page: number;
    infiniteScrollDisabled: boolean;
    showRecommended: boolean = false;
    skipProfilingTest: boolean = false;
	profilingTest: any;
	
	constructor(
		private modalService: ModalService,
		private store: Store<State>,
		private changeDetector: ChangeDetectorRef,
		private routerExtensions: RouterExtensions,
		private vendorService: VendorService
	) {
		this.containerHeight = screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
		console.log("---marketplace-list---")
	}

	ngOnInit() {        
        this.vendors = [];
        this.page = 1;
        this.defaultFilters = {
            categoryId: undefined,
            lat: undefined,
            lng: undefined,
            rad: undefined,
            rating: undefined,
            rate: undefined
        }
        if( Config.previousUrl != 'filters' ) {
            console.log("set default filter");
            Config.filters = this.defaultFilters;
            Config.filter_location_text = "";
        }
        console.log("filter options: ");
        console.log(Config.filters);
        
        this.profilingTest = localStorage.getItem('profilingTest') ? JSON.parse(localStorage.getItem('profilingTest')) : false;
        this.skipProfilingTest = localStorage.getItem('skipProfilingTest') ? JSON.parse(localStorage.getItem('skipProfilingTest')) : false;
        this.showRecommended = localStorage.getItem('showRecommended') ? JSON.parse(localStorage.getItem('showRecommended')) : false;
        this.toggleRecommended(true);
        Config.previousUrl = "marketplace-list";
    }

    // ngAfterViewInit() {
    //     setTimeout(() => {
    //         this.initProfilingTest();
    //     }, 0)
    // }

    getVendors(reset = false) {
        if(reset) {
            this.vendors = [];
            this.page = 1;
            this.infiniteScrollDisabled = false;
        }
        console.log(Config.filters);
        this.vendorService.getVendors({
                categoryId: Config.filters.categoryId,
                lat: Config.filters.lat,
                lng: Config.filters.lng,
                rad: Config.filters.rad,
                rating: Config.filters.rating,
                rate: Config.filters.rate,                 
                page: this.page 
            }).toPromise().then(response => {
            response.result.map(vendor => {
                if(this.isRecommended(vendor)){
                    vendor.isRecommended = true;
                }
                return vendor;
            })
            this.vendors = this.vendors.concat(response.result);
            if (response.result.length < 20) {
                this.infiniteScrollDisabled = true;
            }
            if(response.result.length == 0 ) {
                Toast.makeText("No Data Found", "long").show();
            }
        });
    }

    loadMoreVendors() {
        this.page++;
        this.getVendors();
    }

    // setFilterCoordinates(event) {
    //     this.filters.lat = event.geometry.location.lat();
    //     this.filters.lng = event.geometry.location.lng();
    //     this.getVendors(true);
    // }

    // cityInputChange(value) {
    //     if (value == '') {
    //         this.filters.lat = undefined;
    //         this.filters.lng = undefined;
    //         this.getVendors(true);
    //     }
    // }

    // openProfilingTestModal() {
    //     let modal;
    //     modal = this.modalService.open(ProfilingTestComponent);
    //     modal.componentInstance['onSubmitEvent'].subscribe((profilingTest) => {
    //         this.profilingTest = profilingTest;
    //         this.toggleRecommended(true);
    //     });
    // }

    // initProfilingTest() {
    //     if (!this.profilingTest && !this.skipProfilingTest) {
    //         this.openProfilingTestModal();
    //     }
    // }

    toggleRecommended(value) {
        this.showRecommended = value;
        localStorage.setItem('showRecommended', JSON.stringify(value));
        if (value) {
            Config.filters = {
                ...Config.filters,
                ...this.profilingTest
            }
        } else {
            Config.filters = Object.assign({}, this.defaultFilters);
        }
        this.getVendors(true);
    }

    isRecommended(vendor) {
        if (!this.profilingTest) {
            return false;
        }
        if (this.profilingTest.categoryId.indexOf(vendor.category.id) > -1) {
            let distance = geolib.getDistance(
                { latitude: this.profilingTest.lat, longitude: this.profilingTest.lng },
                { latitude: vendor.lat, longitude: vendor.lng }
            );
            if(distance < 10000) {
                return true;
            }
        }
	}
	
	ngOnDestroy(): void {
		//this.tasksSubscription.unsubscribe();
		//this.activeWeddingSubscription.unsubscribe();
	}

	public filter(): void {
		//this.passwordInputRef.nativeElement.dismissSoftInput();
		//this.authService.login(this.email, this.password);
		
		this.routerExtensions.navigate(['/app', 'filters']); //2018.9.4 This is deleted after screen test
	}



	

}
