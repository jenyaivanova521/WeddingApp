import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { VendorService } from '../../../../root-store/services/vendor.service';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from "../../../../shared/confirm-dialog/confirm-dialog.component";
import { FlashMessagesService } from 'angular2-flash-messages';

import {
    RootStoreState,
    AuthModels,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'vendor-review',
    templateUrl: './vendor-review.component.html',
    styleUrls: ['./vendor-review.component.sass']
})
export class VendorReviewComponent implements OnInit {
    @Input() authInfo: AuthModels.AuthInfo;
    @Input() activeProfile: CommonModels.Profile;
    @Input() vendor: any;
    @Input() vendorReview: any;
    @Input() index: number;
    @Output() vendorReviewDeleted: EventEmitter<any> = new EventEmitter();
    resolverSubscription: ISubscription;

    constructor (
        private route: ActivatedRoute,
        private vendorService: VendorService,
        private modalService: NgbModal,
        private flashMessagesService: FlashMessagesService
    ) { }

    async ngOnInit() {
    }

    openDeleteVendorReviewModal(vendorReview) {
        let modal = this.modalService.open(ConfirmDialogComponent, { backdrop: 'static' });
        modal.componentInstance['data'] = {
            title: 'Are you sure?',
            text: 'Delete review',
            confirm: async () => {
                await this.vendorService.deleteVendorReview({
                    vendorId: this.vendorReview.vendorId,
                    vendorReviewId: vendorReview.id
                }).toPromise().then(response => {
                    this.vendorReviewDeleted.next(this.vendorReview);
                    this.flashMessagesService.show('Review deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
                }).catch(error => {});
            }
        };
    }

}
