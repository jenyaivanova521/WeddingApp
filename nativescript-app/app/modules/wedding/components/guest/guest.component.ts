import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '~/root-store';
import { ModalService } from '~/shared/services';
import { DeleteeditModal } from '~/modules/wedding/modals';

@Component({
	moduleId: module.id,
	selector: 'guest',
	templateUrl: 'guest.component.html',
	styleUrls: ['./guest.component.scss']
})
export class GuestComponent {

	@Input() guest: any;

	constructor(
		private modalService: ModalService,
		private store: Store<State>,
	) {		
	}
	ngOnInit() {
		console.log("Guest :");
		console.log(this.guest);
	}
	public delete(): void {
		// TODO delete
	}

	public update(guest: any, update): void {
		// TODO update
	}

	public delete_editModal(): void {
		this.modalService.showModal(DeleteeditModal, {})
			.then((response: any) => {
				// TODO add guest
			});
	}

}
