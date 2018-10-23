import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { AppLoadModule } from './core/app-load/app-load.module';
import { LayoutModule } from './core/layout/layout.module';
import { AuthModule } from './core/auth/auth.module';
import { WeddingFormModule } from './modules/wedding-form/wedding-form.module';
import { VendorFormModule } from './modules/vendor-form/vendor-form.module';
import { SettingsModule } from './modules/settings/settings.module';
import { SocialFeedModule } from './modules/social-feed/social-feed.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { GuestListModule } from './modules/guest-list/guest-list.module';
import { MarketplaceModule } from './modules/marketplace/marketplace.module';
import { WeddingModule } from './modules/wedding/wedding.module';
import { VendorModule } from './modules/vendor/vendor.module';
import { MessagesManagerModule } from './modules/messages-manager/messages-manager.module';
import { InspirationsModule } from './modules/inspirations/inspirations.module';

import { PostService } from './root-store/services/post.service';
import { WeddingService } from './root-store/services/wedding.service';
import { VendorService } from './root-store/services/vendor.service';
import { ProfileService } from './root-store/services/profile.service';
import { PaymentService } from './root-store/services/payment.service';
import { SioService } from './root-store/services/sio.service';
import { NotificationService } from './root-store/services/notification.service';
import { MessageService } from './root-store/services/message.service';
import { InspirationService } from './root-store/services/inspiration.service';
import { GuestService } from './root-store/services/guest.service';

import { routing } from './app.routing';

import { AuthGuard } from './shared/guards/auth.guard';
import { IsOwnerGuard } from './shared/guards/isOwner.guard';
import { HasWeddingGuard } from './shared/guards/hasWedding.guard';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { NgxGalleryModule } from 'ngx-gallery';

import { RootStoreModule } from './root-store';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppLoadModule,
        LayoutModule,
        AuthModule,
        WeddingFormModule,
        VendorFormModule,
        RootStoreModule,
        SettingsModule,
        SocialFeedModule,
        TasksModule,
        GuestListModule,
        MarketplaceModule,
        WeddingModule,
        VendorModule,
        MessagesManagerModule,
        InspirationsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        routing,
        FlashMessagesModule.forRoot(),
        NgProgressModule,
        NgxGalleryModule,
        StoreDevtoolsModule.instrument({
            name: 'Wedding App SPA'
        }),
        GooglePlaceModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        AuthGuard,
        IsOwnerGuard,
        HasWeddingGuard,
        CookieService,
        PostService,
        WeddingService,
        VendorService,
        ProfileService,
        PaymentService,
        SioService,
        NotificationService,
        MessageService,
        InspirationService,
        GuestService,
        {
            provide: CookieOptions,
            useValue: {}
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NgProgressInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
    }
}
