import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';
import { MatIconModule } from '@angular/material';
import { NguiStickyModule } from '@ngui/sticky';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxScrollSpyDirective } from '../../shared/directives/ngx-scroll-spy.directive';

import { SharedModule } from '../../shared/shared.module';
import { VendorComponent } from './vendor.component';
import { VendorReviewComponent } from './components/vendor-review/vendor-review.component';
import { VendorReviewModalComponent } from './components/vendor-review-modal/vendor-review-modal.component';
import { VendorMessageModalComponent } from './components/vendor-message-modal/vendor-message-modal.component';
import { routing } from './vendor.routing';
import { LayoutModule } from '../../core/layout/layout.module';

const getWindow = () => window;

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        routing,
        LayoutModule,
        SharedModule,
        NgxGalleryModule,
        MatIconModule,
        NguiStickyModule,
        NgxPageScrollModule
    ],
    declarations: [
        VendorComponent,
        VendorReviewComponent,
        VendorReviewModalComponent,
        VendorMessageModalComponent,
        NgxScrollSpyDirective
    ],
    exports: [
        VendorComponent
    ],
    entryComponents: [
        VendorReviewModalComponent,
        VendorMessageModalComponent
    ]
})
export class VendorModule { }
