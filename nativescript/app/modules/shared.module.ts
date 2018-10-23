import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
	AvatarComponent,
	CheckboxComponent,
	ConversationsComponent,
	DateInputComponent,
	LocationInputComponent,
	NotificationsComponent,
	SelectInputComponent,
	UploadPhotoComponent,
	MenuComponent,
} from '~/shared/components';
import { RadioButtonsComponent } from '~/shared/components/radio-buttons';
import { DatepickerModal, ListSelectModal, LocationModal, UploadModal } from '~/shared/modals';
import { DateWithHoursPipe, FullDatePipe } from '~/shared/pipes';
import { TimeAgoPipe } from '~/shared/pipes/time-ago.pipe';
import { StarRatingComponent } from '../shared/components/star-rating/star-rating.component';

@NgModule({
	imports: [
		CommonModule,
	],
	entryComponents: [
		DatepickerModal,
		ListSelectModal,
		LocationModal,
		UploadModal,
	],
	declarations: [
		AvatarComponent,
		CheckboxComponent,
		ConversationsComponent,
		DateInputComponent,
		DatepickerModal,
		DateWithHoursPipe,
		FullDatePipe,
		TimeAgoPipe,
		NotificationsComponent,
		ListSelectModal,
		LocationModal,
		LocationInputComponent,
		UploadModal,
		UploadPhotoComponent,
		SelectInputComponent,
		RadioButtonsComponent,
		StarRatingComponent,
		
	],
	exports: [
		AvatarComponent,
		CheckboxComponent,
		DateInputComponent,
		DatepickerModal,
		DateWithHoursPipe,
		FullDatePipe,
		TimeAgoPipe,
		ListSelectModal,
		LocationModal,
		LocationInputComponent,
		UploadModal,
		UploadPhotoComponent,
		SelectInputComponent,
		RadioButtonsComponent,
		StarRatingComponent,
	]
})
export class SharedModule { }