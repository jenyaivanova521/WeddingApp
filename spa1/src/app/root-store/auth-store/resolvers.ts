import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take, filter, first } from 'rxjs/operators';

import { State } from './state';
import { AuthInfo } from './models';
import { selectAuthInfo } from './selectors'

@Injectable()
export class AuthInfoResolver implements Resolve<AuthInfo> {
    constructor(
        private store: Store<State>
    ) { }

    resolve(): Observable<AuthInfo> {
        return this.store.select(selectAuthInfo).pipe(
            filter(authInfo => authInfo != null),
            take(1)
        );
    }

}
