import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { ModalDialogService, NativeScriptRouterModule, registerElement } from 'nativescript-angular';

import { SharedModule } from '~/modules/shared.module';
import { SocialFeedModule } from '~/modules/social-feed/social-feed.module';
import { TasksModule } from '~/modules/tasks/tasks.module';
import { WeddingModule } from '~/modules/wedding/wedding.module';
import { MarketplaceModule } from '~/modules/marketplace/marketplace.module';


import { RootStoreModule } from '~/root-store/root-store.module';
import {
	CreateCoupleComponent,
	CreateCouplePartnerComponent,
	CreateCouplePrivacyComponent,
	CreateCoupleProfileComponent,
	CreateVendorComponent,
	CreateVendorProfileComponent,
	DialogsComponent,
	MenuComponent,
	LoggedInAppComponent,
	TopBarComponent,
	CreateVendorPhotosComponent,
	CreateVendorProductsComponent,
	CreateVendorPaymentComponent,
	AddProductModal,
	MemberComponent,//9.5
} from '~/shared/components';

import { mainRouting } from '~/shared/main.routing';
import { appServices } from '~/shared/services';

import { RequestInterceptor } from '~/shared/interceptors/http-request.interceptor';
import { AuthModule } from '~/modules/auth/auth.module';
import { AppComponent } from './app.component';

import { AddMemberModal } from '~/shared/modals/add-member';

import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { VendorService } from '~/shared/services/vendor.service';
import { ProfileService } from '~/shared/services/profile.service';
import { MessageService } from '~/shared/services/message.service';
import { NotificationService } from '~/shared/services/notification.service';

registerElement('Gradient', () => require('nativescript-gradient').Gradient);

@NgModule({
	declarations: [
		AppComponent,
		DialogsComponent,
		MenuComponent,
		LoggedInAppComponent,
		AddProductModal,
		CreateCoupleComponent,
		CreateCoupleProfileComponent,
		CreateCouplePartnerComponent,
		CreateCouplePrivacyComponent,
		CreateVendorComponent,
		CreateVendorProfileComponent,
		CreateVendorPhotosComponent,
		CreateVendorProductsComponent,
		CreateVendorPaymentComponent,
		TopBarComponent,
		MemberComponent,//9.5
		AddMemberModal
	],
	entryComponents: [
		AddProductModal,
		AddMemberModal
	],
	bootstrap: [ AppComponent ],
	imports: [		
		AuthModule,
		RootStoreModule,
		TasksModule,
		WeddingModule,
		MarketplaceModule,
		SocialFeedModule,
		SharedModule,
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(mainRouting),
		HttpModule, 
		MomentModule
	],
	providers: [
		...appServices,
		VendorService,
		ProfileService,
		MessageService,
		NotificationService,
		ModalDialogService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptor,
			multi: true
		}
	],
	schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule {
}