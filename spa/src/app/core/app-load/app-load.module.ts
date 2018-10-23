import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AuthService } from '../../root-store/services/auth.service';
import { ProfileService } from '../../root-store/services/profile.service';
import { MemberService } from '../../root-store/services/member.service';
import { SioService } from '../../root-store/services/sio.service';
import { MessageService } from '../../root-store/services/message.service';

import {
    RootStoreState,
    ProfileActions,
    MemberActions,
    AuthActions,
    AuthSelectors,
    MessageActions
} from '../../root-store';


export function initApp(
    authService: AuthService,
    profileService: ProfileService,
    memberService: MemberService,
    store: Store<RootStoreState.State>,
    sioService: SioService,
    messageService: MessageService,
    injector: Injector
) {
    return async () => {
        store.dispatch(new AuthActions.GetAuthInfo());
        store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe(authInfo => {
            if (authInfo) {
                sioService.init(authInfo.account.id);
            }
        });
        let { authInfo, activeProfile } = await profileService.initProfiles();
        messageService.getUnreadMessagesCount()
            .toPromise().then(response => {
                store.dispatch(new MessageActions.SetUnreadMessagesCount({
                    unreadMessagesCount: response.result
                }));
            });
        messageService.getConversations(1)
            .toPromise().then(response => {
                store.dispatch(new MessageActions.AppendConversations({
                    conversations: response.result,
                    infiniteScroll: {
                        page: 1,
                        disabled: false
                    }
                }));
            });
        sioService.getMessages().subscribe((message: any) => {
            store.dispatch(new MessageActions.HandleNewMessage({
                message: message
            }));
        });
        let router = injector.get(Router);
        if (activeProfile) {
            if (activeProfile.type == 'vendor' && !activeProfile.isActive && authInfo.accountType == 'vendor') {
                router.navigate(['vendor'], { queryParams: { layout: 'blank' } });
            }
        } else {
            if (authInfo.account.accountType.name == 'vendor') {
                router.navigate(['vendor'], { queryParams: { layout: 'blank' } });
            } else if(authInfo.account.accountType.name == 'couple') {
                router.navigate(['wedding'], { queryParams: { layout: 'blank' } });
            }
        }
    }
}


@NgModule({
    imports: [HttpClientModule],
    providers: [
        { provide: APP_INITIALIZER, useFactory: initApp, deps: [AuthService, ProfileService, MemberService, Store, SioService, MessageService, Injector], multi: true }
    ]
})
export class AppLoadModule { }
