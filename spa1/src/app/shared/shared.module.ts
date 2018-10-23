import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { OWL_DATE_TIME_FORMATS, OwlDateTimeModule } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { NgDatepickerModule } from 'ng2-datepicker';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CdnImageComponent } from './cdnImage/cdnImage.component';
import { ImageInputModule } from './image-input/image-input.module';
import { UploaderComponent } from './uploader/uploader.component';
import { FormProgressComponent } from './form-progress/form-progress.component';
import { RegisterFormModelDirective } from './directives/registerFormModel.directive';
import { RatingComponent } from './rating/rating.component';
import { TranslateModule } from '@ngx-translate/core';

export const MY_MOMENT_FORMATS = {
    parseInput: 'll h:mm',
    fullPickerInput: 'll h:mm',
    datePickerInput: 'll',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
    imports: [
        MatIconModule,
        CommonModule,
        NgDatepickerModule,
        MomentModule,
        GooglePlaceModule,
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
        ImageInputModule,
        TranslateModule
    ],
    declarations: [
        FormProgressComponent,
        CdnImageComponent,
        UploaderComponent,
        RegisterFormModelDirective,
        RatingComponent
    ],
    providers: [
        { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
    ],
    exports: [
        FormProgressComponent,
        CdnImageComponent,
        UploaderComponent,
        FormsModule,
        NgDatepickerModule,
        MomentModule,
        GooglePlaceModule,
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
        ImageInputModule,
        RegisterFormModelDirective,
        RatingComponent,
        TranslateModule
    ]
})

export class SharedModule { }
