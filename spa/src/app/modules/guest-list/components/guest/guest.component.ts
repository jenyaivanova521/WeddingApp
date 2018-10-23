import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { GuestFormModalComponent } from '../guest-form-modal/guest-form-modal.component';
import { GuestService } from '../../../../root-store/services/guest.service';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.sass']
})

export class GuestComponent implements OnInit {
    @Input() guest: any;
    @Output() onChangeEvent: EventEmitter<any> = new EventEmitter();
    hidden: boolean = false;

    constructor(
        private modalService: NgbModal,
        public activeModal: NgbActiveModal,
        private route: ActivatedRoute,
        private guestService: GuestService,
        private flashMessagesService: FlashMessagesService
    ) { }

    async ngOnInit() {

    }

    edit(guest) {
        let modal;
        modal = this.modalService.open(GuestFormModalComponent, { size: 'lg' });
        modal.componentInstance.mode = 'edit';
        if(guest) {
            modal.componentInstance.guest = {
                id: guest.id,
                firstName: guest.firstName,
                lastName: guest.lastName,
                email: guest.email,
                receptionStatusId: guest.receptionGuestStatus.id,
                ceremonyStatusId: guest.ceremonyGuestStatus.id,
                guestSideId: guest.side ? guest.side.id : null,
                guestRoleId: guest.role ? guest.role.id : null,
                rsvp: guest.rsvp
            };
        }
        modal.componentInstance.onSubmitEvent.subscribe(guest => {
            this.onChangeEvent.next(true);
        });
    }

    async delete() {
        const modal = this.modalService.open(ConfirmDialogComponent, {backdrop: 'static'});
        modal.componentInstance['data'] = {
            title: 'Delete inspiration',
            text: 'Are you sure?',
            confirm: () => {
                this.guestService.deleteGuest({ guestId: this.guest.id, weddingId: this.guest.weddingId }).toPromise().then(response => {
                    this.hidden = true;
                    this.flashMessagesService.show('Guest deleted', {cssClass: 'alert-success', timeout: 3000});
                })
            }
        };
    }

}
