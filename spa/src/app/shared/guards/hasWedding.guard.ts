import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import {
    RootStoreState,
    ProfileSelectors
} from '../../root-store';

@Injectable()
export class HasWeddingGuard implements CanActivate {

    constructor(
        private store: Store<RootStoreState.State>
    ) { }

    canActivate() {
        return this.store.select(ProfileSelectors.selectActiveProfile).pipe(
            map(activeProfile => {
                if(activeProfile && activeProfile.type == 'wedding') {
                    return true;
                }
                return false;
            })
        )
    }
}
