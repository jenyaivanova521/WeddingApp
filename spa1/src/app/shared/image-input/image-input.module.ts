import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageInputComponent } from './image-input.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        ImageInputComponent
    ],
    exports: [
        ImageInputComponent
    ]
})
export class ImageInputModule { }
