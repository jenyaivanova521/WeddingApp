import { Component, OnInit, OnDestroy, Output, Input, ViewChild, EventEmitter, TemplateRef } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../root-store/services/vendor.service';
import { ConfirmDialogComponent } from "../../../../shared/confirm-dialog/confirm-dialog.component";
import { environment } from '../../../../../environments/environment';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'vendor-form-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.sass']
})
export class VendorFormProductsComponent implements OnInit, OnDestroy {
    @ViewChild("vendorProductModal") private modalContent: TemplateRef<any>;
    @Input() mode: string;
    @Output() setStep = new EventEmitter<number>();
    productPhotoUrl: string;
    productFormData: FormData;
    isImageValid: boolean = true;
    modalOptions: any;
    modalRef: NgbModalRef;
    activeModal: NgbActiveModal;
    subActiveProfile: ISubscription;
    activeProfile: any;
    products: object[] = [];
    vendorProductUnits: object[] = [];
    currencies: object[] = [];
    product: any;
    submitted: boolean = false;
    error: any;

    constructor(
        private store: Store<RootStoreState.State>,
        public sanitizer: DomSanitizer,
        private modalService: NgbModal,
        private vendorService: VendorService,
        private route: ActivatedRoute,
        private flashMessagesService: FlashMessagesService
    ) { }

    private async getProducts() {
        this.products = await this.vendorService.getVendorProducts({ vendorId: this.activeProfile.id }).toPromise().then(response => {
            return response.result;
        });
    }

    async ngOnInit() {
        this.productFormData = new FormData();
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(async activeProfile => {
            this.activeProfile = activeProfile;
        });
        await this.getProducts();
        this.vendorProductUnits = await this.vendorService.getVendorProductUnits().toPromise().then(response => {
            return response.result;
        });
        this.currencies = await this.vendorService.getCurrencies().toPromise().then(response => {
            return response.result;
        });
    }

    ngOnDestroy() {
        this.subActiveProfile.unsubscribe();
    }

    async openVendorProductModal(options) {
        let initProduct = {
            id: null,
            name: null,
            description: null,
            price: null,
            currency: {
                id: null,
                name: null
            },
            unit: {
                id: null,
                name: null
            }
        }
        this.product = { ...initProduct };
        if (options.vendorProductId) {
            await this.vendorService.getVendorProduct({
                vendorId: this.activeProfile.id,
                vendorProductId: options.vendorProductId
            }).toPromise().then(response => {
                Object.keys(this.product).forEach(key => {
                    if(response.result[key]) {
                        this.product[key] = response.result[key];
                    }
                })
                if (response.result.avatar) {
                    this.productPhotoUrl = environment.cdnUrl + '/vendor/' + this.activeProfile.id + '/avatars/' + response.result.avatar.replace(/(\.[\w\d_-]+)$/i, '_sq$1')
                }
            });

        }
        this.modalOptions = options;
        this.modalRef = this.modalService.open(this.modalContent, { size: 'lg' });
        this.modalRef.result.then((result) => {

        }, (reason) => {

        });
    }

    async submitVendorProductForm() {
        this.submitted = true;
        let filesFormData = new FormData();
        filesFormData.set('avatar', this.productFormData.get('avatar')); // Hack
        let productToSave = Object.assign({}, this.product);
        let formData = objectToFormData(
            productToSave,
            { indices: true },
            filesFormData
        );
        let serviceMethod;
        if (this.product.id) {
            serviceMethod = this.vendorService.updateVendorProduct({ formData, vendorId: this.activeProfile.id, vendorProductId: this.product.id }).toPromise();
        } else {
            serviceMethod = this.vendorService.addVendorProduct({
                formData,
                vendorId: this.activeProfile.id
            }).toPromise();
        }
        await serviceMethod.then(response => {
            this.getProducts();
            this.submitted = false;
            this.flashMessagesService.show(`Product ${this.product.id ? 'updated' : 'added'} successfully`, { cssClass: 'alert-success', timeout: 3000 });
            this.modalRef.close();
        }).catch(error => {
            this.submitted = false;
            this.error = error.error;
        });
    }

    openDeleteVendorProductModal(vendorProduct) {
        let modal = this.modalService.open(ConfirmDialogComponent, { backdrop: 'static' });
        modal.componentInstance['data'] = {
            title: 'Are you sure?',
            text: 'Delete product',
            confirm: async () => {
                await this.vendorService.deleteVendorProduct({
                    vendorId: vendorProduct.vendorId,
                    vendorProductId: vendorProduct.id
                }).toPromise().then(response => {
                    this.getProducts();
                    this.flashMessagesService.show('Product deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
                }).catch(error => {});
            }
        };
    }

}
