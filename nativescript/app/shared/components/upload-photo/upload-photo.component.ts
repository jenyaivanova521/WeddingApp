import { Component, EventEmitter, Output, Input } from '@angular/core';

import { ModalService } from '~/shared/services';
import { UploadModal } from '~/shared/modals';

@Component({
	moduleId: module.id,
	selector: 'upload-photo',
	templateUrl: 'upload-photo.component.html',
	styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent {
	@Input() src: string;
	@Output() photoSelected: EventEmitter<any> = new EventEmitter();

	selectedUrl:string;
	constructor(
		private modalService: ModalService,
	) {
		
	}
	ngOnInit() {
		this.selectedUrl = this.src;		
	}

	public getPicture(): void {
		this.modalService.showModal(UploadModal, {}).then(
			(url: string) => {
				this.selectedUrl = url;
				this.photoSelected.next(url);
			}
		)
	}

}
