import { CoupleProfileComponent, GuestListComponent } from '~/modules/wedding/components';

export const weddingRouting = [
	{
		path: 'guest-list',
		component: GuestListComponent,
	},
	{
		path: 'couple-profile',
		component: CoupleProfileComponent
	}
];