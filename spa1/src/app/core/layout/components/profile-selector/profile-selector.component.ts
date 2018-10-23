import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";

import { ProfileService } from '../../../../root-store/services/profile.service';

import {
    RootStoreState,
    ProfileActions,
    ProfileSelectors,
    MemberActions,
    AuthSelectors
} from '../../../../root-store';

@Component({
    selector: 'profile-selector',
    templateUrl: './profile-selector.component.html',
    styleUrls: ['./profile-selector.component.sass']
})
export class ProfileSelectorComponent implements OnInit {
    profiles: any;
    activeProfile: any;
    authInfo: any;

    constructor(
        private router: Router,
        private store: Store<RootStoreState.State>,
        private profileService: ProfileService
    ) { }

    ngOnInit() {
        this.store.select(
            ProfileSelectors.selectProfiles
        ).subscribe(profiles => {
            this.profiles = profiles;
        });
        this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe(authInfo => {
            this.authInfo = authInfo;
        })
    }

    async selectProfile(profile: any) {
        this.store.dispatch(new ProfileActions.SetActiveProfile({ profile, accountId: this.authInfo.account.id }));
        this.profileService.initActiveProfileMembers(profile);
        this.router.navigate(['']);
    }

}
