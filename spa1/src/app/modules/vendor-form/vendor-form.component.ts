import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISubscription } from 'rxjs/Subscription';
import * as objectToFormData from 'object-to-formdata';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { VendorService } from '../../root-store/services/vendor.service';
import { ProfileService } from '../../root-store/services/profile.service';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'vendor-form-module',
    templateUrl: './vendor-form.component.html',
    styleUrls: ['./vendor-form.component.sass']
})
export class VendorFormComponent implements OnInit, OnDestroy {
    activeProfile: CommonModels.Profile;
    subActiveProfile: ISubscription;
    activeStep: number = 1;
    vendor: any;
    basicInfoFormData: FormData;
    submitted: boolean;
    error: any;
    steps: string[];
    mode: string;

    constructor(
        private store: Store<RootStoreState.State>,
        private router: Router,
        private route: ActivatedRoute,
        private vendorService: VendorService,
        private profileService: ProfileService
    ) { }

    async ngOnInit() {
        this.steps = ['Vendor info', 'Photos', 'Products', 'Payment'];
        this.mode = 'create';
        this.basicInfoFormData = new FormData();
        this.vendor = {
            name: null,
            avatar: null,
            description: null,
            category: {
                id: null
            },
            rate: null,
            address: null,
            lat: null,
            lng: null,
            contacts: {
                phone: {
                    type: 'phone',
                    value: null,
                    isPublic: false
                },
                email: {
                    type: 'email',
                    value: null,
                    isPublic: false
                }
            }
        };

        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(async activeProfile => {
            this.activeProfile = activeProfile;
            if (activeProfile && activeProfile.type == 'vendor') {
                if (!activeProfile.isActive) {
                    if (this.activeStep == 1) {
                        this.activeStep = 4;
                    }
                } else {
                    this.mode = 'edit';
                    var index = this.steps.indexOf('Payment');
                    if (index !== -1) this.steps.splice(index, 1);
                }
                await this.vendorService.getVendor({ vendorId: this.activeProfile.id }).toPromise().then(response => {
                    for (var key in this.vendor) {
                        if (response.result[key] && key !== 'contacts') {
                            this.vendor[key] = response.result[key];
                        }
                    }
                    if (response.result.contacts.length) {
                        for (let i = 0; i < response.result.contacts.length; i++) {
                            let contact = response.result.contacts[i];
                            this.vendor.contacts[contact.type] = contact;
                        }
                    }
                });
            }
        });
    }

    ngOnDestroy() {
        this.subActiveProfile.unsubscribe();
    }

    async submitBasicInfo() {
        let filesFormData = new FormData();
        filesFormData.set('avatar', this.basicInfoFormData.get('avatar')); // Hack
        let vendorToSave = Object.assign({}, this.vendor);
        vendorToSave.contacts = Object.values(vendorToSave.contacts);
        let formData = objectToFormData(
            vendorToSave,
            { indices: true },
            filesFormData
        );
        this.submitted = true;
        let serviceMethod;
        if (this.activeProfile && this.activeProfile.type == 'vendor') {
            serviceMethod = this.vendorService.updateVendor({ formData, vendorId: this.activeProfile.id }).toPromise();
        } else {
            serviceMethod = this.vendorService.createVendor(formData).toPromise();
        }
        await serviceMethod.then(async response => {
            await this.profileService.initProfiles(response ? response.result : undefined);
            this.activeStep = 2;
            this.submitted = false;
            this.error = null;
            this.basicInfoFormData.delete('avatar');
        }).catch(error => {
            this.submitted = false;
            this.error = error;
        });
    }

    nextStep(step) {
        this.activeStep = step + 1;
    }

    prevStep(step) {
        this.activeStep = step - 1;
    }

    setStep(step) {
        this.activeStep = step;
    }
}
