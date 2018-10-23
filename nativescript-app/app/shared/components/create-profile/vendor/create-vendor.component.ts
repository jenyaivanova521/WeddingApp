import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { screen } from 'tns-core-modules/platform';
import { TOP_BAR_HEIGHT, API_URL } from '~/shared/configs';
import { LoadingIndicator } from 'nativescript-loading-indicator';
import { VendorService } from '~/shared/services/vendor.service';
import { ProfileService } from '~/shared/services/profile.service';
import { CommonModels, ProfileSelectors, RootStoreState } from '~/root-store';
import { ISubscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as bghttp from 'nativescript-background-http';
import { AuthService, DialogsService } from '~/shared/services';
import { DialogType } from '~/shared/types/enum';
import * as _ from 'lodash';

@Component({
	selector: 'create-vendor',
	templateUrl: 'create-vendor.component.html',
	styleUrls: ['../create-profile-base.component.scss']
})
export class CreateVendorComponent implements OnInit {

	public screenHeight;
	public height;
	private indicator: LoadingIndicator;

	public activeStep: number = 0;

	public steps: Array<any> = [
		{
			name: 'Vendor info',
			done: false,
		},
		{
			name: 'Photos',
			done: false,
		},
		{
			name: 'Products',
			done: false,
		},
		{
			name: 'Payment',
			done: false,
		}
	];
	private fields;
	activeProfile: CommonModels.Profile;
	subActiveProfile: ISubscription;
	
	constructor(
		private store: Store<RootStoreState.State>,
		private changeDetector: ChangeDetectorRef,
		private vendorService: VendorService,
		private profileService: ProfileService,
		private authService: AuthService,
		private dialogService: DialogsService,
	) {
		this.screenHeight = screen.mainScreen.heightDIPs - TOP_BAR_HEIGHT;
		this.height = this.screenHeight - 230;
		this.indicator = new LoadingIndicator();
	}
	ngOnInit() {
		this.activeStep = 0; 
		this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(async activeProfile => {
            this.activeProfile = activeProfile;
            if (activeProfile && activeProfile.type == 'vendor') {
				this.activeStep = 1;
			}
		});
	}
	public nextStep(values): void {
		if (this.activeStep === 0) {
			this.fields = Object.assign({}, this.fields, values);
			this.submitBasicInfo();
		}
		this.activeStep++;
		this.changeDetector.markForCheck();
	}
	submitBasicInfo() {
        
        this.indicator.show({
			message: 'Saving...'
		  });
                
		let session = bghttp.session('create-vendor-profile');
		let params = [];
		
		// TODO move this to service and make function for converting objects to formData
		_.forEach(this.fields, (value, key) => {
			// console.log(value, key);
			if (key === 'avatar' && value) {
				const param = {
					name: key,
					mimeType: 'image/jpeg',
					fileName: value,
				};
				params.push(param);
			} else if(key == "category" ){
				let param = {
					value: `${value.id}`,
					name: "category[id]"
				};
				params.push(param);
			}
			else if(key=="contacts"){				
				if(value.phone.value){
					let param = {
						value: `${value.phone.value}`,
						name: "contacts[phone][value]"
					};
					params.push(param);
				}
				if(value.phone.isPublic){
					let param = {
						value: `${value.phone.isPublic}`,
						name: "contacts[phone][isPublic]"
					};
					params.push(param);
				}
				if(value.email.value){
					let param = {
						value: `${value.email.value}`,
						name: "contacts[email][value]"
					};
					params.push(param);
				}
				if(value.email.isPublic){
					let param = {
						value: `${value.email.isPublic}`,
						name: "contacts[email][isPublic]"
					};
					params.push(param);
				}
			}
			else {
				if (value) {
					let param = {
						value: `${value}`,
						name: key
					};
					params.push(param);
				}
			}
		});
		var url = API_URL + '/vendors';
		var request;
		if (this.activeProfile && this.activeProfile.type == 'vendor') {
			url += this.activeProfile.id;
			request = {
				url: url,
				method: 'PATCH',
				headers: {
					'Authorization': 'Bearer ' + this.authService.getToken(),
				},
				description: 'Create Couple Account'
			};
		}
		else {
			request = {
				url: url,
				method: 'POST',
				headers: {
					'Authorization': 'Bearer ' + this.authService.getToken(),
				},
				description: 'Create Couple Account'
			};
		}
		let task: bghttp.Task;		
		for(var i = 0; i < params.length; i++){
			console.log(params[i]);
		}
		console.log("mmmmmmmmmmmmmmmm");
		task = session.multipartUpload(params, request); //TODO: needed to replace with new module
		task.on('complete', (response)=> this.onCompleteUpload(response));
		task.on('error', (error)=> this.onUploadError(error))
	}

	public onCompleteUpload(response): void {
		console.log(response);
		this.indicator.hide();
		this.profileService.initProfiles(response ? response.result : undefined);
		this.activeStep = 1;
		this.indicator.hide();
		this.fields = null;
		
	}

	public onUploadError(error): void {
		console.log("upload error: ", error);
		this.indicator.hide();
		this.dialogService.showDialog({
			type: DialogType.Alert,
			message: 'Vendor creation failed'
		})
	}

	public previousStep(): void {
		this.activeStep--;
		this.changeDetector.markForCheck();
	}

}