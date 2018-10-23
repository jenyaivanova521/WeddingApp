import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-settings-vendor',
    templateUrl: './vendor.component.html',
    styleUrls: ['./vendor.component.sass']
})
export class SettingsVendorComponent implements OnInit {

    public activeProfile: CommonModels.Profile;


    constructor(
        private store: Store<RootStoreState.State>,
        private route: ActivatedRoute
    ) {
    }

    async ngOnInit() {
        this.activeProfile = this.route.parent.snapshot.data.activeProfile;
    }

}
