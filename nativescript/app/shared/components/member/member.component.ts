import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '~/root-store';
import { ModalService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'member',
	templateUrl: 'member.component.html',
	styleUrls: ['./member.component.scss']
})
export class MemberComponent {

	@Input() member: any;

	constructor(
		private modalService: ModalService,
		private store: Store<State>,
	) {

	}

	public delete(): void {
		// TODO delete
	}

	public update(member: any, update): void {
		// TODO update
	}

}
