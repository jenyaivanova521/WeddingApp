import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { GuestListComponent } from './guest-list.component';
import { GuestStatsComponent } from './components/guest-stats/guest-stats.component';
import { GuestComponent } from './components/guest/guest.component';
import { GuestFormModalComponent } from './components/guest-form-modal/guest-form-modal.component';
import { routing } from './guest-list.routing';
import { LayoutModule } from '../../core/layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        routing,
        LayoutModule,
        NgbModule,
        NgSelectModule,
        MatIconModule,
        InfiniteScrollModule
    ],
    declarations: [
        GuestComponent,
        GuestListComponent,
        GuestStatsComponent,
        GuestFormModalComponent
    ],
    exports: [
        GuestListComponent
    ],
    entryComponents: [
        GuestFormModalComponent
    ]
})
export class GuestListModule { }
