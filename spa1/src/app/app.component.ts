import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment  from 'moment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app';
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use(navigator.language);
        moment.locale(navigator.language);
    }
}
