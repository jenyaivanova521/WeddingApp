import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ISubscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { InspirationService } from '../../../../root-store/services/inspiration.service';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-inspiration-actions',
    templateUrl: './inspiration-actions.component.html'
})
export class InspirationActionsComponent implements OnInit, OnDestroy {
    @Input() inspiration: any;
    @Output() inspirationDeleted: EventEmitter<boolean> = new EventEmitter();
    activeProfile: CommonModels.Profile;
    subscriptionActiveProfile: ISubscription;
    pinLoading: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>,
        private inspirationService: InspirationService,
        private _flashMessagesService: FlashMessagesService,
        private modalService: NgbModal
    ) { }

    async ngOnInit() {
        this.subscriptionActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if (activeProfile) {
                this.activeProfile = activeProfile;
            }
        });
    }

    ngOnDestroy() {
        this.subscriptionActiveProfile.unsubscribe();
    }

    async togglePin({
        inspirationId,
        event,
        action
    }) {
        event.stopPropagation();
        this.pinLoading = true;
        this.inspirationService[action + 'Inspiration']({
            inspirationId: inspirationId,
            weddingId: this.activeProfile.id
        }).toPromise().then(response => {
            this.pinLoading = false;
            if(action == 'pin') {
                this.inspiration.isPinned = true;
            } else {
                this.inspiration.isPinned = false;
            }
        }).catch(error => {
            this.pinLoading = false;
        })
    }

    async delete() {
        const modal = this.modalService.open(ConfirmDialogComponent, {backdrop: 'static'});
        modal.componentInstance['data'] = {
            title: 'Delete inspiration',
            text: 'Are you sure?',
            confirm: this.sendDeleteReq.bind(this)
        };
    }

    private sendDeleteReq(): void {
        this.inspirationService.deleteInspiration(this.inspiration.id).subscribe(
            () => {
                this.inspirationDeleted.emit(true);
                this._flashMessagesService.show('Inspiration deleted', {cssClass: 'alert-success', timeout: 3000});
            },
            () => {
                this._flashMessagesService.show('Inspiration delete failed', {cssClass: 'alert-danger', timeout: 3000});
            }
        );
    }

}
