import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as bghttp from 'nativescript-background-http';
import { screen } from 'tns-core-modules/platform';
import * as _ from 'lodash';

import { PrivacySettingEnum, Wedding } from '~/root-store/wedding-store/models';
import { API_URL, TOP_BAR_HEIGHT } from '~/shared/configs';
import { AuthService, DialogsService, WeddingService } from '~/shared/services';
import { DialogType } from '~/shared/types/enum';
import { RouterExtensions } from 'nativescript-angular/router';
import { Store } from '@ngrx/store';
import { RootStoreState, CommonModels } from '~/root-store';
import { ProfileService } from '~/shared/services/profile.service';
import { LoadingIndicator } from 'nativescript-loading-indicator';

@Component({
	moduleId: module.id,
	selector: 'create-couple',
	templateUrl: 'create-couple.component.html',
	styleUrls: ['../create-profile-base.component.scss'],
})
export class CreateCoupleComponent implements OnInit {
    wedding: any;
    formData: FormData;
    submitted: boolean;
	error: any;
	
	public screenHeight;
	public height;
	private indicator: LoadingIndicator;

	public activeStep: number = 0;

	public steps: Array<any> = [
		{
			name: 'Profile info',
			done: false,
		},
		{
			name: 'Partner 1',
			done: false,
		},
		{
			name: 'Partner 2',
			done: false,
		},
		{
			name: 'Privacy settings',
			done: false,
		}
	];

	private fields: Wedding = {
		description: '',
		privacySetting: PrivacySettingEnum.Public,
		avatar: '',
		partners: []
	};

	constructor(
		private changeDetector: ChangeDetectorRef,
		private authService: AuthService,
		private dialogService: DialogsService,
		private routerExtensions: RouterExtensions,
		private store: Store<RootStoreState.State>, 
        private weddingService: WeddingService,
        private profileService: ProfileService
	) {
		console.log("---create-couple---")
		this.screenHeight = screen.mainScreen.heightDIPs - TOP_BAR_HEIGHT;
		this.height = this.screenHeight - 230;
		this.indicator = new LoadingIndicator();
	}
	ngOnInit() {
        this.activeStep = 0; 
        this.submitted = false;
        this.wedding = {
            description: null,
            privacySetting: null,
            events: [{
                type: 'ceremony',
                date: null
            }, {
                type: 'reception',
                date: null
            }],
            partners: [{
                firstName: null,
                lastName: null,
                role: null
            }, {
                firstName: null,
                lastName: null,
                role: null
            }]
        };
    }
	public nextStep(values: any): void {
		if (this.activeStep === 0) {
			this.fields = Object.assign({}, this.fields, values);
		} else if (this.activeStep === 1 || this.activeStep === 2) {
			this.fields.partners.push(values);
		} else {
			this.fields.privacySetting = values;
			this.uploadForm(); //recreate in wedding service
		}
		
		if (this.activeStep !== 3) {
			this.activeStep++;
		}
		this.changeDetector.markForCheck();
	}

	private uploadForm(): void {
		console.log("creating profile");
		this.indicator.show({
			message: 'Creating Couple Profile...'
		  });
		let session = bghttp.session('create-profile');
		let params = [];
		
		// TODO move this to service and make function for converting objects to formData
		_.forEach(this.fields, (value, key) => {
			// console.log(value, key);
			if (key === 'avatar' && value) {
				const param = {
					name: key,
					fileName: `${value}`,
					mimeType: 'image/jpeg'					
				};
				params.push(param);
			} else if (key === 'events' || key === 'partners') {
				_.forEach(value, (item, iterator) => {
					_.forEach(item, (itemValue, itemKey) => {
						if (itemValue) {
							let param;
							const paramName = `${key}[${iterator}][${itemKey}]`;
							if (itemKey !== 'avatar') {
								param = {
									value: itemValue,
									name: paramName
								};
							} else {
								param = {
									name: paramName,
									filename: `${itemValue}`,
									mimeType: 'image/jpeg',
								};
							}
							params.push(param);
						}
					})
				});
			} else {
				if (value) {
					let param = {
						value: `${value}`,
						name: key
					};
					params.push(param);
				}
			}
		});

		const url = API_URL + '/weddings';

		let request = {
			url: url,
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + this.authService.getToken(),
			},
			description: 'Create Couple Account'
		};
		let task: bghttp.Task;		
		for(var i = 0; i < params.length; i++){
			console.log(params[i]);
		}
		console.log("mmmmmmmmmmmmmmmm");
		task = session.multipartUpload(params, request); //TODO: needed to replace with new module
		task.on('complete', (response)=> this.onCompleteUpload(response));
		task.on('error', (error)=> this.onUploadError(error))
	}

	public previousStep(): void {
		this.activeStep--;
		this.changeDetector.markForCheck();
	}

	public onCompleteUpload(response): void {
		console.log(response);
		this.indicator.hide();
		// TODO redirect to app and get weddings
		this.dialogService.showDialog({
			type: DialogType.Success,
			message: 'Wedding created'
		})
		this.profileService.initProfiles().then(()=>{
			this.routerExtensions.navigate(['/app', 'social-feed']);
		});
	}

	public onUploadError(error): void {
		console.log("upload error: ", error);
		this.indicator.hide();
		this.dialogService.showDialog({
			type: DialogType.Alert,
			message: 'Wedding creation failed'
		})
	}

}



