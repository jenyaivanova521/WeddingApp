import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { WeddingService } from '../../root-store/services/wedding.service';

import {
    RootStoreState,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'app-wedding',
    templateUrl: './wedding.component.html',
    styleUrls: ['./wedding.component.sass']
})
export class WeddingComponent implements OnInit, OnDestroy {
    wedding: CommonModels.WeddingDetails
    routeSubscription: ISubscription;

    constructor(
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>,
        private weddingService: WeddingService
    ) { }

    async ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(async (params) => {
            await this.getWeddingDetails(params.weddingId);
        });
    }

    private async getWeddingDetails(weddingId) {
        await this.weddingService.getWedding({
            weddingId: weddingId
        }).toPromise().then(response => {
            this.wedding = response.result
        });
    }

    async ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }

    async follow(weddingId) {
        await this.weddingService.follow({
            weddingId: weddingId
        }).toPromise().then(response => {
            this.getWeddingDetails(this.wedding.id);
        });
    }

    async unfollow(weddingId) {
        await this.weddingService.unfollow({
            weddingId: weddingId
        }).toPromise().then(response => {
            this.getWeddingDetails(this.wedding.id);
        });
    }

}
