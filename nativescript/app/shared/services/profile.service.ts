import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { WeddingService } from './wedding.service';
import { VendorService } from './vendor.service';
import { AuthService } from './auth.service';
import { MemberService } from './member.service';
import { API_URL } from '../configs/app.config';
import { RootStoreState, ProfileActions, MemberActions } from '~/root-store';
let localStorage = require( "nativescript-localstorage" );

@Injectable()
export class ProfileService {
    private apiUrl: string = API_URL + '/weddings';

    constructor(
        private http: HttpClient,
        private weddingService: WeddingService,
        private vendorService: VendorService,
        private authService: AuthService,
        private memberService: MemberService,
        private store: Store<RootStoreState.State>
    ) { }

    async initProfiles(activeProfileId = null) {
        let activeProfile = false;
        let profiles = await this.getProfiles();
        let authInfo = await this.authService.getAccountInfo().toPromise().then(response => {
            return response.result;
        });
        if (profiles && profiles.length) {
            this.store.dispatch(new ProfileActions.SetProfiles({ profiles }));
            activeProfile = activeProfileId ? this.getProfile({ profiles, profileId: activeProfileId }) : await this.getActiveProfile({ profiles, authInfo });
            if(activeProfile && activeProfile['type'] == 'wedding') {
                this.initActiveProfileMembers(activeProfile);
            }
        }
        this.store.dispatch(new ProfileActions.SetActiveProfile({ profile: activeProfile, accountId: authInfo.account.id }));
    }

    async initActiveProfileMembers(activeProfile) {
        if (activeProfile && activeProfile.type == 'wedding') {
            let members = await this.memberService.getMembers({
                weddingId: activeProfile.id
            }).toPromise().then(response => {
                return response.result;
            })
            this.store.dispatch(new MemberActions.SetMembers({
                members: members
            }));
        }
    }

    async getProfiles() {
        console.log("profile.service->get profiles");
        let profiles = [];
        let weddings = await this.weddingService.getWeddings().toPromise().then(response => {
            return response.result;
        });
        let vendors = await this.vendorService.getOwnedVendors().toPromise().then(response => {
            return response.result;
        });
        weddings.concat(vendors).forEach(profile => {
            profiles.push({
                id: profile.id,
                name: profile.name,
                avatar: profile.avatar ? profile.avatar : null,
                type: profile.member ? 'wedding' : 'vendor',
                isOwner: profile.member ? (profile.member.role == 'owner' ? true : false) : true,
                privacySetting: profile.privacySetting ? profile.privacySetting : null,
                memberId: profile.member ? profile.member.id : null,
                isActive: profile.isActive !== undefined ? profile.isActive : undefined
            });
        });
        return profiles;
    }

    getProfile({ profiles, profileId }) {
        if (profiles) {
            for (let i = 0; i < profiles.length; i++) {
                let profile = profiles[i];
                if (profile.id == profileId) {
                    return profile;
                }
            }
        }
        return null;
    }

    getActiveProfile({ profiles, authInfo }) {
        console.log("profile.service->getActiveProfile");
        let activeProfile;
        if (profiles) {
            let localActiveProfileId = localStorage.getItem(authInfo.account.id + '-activeProfileId');
            activeProfile = localActiveProfileId ? this.getProfile({ profiles, profileId: localActiveProfileId }) : profiles[0];
        }
        return activeProfile;
    }

}
