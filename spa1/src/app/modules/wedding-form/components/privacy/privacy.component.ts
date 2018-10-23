import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ISubscription } from "rxjs/Subscription";
import { Store } from '@ngrx/store';
import { DatepickerOptions, NgDatepickerComponent } from 'ng2-datepicker';

@Component({
    selector: 'wedding-form-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.sass']
})
export class WeddingFormPrivacyComponent implements OnInit {
    @Input() model: any;
    @Input() parentForm: any;
    privacySettings: any;
    activeSetting: string;

    constructor() { }

    ngOnInit() {
        this.privacySettings = [{
            title: 'Private profile',
            name: 'private',
            description: 'Integer nec tincidunt ex, non rhoncus sem. Quisque porttitor blandit.',
            icon: 'private'
        }, {
            title: 'Followers only',
            name: 'followers',
            description: 'Fusce sed lacus diam. Suspendisse nibh sapien, sagittis in nisi sit amet.',
            icon: 'followers'
        }, {
            title: 'Registered users only',
            name: 'registered',
            description: 'Maecenas imperdiet quam a velit sodales maximus. Suspendisse.',
            icon: 'registered'
        }, {
            title: 'Public profile',
            name: 'public',
            description: 'Etiam mollis purus non neque luctus pharetra. Orci varius natoque.',
            icon: 'users'
        }];
    }

    setPrivacySetting(setting) {
        this.model.privacySetting = setting;
    }

}
