import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular';

import {
	LoginComponent,
	RegisterComponent,
	RemindPasswordComponent,
	SetPasswordComponent,
	AccountsettingsComponent,
	WelcomeComponent
} from '~/modules/auth/components';
import { SharedModule } from '../shared.module';
import { authRoutes } from './auth.routing';

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		RemindPasswordComponent,
		SetPasswordComponent,
		AccountsettingsComponent,
		WelcomeComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		SharedModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(authRoutes)
	],
	exports: [
		AccountsettingsComponent,
		NativeScriptRouterModule
	]
})
export class AuthModule { }