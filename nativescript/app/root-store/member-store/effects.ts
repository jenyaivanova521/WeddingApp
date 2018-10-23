import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';


import {
    MemberActionTypes,
} from './actions';
import { MemberService } from '~/shared/services/member.service';

@Injectable()
export class MemberEffects {

    constructor(
        private actions$: Actions,
        private memberService: MemberService,
    ) { }

}
