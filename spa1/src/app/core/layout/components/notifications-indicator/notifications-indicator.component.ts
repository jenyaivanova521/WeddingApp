import { Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Router } from "@angular/router";
import { environment } from '../../../../../environments/environment';

import { SioService } from '../../../../root-store/services/sio.service';
import { NotificationService } from '../../../../root-store/services/notification.service';

import {
    RootStoreState,
    ProfileActions,
    ProfileSelectors
} from '../../../../root-store';

@Component({
    selector: 'notifications-indicator',
    templateUrl: './notifications-indicator.component.html',
    styleUrls: ['./notifications-indicator.component.sass']
})
export class NotificationsIndicatorComponent implements OnInit, OnDestroy {
    activeProfile: any;
    activeProfileSub: ISubscription;
    sioSubscription: any;
    notificationsCount: number;
    notifications: object[] = [];
    loading: boolean = false;
    page: number = 0;
    infiniteScrollDisabled: boolean = false;

    constructor(
        private router: Router,
        private store: Store<RootStoreState.State>,
        private sioService: SioService,
        private notificationService: NotificationService
    ) { }

    async ngOnInit() {
        this.activeProfileSub = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
            this.sioSubscription = this.sioService.getNotifications().subscribe(notification => {
                let sound = new Audio(environment.cdnUrl + '/sounds/notification.mp3');
                this.notificationsCount++;
                sound.play();
            });
        });
        await this.notificationService.countUnreadNotifications()
            .toPromise().then(response => {
                this.notificationsCount = response.result
            });
    }

    ngOnDestroy() {
        this.activeProfileSub.unsubscribe();
        if (this.sioSubscription) {
            this.sioSubscription.unsubscribe();
        }
    }

    async getNotifications() {
        this.page++;
        await this.notificationService.getNotifications(this.page)
            .toPromise().then(response => {
                this.loading = false;
                if (response.result.length == 0) {
                    this.infiniteScrollDisabled = true;
                } else {
                    this.notifications = this.notifications.concat(response.result);
                }
            }).catch(error => {
                this.loading = false;
            });
    }

    async toggleDropdown(opening) {
        if (opening) {
            this.loading = true;
            this.page = 0;
            this.infiniteScrollDisabled = false;
            this.notifications = [];
            await this.getNotifications();
            await this.notificationService.markAsRead()
                .toPromise().then(response => {
                    this.notificationsCount = 0;
                })
        }
    }

    getRouterLink(notification) {
        let link;
        switch (notification.type) {
            case 'comment_created':
            case 'like_created':
                link = ['/', 'wedding', notification.additionalData.weddingId, 'post', notification.additionalData.postId];
                break;
            case 'invitation_received':
                link = ['/settings/invitations'];
                break;
            case 'vendor_review_created':
                link = ['/', 'vendor', notification.additionalData.vendorId, 'review', notification.entityId];
                break;
            case 'guest_status_changed':
                link = ['/', 'guest-list'];
                break;
        }
        return link;
    }

}
