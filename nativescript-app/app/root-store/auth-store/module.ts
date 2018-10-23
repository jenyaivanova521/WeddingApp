import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';

@NgModule({
	imports: [
		HttpClientModule,
		StoreModule.forFeature('auth', reducer),
		EffectsModule.forFeature([AuthEffects])
	],
	declarations: [
	],
	providers: [
		AuthEffects
	]
})
export class AuthStoreModule { }
