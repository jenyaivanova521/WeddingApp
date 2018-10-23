import { Component, OnInit, ViewChild } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';


import { GuestFormModalComponent } from './components/guest-form-modal/guest-form-modal.component';
import { GuestService } from '../../root-store/services/guest.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'app-guest-list',
    templateUrl: './guest-list.component.html',
    styleUrls: ['./guest-list.component.sass']
})
export class GuestListComponent implements OnInit {
    activeProfile: CommonModels.Profile;
    subscriptionActiveProfile: ISubscription;
    guests: any[] = [];
    page: number = 1;
    stats: any;
    infiniteScrollDisabled: boolean = false;
    term: string = '';
    @ViewChild('search') search: any;

    constructor(
        private modalService: NgbModal,
        private guestService: GuestService,
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>
    ) { }

    ngOnInit() {
        this.subscriptionActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if (activeProfile) {
                this.activeProfile = activeProfile;
                this.getGuests();
                this.getStats();
            }
        });
    }

    ngAfterViewInit() {
        this.search.update
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(term => this.filterGuests(term));
    }

    async getGuests() {
        await this.guestService.getGuests({
            weddingId: this.activeProfile.id,
            options: {
                page: this.page,
                term: this.term
            }
        }).toPromise().then(response => {
            this.guests.push(...response.result);
            if (response.result.length < 30) {
                this.infiniteScrollDisabled = true;
            }
        });
    }

    async getStats() {
        await this.guestService.getStats(this.activeProfile.id)
            .toPromise().then(response => {
                this.stats = response.result;
            });
    }

    loadMoreGuests() {
        this.page++;
        this.getGuests();
    }

    resetGuests() {
        this.page = 1;
        this.guests = [];
        this.getGuests();
    }

    openGuestAddModal() {
        let modal;
        modal = this.modalService.open(GuestFormModalComponent, { size: 'lg' });
        modal.componentInstance.mode = 'add';
        modal.componentInstance.onSubmitEvent.subscribe(guest => {
            this.resetGuests();
            this.getStats();
        });
    }

    filterGuests(term) {
        this.resetGuests();
    }

}
