import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MessageEffects } from './effects';
import { reducer } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('message', reducer),
        EffectsModule.forFeature([MessageEffects])
    ],
    declarations: [
    ],
    providers: [
        MessageEffects
    ]
})
export class MessageStoreModule { }
