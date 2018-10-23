import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { WeddingService } from '../../../../root-store/services/wedding.service';
import { CommonModels } from '../../../../root-store';

@Component({
    selector: 'app-wedding-information',
    templateUrl: './wedding-information.component.html',
    styleUrls: ['./wedding-information.component.sass']
})
export class WeddingInformationComponent implements OnInit, OnDestroy {

    private routeSubscription: ISubscription;
    private routeEventsSubscription: ISubscription;

    public weddingId: string;
    public wedding: CommonModels.Wedding;

    public partners: Array<any>;
    public events: Array<any>;

    constructor(
        private route: ActivatedRoute,
        private weddingService: WeddingService,
        private changeDetector: ChangeDetectorRef,
        private router: Router
    ) {
    }

    async ngOnInit() {
        this.routeSubscription = this.route.parent.params.subscribe(async (params) => {
            await this.getWeddingDetails(params.weddingId);
        });

        this.routeEventsSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getWeddingDetails(this.wedding.id);
            }
        });
    }

    private async getWeddingDetails(weddingId) {
        await this.weddingService.getWedding({
            weddingId: weddingId
        }).toPromise().then(response => {
            this.wedding = response.result;

            this.weddingService.getWeddingPartners({weddingId}).subscribe(
                (res) => {
                    this.partners = res.result;
                    this.changeDetector.markForCheck();
                }
            );

            this.weddingService.getWeddingEvents({weddingId}).subscribe(
                (res) => {
                    this.events = res.result;
                    this.changeDetector.markForCheck();
                }
            );
        });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.routeEventsSubscription.unsubscribe();
    }

}
