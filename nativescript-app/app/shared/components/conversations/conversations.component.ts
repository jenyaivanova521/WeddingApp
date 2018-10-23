import { Component, OnDestroy, OnInit } from '@angular/core';
import { screen } from 'tns-core-modules/platform';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { RootStoreState, ProfileSelectors, MessageSelectors, MessageActions } from '~/root-store';
import { MessageService } from '~/shared/services/message.service';
import { delay } from 'rxjs/operators';

@Component({
	moduleId: module.id,
	selector: 'conversations',
	templateUrl: 'conversations.component.html',
	styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit, OnDestroy{

	public containerHeight;
	activeConversationId: string;
    activeProfile: any;
    activeProfileSubscription: ISubscription;
    infiniteScrollSubscription: ISubscription;
    // unreadMessagesCount: Observable<number>;
    conversations = [];
    loading: boolean;
	infiniteScroll: object;
	
	constructor(
		private store: Store<RootStoreState.State>,
        private messageService: MessageService) {
		this.containerHeight = screen.mainScreen.heightDIPs - 220; // Topbar height + some margin (bottom clear all bar)
	}
	ngOnInit() {
        this.activeProfileSubscription = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
        });
        // this.unreadMessagesCount = this.store.select(
        //     MessageSelectors.selectUnreadMessagesCount
        // ).pipe(delay(0));
        this.store.select(
            MessageSelectors.selectConversations
        ).subscribe(conv => {
			this.conversations = conv;
			console.log("converations: ");
			console.log(conv);
		})
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

    getConversations(page) {
        page++;
        this.loading = true;
        this.messageService.getConversations(page)
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
