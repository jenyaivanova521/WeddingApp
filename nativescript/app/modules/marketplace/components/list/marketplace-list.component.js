"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router"); //2018.9.4
var modal_service_1 = require("~/shared/services/modal.service");
var vendor_service_1 = require("~/shared/services/vendor.service");
var geolib = require("geolib");
var MarketplaceListComponent = /** @class */ (function () {
    function MarketplaceListComponent(modalService, store, changeDetector, routerExtensions, vendorService) {
        this.modalService = modalService;
        this.store = store;
        this.changeDetector = changeDetector;
        this.routerExtensions = routerExtensions;
        this.vendorService = vendorService;
        this.showRecommended = false;
        this.skipProfilingTest = false;
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
        console.log("---marketplace-list---");
    }
    MarketplaceListComponent.prototype.ngOnInit = function () {
        this.vendors = [];
        this.page = 1;
        this.defaultFilters = {
            categoryId: undefined,
            lat: undefined,
            lng: undefined,
            rad: undefined,
            rating: undefined,
            rate: undefined
        };
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
        this.vendorCategories = this.vendorService.getVendorCategories().toPromise().then(function (response) {
            return response.result;
        });
    };
    // ngAfterViewInit() {
    //     setTimeout(() => {
    //         this.initProfilingTest();
    //     }, 0)
    // }
    MarketplaceListComponent.prototype.getVendors = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.vendors = [];
            this.page = 1;
            this.infiniteScrollDisabled = false;
        }
        this.vendorService.getVendors(tslib_1.__assign({}, this.filters, { page: this.page })).toPromise().then(function (response) {
            response.result.map(function (vendor) {
                if (_this.isRecommended(vendor)) {
                    vendor.isRecommended = true;
                }
                return vendor;
            });
            _this.vendors = _this.vendors.concat(response.result);
            if (response.result.length < 20) {
                _this.infiniteScrollDisabled = true;
            }
        });
    };
    MarketplaceListComponent.prototype.loadMoreVendors = function () {
        this.page++;
        this.getVendors();
    };
    MarketplaceListComponent.prototype.setFilterCoordinates = function (event) {
        this.filters.lat = event.geometry.location.lat();
        this.filters.lng = event.geometry.location.lng();
        this.getVendors(true);
    };
    MarketplaceListComponent.prototype.cityInputChange = function (value) {
        if (value == '') {
            this.filters.lat = undefined;
            this.filters.lng = undefined;
            this.getVendors(true);
        }
    };
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
    MarketplaceListComponent.prototype.toggleRecommended = function (value) {
        this.showRecommended = value;
        localStorage.setItem('showRecommended', JSON.stringify(value));
        if (value) {
            this.filters = tslib_1.__assign({}, this.filters, this.profilingTest);
        }
        else {
            this.filters = Object.assign({}, this.defaultFilters);
        }
        this.getVendors(true);
    };
    MarketplaceListComponent.prototype.isRecommended = function (vendor) {
        if (!this.profilingTest) {
            return false;
        }
        if (this.profilingTest.categoryId.indexOf(vendor.category.id) > -1) {
            var distance = geolib.getDistance({ latitude: this.profilingTest.lat, longitude: this.profilingTest.lng }, { latitude: vendor.lat, longitude: vendor.lng });
            if (distance < 10000) {
                return true;
            }
        }
    };
    MarketplaceListComponent.prototype.ngOnDestroy = function () {
        //this.tasksSubscription.unsubscribe();
        //this.activeWeddingSubscription.unsubscribe();
    };
    MarketplaceListComponent.prototype.filter = function () {
        //this.passwordInputRef.nativeElement.dismissSoftInput();
        //this.authService.login(this.email, this.password);
        this.routerExtensions.navigate(['/app', 'filters']); //2018.9.4 This is deleted after screen test
    };
    MarketplaceListComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'marketplace-list',
            templateUrl: 'marketplace-list.component.html',
            styleUrls: ['./marketplace-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [modal_service_1.ModalService,
            store_1.Store,
            core_1.ChangeDetectorRef,
            router_1.RouterExtensions,
            vendor_service_1.VendorService])
    ], MarketplaceListComponent);
    return MarketplaceListComponent;
}());
exports.MarketplaceListComponent = MarketplaceListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0cGxhY2UtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXJrZXRwbGFjZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0Y7QUFDaEYscUNBQW9DO0FBRXBDLHNEQUFtRDtBQUVuRCxzREFBK0QsQ0FBQyxVQUFVO0FBTTFFLGlFQUErRDtBQUMvRCxtRUFBaUU7QUFDakUsK0JBQWlDO0FBUWpDO0lBZUMsa0NBQ1MsWUFBMEIsRUFDMUIsS0FBbUIsRUFDbkIsY0FBaUMsRUFDakMsZ0JBQWtDLEVBQ2xDLGFBQTRCO1FBSjVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFUbEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBVXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QjtRQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFDTyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDbEIsVUFBVSxFQUFFLFNBQVM7WUFDckIsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxTQUFTO1lBQ2QsTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLFNBQVM7U0FDbEIsQ0FBQTtRQUNELElBQUksQ0FBQyxP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LEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FDbEQsQ0FBQztZQUNGLEVBQUUsQ0FBQSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO0lBQ1IsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDQyx1Q0FBdUM7UUFDdkMsK0NBQStDO0lBQ2hELENBQUM7SUFFTSx5Q0FBTSxHQUFiO1FBQ0MseURBQXlEO1FBQ3pELG9EQUFvRDtRQUVwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7SUFDbEcsQ0FBQztJQS9OVyx3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7U0FDaEQsQ0FBQztpREFpQnNCLDRCQUFZO1lBQ25CLGFBQUs7WUFDSSx3QkFBaUI7WUFDZix5QkFBZ0I7WUFDbkIsOEJBQWE7T0FwQnpCLHdCQUF3QixDQXFPcEM7SUFBRCwrQkFBQztDQUFBLEFBck9ELElBcU9DO0FBck9ZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7IC8vMjAxOC45LjRcclxuaW1wb3J0IHsgQ3JlYXRlVGFza01vZGFsIH0gZnJvbSAnfi9tb2R1bGVzL3Rhc2tzL21vZGFscyc7XHJcbmltcG9ydCB7IFN0YXRlLCBUYXNrIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxuaW1wb3J0IHsgc2VsZWN0VGFza3MgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvdGFzay1zdG9yZS9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgc2VsZWN0QWN0aXZlV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBnZW9saWIgZnJvbSAnZ2VvbGliJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdtYXJrZXRwbGFjZS1saXN0JyxcclxuXHR0ZW1wbGF0ZVVybDogJ21hcmtldHBsYWNlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL21hcmtldHBsYWNlLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFya2V0cGxhY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRwdWJsaWMgY29udGFpbmVySGVpZ2h0O1x0XHRcclxuXHJcblx0dmVuZG9yczogYW55O1xyXG4gICAgZGVmYXVsdEZpbHRlcnM6IGFueTtcclxuICAgIGZpbHRlcnM6IGFueTtcclxuICAgIGZpbHRlcnNPcHRpb25zOiBhbnk7XHJcbiAgICB2ZW5kb3JDYXRlZ29yaWVzOiBhbnk7XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcbiAgICBpbmZpbml0ZVNjcm9sbERpc2FibGVkOiBib29sZWFuO1xyXG4gICAgc2hvd1JlY29tbWVuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBza2lwUHJvZmlsaW5nVGVzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHByb2ZpbGluZ1Rlc3Q6IGFueTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuXHRcdHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzIC0gMTQwOyAvLyBUb3BiYXIgaGVpZ2h0ICsgc29tZSBtYXJnaW5cclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tbWFya2V0cGxhY2UtbGlzdC0tLVwiKVxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy52ZW5kb3JzID0gW107XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGxhdDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBsbmc6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcmFkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJhdGluZzogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICByYXRlOiB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0RmlsdGVycyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzT3B0aW9ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Rpc3RhbmNlJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlzdGFuY2UnLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lOiAncmFkJyxcclxuICAgICAgICAgICAgICAgIHdpdGhIZWFkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0luUmVjb21tZW5kZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnNSBraWxvbWV0ZXJzJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzEwIGtpbG9tZXRlcnMnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDE1MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnMTUga2lsb21ldGVycydcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjUwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICcyNSBraWxvbWV0ZXJzJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1MDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzUwIGtpbG9tZXRlcnMnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzEwMCBraWxvbWV0ZXJzJ1xyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3JhdGluZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JhdGluZycsXHJcbiAgICAgICAgICAgICAgICBtb2RlbE5hbWU6ICdyYXRpbmcnLFxyXG4gICAgICAgICAgICAgICAgd2l0aEhlYWRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dJblJlY29tbWVuZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnYW55J1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnMSBzdGFyJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnMiBzdGFycydcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJzMgc3RhcnMnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICc0IHN0YXJzJ1xyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnNSBzdGFycydcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyYXRlJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUmF0ZXMnLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lOiAncmF0ZScsXHJcbiAgICAgICAgICAgICAgICB3aXRoSGVhZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0luUmVjb21tZW5kZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdhbnknXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICckIC0gSW5leHBlbnNpdmUnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICckJCAtIEFmZm9yZGFibGUnXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICckJCQgLSBNb2RlcmF0ZSdcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJyQkJCQgLSBFeHBlbnNpdmUnXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnByb2ZpbGluZ1Rlc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsaW5nVGVzdCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsaW5nVGVzdCcpKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2tpcFByb2ZpbGluZ1Rlc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2tpcFByb2ZpbGluZ1Rlc3QnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NraXBQcm9maWxpbmdUZXN0JykpIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG93UmVjb21tZW5kZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2hvd1JlY29tbWVuZGVkJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaG93UmVjb21tZW5kZWQnKSkgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVJlY29tbWVuZGVkKHRoaXMuc2hvd1JlY29tbWVuZGVkKTtcclxuICAgICAgICB0aGlzLnZlbmRvckNhdGVnb3JpZXMgPSB0aGlzLnZlbmRvclNlcnZpY2UuZ2V0VmVuZG9yQ2F0ZWdvcmllcygpLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pbml0UHJvZmlsaW5nVGVzdCgpO1xyXG4gICAgLy8gICAgIH0sIDApXHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0VmVuZG9ycyhyZXNldCA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYocmVzZXQpIHtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGxEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZlbmRvclNlcnZpY2UuZ2V0VmVuZG9ycyh7IC4uLnRoaXMuZmlsdGVycywgcGFnZTogdGhpcy5wYWdlIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZS5yZXN1bHQubWFwKHZlbmRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzUmVjb21tZW5kZWQodmVuZG9yKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVuZG9yLmlzUmVjb21tZW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlbmRvcjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gdGhpcy52ZW5kb3JzLmNvbmNhdChyZXNwb25zZS5yZXN1bHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0Lmxlbmd0aCA8IDIwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZmluaXRlU2Nyb2xsRGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1vcmVWZW5kb3JzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZSsrO1xyXG4gICAgICAgIHRoaXMuZ2V0VmVuZG9ycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpbHRlckNvb3JkaW5hdGVzKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLmxhdCA9IGV2ZW50Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5sbmcgPSBldmVudC5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcclxuICAgICAgICB0aGlzLmdldFZlbmRvcnModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2l0eUlucHV0Q2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5sYXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVycy5sbmcgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmVuZG9ycyh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3BlblByb2ZpbGluZ1Rlc3RNb2RhbCgpIHtcclxuICAgIC8vICAgICBsZXQgbW9kYWw7XHJcbiAgICAvLyAgICAgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFByb2ZpbGluZ1Rlc3RDb21wb25lbnQpO1xyXG4gICAgLy8gICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlWydvblN1Ym1pdEV2ZW50J10uc3Vic2NyaWJlKChwcm9maWxpbmdUZXN0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucHJvZmlsaW5nVGVzdCA9IHByb2ZpbGluZ1Rlc3Q7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudG9nZ2xlUmVjb21tZW5kZWQodHJ1ZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaW5pdFByb2ZpbGluZ1Rlc3QoKSB7XHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLnByb2ZpbGluZ1Rlc3QgJiYgIXRoaXMuc2tpcFByb2ZpbGluZ1Rlc3QpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5vcGVuUHJvZmlsaW5nVGVzdE1vZGFsKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHRvZ2dsZVJlY29tbWVuZGVkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UmVjb21tZW5kZWQgPSB2YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hvd1JlY29tbWVuZGVkJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5maWx0ZXJzLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9maWxpbmdUZXN0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRGaWx0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRWZW5kb3JzKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUmVjb21tZW5kZWQodmVuZG9yKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb2ZpbGluZ1Rlc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9maWxpbmdUZXN0LmNhdGVnb3J5SWQuaW5kZXhPZih2ZW5kb3IuY2F0ZWdvcnkuaWQpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gZ2VvbGliLmdldERpc3RhbmNlKFxyXG4gICAgICAgICAgICAgICAgeyBsYXRpdHVkZTogdGhpcy5wcm9maWxpbmdUZXN0LmxhdCwgbG9uZ2l0dWRlOiB0aGlzLnByb2ZpbGluZ1Rlc3QubG5nIH0sXHJcbiAgICAgICAgICAgICAgICB7IGxhdGl0dWRlOiB2ZW5kb3IubGF0LCBsb25naXR1ZGU6IHZlbmRvci5sbmcgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZihkaXN0YW5jZSA8IDEwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblx0XHQvL3RoaXMudGFza3NTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHRcdC8vdGhpcy5hY3RpdmVXZWRkaW5nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZmlsdGVyKCk6IHZvaWQge1xyXG5cdFx0Ly90aGlzLnBhc3N3b3JkSW5wdXRSZWYubmF0aXZlRWxlbWVudC5kaXNtaXNzU29mdElucHV0KCk7XHJcblx0XHQvL3RoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZCk7XHJcblx0XHRcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9hcHAnLCAnZmlsdGVycyddKTsgLy8yMDE4LjkuNCBUaGlzIGlzIGRlbGV0ZWQgYWZ0ZXIgc2NyZWVuIHRlc3RcclxuXHR9XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG59XHJcbiJdfQ==