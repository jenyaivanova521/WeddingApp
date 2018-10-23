import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import { MessagesManagerComponent } from './messages-manager.component';
import { MessagesConversationComponent } from './components/conversation/conversation.component';
import { routing } from './messages-manager.routing';
import { LayoutModule } from '../../core/layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing,
        LayoutModule,
        SharedModule,
        MatIconModule,
        InfiniteScrollModule,
        TextareaAutosizeModule
    ],
    declarations: [
        MessagesManagerComponent,
        MessagesConversationComponent
    ],
    exports: [
        MessagesManagerComponent
    ]
})
export class MessagesManagerModule { }
