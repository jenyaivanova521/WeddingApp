import {
	Component,
	EventEmitter,
	Input,
	Output,
	OnInit
} from '@angular/core';

import { ListSelectModal } from '~/shared/modals';
import { ModalService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'select-input',
	templateUrl: 'select-input.component.html',
})
export class SelectInputComponent implements OnInit {

	@Input() items: Array<any>;
	@Input() hint: string = '';
	@Input() propertyToShow: string;
	@Input() selectedElement: string = '';
	@Output() itemSelected: EventEmitter<any> = new EventEmitter();

	constructor(
		private modalService: ModalService,
	) {

	}
	ngOnInit(): void {
		console.log("select-input ngOnInit: ");
		console.log("selectedElement: ", this.selectedElement);
	}
	public openSelectModal(): void {
		this.modalService.showModal(ListSelectModal,
			{context: {
				items: this.items,
				propertyToShow: this.propertyToShow
			}, fullscreen: true
			})
			.then(
				(result) => {
					this.selectedElement = result;
					this.itemSelected.next(result);
				}
			)
	}

}
