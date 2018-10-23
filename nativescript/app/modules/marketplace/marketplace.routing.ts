import {
	MarketplaceListComponent,
	FiltersComponent,
	DetailComponent,
} from '~/modules/marketplace/components';


export const marketplaceRouting = [
	{
		path: 'marketplace-list',
		component: MarketplaceListComponent,
	},
	{
		path: 'filters',
		component: FiltersComponent,
	},
	{
		path: 'detail',
		component: DetailComponent,
	}
];