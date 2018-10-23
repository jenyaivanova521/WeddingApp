import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Output,
	Input
} from '@angular/core';

import { LocationModal } from '~/shared/modals';
import { ModalService } from '~/shared/services';

@Component({
	selector: 'location-input',
	templateUrl: 'location-input.component.html',
})
export class LocationInputComponent {
	@Input() location: string;
	@Output() locationChanged: EventEmitter<any> = new EventEmitter();
	@Output() text:EventEmitter<any> = new EventEmitter();

	

	constructor(
		private modalService: ModalService,
		private changeDetector: ChangeDetectorRef
	) {
	}

	public openLocationModal(): void {
		this.modalService.showModal(LocationModal, {fullscreen: true }).then((
			(value: any) => {
				this.location = value.formatted_address;
				this.locationChanged.next(value);
				this.text.next(this.location);
				this.changeDetector.markForCheck();
			}
		));
	}


}