import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { ModalService, AuthService } from '~/shared/services';
import { UploadModal } from '~/shared/modals';
import { ISubscription } from 'rxjs/Subscription';
import { VendorService } from '~/shared/services/vendor.service';
import { ProfileSelectors, RootStoreState } from '~/root-store';
import { Store } from '@ngrx/store';
import { LoadingIndicator } from 'nativescript-loading-indicator';
import * as Toast from 'nativescript-toast';
import * as bghttp from 'nativescript-background-http';
import { API_URL } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'create-vendor-photos',
	templateUrl: 'create-vendor-photos.component.html',
	styleUrls: ['../../create-profile-base.component.scss', './create-vendor-photos.component.scss']
})
export class CreateVendorPhotosComponent implements OnInit {

	@Output() nextStepEvent: EventEmitter<any> =  new EventEmitter();
	@Output() previousStepEvent: EventEmitter<any> = new EventEmitter();
	@Output() photoSelected: EventEmitter<any> = new EventEmitter();
	subActiveProfile: ISubscription;
	activeProfile;
	uploadedImages;
	photos= [];
	shownPhotosLength = 6;
	indicator;
	constructor(
		private modalService: ModalService,
		private vendorService: VendorService,
		private store: Store<RootStoreState.State>,
		private authService: AuthService,
	) {
	}
	ngOnInit() {        
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(async activeProfile => {
            this.activeProfile = activeProfile;
        });
		this.uploadedImages = this.vendorService.getVendorPhotos({ vendorId: this.activeProfile.id }).toPromise()
		.then(response => {
			console.log("vendor photos: ", response);
			this.photos = response.result;
            return response.result;
		});
		this.indicator = new LoadingIndicator();
    }
	public values: any = {
		uploadphoto:'',
	};

	public nextStep(): void {
		this.nextStepEvent.next();
		this.submitPhoto();
	}

	public previousStep(): void {
		this.previousStepEvent.next();
	}

	public setValue(valueName: string, element: any, useParam?: string): void {
		this.values[valueName] = useParam ? element[useParam] : element;
	}

	public getPicture(): void {
		this.modalService.showModal(UploadModal, {}).then(
			(url: string) => {
				// this.photoSelected.next(url);
				this.photos.push(url);
			}
		)
	}
	addPhoto(event){
		console.log(event);
	}

    public submitPhoto(): void {
		this.indicator.show({
			message: 'Loading...'
			});
		let session = bghttp.session('post');
		let params = []; 
		
		for( var i = 0; i < this.photos.length; i++ ) {
			const param = {
				name: "photos[]",
				fileName: `${this.photos[i]}`,
				mimeType: 'image/jpeg',				
			};
			params.push(param);
		}
		
		const url = API_URL + '/vendors/' + this.activeProfile.id + '/photos';

		let request = {
			url: url,
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/form-data',
				'Authorization': 'Bearer ' + this.authService.getToken(),
			},
			description:"Vendor Photo Upload"
		};
		let task: bghttp.Task;
		console.log(params);
		task = session.multipartUpload(params, request);
		task.on('responded', (response) => this.onCompleteUpload(response));
		task.on('error',(error) => this.onUploadError(error))
			
    }       
    
    public onCompleteUpload(response): void {
        // TODO redirect to app and get weddings
        console.log("avatar updated")
        Toast.makeText("Your profile picture updated", "long").show();
        this.indicator.hide();
        // this.changeDetector.markForCheck();
	}

	public onUploadError(error): void {
        console.log(error);
        Toast.makeText("Your profile picture upload failed", "long").show();
        this.indicator.hide();
        // this.changeDetector.markForCheck();
    }
    
}
