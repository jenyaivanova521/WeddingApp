import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { WeddingEffects } from './effects';


import { reducer } from './reducers';

import { StoreModule } from '@ngrx/store';

@NgModule({
	imports: [
		StoreModule.forFeature('wedding', reducer),
		EffectsModule.forFeature([WeddingEffects])
	],
	declarations: [
	],
	providers: [
		WeddingEffects
	]
})
export class WeddingStoreModule { }
