import { Component } from '@angular/core';
import { ProfileService } from '~/shared/services/profile.service';
import { MessageService } from '~/shared/services/message.service';
import { Store } from '@ngrx/store';
import { MessageActions, RootStoreState } from '~/root-store';

@Component({
	selector: 'logged-in-app',
	templateUrl: 'logged-in-app.component.html',
	styleUrls: ['./logged-in-app.component.scss']
})
export class LoggedInAppComponent {

	public showMenu: boolean = false;

	constructor(		
		private messageService: MessageService,
		private store: Store<RootStoreState.State>
	) {
	}
	ngOnInit(): void {		
		this.messageService.getUnreadMessagesCount()
            .toPromise().then(response => {
                this.store.dispatch(new MessageActions.SetUnreadMessagesCount({
                    unreadMessagesCount: response.result
                }));
            });
			this.messageService.getConversations(1)
            .toPromise().then(response => {
                this.store.dispatch(new MessageActions.AppendConversations({
                    conversations: response.result,
                    infiniteScroll: {
                        page: 1,
                        disabled: false
                    }
                }));
            });
	}
	public toggleMenu(): void {
		this.showMenu = !this.showMenu;
	}

}