import { Component, EventEmitter, Output } from '@angular/core';
import { AddProductModal } from '~/shared/components';
import { ModalService } from '~/shared/services';

@Component({
	moduleId: module.id,
	selector: 'create-vendor-products',
	templateUrl: 'create-vendor-products.component.html',
	styleUrls: ['../../create-profile-base.component.scss', './create-vendor-products.component.scss']
})
export class CreateVendorProductsComponent {

	@Output() previousStepEvent: EventEmitter<any> = new EventEmitter();
	@Output() nextStepEvent: EventEmitter<any> =  new EventEmitter();

	public products: Array<any> = [
		{
			photo: '',
			name: 'Product name',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			price: '$80'
		},
		{
			photo: '',
			name: 'Product name',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			price: '$120',
		}
	];

	constructor(
		private modalService: ModalService
	) {
	}

	public previousStep(): void {
		this.previousStepEvent.next();
	}

	public nextStep(): void {
		this.nextStepEvent.next();
	}

	public openCreateModal(): void {
		this.modalService.showModal(AddProductModal, {}).then(
			(product: any) => {
				this.addProduct(product);
			}
		);
	}

	public addProduct(product: any): void {
		// TODO
	}

}
