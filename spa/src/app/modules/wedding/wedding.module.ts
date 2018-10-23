import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { WeddingInformationComponent } from './components/information';
import { WeddingComponent } from './wedding.component';
import { WeddingTimelineComponent } from './components/timeline/timeline.component';
import { WeddingPhotosComponent } from './components/photos/photos.component';
import { PostFormComponent } from '../social-feed/components/post-form/post-form.component';
import { routing } from './wedding.routing';
import { LayoutModule } from '../../core/layout/layout.module';
import { SocialFeedModule } from '../social-feed/social-feed.module';

import { MomentModule } from 'angular2-moment';
import { AvatarModule } from '../../shared/avatar/avatar.module';
import { MatIconModule } from '@angular/material';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { NgxGalleryModule } from 'ngx-gallery';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        routing,
        LayoutModule,
        MomentModule,
        AvatarModule,
        MatIconModule,
        TextareaAutosizeModule,
        NgxGalleryModule,
        InfiniteScrollModule,
        BrowserModule,
        InViewportModule,
        NgbModule,
        SocialFeedModule,
        LightboxModule,
        SharedModule,
        NgxPageScrollModule
    ],
    declarations: [
        WeddingComponent,
        WeddingInformationComponent,
        WeddingTimelineComponent,
        WeddingPhotosComponent
    ],
    exports: [
        WeddingComponent
    ],
    entryComponents: [
        PostFormComponent
    ]
})
export class WeddingModule { }
