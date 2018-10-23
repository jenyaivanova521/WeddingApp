import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take, filter } from 'rxjs/operators';

import { State } from './state';
import { Profile } from '../common-models';
import { selectActiveProfile } from './selectors';

@Injectable()
export class ActiveProfileResolver implements Resolve<Profile> {
    constructor(
        private store: Store<State>
    ) { }

    resolve(): Observable<Profile> {
        return this.store.select(selectActiveProfile).pipe(
            filter(profile => profile != null),
            take(1)
        );
    }

}
