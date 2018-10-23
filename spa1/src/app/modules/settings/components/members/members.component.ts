import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ISubscription } from 'rxjs/Subscription';
import { ConfirmDialogComponent } from "../../../../shared/confirm-dialog/confirm-dialog.component";
import { Store } from '@ngrx/store';

import { MemberService } from '../../../../root-store/services/member.service';

import {
    RootStoreState,
    MemberModels,
    MemberActions,
    MemberSelectors,
    AuthModels,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-settings-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.sass']
})
export class SettingsMembersComponent implements OnInit {
    @ViewChild('modalContent') private modalContent: TemplateRef<any>;
    submitted: boolean;
    error: any;
    members: Observable<MemberModels.Member[]>
    member: Pick<MemberModels.Member, 'id' | 'weddingId' | 'role'>;
    authInfo: AuthModels.AuthInfo;
    modalRef: NgbModalRef;
    activeProfile: CommonModels.Profile;

    constructor(
        private modalService: NgbModal,
        private memberService: MemberService,
        private flashMessagesService: FlashMessagesService,
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>,
    ) {}

    async ngOnInit() {
        this.authInfo = this.route.parent.snapshot.data.authInfo;
        this.activeProfile = this.route.parent.snapshot.data.activeProfile;
        if (this.activeProfile && this.activeProfile.type == 'wedding') {
            await this.memberService.getMembers({
                weddingId: this.activeProfile.id
            }).toPromise().then(response => {
                this.store.dispatch(new MemberActions.SetMembers({
                    members: response.result
                }));
            });
            this.members = this.store.select(
                MemberSelectors.selectMembers
            );
        }
    }

    openChangeMemberRoleModal(member) {
        this.error = null;
        this.member = Object.assign({}, member);
        this.modalRef = this.modalService.open(this.modalContent);
        this.modalRef.result.then((result) => {
        }, (reason) => {

        });
    }

    openDeleteMemberModal(member) {
        let modal = this.modalService.open(ConfirmDialogComponent, { backdrop: 'static' });
        modal.componentInstance['data'] = {
            title: 'Are you sure?',
            text: 'Delete member',
            confirm: async () => {
                await this.memberService.deleteMember({
                    weddingId: member.weddingId,
                    memberId: member.id
                }).toPromise().then(response => {
                    this.store.dispatch(new MemberActions.DeleteMember({
                        memberId: member.id
                    }));
                    this.flashMessagesService.show('Member deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
                }).catch(error => {});
            }
        };
    }

    async changeMemberRole() {
        this.submitted = true;
        await this.memberService.changeMemberRole({
            weddingId: this.member.weddingId,
            memberId: this.member.id,
            role: this.member.role
        }).toPromise().then(response => {
            this.store.dispatch(new MemberActions.ChangeMemberRole({
                memberId: this.member.id,
                role: this.member.role
            }));
            this.submitted = false;
            this.flashMessagesService.show('Member role changed successfully', { cssClass: 'alert-success', timeout: 3000 });
            this.modalRef.close();
        }).catch(error => {
            this.submitted = false;
            this.error = error;
        });
    }

}
