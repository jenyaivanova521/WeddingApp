import { ChangeDetectorRef, Component, OnDestroy, OnInit,Input, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, ISubscription } from 'rxjs/Subscription';
import { screen } from 'tns-core-modules/platform';

import { registerElement } from 'nativescript-angular/element-registry'
registerElement('StarRating', () => require('nativescript-star-ratings').StarRating)

import { WritereviewModal } from '~/modules/marketplace/modals';

import { RouterExtensions } from 'nativescript-angular/router'; //2018.9.4
import { State, Task, CommonModels, RootStoreState } from '~/root-store';
import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { ModalService } from '~/shared/services/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '~/shared/services/vendor.service';
import { DomSanitizer, DOCUMENT } from '@angular/platform-browser';
import { Config, CDN_URL } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'detail',
	templateUrl: 'detail.component.html',
	styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {	
	public containerHeight;		

	activeProfile: CommonModels.Profile;
    authInfo: any;
    vendorId: string;
    vendor: CommonModels.VendorDetails;
    vendorProducts: CommonModels.VendorProduct[] = [];
    vendorReview: any;
    vendorReviews: any = [];
    vendorReviewsLoadMore: boolean = false;
    vendorReviewsPage: number = 1;
    vendorReviewDetails: any;
    routeSubscription: ISubscription;
    updateReviewsSubscription: ISubscription;
    // galleryOptions: NgxGalleryOptions[];
    galleryImages = [];
    navLinks: object[];
    vendorReviewId: string;
	conversationSubscription: ISubscription;
	
	constructor(
		private modalService: ModalService,
		private routerExtensions: RouterExtensions,
		private store: Store<RootStoreState.State>,
        private route: ActivatedRoute,
        private router: Router,
        private vendorService: VendorService,
        private sanitizer: DomSanitizer,
        @Inject(DOCUMENT) private document: any
	) {
		this.containerHeight = screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
		console.log("---marketplace-detail---")
	}


	ngOnInit(): void {
		console.log(Config.marketplaceID);
		this.activeProfile = Config.activeProfile;
		this.authInfo = Config.authInfo;
		this.vendorId = Config.marketplaceID;
		this.getVendorDetails();		
		// if (params.vendorReviewId) {
			// this.vendorReviewId = params.vendorReviewId || null;
			// this.getVendorReviewDetails();
		// }
	}
	public getVendorReviews() {
        this.vendorService.getVendorReviews({
            vendorId: this.vendorId,
            page: this.vendorReviewsPage
        }).toPromise().then(response => {
			console.log("vendor reviews: ");
			console.log(response.result);
            this.vendorReviews = this.vendorReviews.concat(response.result);
            this.vendorReviewsLoadMore = response.result.length == 5 ? true : false;
        });
    }

    public loadMoreVendorReviews() {
        this.vendorReviewsPage++;
        this.getVendorReviews();
    }

    getVendorReviewDetails() {
        this.vendorService.getVendorReview({
            vendorId: this.vendorId,
            vendorReviewId: this.vendorReviewId
        }).toPromise().then(response => {
			console.log("get Vendor Review Details");
			console.log(response);

            this.vendorReviewDetails = response.result;
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
    }

    getVendorDetails() {
        this.vendorService.getVendor({
            vendorId: this.vendorId
        }).toPromise().then(response => {
			console.log("vendor details: ");
			console.log(response.result);
			this.vendor = response.result
			this.initVendorDetails();			
        });
    }

    private initVendorDetails() {        
        this.vendorService.getVendorPhotos({
            vendorId: this.vendorId
        }).toPromise().then(response => {
			console.log("Init Vendor Details");
			console.log(response);
            const cdnUrl = CDN_URL + '/vendor/' + this.vendor.id + '/photos/';
            for (let i = 0; i < response.result.length; i++) {
                const photo = response.result[i];
                this.galleryImages.push({
                    small: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sm$1'),
                    medium: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_lg$1'),
                    big: cdnUrl + photo.filename
                });
			}			
		});
		
        this.vendorService.getVendorProducts({
            vendorId: this.vendorId
        }).toPromise().then(response => {
			console.log("get Vendor Products");
			console.log(response.result);
            this.vendorProducts = response.result;
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
        ]
    }

    async ngOnDestroy() {
        // this.routeSubscription.unsubscribe();
        if(this.updateReviewsSubscription) {
            this.updateReviewsSubscription.unsubscribe();
        }
        if(this.conversationSubscription) {
            this.conversationSubscription.unsubscribe();
        }
    }

    openVendorReviewModal(options) {
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
    }

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

	public openWritereviewModal(): void {
		this.modalService.showModal(WritereviewModal, {})
			.then((response: any) => {
                console.log(response)
                this.vendorReviewsPage = 1;
                this.getVendorDetails();
                // this.vendorReviews.unshift(Config.vendorReview);
                // this.vendor.vendorReviewsCount = this.vendor.vendorReviewsCount+1;
			});
	}
	selectTab(index){
		console.log("tapped: "+index);
	}


}
