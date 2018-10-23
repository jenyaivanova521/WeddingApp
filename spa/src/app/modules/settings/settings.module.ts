import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { SettingsWeddingInvitationsComponent } from './components/invitations';

import {
    SettingsWeddingEventsComponent,
    SettingsWeddingComponent,
    SettingsWeddingInfoComponent,
    SettingsWeddingPartnersComponent
} from './components/wedding';
import { SettingsVendorComponent } from './components/vendor/vendor.component';
import { SettingsComponent } from './settings.component';
import { SettingsAccountComponent } from './components/account/account.component';
import { SettingsMembersComponent } from './components/members/members.component';
import { AvatarModule } from '../../shared/avatar/avatar.module';

import { routing } from './settings.routing';
import { LayoutModule } from '../../core/layout/layout.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule.forRoot(),
        routing,
        LayoutModule,
        MatIconModule,
        AvatarModule,
        SharedModule,
    ],
    declarations: [
        SettingsComponent,
        SettingsWeddingEventsComponent,
        SettingsWeddingComponent,
        SettingsWeddingInfoComponent,
        SettingsWeddingPartnersComponent,
        SettingsWeddingInvitationsComponent,
        SettingsMembersComponent,
        SettingsAccountComponent,
        SettingsVendorComponent
    ],
    exports: [
        SettingsComponent
    ]
})
export class SettingsModule {
}
