import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import { InspirationsComponent } from './inspirations.component';
import { InspirationThumbnailComponent } from './components/inspiration-thumbnail/inspiration-thumbnail.component';
import { InspirationDetailsComponent } from './components/inspiration-details/inspiration-details.component';
import { AddInspirationModalComponent } from './components/add-inspiration-modal/add-inspiration-modal.component';
import { InspirationActionsComponent } from './components/inspiration-actions/inspiration-actions.component';
import { routing } from './inspirations.routing';
import { LayoutModule } from '../../core/layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing,
        LayoutModule,
        SharedModule,
        MatIconModule,
        NgSelectModule,
        InfiniteScrollModule,
        NgMasonryGridModule,
        TextareaAutosizeModule
    ],
    declarations: [
        InspirationsComponent,
        InspirationThumbnailComponent,
        InspirationDetailsComponent,
        AddInspirationModalComponent,
        InspirationActionsComponent
    ],
    entryComponents: [
        AddInspirationModalComponent
    ]
})
export class InspirationsModule { }
