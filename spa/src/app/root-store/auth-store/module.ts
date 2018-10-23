import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects';
import { AuthInfoResolver } from './resolvers';

import { AuthService } from '../services/auth.service';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('auth', reducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations: [
    ],
    providers: [
        AuthService,
        AuthEffects,
        AuthInfoResolver
    ]
})
export class AuthStoreModule { }
