import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';
import * as moment from 'moment';

import { DATE_FORMAT, DATETIME_FORMAT } from '~/shared/configs';
import { DatepickerModal } from '~/shared/modals';
import { ModalService } from '~/shared/services';

@Component({
	selector: 'date-input',
	templateUrl: 'date-input.component.html',
})
export class DateInputComponent implements OnInit {

	@Input() startValue: any;
	@Input() useHours: boolean = false;
	@Output() dateChanged: EventEmitter<any> = new EventEmitter();

	public date: string;
	private displayFormat: string;

	constructor(
		private modalService: ModalService,
		private changeDetector: ChangeDetectorRef
	) {
	}

	ngOnInit(): void {
		const format = this.useHours ? DATETIME_FORMAT : DATE_FORMAT;
		this.date = this.startValue ? moment(this.startValue).format(format) : format;
		this.displayFormat = format;
	}

	public openDatepickerModal(): void {
		this.modalService.showModal(DatepickerModal, {fullscreen: true, context: {useHours: this.useHours} }).then((
			(value: string) => {
				this.date = value;
				this.dateChanged.next(new Date(value).toISOString());
				this.changeDetector.markForCheck();
			}
		));
	}


}