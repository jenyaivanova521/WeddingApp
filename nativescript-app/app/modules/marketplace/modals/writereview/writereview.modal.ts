import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { screen } from 'tns-core-modules/platform';
import { CommonModels } from '~/root-store';
import { VendorService } from '~/shared/services/vendor.service';
import * as Toast from 'nativescript-toast';
import { Config } from '~/shared/configs';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';

@Component({
	selector: 'writereview',
	templateUrl: 'writereview.modal.html',
})
export class WritereviewModal implements OnInit{

	public width: any;
	

	private values: any = {
		firstName: '',
		lastName: '',
		side: '',
		role: '',
		email: '',
		sendRSVP: ''
	};

	activeProfile: CommonModels.Profile;
    vendorId: string;
    vendorReview: any;
    modalOptions: any;
    submitted: boolean = false;
	error: any;
	@Output() updateReviews = new EventEmitter<boolean>();
	
	constructor(
		private params: ModalDialogParams,		
        private vendorService: VendorService,
	) {
		this.width = screen.mainScreen.widthDIPs;
	}

	ngOnInit() {
		this.activeProfile = Config.activeProfile;
		this.vendorId = Config.marketplaceID;
        let initVendorReview = {
            id: null,
            text: "",
            rating: 0,
            authorWeddingId: this.activeProfile.id
        }
		this.vendorReview = { ...initVendorReview };
		console.log("Writereview modal ngOninit");
		console.log(this.vendorReview.rating);
    }

	public close(values?: any): void {
		this.params.closeCallback(values);
	}
	valueChanged(value){
		console.log(value);
		this.vendorReview.rating = value;
	}
	public onFieldChange(args: any, field: string): void {
		let textField = <TextField>args.object;
		this.vendorReview.text = textField.text;
	}

	public submit(): void {
		this.submitted = true;
        let filesFormData = new FormData();
        let vendorReviewToSave = Object.assign({}, this.vendorReview);
		let serviceMethod;
		console.log("submit");
		console.log(this.vendorReview);
        if (this.vendorReview.id) {

        } else {
            serviceMethod = this.vendorService.addVendorReview({
                vendorId: this.vendorId,
                vendorReview: this.vendorReview
            }).toPromise();
        }
        serviceMethod.then(response => {
			console.log("add review");
			console.log(response);
			this.submitted = false;
			Toast.makeText(`Review ${this.vendorReview.id ? 'updated' : 'added'} successfully`, "long").show();
			// this.flashMessagesService.show(`Review ${this.vendorReview.id ? 'updated' : 'added'} successfully`, { cssClass: 'alert-success', timeout: 3000 });
			Config.vendorReview = this.vendorReview;
            this.updateReviews.emit(true);
            this.close(this.values);
        }).catch(error => {
			console.log("add review error");
			console.log(error);
            this.submitted = false;
            this.error = error.error;
		});
		
		this.close(this.values);
	}
	setValue(){

	}
}