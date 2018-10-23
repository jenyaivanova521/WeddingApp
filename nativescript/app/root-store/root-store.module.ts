import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthStoreModule } from '~/root-store/auth-store';
import { TaskStoreModule } from '~/root-store/task-store';
import { WeddingStoreModule } from '~/root-store/wedding-store';
import { MemberStoreModule } from './member-store/module';
import { ProfileStoreModule } from './profile-store';
import { MessageStoreModule } from './message-store';

@NgModule({
	imports: [
		CommonModule,
		AuthStoreModule,
		TaskStoreModule,
		WeddingStoreModule,
		MemberStoreModule,
		ProfileStoreModule,
		MessageStoreModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([])
	],
	declarations: []
})
export class RootStoreModule { }
