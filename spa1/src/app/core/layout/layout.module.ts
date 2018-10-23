import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { WeddingMembersComponent } from './components/wedding-members/wedding-members.component';
import { ProfileSelectorComponent } from './components/profile-selector/profile-selector.component';
import { AddMemberModalComponent } from './components/add-member-modal/add-member-modal.component';
import { NotificationsIndicatorComponent } from './components/notifications-indicator/notifications-indicator.component';
import { MessagesIndicatorComponent } from './components/messages-indicator/messages-indicator.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AvatarModule } from '../../shared/avatar/avatar.module';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule,
        NgSelectModule,
        NgbModule.forRoot(),
        MatIconModule,
        FlashMessagesModule.forRoot(),
        AvatarModule,
        NgProgressModule,
        InfiniteScrollModule
    ],
    declarations: [
        LayoutComponent,
        NavbarComponent,
        NavComponent,
        WeddingMembersComponent,
        ProfileSelectorComponent,
        AddMemberModalComponent,
        NotificationsIndicatorComponent,
        MessagesIndicatorComponent
    ],
    exports: [
        LayoutComponent,
        AddMemberModalComponent
    ],
    providers: [
        NgbActiveModal
    ]
})
export class LayoutModule { }
