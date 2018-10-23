import { FlashMessagesService } from 'angular2-flash-messages';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mapTo, withLatestFrom, concatMapTo, tap } from 'rxjs/operators';
import { CookieService } from 'angular2-cookie/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../root-store';
import { MessageService } from '../services/message.service';

import {
    MessageActionTypes,
    UpdateConversationLastMessage,
    HandleNewMessage,
    AppendNewConversation,
    SetActiveConversationId
} from './actions';

@Injectable()
export class MessageEffects {

    constructor(
        private actions$: Actions,
        private store: Store<RootStoreState.State>,
        private _flashMessagesService: FlashMessagesService,
        private router: Router,
        private messageService: MessageService
    ) { }

    @Effect()
    handleNewMessage$ = this.actions$.pipe(
        ofType<HandleNewMessage>(MessageActionTypes.HANDLE_NEW_MESSAGE),
        withLatestFrom(this.store),
        exhaustMap(async ([action, store]) => {
            let message = action.payload.message;
            let conversation = store.message.conversations.filter(value => {
                if (value.id == message.conversationId) {
                    return value;
                }
            });
            if (conversation.length == 0) {
                let newConversation = await this.messageService
                    .getConversation(message.conversationId)
                    .toPromise()
                    .then(response => {
                        return response.result;
                    });
                return new AppendNewConversation({
                    conversation: newConversation,
                    self: message.self == 'false' ? false : true
                })
            } else {
                return new UpdateConversationLastMessage({
                    conversationId: message.conversationId,
                    lastMessage: {
                        text: message.shortText,
                        author: message.authorAccount.firstName + ' ' + message.authorAccount.lastName,
                        asVendor: message.asVendor == 'false' ? false : true,
                        createdAt: message.createdAt
                    }
                });
            }
        })
    );

}
