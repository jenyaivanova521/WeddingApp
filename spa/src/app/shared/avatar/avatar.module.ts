import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AvatarComponent } from './avatar.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AvatarComponent
    ],
    exports: [
        AvatarComponent
    ]
})
export class AvatarModule { }
