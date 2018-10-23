import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, ISubscription } from 'rxjs/Subscription';

import { State, RootStoreState } from '~/root-store';
import { AuthInfo } from '~/root-store/auth-store/models';
import { selectAuthInfo } from '~/root-store/auth-store/selectors';

import { AddMemberModal } from '~/shared/modals/add-member';
import { ModalService } from '~/shared/services';
import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { MemberSelectors, MemberModels } from '~/root-store/member-store';
import { Observable } from "rxjs/Observable";
import { MemberService } from '~/shared/services/member.service';
import { ProfileService } from '~/shared/services/profile.service';
import { ProfileSelectors } from '~/root-store/profile-store';
import { CommonModels } from '~/root-store';

@Component({
	moduleId: module.id,
	selector: 'menu',
	templateUrl: 'menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
	@Output() toggleMenuEvent: EventEmitter<any> = new EventEmitter();

	public members;
	accountInfo;
	profiles: any;
    activeProfile: CommonModels.Profile;
    activeProfileSubscription: ISubscription;
	authInfo: any;
	imageDir:string;
	accountName: string;
	private accountSubscription: Subscription;
	// private activeWedding: Wedding;
	// private subActiveWedding: ISubscription;

	constructor( private modalService: ModalService,
				 private store: Store<RootStoreState.State>,
				 private memberService: MemberService,
				 private profileService: ProfileService
	) {

	}

	ngOnInit(): void {
		console.log("menu ngOnit");		
		
		this.accountSubscription = this.store.select(selectAuthInfo).subscribe(
			(authInfo: AuthInfo) => {
				if (authInfo) {
					// console.log(authInfo);
					this.accountInfo = authInfo.account;
					this.accountName = this.accountInfo.firstName + ' ' + this.accountInfo.lastName;
					this.getProfileData();
				}
			}
		)
		this.accountInfo = true //must be deleted after test		
	}
	getProfileData(){
		this.activeProfileSubscription = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
			console.log("activieProfile: ",activeProfile);
			this.activeProfile = activeProfile
			if(activeProfile && activeProfile.type == 'wedding') {
				this.members = [];
				this.memberService.getMembers({
					weddingId: activeProfile.id
				}).toPromise().then(response => {
					// console.log(response);
					// this.members = response.result;
					for( var i = 0; i < response.result.length;i++){
						if(response.result[i].isActive){							
							this.members.push(response.result[i].account);
						}
						// console.log(this.members[i]);
					}
					return response.result;
				})

				this.imageDir = 'wedding/'+ activeProfile.id + '/avatars';
			}
			else if( activeProfile && activeProfile.type == 'vendor') {
				this.imageDir = 'vendor/'+ activeProfile.id + '/avatars';
			}
			else {
				this.imageDir = 'account/' + this.accountInfo.id + '/avatars'
			}
		});
	}

	ngOnDestroy(): void {
		this.accountSubscription.unsubscribe();
		// this.subActiveWedding.unsubscribe();
		this.activeProfileSubscription.unsubscribe();
	}

	public openAddMemberModal(): void {
		this.modalService.showModal(AddMemberModal, {})
			.then((response: any) => {
				// TODO add guest
				console.log(response);
			});
	}

	public toggleMenu(): void {
		this.toggleMenuEvent.next();
	}
}
