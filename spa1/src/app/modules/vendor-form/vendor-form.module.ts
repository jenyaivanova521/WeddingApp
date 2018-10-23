import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../../core/layout/layout.module';
import { MatIconModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { VendorFormComponent } from './vendor-form.component';
import { VendorFormBasicInfoComponent } from './components/basic-info/basic-info.component';
import { VendorFormPhotosComponent } from './components/photos/photos.component';
import { VendorFormProductsComponent } from './components/products/products.component';
import { VendorFormPaymentComponent } from './components/payment/payment.component';
import { AvatarModule } from '../../shared/avatar/avatar.module';
import { ImageInputModule } from '../../shared/image-input/image-input.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxBraintreeModule } from 'ngx-braintree';

import { routing } from './vendor-form.routing';
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
        SharedModule,
        ImageInputModule,
        GooglePlaceModule,
        Ng2TelInputModule,
        NgxBraintreeModule
    ],
    declarations: [
        VendorFormComponent,
        VendorFormBasicInfoComponent,
        VendorFormPhotosComponent,
        VendorFormProductsComponent,
        VendorFormPaymentComponent
    ],
    exports: [
        VendorFormComponent
    ]
})
export class VendorFormModule { }
