import { Injectable, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular';

@Injectable()
export class ModalService {

	private parentRef: ViewContainerRef;

	constructor(
		private modal: ModalDialogService
	) { }

	public setContainerRef(element: ViewContainerRef): void {
		this.parentRef = element;
	}

	public showModal(component: any, options: ModalDialogOptions): Promise<any> {
		options.viewContainerRef = this.parentRef;
		return this.modal.showModal(component, options);
	}

}
