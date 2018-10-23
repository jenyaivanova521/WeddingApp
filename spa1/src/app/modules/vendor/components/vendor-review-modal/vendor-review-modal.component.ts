import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VendorService } from '../../../../root-store/services/vendor.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import {
    RootStoreState,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'vendor-review-modal',
    templateUrl: './vendor-review-modal.component.html',
    styleUrls: ['./vendor-review-modal.component.sass']
})
export class VendorReviewModalComponent implements OnInit {
    activeProfile: CommonModels.Profile;
    vendorId: string;
    vendorReview: any;
    modalOptions: any;
    submitted: boolean = false;
    error: any;
    @Output() updateReviews = new EventEmitter<boolean>();

    constructor (
        private route: ActivatedRoute,
        public activeModal: NgbActiveModal,
        private vendorService: VendorService,
        private flashMessagesService: FlashMessagesService
    ) { }

    async ngOnInit() {
        let initVendorReview = {
            id: null,
            text: null,
            rating: null,
            authorWeddingId: this.activeProfile.id
        }
        this.vendorReview = { ...initVendorReview };
    }

    async submitVendorReviewForm () {

        this.submitted = true;
        let filesFormData = new FormData();
        let vendorReviewToSave = Object.assign({}, this.vendorReview);
        let serviceMethod;
        if (this.vendorReview.id) {

        } else {
            serviceMethod = this.vendorService.addVendorReview({
                vendorId: this.vendorId,
                vendorReview: this.vendorReview
            }).toPromise();
        }
        await serviceMethod.then(response => {
            this.submitted = false;
            this.flashMessagesService.show(`Review ${this.vendorReview.id ? 'updated' : 'added'} successfully`, { cssClass: 'alert-success', timeout: 3000 });
            this.updateReviews.emit(true);
            this.activeModal.close();
        }).catch(error => {
            this.submitted = false;
            this.error = error.error;
        });
    }

    public cancel() {
        this.activeModal.close();
    }

}
