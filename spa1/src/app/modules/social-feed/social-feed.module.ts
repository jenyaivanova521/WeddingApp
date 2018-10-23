import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { SocialFeedComponent } from './social-feed.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { routing } from './social-feed.routing';
import { LayoutModule } from '../../core/layout/layout.module';
import { MomentModule } from 'angular2-moment';
import { AvatarModule } from '../../shared/avatar/avatar.module';
import { MatIconModule } from '@angular/material';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { NgxGalleryModule } from 'ngx-gallery';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        SharedModule
    ],
    declarations: [
        SocialFeedComponent,
        PostComponent,
        PostFormComponent,
        CommentComponent,
        CommentFormComponent
    ],
    exports: [
        SocialFeedComponent,
        PostComponent,
        PostFormComponent,
        CommentComponent,
        CommentFormComponent
    ]
})
export class SocialFeedModule { }
