import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MarketplaceComponent,
	MarketplaceListComponent,
	FiltersComponent,
	DetailComponent,
} from '~/modules/marketplace/components';
import { WritereviewModal } from '~/modules/marketplace/modals';

import { SharedModule } from '../shared.module';

@NgModule({
	declarations: [
		MarketplaceListComponent,
		MarketplaceComponent,
		FiltersComponent,
		DetailComponent,
		WritereviewModal,

	],
	entryComponents: [
		WritereviewModal,
	],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
	]
})
export class MarketplaceModule { }