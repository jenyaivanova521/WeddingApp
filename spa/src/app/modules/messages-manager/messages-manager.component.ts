import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { SioService } from '../../root-store/services/sio.service';
import { MessageService } from '../../root-store/services/message.service';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

import {
    RootStoreState,
    ProfileActions,
    ProfileSelectors,
    MessageActions,
    MessageSelectors
} from '../../root-store';

@Component({
    selector: 'app-messages-manager',
    templateUrl: './messages-manager.component.html',
    styleUrls: ['./messages-manager.component.sass']
})
export class MessagesManagerComponent implements OnInit, OnDestroy {
    activeProfile: any;
    activeProfileSubscription: ISubscription;
    routeSubscription: ISubscription;
    sioSubscription: ISubscription;
    conversationsSubscription: ISubscription;
    infiniteScrollSubscription: ISubscription;
    conversations: any[] = [];
    loading: boolean = false;
    infiniteScroll: object;
    activeConversationIdSubscription: ISubscription;
    activeConversationId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<RootStoreState.State>,
        private messageService: MessageService,
        private sioService: SioService
    ) { }

    async ngOnInit() {
        this.conversations = [];
        this.activeProfileSubscription = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.infiniteScrollSubscription = this.store.select(
            MessageSelectors.selectInfiniteScroll
        ).subscribe(infiniteScroll => {
            this.infiniteScroll = infiniteScroll;
        });
        this.conversationsSubscription = this.store.select(
            MessageSelectors.selectConversations
        ).subscribe(conversations => {
            this.conversations = conversations;
            if (!this.route.firstChild && this.conversations.length) {
                this.router.navigate(['messages', this.conversations[0].id]);
            }
        });
        this.activeConversationIdSubscription = this.store.select(
            MessageSelectors.selectActiveConversationId
        ).subscribe(activeConversationId => {
            setTimeout(() => {
                this.activeConversationId = activeConversationId;
            });
        });
    }

    ngOnDestroy() {
        this.activeProfileSubscription.unsubscribe();
        this.activeConversationIdSubscription.unsubscribe();
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
