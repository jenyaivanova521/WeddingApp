import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../../core/layout/layout.module';
import { MatIconModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { WeddingFormComponent } from './wedding-form.component';
import { WeddingFormBasicInfoComponent } from './components/basic-info/basic-info.component';
import { WeddingFormPartnerComponent } from './components/partner/partner.component';
import { WeddingFormPrivacyComponent } from './components/privacy/privacy.component';
import { AvatarModule } from '../../shared/avatar/avatar.module';
import { ImageInputModule } from '../../shared/image-input/image-input.module';
import { NgDatepickerModule } from 'ng2-datepicker';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';

import { routing } from './wedding-form.routing';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        routing,
        CommonModule,
        NgbModule.forRoot(),
        LayoutModule,
        FormsModule,
        NgSelectModule,
        MatIconModule,
        AvatarModule,
        NgDatepickerModule,
        SharedModule,
    ],
    declarations: [
        WeddingFormComponent,
        WeddingFormBasicInfoComponent,
        WeddingFormPartnerComponent,
        WeddingFormPrivacyComponent
    ],
    exports: [
        WeddingFormComponent
    ]
})
export class WeddingFormModule { }
