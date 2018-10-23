import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ISubscription } from 'rxjs/Subscription';
import * as objectToFormData from 'object-to-formdata';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { WeddingService } from '../../root-store/services/wedding.service';
import { ProfileService } from '../../root-store/services/profile.service';

import {
    RootStoreState,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'wedding-form-module',
    templateUrl: './wedding-form.component.html',
    styleUrls: ['./wedding-form.component.sass']
})
export class WeddingFormComponent implements OnInit {
    activeProfile: CommonModels.Profile;
    activeStep: number;
    wedding: any;
    formData: FormData;
    submitted: boolean;
    error: any;

    constructor(
        private store: Store<RootStoreState.State>,
        private router: Router,
        private route: ActivatedRoute,
        private weddingService: WeddingService,
        private profileService: ProfileService
    ) { }

    ngOnInit() {
        this.activeStep = 1;
        this.activeProfile = this.route.snapshot.data.activeProfile;
        if(this.activeProfile && this.activeProfile.type == 'wedding') {
            this.router.navigate(['']);
        }
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
        this.formData = new FormData();
    }

    onSubmit(step) {
        let filesFormData = new FormData();
        filesFormData.set('avatar', this.formData.get('avatar')); // Hack
        filesFormData.set('partners[0][avatar]', this.formData.get('partners[0][avatar]')); // Hack
        filesFormData.set('partners[1][avatar]', this.formData.get('partners[1][avatar]')); // Hack
        this.wedding.events.forEach((event, i) => {
            this.wedding.events[i].date = event.date ? event.date.format() : null;
        });
        let formData = objectToFormData(
            this.wedding,
            { indices: true },
            filesFormData
        );
        this.submitted = true;
        this.weddingService.createWedding({ formData }).toPromise().then(async response => {
            this.submitted = false;
            this.error = null;
            await this.profileService.initProfiles();
            this.router.navigate(['']);
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
}
