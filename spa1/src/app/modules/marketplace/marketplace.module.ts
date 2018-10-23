import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgSelectModule } from '@ng-select/ng-select';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { MarketplaceComponent } from './marketplace.component';
import { ProfilingTestComponent } from './components/profiling-test/profiling-test.component';
import { routing } from './marketplace.routing';
import { LayoutModule } from '../../core/layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing,
        LayoutModule,
        SharedModule,
        MatIconModule,
        GooglePlaceModule,
        NgSelectModule,
        InfiniteScrollModule
    ],
    declarations: [
        MarketplaceComponent,
        ProfilingTestComponent
    ],
    entryComponents: [
        ProfilingTestComponent
    ]
})
export class MarketplaceModule { }
