import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '~/modules/shared.module';
import {
	CommentComponent,
	CommentFormComponent,
	PostComponent,
	PostFormComponent
} from '~/modules/social-feed/components';
import { SocialFeedComponent } from '~/modules/social-feed/social-feed.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		BrowserModule,
		SharedModule,
	],
	declarations: [
		SocialFeedComponent,
		PostComponent,
		PostFormComponent,
		CommentComponent,
		CommentFormComponent
	],
	exports: [
		SocialFeedComponent,
		PostComponent,
		PostFormComponent,
		CommentComponent,
		CommentFormComponent
	]
})
export class SocialFeedModule { }
