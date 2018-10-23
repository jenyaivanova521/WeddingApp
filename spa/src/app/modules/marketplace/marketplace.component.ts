import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfilingTestComponent } from './components/profiling-test/profiling-test.component';
import { VendorService } from '../../root-store/services/vendor.service';
import * as geolib from 'geolib';

@Component({
    selector: 'app-marketplace',
    templateUrl: './marketplace.component.html',
    styleUrls: ['./marketplace.component.sass']
})
export class MarketplaceComponent implements OnInit, AfterViewInit {
    vendors: any;
    defaultFilters: any;
    filters: any;
    filtersOptions: any;
    vendorCategories: any;
    page: number;
    infiniteScrollDisabled: boolean;
    showRecommended: boolean = false;
    skipProfilingTest: boolean = false;
    profilingTest: any;

    constructor(
        private modalService: NgbModal,
        private vendorService: VendorService
    ) { }

    async ngOnInit() {
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
        this.filters = Object.assign({}, this.defaultFilters);
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
        this.profilingTest = localStorage.getItem('profilingTest') ? JSON.parse(localStorage.getItem('profilingTest')) : false;
        this.skipProfilingTest = localStorage.getItem('skipProfilingTest') ? JSON.parse(localStorage.getItem('skipProfilingTest')) : false;
        this.showRecommended = localStorage.getItem('showRecommended') ? JSON.parse(localStorage.getItem('showRecommended')) : false;
        this.toggleRecommended(this.showRecommended);
        this.vendorCategories = await this.vendorService.getVendorCategories().toPromise().then(response => {
            return response.result;
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.initProfilingTest();
        }, 0)
    }

    async getVendors(reset = false) {
        if(reset) {
            this.vendors = [];
            this.page = 1;
            this.infiniteScrollDisabled = false;
        }
        await this.vendorService.getVendors({ ...this.filters, page: this.page }).toPromise().then(response => {
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
        });
    }

    loadMoreVendors() {
        this.page++;
        this.getVendors();
    }

    setFilterCoordinates(event) {
        this.filters.lat = event.geometry.location.lat();
        this.filters.lng = event.geometry.location.lng();
        this.getVendors(true);
    }

    cityInputChange(value) {
        if (value == '') {
            this.filters.lat = undefined;
            this.filters.lng = undefined;
            this.getVendors(true);
        }
    }

    openProfilingTestModal() {
        let modal;
        modal = this.modalService.open(ProfilingTestComponent);
        modal.componentInstance['onSubmitEvent'].subscribe((profilingTest) => {
            this.profilingTest = profilingTest;
            this.toggleRecommended(true);
        });
    }

    initProfilingTest() {
        if (!this.profilingTest && !this.skipProfilingTest) {
            this.openProfilingTestModal();
        }
    }

    toggleRecommended(value) {
        this.showRecommended = value;
        localStorage.setItem('showRecommended', JSON.stringify(value));
        if (value) {
            this.filters = {
                ...this.filters,
                ...this.profilingTest
            }
        } else {
            this.filters = Object.assign({}, this.defaultFilters);
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

}
