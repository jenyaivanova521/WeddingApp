import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TaskEffects } from './effects';
import { TaskService } from '~/shared/services';
import { reducer } from './reducers';

@NgModule({
	imports: [
		StoreModule.forFeature('task', reducer),
		EffectsModule.forFeature([TaskEffects]),
	],
	providers: [
		TaskEffects
	]
})
export class TaskStoreModule { }
