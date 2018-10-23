import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { MemberEffects } from './effects';

import { reducer } from './reducers';

import { StoreModule } from '@ngrx/store';
import { MemberService } from '~/shared/services/member.service';


@NgModule({
    imports: [
        StoreModule.forFeature('member', reducer),
        EffectsModule.forFeature([MemberEffects]),
    ],
    declarations: [
    ],
    providers: [
        MemberService,
        MemberEffects
    ]
})
export class MemberStoreModule { }
