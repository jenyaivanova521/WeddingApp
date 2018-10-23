import { Component, OnInit, OnDestroy, Renderer2, Output, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { InspirationService } from '../../../../root-store/services/inspiration.service';
import { environment } from '../../../../../environments/environment';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-inspiration-details',
    templateUrl: './inspiration-details.component.html'
})
export class InspirationDetailsComponent implements OnInit, OnDestroy {
    @Output() onResetInspirations: EventEmitter<any> = new EventEmitter<any>();
    inspiration: object;
    routeSubscription: ISubscription;
    activeProfile: CommonModels.Profile;
    subscriptionActiveProfile: ISubscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private inspirationService: InspirationService,
        private store: Store<RootStoreState.State>,
        private renderer: Renderer2
    ) { }

    async ngOnInit() {
        this.subscriptionActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if (activeProfile) {
                this.activeProfile = activeProfile;
            }
        });
        this.renderer.addClass(document.body, 'overflow-hidden');
        this.routeSubscription = this.route.params.subscribe(async (params) => {
            await this.inspirationService.getInspiration({
                inspirationId: params.inspirationId,
                pinnedToWeddingId: this.activeProfile.id
            }).toPromise().then(response => {
                this.inspiration = response.result;
            });
        });
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'overflow-hidden');
        this.subscriptionActiveProfile.unsubscribe();
    }

    onInspirationDeleted() {
        this.onResetInspirations.emit(true);
        this.router.navigateByUrl('/inspirations');
    }

}
