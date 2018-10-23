import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import * as _ from 'lodash';

@Component({
	selector: 'list-select-modal',
	templateUrl: 'list-select.modal.html',
})
export class ListSelectModal {

	public items: Array<any>;
	public propertyToShow: string;
	private selectedItem: any;

	constructor(
		private params: ModalDialogParams,
		private changeDetector: ChangeDetectorRef,
	) {
		this.propertyToShow = this.params.context.propertyToShow;
		const items = this.params.context.items;

		if (this.propertyToShow) {
			this.items = _.map(items, (item: any) => {
				return item[this.propertyToShow];
			});
		} else {
			this.items = items;
		}

		this.changeDetector.markForCheck();
	}

	public selectedIndexChanged(event: any): void {
		if (this.propertyToShow) {
			this.selectedItem = this.params.context.items[event.value];
		} else {
			this.selectedItem = this.items[event.value];
		}
	}

	public close(): void {
		this.params.closeCallback(this.selectedItem);
	}

}