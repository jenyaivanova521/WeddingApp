import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { SioService } from '../../../../root-store/services/sio.service';
import { MessageService } from '../../../../root-store/services/message.service';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { delay } from "rxjs/operators";

import {
    RootStoreState,
    ProfileActions,
    ProfileSelectors,
    MessageSelectors,
    MessageActions
} from '../../../../root-store';

@Component({
    selector: 'messages-indicator',
    templateUrl: './messages-indicator.component.html',
    styleUrls: ['./messages-indicator.component.sass']
})
export class MessagesIndicatorComponent implements OnInit, OnDestroy {
    activeConversationId: string;
    activeProfile: any;
    activeProfileSubscription: ISubscription;
    infiniteScrollSubscription: ISubscription;
    unreadMessagesCount: Observable<number>;
    conversations: Observable<object[]>;
    loading: boolean;
    infiniteScroll: object;

    constructor(
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>,
        private messageService: MessageService
    ) { }

    async ngOnInit() {
        this.activeProfileSubscription = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.unreadMessagesCount = this.store.select(
            MessageSelectors.selectUnreadMessagesCount
        ).pipe(delay(0));
        this.conversations = this.store.select(
            MessageSelectors.selectConversations
        )
        this.infiniteScrollSubscription = this.store.select(
            MessageSelectors.selectInfiniteScroll
        ).subscribe(infiniteScroll => {
            this.infiniteScroll = infiniteScroll;
        });
    }

    ngOnDestroy() {
        this.activeProfileSubscription.unsubscribe();
        this.infiniteScrollSubscription.unsubscribe();
    }

    async getConversations(page) {
        page++;
        this.loading = true;
        await this.messageService.getConversations(page)
            .toPromise().then(response => {
                this.loading = false;
                this.store.dispatch(new MessageActions.AppendConversations({
                    conversations: response.result,
                    infiniteScroll: {
                        page: page,
                        disabled: response.result.length == 0 ? true : false
                    }
                }));
            });

    }

}
