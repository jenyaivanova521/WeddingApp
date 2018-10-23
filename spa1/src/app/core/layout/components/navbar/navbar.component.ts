import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';

import {
    RootStoreState,
    AuthActions,
    AuthSelectors
} from '../../../../root-store';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, OnDestroy {
    authInfo: any;
    authInfoSub: ISubscription;
    _collapseNav: boolean
    @Input() set collapseNav(value: boolean) {
        this._collapseNav = value;
    }
    @Output() onToggleCollapseNav = new EventEmitter<boolean>();

    constructor(
        private store: Store<RootStoreState.State>
    ) {}

    ngOnInit() {
        this.authInfoSub = this.store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe(authInfo => {
            this.authInfo = authInfo;
        });
    }

    ngOnDestroy() {
        this.authInfoSub.unsubscribe();
    }

    logout(event) {
        event.stopPropagation();
        this.store.dispatch(new AuthActions.Logout());
    }

    toggleNavCollapse(collapseNav) {
        this.onToggleCollapseNav.emit(collapseNav);
    }

}
