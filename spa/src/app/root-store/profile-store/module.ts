import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProfileEffects } from './effects';
import { reducer } from './reducers';
import { ActiveProfileResolver } from './resolvers';

@NgModule({
    imports: [
        StoreModule.forFeature('profile', reducer),
        EffectsModule.forFeature([ProfileEffects])
    ],
    declarations: [
    ],
    providers: [
        ProfileEffects,
        ActiveProfileResolver
    ]
})
export class ProfileStoreModule { }
