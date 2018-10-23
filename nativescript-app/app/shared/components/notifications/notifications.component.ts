import { Component } from '@angular/core';
import { screen } from 'tns-core-modules/platform';
import { ISubscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { RootStoreState, ProfileSelectors } from '~/root-store';
import { NotificationService } from '~/shared/services/notification.service';
import { LoadingIndicator } from 'nativescript-loading-indicator';
import { RouterExtensions } from 'nativescript-angular';
import { Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'notifications',
	templateUrl: 'notifications.component.html',
	styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
	activeProfile: any;
    activeProfileSub: ISubscription;
    sioSubscription: any;
    notificationsCount: number;
    notifications = [];
    loading: boolean = false;
    page: number = 0;
	infiniteScrollDisabled: boolean = false;
    private indicator: LoadingIndicator;
    
	public containerHeight;

	constructor(
		private store: Store<RootStoreState.State>,
        private notificationService: NotificationService,
        private routerExtensions: RouterExtensions ) {
        this.containerHeight = screen.mainScreen.heightDIPs - 220; // Topbar height + some margin (bottom clear all bar)
        this.indicator = new LoadingIndicator();
	}
	ngOnInit() {
        
        this.activeProfileSub = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {			
            this.activeProfile = activeProfile;
    		this.readNotifcations(true);   
        });
        // this.notificationService.countUnreadNotifications()
        //     .toPromise().then(response => {
        //         this.notificationsCount = response.result
		// 	});
			
    }

    ngOnDestroy() {
        this.activeProfileSub.unsubscribe();
    }

    getNotifications() {
        this.page++;
        this.notificationService.getNotifications(this.page)
            .toPromise().then(response => {
                this.loading = false;
                if (response.result.length == 0) {
                    this.infiniteScrollDisabled = true;
                } else {
                    this.notifications = this.notifications.concat(response.result);
                }
                this.indicator.hide();
				console.log("notifications: ");
                console.log(this.notifications);                
            }).catch(error => {
                this.indicator.hide();
                this.loading = false;
            });
    }

    readNotifcations(opening) {
        if (opening) {
            this.indicator.show({
                message: 'Loading...'
              });
            this.loading = true;
            this.page = 0;
            this.infiniteScrollDisabled = false;
            this.notifications = [];
            this.getNotifications();
            console.log("read notification");
            this.notificationService.markAsRead()
                .subscribe(response=>{
                    console.log("makred as read notification");
					console.log(response);
                }, error=>{
                    console.log("marked as read failed");
                    console.log(error);
                })
                // .toPromise().then(response => {
				// 	// this.notificationsCount = 0;
				// 	console.log("makred as read notification");
				// 	console.log(response);
                // })
        }
    }

    getRouterLink(notification) {
        let link;
        switch (notification.type) {
            case 'comment_created':
            case 'like_created':            
                Config.notificationData = notification.additionalData;
                this.routerExtensions.navigate(['/app', 'social-feed']);
                // link = ['/', 'wedding', notification.additionalData.weddingId, 'post', notification.additionalData.postId];
                break;
            case 'invitation_received':
                link = ['/settings/invitations'];
                break;
            case 'vendor_review_created':
                this.routerExtensions.navigate(['/app', 'marketplace-list']);
                // link = ['/', 'vendor', notification.additionalData.vendorId, 'review', notification.entityId];
                break;
            case 'guest_status_changed':
                link = ['/', 'guest-list'];
                break;
        }
        return link;
    }
}
