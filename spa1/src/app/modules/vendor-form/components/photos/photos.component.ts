import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../root-store/services/vendor.service';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'vendor-form-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.sass']
})
export class VendorFormPhotosComponent implements OnInit, OnDestroy {
    @Input() mode: string;
    @Output() setStep = new EventEmitter<number>();
    subActiveProfile: ISubscription;
    activeProfile: any;
    uploadedImages: any;
    images: any[] = [];
    imagesToRemove: string[] = [];
    submitted: boolean = false;
    error: any;

    constructor(
        private store: Store<RootStoreState.State>,
        public sanitizer: DomSanitizer,
        private vendorService: VendorService,
        private route: ActivatedRoute,
    ) { }

    async ngOnInit() {
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(async activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.uploadedImages = await this.vendorService.getVendorPhotos({ vendorId: this.activeProfile.id }).toPromise().then(response => {
            return response.result;
        });
    }

    ngOnDestroy() {
        this.subActiveProfile.unsubscribe();
    }

    public removeImage(removedPhoto: any): void {
        this.imagesToRemove.push(removedPhoto.id);
    }

    async submitPhotos() {
        if (!this.images.length && !this.imagesToRemove.length) {
            this.setStep.emit(3);
            return;
        }
        this.submitted = true;
        let photos = [];
        for (let i = 0; i < this.images.length; i++) {
            let image = this.images[i];
            photos.push(image.file);
        }
        let formData = objectToFormData({
            photos: photos.length ? photos : undefined,
            deletedPhotos: this.imagesToRemove.length ? this.imagesToRemove : undefined
        });
        await this.vendorService.addVendorPhotos({ formData, vendorId: this.activeProfile.id }).toPromise().then(response => {
            this.setStep.emit(3);
            this.submitted = false;
            this.error = null;
            this.imagesToRemove = [];
        }).catch(error => {
            this.submitted = false;
            this.error = error;
        });
    }

}
