import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from "rxjs/Subscription";
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit, OnDestroy {
    queryParamsSubscription: ISubscription;
    hideNav: boolean
    collapseNav: boolean = false;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            params => {
                if (params.layout == 'blank') {
                    this.hideNav = true;
                } else {
                    this.hideNav = false;
                }
            }
        );
    }

    ngOnDestroy() {
        this.queryParamsSubscription.unsubscribe();
    }

}
