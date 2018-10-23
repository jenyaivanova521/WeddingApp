import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	CoupleInformationsComponent,
	CouplePhotosComponent,
	CoupleProfileComponent,
	CoupleTimelineComponent,
	GuestComponent,
	GuestListComponent
} from '~/modules/wedding/components';
import { AddGuestModal, DeleteeditModal } from '~/modules/wedding/modals';

import { SharedModule } from '../shared.module';
import { PostComponent, PostFormComponent, CommentComponent, CommentFormComponent } from '~/modules/social-feed/components';
import { SocialFeedModule } from '~/modules/social-feed/social-feed.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
	declarations: [
		AddGuestModal,
		CouplePhotosComponent,
		CoupleProfileComponent,
		CoupleInformationsComponent,
		CoupleTimelineComponent,
		GuestComponent,
		GuestListComponent,
		DeleteeditModal
	],
	entryComponents: [
		AddGuestModal,
		DeleteeditModal
	],
	imports: [
		CommonModule,
		SharedModule,
		SocialFeedModule,
		MomentModule
	],
	exports: [
	]
})
export class WeddingModule { }