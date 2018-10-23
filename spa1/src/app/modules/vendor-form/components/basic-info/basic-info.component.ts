import { Component, OnInit, Input } from '@angular/core';
import * as objectToFormData from 'object-to-formdata';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../root-store/services/vendor.service';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'vendor-form-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.sass']
})
export class VendorFormBasicInfoComponent implements OnInit {
    @Input() mode: string;
    @Input() model: any;
    @Input() parentForm: any;
    @Input() parentFormData: FormData;
    activeProfile: any;
    contacts: any;
    avatarUrl: string;
    isImageValid: boolean;
    vendorCategories: any;

    constructor(
        public sanitizer: DomSanitizer,
        private vendorService: VendorService,
        private route: ActivatedRoute
    ) { }

    async ngOnInit() {
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.contacts = [{
            type: 'phone'
        }, {
            type: 'email'
        }];
        this.vendorCategories = await this.vendorService.getVendorCategories().toPromise().then(response => {
            return response.result;
        });
        const avatar = this.parentFormData.get('avatar');
        if (avatar) {
            this.avatarUrl = (window.URL) ? window.URL.createObjectURL(avatar) : (window as any).webkitURL.createObjectURL(avatar);
        }
        if(this.model.avatar) {
            this.avatarUrl = environment.cdnUrl + '/vendor/' + this.activeProfile.id + '/avatars/' + this.model.avatar.replace(/(\.[\w\d_-]+)$/i, '_sq$1')
        }
        this.isImageValid = true;
    }

    handleAddressChange(event) {
        this.model.address = event.formatted_address;
        this.model.lat = event.geometry.location.lat();
        this.model.lng = event.geometry.location.lng();
    }

}
