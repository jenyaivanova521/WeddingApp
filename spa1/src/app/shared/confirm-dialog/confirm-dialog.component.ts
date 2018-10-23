import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Optional,
    Input
} from '@angular/core';

import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Action, Store } from '@ngrx/store';

import {
    RootStoreState
} from '../../root-store';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent {
    @Input() data: {
        cancel?: any,
        confirm: any,
        text: string,
        title: string,
        callbackParam?: any
    };
    modalRef: NgbModalRef;

    constructor(
        private store: Store<RootStoreState.State>,
        public activeModal: NgbActiveModal
    ) {
    }

    public cancel() {
        if (this.data.cancel !== undefined) {
            this.store.dispatch(this.data.cancel);
        }
        this.activeModal.close();
    }

    public confirm() {
        if (this.data.confirm.type) {
            this.store.dispatch(this.data.confirm);
        } else {
            if (this.data.callbackParam) {
                this.data.confirm(this.data.callbackParam);
            } else {
                this.data.confirm();
            }
        }

        this.activeModal.close();
    }

}
