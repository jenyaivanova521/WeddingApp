import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../../../../root-store/services/message.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import {
    RootStoreState,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'vendor-message-modal',
    templateUrl: './vendor-message-modal.component.html'
})
export class VendorMessageModalComponent implements OnInit {
    activeProfile: CommonModels.Profile;
    vendorId: string;
    vendorMessage: any;
    submitted: boolean = false;
    error: any;

    constructor (
        private route: ActivatedRoute,
        public activeModal: NgbActiveModal,
        private messageService: MessageService,
        private flashMessagesService: FlashMessagesService
    ) { }

    async ngOnInit() {
        let initVendorMessage = {
            text: null
        }
        this.vendorMessage = { ...initVendorMessage };
    }

    async submitVendorMessageForm() {
        this.submitted = true;
        await this.messageService.sendMessage({
            weddingId: this.activeProfile.id,
            vendorId: this.vendorId,
            text: this.vendorMessage.text,
            asVendor: false
        }).toPromise().then(response => {
            this.flashMessagesService.show(`Message sent successfully`, { cssClass: 'alert-success', timeout: 4000 });
            this.submitted = false;
            this.activeModal.close();
        }).catch(error => {
            this.submitted = false;
            this.error = error.error;
        })
    }

    public cancel() {
        this.activeModal.close();
    }

}
