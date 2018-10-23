import { Component } from '@angular/core';
import { Moment } from 'moment';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import * as moment from 'moment';

import { DATE_FORMAT } from '~/shared/configs';

@Component({
	selector: 'datepicker-modal',
	templateUrl: 'datepicker.modal.html',
})
export class DatepickerModal {

	private date: Moment = moment();
	private time: Moment = moment();
	private useHours: boolean;

	public showHours: boolean = false;

	constructor(
		private params: ModalDialogParams
	) {
		this.useHours = this.params.context.useHours;
	}

	public onDateChanged(event): void {
		this.date = moment(event.value);
	}

	public onTimeChanged(event): void {
		this.time = moment(event.value);
	}

	public close(): void {
		let date = this.date.format(DATE_FORMAT);
		if (this.useHours) {
			if (this.showHours) {
				const hour = this.time.hour();
				const minutes = this.time.minutes();
				date = date + ' ' + hour + ':' + minutes;
			} else {
				this.showHours = true;
				return;
			}
		}

		this.params.closeCallback(date);
	}

}