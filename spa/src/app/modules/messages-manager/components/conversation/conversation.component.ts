import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { SioService } from '../../../../root-store/services/sio.service';
import { MessageService } from '../../../../root-store/services/message.service';
import { Store } from '@ngrx/store';

import {
    RootStoreState,
    ProfileActions,
    ProfileSelectors,
    AuthSelectors,
    MessageActions,
    MessageSelectors
} from '../../../../root-store';

@Component({
    selector: 'app-messages-conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.sass']
})
export class MessagesConversationComponent implements OnInit, OnDestroy {
    @ViewChild('textarea') textarea: any;
    @ViewChild('messagesContainer') messagesContainer: any;
    activeProfile: any;
    activeProfileSub: ISubscription;
    routeSubscription: ISubscription;
    authInfoSub: ISubscription;
    sioSubscription: ISubscription;
    messages: object[] = [];
    loading: boolean = false;
    page: number = 0;
    infiniteScrollDisabled: boolean = false;
    activeConversationIdSubscription: ISubscription;
    activeConversationId: string;
    conversationDetails: any;
    authInfo: any;
    messageFormData: {
        text: string;
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<RootStoreState.State>,
        private messageService: MessageService,
        private sioService: SioService
    ) { }

    async ngOnInit() {
        this.activeProfileSub = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.messageFormData = {
            text: null
        };
        this.routeSubscription = this.route.params.subscribe(async (params) => {
            this.store.dispatch(new MessageActions.SetActiveConversationId({
                activeConversationId: params.conversationId
            }));
            this.messageService.markAsRead(params.conversationId).toPromise();
        });
        this.activeConversationIdSubscription = this.store.select(
            MessageSelectors.selectActiveConversationId
        ).subscribe(async activeConversationId => {
            this.activeConversationId = activeConversationId;
            this.messageService.getConversation(this.activeConversationId)
                .toPromise().then(response => {
                    this.conversationDetails = response.result;
                })
            this.getMessages(true);
        });
        this.sioSubscription = this.sioService.getMessages().subscribe((message: any) => {
            if (message.conversationId == this.activeConversationId) {
                message.asVendor = message.asVendor == 'false' ? false : true;
                this.messages.push(message);
                this.messageService.markAsRead(this.activeConversationId).toPromise();
            }
        });
        this.authInfoSub = this.store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe(authInfo => {
            this.authInfo = authInfo;
        });
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.authInfoSub.unsubscribe();
        this.activeProfileSub.unsubscribe();
        this.sioSubscription.unsubscribe();
        this.activeConversationIdSubscription.unsubscribe();
        this.store.dispatch(new MessageActions.SetActiveConversationId({
            activeConversationId: null
        }));
    }

    scrollToBottom() {
        try {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }

    async getMessages(init = false) {
        if(init) {
            this.page = 1;
            this.infiniteScrollDisabled = false;
            this.messages = [];
        } else {
            this.page++;
        }
        await this.messageService.getMessages({
            conversationId: this.activeConversationId, page: this.page
        }).toPromise().then(response => {
            this.loading = false;
            this.messages = response.result.concat(this.messages);
            if(response.result.length < 20) {
                this.infiniteScrollDisabled = true;
            }
        }).catch(error => {
            this.loading = false;
        });
    }

    async submitMessage() {
        let asVendor = this.authInfo.account.id == this.conversationDetails.vendor.accountId ? true : false;
        let createdAt = new Date();
        await this.messageService.sendMessage({
            weddingId: this.conversationDetails.wedding.id,
            vendorId: this.conversationDetails.vendor.id,
            text: this.messageFormData.text,
            asVendor: asVendor
        }).toPromise().then(response => {
            this.textarea.nativeElement.style.height = 50 + 'px';
            this.messageFormData.text = null;
            this.scrollToBottom();
        }).catch(error => {
            this.textarea.nativeElement.style.height = 50 + 'px';
        })
    }

}
