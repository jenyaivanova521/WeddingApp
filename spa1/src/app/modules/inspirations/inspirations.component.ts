import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { Store } from '@ngrx/store';

import { InspirationService } from '../../root-store/services/inspiration.service';
import { AddInspirationModalComponent } from './components/add-inspiration-modal/add-inspiration-modal.component';

import { distinctUntilChanged, debounceTime, switchMap, tap, catchError, map } from 'rxjs/operators'
import { Subject, Observable, of, concat } from 'rxjs';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'app-inspirations',
    templateUrl: './inspirations.component.html',
    styleUrls: ['./inspirations.component.sass']
})
export class InspirationsComponent implements OnInit, OnDestroy {
    activeProfile: CommonModels.Profile;
    subscriptionActiveProfile: ISubscription;
    inspirations: any[] = [];
    page: number = 1;
    infiniteScrollDisabled: boolean = false;
    masonryOptions: object;
    _masonry: Masonry;
    subscriptionResetInspiration: ISubscription;
    routeSubscription: ISubscription;
    onlyPinned: boolean;
    onlyYours: boolean;

    defaultTags: object[];
    tags: Observable<any>;
    tagsLoading = false;
    tagsInput = new Subject<string>();
    selectedTags: string[] = [];
    updateMasonry: boolean = false;

    constructor(
        private modalService: NgbModal,
        private inspirationService: InspirationService,
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>
    ) { }

    async ngOnInit() {
        this.onlyPinned = false;
        this.onlyYours = false;
        this.subscriptionActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if (activeProfile) {
                this.activeProfile = activeProfile;
            }
        });
        this.routeSubscription = this.route.params.subscribe(async (params) => {
            if (params.tags) {
                this.selectedTags = params.tags.replace(/\s/g, '').split(',');
            }
        });
        if(this.route.snapshot.routeConfig.path == 'inspirations/pinned') {
            this.onlyPinned = true;
        }
        if(this.route.snapshot.routeConfig.path == 'inspirations/yours') {
            this.onlyYours = true;
        }
        this.masonryOptions = {
            itemSelector: '.masonry-item',
            transitionDuration: 1,
            horizontalOrder: true
        };
        this.tags = this.inspirationService.getTags().pipe(
            map(response => {
                this.defaultTags = response.result;
                return response.result
            })
        );
        this.loadTags();
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.subscriptionActiveProfile.unsubscribe();
        if(this.subscriptionResetInspiration) {
            this.subscriptionResetInspiration.unsubscribe();
        }
    }

    async getInspirations() {
        await this.inspirationService.getInspirations({
            page: this.page,
            tags: this.selectedTags.join(','),
            pinnedToWeddingId: this.activeProfile.id,
            onlyPinned: this.onlyPinned,
            authorWeddingId: this.onlyYours ? this.activeProfile.id : ''
        }).toPromise().then(response => {
            this._masonry.setAddStatus('append');
            this.inspirations.push(...response.result);
            if (response.result.length < 10) {
                this.infiniteScrollDisabled = true;
            }
        });
    }

    onNgMasonryInit($event: Masonry) {
        this._masonry = $event;
        this.getInspirations();
    }

    loadMoreInspirations() {
        this.page++;
        this.getInspirations();
    }

    async loadTags() {
        this.tags = concat(
            this.tags,
            this.tagsInput.pipe(
                debounceTime(200),
                distinctUntilChanged(),
                tap(() => this.tagsLoading = true),
                switchMap(term => this.inspirationService.getTags(term).pipe(
                    map(response => {
                        return response.result
                    }),
                    catchError(() => of([])),
                    tap(() => this.tagsLoading = false)
                ))
            )
        );
    }

    onClear() {
        this.tags = of([...this.defaultTags]);
    }

    async resetInspirations() {
        this._masonry.items = [];
        this.inspirations = [];
        this.page = 1;
        this.infiniteScrollDisabled = false;
        this.getInspirations();
    }

    openAddInspirationModal() {
        let modal;
        modal = this.modalService.open(AddInspirationModalComponent, { size: 'lg' });
        modal.componentInstance['onSubmitEvent'].subscribe(inspiration => {
            if(!this.onlyPinned && !inspiration.isPinned) {
                this.selectedTags = [];
                this._masonry.setAddStatus('prepend');
                this.inspirations.splice(0, 0, inspiration);
            }
        });
    }

    childComponentAdded(component) {
        this.subscriptionResetInspiration = component.onResetInspirations.subscribe(event => {
            this.resetInspirations();
        });
    }

}
