import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { Store } from '@ngrx/store';

import {
    RootStoreState,
    CommonModels,
    ProfileSelectors
} from '../../../../root-store';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit, OnDestroy {
	activeProfile: CommonModels.Profile;
    activeProfileSubscription: ISubscription;
    _collapseNav: boolean
    @Input() set collapseNav(value: boolean) {
        this._collapseNav = value;
    }

	constructor(
        private store: Store<RootStoreState.State>
	) { }

	ngOnInit() {
        this.activeProfileSubscription = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile
        });
	}

    ngOnDestroy() {
        this.activeProfileSubscription.unsubscribe();
    }

}
