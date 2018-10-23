import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FlashMessagesService } from 'angular2-flash-messages';

import { GuestService } from '../../../../root-store/services/guest.service';
import { environment } from '../../../../../environments/environment';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-guest-form-modal',
    templateUrl: './guest-form-modal.component.html',
    styleUrls: ['./guest-form-modal.component.sass']
})
export class GuestFormModalComponent implements OnInit, OnDestroy {
    mode: string;
    onSubmitEvent: EventEmitter<any> = new EventEmitter();
    activeProfile: CommonModels.Profile;
    subscriptionActiveProfile: ISubscription;
    guest: {
        id: string,
        firstName: string,
        lastName: string,
        email?: string,
        receptionStatusId: number,
        ceremonyStatusId: number,
        guestRoleId?: number,
        guestSideId?: number,
        rsvp: boolean
    }
    guestSides: object[] = [];
    guestRoles: object[] = [];
    guestStatuses: object[] = [];
    submitted: boolean;
    error: any;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<RootStoreState.State>,
        private route: ActivatedRoute,
        private guestService: GuestService,
        private flashMessagesService: FlashMessagesService
    ) { }

    async ngOnInit() {
        this.submitted = false;
        if(!this.guest) {
            this.guest = {
                id: null,
                firstName: null,
                lastName: null,
                email: null,
                ceremonyStatusId: 2,
                receptionStatusId: 2,
                rsvp: false
            }
        }
        this.subscriptionActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.guestService.getGuestSides().toPromise().then(response => {
            this.guestSides = response.result;
        });
        this.guestService.getGuestRoles().toPromise().then(response => {
            this.guestRoles = response.result;
        });
        this.guestService.getGuestStatuses().toPromise().then(response => {
            this.guestStatuses = response.result;
        });
    }

    ngOnDestroy() {
        this.subscriptionActiveProfile.unsubscribe();
    }

    cancel() {
        this.activeModal.close();
    }

    async onSubmit() {
        this.submitted = true;
        let serviceMethod;
        if(this.mode == 'add') {
            serviceMethod = this.guestService.addGuest({
                guest: this.guest,
                weddingId: this.activeProfile.id
            });
        } else {
            serviceMethod = this.guestService.editGuest({
                guest: this.guest,
                weddingId: this.activeProfile.id,
                guestId: this.guest.id
            });
        }
        serviceMethod.toPromise().then(response => {
            this.submitted = false;
            this.flashMessagesService.show(`Guest ${this.mode == 'add' ? 'added' : 'edited'} successfully`, { cssClass: 'alert-success', timeout: 3000 });
            this.activeModal.close();
            this.onSubmitEvent.emit(true);
        }).catch(response => {
            this.submitted = false;
            this.error = response.error;
        });
    }


}
