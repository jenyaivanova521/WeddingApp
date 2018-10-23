"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("tns-core-modules/platform");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement('StarRating', function () { return require('nativescript-star-ratings').StarRating; });
var modals_1 = require("~/modules/marketplace/modals");
var router_1 = require("nativescript-angular/router"); //2018.9.4
var modal_service_1 = require("~/shared/services/modal.service");
var router_2 = require("@angular/router");
var vendor_service_1 = require("~/shared/services/vendor.service");
var platform_browser_1 = require("@angular/platform-browser");
var configs_1 = require("~/shared/configs");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(modalService, routerExtensions, store, route, router, vendorService, sanitizer, document) {
        this.modalService = modalService;
        this.routerExtensions = routerExtensions;
        this.store = store;
        this.route = route;
        this.router = router;
        this.vendorService = vendorService;
        this.sanitizer = sanitizer;
        this.document = document;
        this.vendorProducts = [];
        this.vendorReviews = [];
        this.vendorReviewsLoadMore = false;
        this.vendorReviewsPage = 1;
        // galleryOptions: NgxGalleryOptions[];
        this.galleryImages = [];
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
        console.log("---marketplace-detail---");
    }
    DetailComponent.prototype.ngOnInit = function () {
        console.log(configs_1.Config.marketplaceID);
        this.activeProfile = configs_1.Config.activeProfile;
        this.authInfo = configs_1.Config.authInfo;
        this.vendorId = configs_1.Config.marketplaceID;
        this.getVendorDetails();
        // if (params.vendorReviewId) {
        // this.vendorReviewId = params.vendorReviewId || null;
        // this.getVendorReviewDetails();
        // }
    };
    DetailComponent.prototype.getVendorReviews = function () {
        var _this = this;
        this.vendorService.getVendorReviews({
            vendorId: this.vendorId,
            page: this.vendorReviewsPage
        }).toPromise().then(function (response) {
            console.log("vendor reviews: ");
            console.log(response.result);
            _this.vendorReviews = _this.vendorReviews.concat(response.result);
            _this.vendorReviewsLoadMore = response.result.length == 5 ? true : false;
        });
    };
    DetailComponent.prototype.loadMoreVendorReviews = function () {
        this.vendorReviewsPage++;
        this.getVendorReviews();
    };
    DetailComponent.prototype.getVendorReviewDetails = function () {
        var _this = this;
        this.vendorService.getVendorReview({
            vendorId: this.vendorId,
            vendorReviewId: this.vendorReviewId
        }).toPromise().then(function (response) {
            console.log("get Vendor Review Details");
            console.log(response);
            _this.vendorReviewDetails = response.result;
            // setTimeout(() => {
            //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
            //         document: this.document,
            //         scrollTarget: '#vendor-review-details',
            //         pageScrollOffset: 180,
            //         pageScrollSpeed: 1200
            //     });
            //     this.pageScrollService.start(pageScrollInstance);
            // }, 500);
        });
    };
    DetailComponent.prototype.getVendorDetails = function () {
        var _this = this;
        this.vendorService.getVendor({
            vendorId: this.vendorId
        }).toPromise().then(function (response) {
            console.log("vendor details: ");
            console.log(response.result);
            _this.vendor = response.result;
            _this.initVendorDetails();
        });
    };
    DetailComponent.prototype.initVendorDetails = function () {
        var _this = this;
        this.vendorService.getVendorPhotos({
            vendorId: this.vendorId
        }).toPromise().then(function (response) {
            console.log("Init Vendor Details");
            console.log(response);
            var cdnUrl = configs_1.CDN_URL + '/vendor/' + _this.vendor.id + '/photos/';
            for (var i = 0; i < response.result.length; i++) {
                var photo = response.result[i];
                _this.galleryImages.push({
                    small: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sm$1'),
                    medium: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_lg$1'),
                    big: cdnUrl + photo.filename
                });
            }
        });
        this.vendorService.getVendorProducts({
            vendorId: this.vendorId
        }).toPromise().then(function (response) {
            console.log("get Vendor Products");
            console.log(response.result);
            _this.vendorProducts = response.result;
        });
        this.getVendorReviews();
        this.navLinks = [
            {
                name: 'Photos',
                target: '#vendor-photos',
                isVisible: this.galleryImages.length
            },
            {
                name: 'About',
                target: '#vendor-description',
                isVisible: true
            },
            {
                name: 'Pricing',
                target: '#vendor-pricing',
                isVisible: this.vendorProducts.length
            },
            {
                name: 'Reviews',
                target: '#vendor-reviews',
                isVisible: true
            },
            {
                name: 'Contact',
                target: '#vendor-contacts',
                isVisible: true
            }
        ];
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                // this.routeSubscription.unsubscribe();
                if (this.updateReviewsSubscription) {
                    this.updateReviewsSubscription.unsubscribe();
                }
                if (this.conversationSubscription) {
                    this.conversationSubscription.unsubscribe();
                }
                return [2 /*return*/];
            });
        });
    };
    DetailComponent.prototype.openVendorReviewModal = function (options) {
        // let modal = this.modalService.open(VendorReviewModalComponent);
        // modal.componentInstance['modalOptions'] = options;
        // modal.componentInstance['activeProfile'] = this.activeProfile;
        // modal.componentInstance['vendorId'] = this.vendorId;
        // this.updateReviewsSubscription = modal.componentInstance['updateReviews'].subscribe(value => {
        //     this.vendorReviewsPage = 1;
        //     this.vendor.isReviewed = true;
        //     this.getVendorDetails();
        //     this.getVendorReviews();
        // });
    };
    // messageVendor() {
    //     this.conversationSubscription = this.store.select(
    //         MessageSelectors.selectConversation(this.vendorId)
    //     ).subscribe(conversation => {
    //         if(conversation.length) {
    //             this.router.navigate(['messages', conversation[0].id]);
    //         } else {
    //             let modal = this.modalService.open(VendorMessageModalComponent);
    //             modal.componentInstance['activeProfile'] = this.activeProfile;
    //             modal.componentInstance['vendorId'] = this.vendorId;
    //         }
    //     });
    //     this.conversationSubscription.unsubscribe();
    // }
    DetailComponent.prototype.openWritereviewModal = function () {
        this.modalService.showModal(modals_1.WritereviewModal, {})
            .then(function (response) {
            // TODO add guest
        });
    };
    DetailComponent.prototype.selectTab = function (index) {
        console.log("tapped: " + index);
    };
    DetailComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: 'detail.component.html',
            styleUrls: ['./detail.component.scss']
        }),
        tslib_1.__param(7, core_1.Inject(platform_browser_1.DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [modal_service_1.ModalService,
            router_1.RouterExtensions,
            store_1.Store,
            router_2.ActivatedRoute,
            router_2.Router,
            vendor_service_1.VendorService,
            platform_browser_1.DomSanitizer, Object])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQThGO0FBQzlGLHFDQUFvQztBQUVwQyxzREFBbUQ7QUFFbkQsMEVBQXVFO0FBQ3ZFLGtDQUFlLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxVQUFVLEVBQS9DLENBQStDLENBQUMsQ0FBQTtBQUVwRix1REFBZ0U7QUFFaEUsc0RBQStELENBQUMsVUFBVTtBQUkxRSxpRUFBK0Q7QUFDL0QsMENBQXlEO0FBQ3pELG1FQUFpRTtBQUNqRSw4REFBbUU7QUFDbkUsNENBQW1EO0FBUW5EO0lBcUJDLHlCQUNTLFlBQTBCLEVBQzFCLGdCQUFrQyxFQUNsQyxLQUFrQyxFQUM1QixLQUFxQixFQUNyQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIsU0FBdUIsRUFDTCxRQUFhO1FBUHJDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDTCxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBdEIzQyxtQkFBYyxHQUFpQyxFQUFFLENBQUM7UUFFbEQsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsMEJBQXFCLEdBQVksS0FBSyxDQUFDO1FBQ3ZDLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUk5Qix1Q0FBdUM7UUFDdkMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFlckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFD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ZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBJU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknXHJcbnJlZ2lzdGVyRWxlbWVudCgnU3RhclJhdGluZycsICgpID0+IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1zdGFyLXJhdGluZ3MnKS5TdGFyUmF0aW5nKVxyXG5cclxuaW1wb3J0IHsgV3JpdGVyZXZpZXdNb2RhbCB9IGZyb20gJ34vbW9kdWxlcy9tYXJrZXRwbGFjZS9tb2RhbHMnO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7IC8vMjAxOC45LjRcclxuaW1wb3J0IHsgU3RhdGUsIFRhc2ssIENvbW1vbk1vZGVscywgUm9vdFN0b3JlU3RhdGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgc2VsZWN0QWN0aXZlV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBDb25maWcsIENETl9VUkwgfSBmcm9tICd+L3NoYXJlZC9jb25maWdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdkZXRhaWwnLFxyXG5cdHRlbXBsYXRlVXJsOiAnZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9kZXRhaWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1x0XHJcblx0cHVibGljIGNvbnRhaW5lckhlaWdodDtcdFx0XHJcblxyXG5cdGFjdGl2ZVByb2ZpbGU6IENvbW1vbk1vZGVscy5Qcm9maWxlO1xyXG4gICAgYXV0aEluZm86IGFueTtcclxuICAgIHZlbmRvcklkOiBzdHJpbmc7XHJcbiAgICB2ZW5kb3I6IENvbW1vbk1vZGVscy5WZW5kb3JEZXRhaWxzO1xyXG4gICAgdmVuZG9yUHJvZHVjdHM6IENvbW1vbk1vZGVscy5WZW5kb3JQcm9kdWN0W10gPSBbXTtcclxuICAgIHZlbmRvclJldmlldzogYW55O1xyXG4gICAgdmVuZG9yUmV2aWV3czogYW55ID0gW107XHJcbiAgICB2ZW5kb3JSZXZpZXdzTG9hZE1vcmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHZlbmRvclJldmlld3NQYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgdmVuZG9yUmV2aWV3RGV0YWlsczogYW55O1xyXG4gICAgcm91dGVTdWJzY3JpcHRpb246IElTdWJzY3JpcHRpb247XHJcbiAgICB1cGRhdGVSZXZpZXdzU3Vic2NyaXB0aW9uOiBJU3Vic2NyaXB0aW9uO1xyXG4gICAgLy8gZ2FsbGVyeU9wdGlvbnM6IE5neEdhbGxlcnlPcHRpb25zW107XHJcbiAgICBnYWxsZXJ5SW1hZ2VzID0gW107XHJcbiAgICBuYXZMaW5rczogb2JqZWN0W107XHJcbiAgICB2ZW5kb3JSZXZpZXdJZDogc3RyaW5nO1xyXG5cdGNvbnZlcnNhdGlvblN1YnNjcmlwdGlvbjogSVN1YnNjcmlwdGlvbjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxSb290U3RvcmVTdGF0ZS5TdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcclxuXHQpIHtcclxuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyAtIDE0MDsgLy8gVG9wYmFyIGhlaWdodCArIHNvbWUgbWFyZ2luXHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLW1hcmtldHBsYWNlLWRldGFpbC0tLVwiKVxyXG5cdH1cclxuXHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coQ29uZmlnLm1hcmtldHBsYWNlSUQpO1xyXG5cdFx0dGhpcy5hY3RpdmVQcm9maWxlID0gQ29uZmlnLmFjdGl2ZVByb2ZpbGU7XHJcblx0XHR0aGlzLmF1dGhJbmZvID0gQ29uZmlnLmF1dGhJbmZvO1xyXG5cdFx0dGhpcy52ZW5kb3JJZCA9IENvbmZpZy5tYXJrZXRwbGFjZUlEO1xyXG5cdFx0dGhpcy5nZXRWZW5kb3JEZXRhaWxzKCk7XHRcdFxyXG5cdFx0Ly8gaWYgKHBhcmFtcy52ZW5kb3JSZXZpZXdJZCkge1xyXG5cdFx0XHQvLyB0aGlzLnZlbmRvclJldmlld0lkID0gcGFyYW1zLnZlbmRvclJldmlld0lkIHx8IG51bGw7XHJcblx0XHRcdC8vIHRoaXMuZ2V0VmVuZG9yUmV2aWV3RGV0YWlscygpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHRwdWJsaWMgZ2V0VmVuZG9yUmV2aWV3cygpIHtcclxuICAgICAgICB0aGlzLnZlbmRvclNlcnZpY2UuZ2V0VmVuZG9yUmV2aWV3cyh7XHJcbiAgICAgICAgICAgIHZlbmRvcklkOiB0aGlzLnZlbmRvcklkLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLnZlbmRvclJldmlld3NQYWdlXHJcbiAgICAgICAgfSkudG9Qcm9taXNlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwidmVuZG9yIHJldmlld3M6IFwiKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UucmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JSZXZpZXdzID0gdGhpcy52ZW5kb3JSZXZpZXdzLmNvbmNhdChyZXNwb25zZS5yZXN1bHQpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbmRvclJldmlld3NMb2FkTW9yZSA9IHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPT0gNSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZE1vcmVWZW5kb3JSZXZpZXdzKCkge1xyXG4gICAgICAgIHRoaXMudmVuZG9yUmV2aWV3c1BhZ2UrKztcclxuICAgICAgICB0aGlzLmdldFZlbmRvclJldmlld3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JSZXZpZXdEZXRhaWxzKCkge1xyXG4gICAgICAgIHRoaXMudmVuZG9yU2VydmljZS5nZXRWZW5kb3JSZXZpZXcoe1xyXG4gICAgICAgICAgICB2ZW5kb3JJZDogdGhpcy52ZW5kb3JJZCxcclxuICAgICAgICAgICAgdmVuZG9yUmV2aWV3SWQ6IHRoaXMudmVuZG9yUmV2aWV3SWRcclxuICAgICAgICB9KS50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJnZXQgVmVuZG9yIFJldmlldyBEZXRhaWxzXCIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZlbmRvclJldmlld0RldGFpbHMgPSByZXNwb25zZS5yZXN1bHQ7XHJcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBhZ2VTY3JvbGxJbnN0YW5jZTogUGFnZVNjcm9sbEluc3RhbmNlID0gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBkb2N1bWVudDogdGhpcy5kb2N1bWVudCxcclxuICAgICAgICAgICAgLy8gICAgICAgICBzY3JvbGxUYXJnZXQ6ICcjdmVuZG9yLXJldmlldy1kZXRhaWxzJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICBwYWdlU2Nyb2xsT2Zmc2V0OiAxODAsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcGFnZVNjcm9sbFNwZWVkOiAxMjAwXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucGFnZVNjcm9sbFNlcnZpY2Uuc3RhcnQocGFnZVNjcm9sbEluc3RhbmNlKTtcclxuICAgICAgICAgICAgLy8gfSwgNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JEZXRhaWxzKCkge1xyXG4gICAgICAgIHRoaXMudmVuZG9yU2VydmljZS5nZXRWZW5kb3Ioe1xyXG4gICAgICAgICAgICB2ZW5kb3JJZDogdGhpcy52ZW5kb3JJZFxyXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInZlbmRvciBkZXRhaWxzOiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3VsdCk7XHJcblx0XHRcdHRoaXMudmVuZG9yID0gcmVzcG9uc2UucmVzdWx0XHJcblx0XHRcdHRoaXMuaW5pdFZlbmRvckRldGFpbHMoKTtcdFx0XHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRWZW5kb3JEZXRhaWxzKCkgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy52ZW5kb3JTZXJ2aWNlLmdldFZlbmRvclBob3Rvcyh7XHJcbiAgICAgICAgICAgIHZlbmRvcklkOiB0aGlzLnZlbmRvcklkXHJcbiAgICAgICAgfSkudG9Qcm9taXNlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiSW5pdCBWZW5kb3IgRGV0YWlsc1wiKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBjZG5VcmwgPSBDRE5fVVJMICsgJy92ZW5kb3IvJyArIHRoaXMudmVuZG9yLmlkICsgJy9waG90b3MvJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5yZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBob3RvID0gcmVzcG9uc2UucmVzdWx0W2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5SW1hZ2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHNtYWxsOiBjZG5VcmwgKyBwaG90by5maWxlbmFtZS5yZXBsYWNlKC8oXFwuW1xcd1xcZF8tXSspJC9pLCAnX3NtJDEnKSxcclxuICAgICAgICAgICAgICAgICAgICBtZWRpdW06IGNkblVybCArIHBob3RvLmZpbGVuYW1lLnJlcGxhY2UoLyhcXC5bXFx3XFxkXy1dKykkL2ksICdfbGckMScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJpZzogY2RuVXJsICsgcGhvdG8uZmlsZW5hbWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMudmVuZG9yU2VydmljZS5nZXRWZW5kb3JQcm9kdWN0cyh7XHJcbiAgICAgICAgICAgIHZlbmRvcklkOiB0aGlzLnZlbmRvcklkXHJcbiAgICAgICAgfSkudG9Qcm9taXNlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZ2V0IFZlbmRvciBQcm9kdWN0c1wiKTtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UucmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy52ZW5kb3JQcm9kdWN0cyA9IHJlc3BvbnNlLnJlc3VsdDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5nZXRWZW5kb3JSZXZpZXdzKCk7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1Bob3RvcycsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcjdmVuZG9yLXBob3RvcycsXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRoaXMuZ2FsbGVyeUltYWdlcy5sZW5ndGhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Fib3V0JyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJyN2ZW5kb3ItZGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQcmljaW5nJyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJyN2ZW5kb3ItcHJpY2luZycsXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRoaXMudmVuZG9yUHJvZHVjdHMubGVuZ3RoXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdSZXZpZXdzJyxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogJyN2ZW5kb3ItcmV2aWV3cycsXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NvbnRhY3QnLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI3ZlbmRvci1jb250YWN0cycsXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgaWYodGhpcy51cGRhdGVSZXZpZXdzU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmV2aWV3c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNvbnZlcnNhdGlvblN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnZlcnNhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuVmVuZG9yUmV2aWV3TW9kYWwob3B0aW9ucykge1xyXG4gICAgICAgIC8vIGxldCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oVmVuZG9yUmV2aWV3TW9kYWxDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlWydtb2RhbE9wdGlvbnMnXSA9IG9wdGlvbnM7XHJcbiAgICAgICAgLy8gbW9kYWwuY29tcG9uZW50SW5zdGFuY2VbJ2FjdGl2ZVByb2ZpbGUnXSA9IHRoaXMuYWN0aXZlUHJvZmlsZTtcclxuICAgICAgICAvLyBtb2RhbC5jb21wb25lbnRJbnN0YW5jZVsndmVuZG9ySWQnXSA9IHRoaXMudmVuZG9ySWQ7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVSZXZpZXdzU3Vic2NyaXB0aW9uID0gbW9kYWwuY29tcG9uZW50SW5zdGFuY2VbJ3VwZGF0ZVJldmlld3MnXS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZlbmRvclJldmlld3NQYWdlID0gMTtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZW5kb3IuaXNSZXZpZXdlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0VmVuZG9yRGV0YWlscygpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdldFZlbmRvclJldmlld3MoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXNzYWdlVmVuZG9yKCkge1xyXG4gICAgLy8gICAgIHRoaXMuY29udmVyc2F0aW9uU3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3QoXHJcbiAgICAvLyAgICAgICAgIE1lc3NhZ2VTZWxlY3RvcnMuc2VsZWN0Q29udmVyc2F0aW9uKHRoaXMudmVuZG9ySWQpXHJcbiAgICAvLyAgICAgKS5zdWJzY3JpYmUoY29udmVyc2F0aW9uID0+IHtcclxuICAgIC8vICAgICAgICAgaWYoY29udmVyc2F0aW9uLmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydtZXNzYWdlcycsIGNvbnZlcnNhdGlvblswXS5pZF0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IG1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihWZW5kb3JNZXNzYWdlTW9kYWxDb21wb25lbnQpO1xyXG4gICAgLy8gICAgICAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2VbJ2FjdGl2ZVByb2ZpbGUnXSA9IHRoaXMuYWN0aXZlUHJvZmlsZTtcclxuICAgIC8vICAgICAgICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlWyd2ZW5kb3JJZCddID0gdGhpcy52ZW5kb3JJZDtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHRoaXMuY29udmVyc2F0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAvLyB9XHJcblxyXG5cdHB1YmxpYyBvcGVuV3JpdGVyZXZpZXdNb2RhbCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChXcml0ZXJldmlld01vZGFsLCB7fSlcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHQvLyBUT0RPIGFkZCBndWVzdFxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0c2VsZWN0VGFiKGluZGV4KXtcclxuXHRcdGNvbnNvbGUubG9nKFwidGFwcGVkOiBcIitpbmRleCk7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl19