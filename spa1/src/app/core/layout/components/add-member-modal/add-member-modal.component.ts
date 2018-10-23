import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubscription } from "rxjs/Subscription";
import { Store } from '@ngrx/store';

import { MemberService } from '../../../../root-store/services/member.service';

import {
    RootStoreState,
    MemberActions,
    MemberModels,
    MemberSelectors,
    ProfileSelectors
} from '../../../../root-store';

@Component({
    selector: 'add-member-modal',
    templateUrl: './add-member-modal.component.html',
    styleUrls: ['./add-member-modal.component.sass']
})
export class AddMemberModalComponent implements OnInit {
    @ViewChild("modalContent") private modalContent: TemplateRef<any>;
    @Input() buttonType: string;
    @Output() memberAdded = new EventEmitter<boolean>();
    submitted: boolean;
    modalOpen: boolean;
    error: any;
    isOwner: boolean;
    modalRef: NgbModalRef;
    activeModal: NgbActiveModal;
    member: Pick<MemberModels.Member, 'email' | 'role'>;
    initMember: Pick<MemberModels.Member, 'email' | 'role'>;
    subActiveProfile: ISubscription;
    activeWeddingId: string;

    constructor(
        private modalService: NgbModal,
        private memberService: MemberService,
        private store: Store<RootStoreState.State>,
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit() {
        this.initMember = {
            email: '',
            role: null
        }
        this.member = { ...this.initMember };
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if(activeProfile && activeProfile.type == 'wedding') {
                this.isOwner = activeProfile.isOwner;
                this.activeWeddingId = activeProfile.id;
            }
        });
    }

    ngOnDestroy() {
        this.subActiveProfile.unsubscribe();
    }

    async onSubmit() {
        await this.memberService.addMember({
            weddingId: this.activeWeddingId,
            member: this.member
        }).toPromise().then(response => {
            this.memberService.getMembers({
                weddingId: this.activeWeddingId
            }).toPromise().then(response => {
                this.store.dispatch(new MemberActions.SetMembers({
                    members: response.result
                }));
            });
            this.submitted = false;
            this.flashMessagesService.show('Member added successfully', { cssClass: 'alert-success', timeout: 3000 });
            this.modalRef.close();
        }).catch(error => {
            this.submitted = false;
            this.error = error;
        });
    }

    open() {
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then((result) => {
            this.member = { ...this.initMember };
        }, (reason) => {
            this.member = { ...this.initMember };
        });
    }

}
