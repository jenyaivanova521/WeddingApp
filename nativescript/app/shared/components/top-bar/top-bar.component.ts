import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { Store } from '@ngrx/store';
import { RootStoreState, MessageSelectors } from '~/root-store';
import { NotificationService } from '~/shared/services/notification.service';
import { Config } from '~/shared/configs';

@Component({
	selector: 'top-bar',
	templateUrl: 'top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent  implements OnInit{

	@Output() toggleMenuEvent: EventEmitter<any> = new EventEmitter();

	private conversationsShown: boolean = false;
	private notificationsShown: boolean = false;
	private previousUrl: string ='';
	unreadMessagesCount = 0;
	notificationsCount: number = 0;
	constructor(
		private store: Store<RootStoreState.State>,
		private routerExt: RouterExtensions,
		private notificationService: NotificationService
	) {
		// this.routerExt.router.events.subscribe((s) => {
		// 	// TODO add conversation to the if after its done
		// 	if (s instanceof NavigationEnd && (s.url !== '/conversations' && s.url !== '/notifications')) {
		// 		this.previousUrl = s.url;
		// 	}
		// })
	}
	ngOnInit() {
        this.getMessageNumber();
		this.getNotificationNumber();
		setInterval(() => {
			this.getMessageNumber();
			this.getNotificationNumber();
		}, 10000);
	}
	getMessageNumber(){
		this.store.select(
            MessageSelectors.selectUnreadMessagesCount
		).subscribe(massageCount => {
			// console.log("unreadMessageCount: ");
			// console.log(massageCount)
			this.unreadMessagesCount = massageCount;
		});
	}
	getNotificationNumber(){
		this.notificationService.countUnreadNotifications()
            .toPromise().then(response => {
				// console.log("notification count:");
				// console.log(response.result);
                this.notificationsCount = response.result
			});
	}
	public toggleMenu(): void {
		this.toggleMenuEvent.next();
	}

	public toggleConversations(): void {
		if (this.conversationsShown) {
			this.routerExt.navigate(['/app', Config.previousUrl]);
		} else {
			this.notificationsShown = false;
			this.routerExt.navigate(['/app', 'conversations']);
		}

		this.conversationsShown = !this.conversationsShown;
	}

	public toggleNotifications(): void {
		if (this.notificationsShown) {
			this.routerExt.navigate(['/app', Config.previousUrl]);
		} else {
			this.conversationsShown = false;
			this.routerExt.navigate(['/app', 'notifications']);
		}

		this.notificationsShown = !this.notificationsShown;
	}

}
