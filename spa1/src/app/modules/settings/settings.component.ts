import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import {
    RootStoreState,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

    public activeProfile: CommonModels.Profile;
    public isOwner: boolean;

    private weddingSubscription: Subscription;

    constructor(
        private store: Store<RootStoreState.State>,
        private changeDetector: ChangeDetectorRef,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activeProfile = this.route.snapshot.data.activeProfile;
    }

}
