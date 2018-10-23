import { Component, OnInit, Input } from '@angular/core';
import * as objectToFormData from 'object-to-formdata';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'wedding-form-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.sass']
})
export class WeddingFormPartnerComponent implements OnInit {
    @Input() model: any;
    @Input() parentForm: any;
    @Input() parentFormData: FormData;
    @Input() partnerIndex: number;
    avatarUrl: string;
    isImageValid: boolean;

    constructor(
        public sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        let avatar = this.parentFormData.get('partners[' + this.partnerIndex + '][avatar]');
        if(avatar) {
            this.avatarUrl = (window.URL) ? window.URL.createObjectURL(avatar) : (window as any).webkitURL.createObjectURL(avatar);
        }
        this.isImageValid = true;
    }

}
