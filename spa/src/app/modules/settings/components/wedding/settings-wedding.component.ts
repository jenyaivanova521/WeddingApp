import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { WeddingService } from '../../../../root-store/services/wedding.service';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-settings-wedding',
    templateUrl: './settings-wedding.component.html',
    styleUrls: ['./settings-wedding.component.sass']
})
export class SettingsWeddingComponent implements OnInit {

    public activeProfile: CommonModels.Profile;
    public wedding: CommonModels.Wedding;

    private activeProfileSubscription: Subscription;

    constructor(
        private store: Store<RootStoreState.State>,
        private changeDetector: ChangeDetectorRef,
        private route: ActivatedRoute,
        private weddingService: WeddingService
    ) {
    }

    async ngOnInit() {
        this.activeProfile = this.route.parent.snapshot.data.activeProfile;
        await this.weddingService.getWedding({weddingId: this.activeProfile.id}).toPromise().then(response => {
            this.wedding = response.result;
        });
    }

}
