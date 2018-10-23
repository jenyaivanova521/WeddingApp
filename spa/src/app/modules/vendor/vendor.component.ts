import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ISubscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { VendorReviewModalComponent } from './components/vendor-review-modal/vendor-review-modal.component';
import { VendorMessageModalComponent } from './components/vendor-message-modal/vendor-message-modal.component';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

import { VendorService } from '../../root-store/services/vendor.service';
import { environment } from '../../../environments/environment';

import {
    RootStoreState,
    CommonModels,
    MessageSelectors
} from '../../root-store';

@Component({
    selector: 'app-vendor',
    templateUrl: './vendor.component.html',
    styleUrls: ['./vendor.component.sass']
})
export class VendorComponent implements OnInit, OnDestroy {
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
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[] = [];
    navLinks: object[];
    vendorReviewId: string;
    conversationSubscription: ISubscription;

    constructor(
        private store: Store<RootStoreState.State>,
        private route: ActivatedRoute,
        private router: Router,
        private vendorService: VendorService,
        private sanitizer: DomSanitizer,
        private modalService: NgbModal,
        private flashMessagesService: FlashMessagesService,
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any
    ) { }

    async ngOnInit() {
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.authInfo = this.route.snapshot.data.authInfo;
        this.routeSubscription = this.route.params.subscribe(async (params) => {
            this.vendorId = params.vendorId;
            await this.initVendorDetails();
            if (params.vendorReviewId) {
                this.vendorReviewId = params.vendorReviewId || null;
                this.getVendorReviewDetails();
            }
        });
        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                imageAnimation: NgxGalleryAnimation.Slide,
                previewAnimation: false,
                arrowPrevIcon: 'mdi mdi-chevron-left',
                arrowNextIcon: 'mdi mdi-chevron-right',
                closeIcon: 'mdi mdi-close',
                fullscreenIcon: 'mdi mdi-fullscreen',
                previewFullscreen: false,
                imageArrows: true,
                previewCloseOnClick: true,
                thumbnails: false
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '360px',
                imagePercent: 80
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
    }

    public async getVendorReviews() {
        await this.vendorService.getVendorReviews({
            vendorId: this.vendorId,
            page: this.vendorReviewsPage
        }).toPromise().then(response => {
            this.vendorReviews = this.vendorReviews.concat(response.result);
            this.vendorReviewsLoadMore = response.result.length == 5 ? true : false;
        });
    }

    public loadMoreVendorReviews() {
        this.vendorReviewsPage++;
        this.getVendorReviews();
    }

    async getVendorReviewDetails() {
        await this.vendorService.getVendorReview({
            vendorId: this.vendorId,
            vendorReviewId: this.vendorReviewId
        }).toPromise().then(response => {
            this.vendorReviewDetails = response.result;
            setTimeout(() => {
                let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
                    document: this.document,
                    scrollTarget: '#vendor-review-details',
                    pageScrollOffset: 180,
                    pageScrollSpeed: 1200
                });
                this.pageScrollService.start(pageScrollInstance);
            }, 500);
        });
    }

    async getVendorDetails() {
        await this.vendorService.getVendor({
            vendorId: this.vendorId
        }).toPromise().then(response => {
            this.vendor = response.result
        });
    }

    private async initVendorDetails() {
        await this.getVendorDetails();
        await this.vendorService.getVendorPhotos({
            vendorId: this.vendorId
        }).toPromise().then(response => {
            const cdnUrl = environment.cdnUrl + '/vendor/' + this.vendor.id + '/photos/';
            for (let i = 0; i < response.result.length; i++) {
                const photo = response.result[i];
                this.galleryImages.push({
                    small: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sm$1'),
                    medium: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_lg$1'),
                    big: cdnUrl + photo.filename
                });
            }
        });
        await this.vendorService.getVendorProducts({
            vendorId: this.vendorId
        }).toPromise().then(response => {
            this.vendorProducts = response.result;
        });
        await this.getVendorReviews();
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
        this.routeSubscription.unsubscribe();
        if(this.updateReviewsSubscription) {
            this.updateReviewsSubscription.unsubscribe();
        }
        if(this.conversationSubscription) {
            this.conversationSubscription.unsubscribe();
        }
    }

    async openVendorReviewModal(options) {
        let modal = this.modalService.open(VendorReviewModalComponent);
        modal.componentInstance['modalOptions'] = options;
        modal.componentInstance['activeProfile'] = this.activeProfile;
        modal.componentInstance['vendorId'] = this.vendorId;
        this.updateReviewsSubscription = modal.componentInstance['updateReviews'].subscribe(value => {
            this.vendorReviewsPage = 1;
            this.vendor.isReviewed = true;
            this.getVendorDetails();
            this.getVendorReviews();
        });
    }

    async messageVendor() {
        this.conversationSubscription = this.store.select(
            MessageSelectors.selectConversation(this.vendorId)
        ).subscribe(conversation => {
            if(conversation.length) {
                this.router.navigate(['messages', conversation[0].id]);
            } else {
                let modal = this.modalService.open(VendorMessageModalComponent);
                modal.componentInstance['activeProfile'] = this.activeProfile;
                modal.componentInstance['vendorId'] = this.vendorId;
            }
        });
        this.conversationSubscription.unsubscribe();
    }

}
