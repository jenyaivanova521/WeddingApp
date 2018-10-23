import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './effects';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MemberService } from '../services/member.service';
import { reducer } from './reducers';

import { StoreModule } from '@ngrx/store';

import { ConfirmDialogModule } from "../../shared/confirm-dialog/confirm-dialog.module";

@NgModule({
    imports: [
        StoreModule.forFeature('member', reducer),
        EffectsModule.forFeature([MemberEffects]),
        NgbModule.forRoot(),
        ConfirmDialogModule
    ],
    declarations: [
    ],
    providers: [
        MemberService,
        MemberEffects
    ]
})
export class MemberStoreModule { }
