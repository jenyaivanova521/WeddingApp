import { Component, OnInit, Input } from '@angular/core';
import * as objectToFormData from 'object-to-formdata';
import { DomSanitizer } from '@angular/platform-browser';
import { DatepickerOptions, NgDatepickerComponent } from 'ng2-datepicker';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'wedding-form-basic-info',
    templateUrl: './basic-info.component.html',
    styleUrls: ['./basic-info.component.sass']
})
export class WeddingFormBasicInfoComponent implements OnInit {
    @Input() model: any;
    @Input() parentForm: any;
    @Input() parentFormData: FormData;
    events: any;
    avatarUrl: string;
    isImageValid: boolean;
    minDate: Date;

    dpOptions: DatepickerOptions = {
        minDate: new Date(Date.now()),
        barTitleFormat: 'MMMM YYYY',
        placeholder: 'Click to select a date',
        addClass: 'ngx-datepicker-input-custom',
        useEmptyBarTitle: false
    };

    constructor(
        public sanitizer: DomSanitizer,
        private translate: TranslateService
    ) { }

    ngOnInit() {
        this.events = [{
            name: 'Wedding'
        }, {
            name: 'Reception'
        }];
        const avatar = this.parentFormData.get('avatar');
        if (avatar) {
            this.avatarUrl = (window.URL) ? window.URL.createObjectURL(avatar) : (window as any).webkitURL.createObjectURL(avatar);
        }
        this.isImageValid = true;
        this.minDate = new Date();
        this.translate.get('Click to select a date').subscribe(res => {
            this.dpOptions.placeholder = res;
        })
    }

    handleAddressChange(event, eventIndex) {
        this.model.events[eventIndex] = {
            ...this.model.events[eventIndex],
            name: event.name,
            website: event.website,
            lat: event.geometry.location.lat(),
            lng: event.geometry.location.lng(),
            address: event.formatted_address
        }
    }

}
