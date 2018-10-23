import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import {
    RootStoreState,
    AuthSelectors,
    CommonModels
} from '../../../../root-store';
import { Invitation } from '../../../../root-store/member-store/models';
import { MemberService } from '../../../../root-store/services/member.service';

@Component({
    selector: 'app-settings-invitations',
    templateUrl: './invitations.component.html',
})
export class SettingsWeddingInvitationsComponent implements OnInit, OnDestroy {

    private authInfoSubscription: Subscription;
    private accountId: string;

    public invitations: Array<Invitation>;
    private activeProfile: CommonModels.Profile;

    constructor(
        private modalService: NgbModal,
        private store: Store<RootStoreState.State>,
        private membersService: MemberService,
        private changeDetector: ChangeDetectorRef,
        private _flashMessagesService: FlashMessagesService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.activeProfile = this.route.parent.snapshot.data.activeProfile;
        if (this.activeProfile) {
            this.getInvitations();
        }
        this.authInfoSubscription = this.store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe(authInfo => {
            this.accountId = authInfo.account.id;
        });
    }

    ngOnDestroy() {
        this.authInfoSubscription.unsubscribe();
    }

    private getInvitations(): void {
        this.membersService.getInvitations().subscribe(
            (res) => {
                this.invitations = res.result;
                this.changeDetector.markForCheck();
            },
            (err) => {
                this._flashMessagesService.show(err.error, { cssClass: 'alert-danger', timeout: 3000 });
            }
        );
    }

    public rejectInvitation(invitation: Invitation): void {
        this.membersService.rejectInvite({ invitationId: invitation.id }).subscribe(
            () => {
                this.getInvitations();
                this._flashMessagesService.show('Invitation rejected', { cssClass: 'alert-success', timeout: 3000 });
            },
            () => {
                this._flashMessagesService.show('Rejecting invitation failed, please contact support if this keeps repeating',
                    { cssClass: 'alert-danger', timeout: 3000 }
                );
            }
        );
    }

    public acceptInvitation(invitation: Invitation): void {
        this.membersService.acceptInvite({ weddingId: invitation.wedding.id, invitationId: invitation.id, memberId: invitation.member.id })
            .subscribe(() => {
                this.getInvitations();
                this._flashMessagesService.show('Invitation accepted', { cssClass: 'alert-success', timeout: 3000 });
            },
                () => {
                    this._flashMessagesService.show('Accepting invitation failed, please contact support if this keeps repeating',
                        { cssClass: 'alert-danger', timeout: 3000 }
                    );
                });
    }

}
