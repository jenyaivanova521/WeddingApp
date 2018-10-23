import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";

import {
    MemberActionTypes,
} from './actions';
import { MemberService } from '../services/member.service';

@Injectable()
export class MemberEffects {

    constructor(
        private actions$: Actions,
        private memberService: MemberService,
        private _flashMessagesService: FlashMessagesService,
        private modalService: NgbModal
    ) { }

}
