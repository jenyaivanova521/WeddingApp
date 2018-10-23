import { CreateCoupleComponent } from '~/shared/components/create-profile/couple/create-couple.component';
import { CreateVendorComponent } from '~/shared/components/create-profile/vendor';

export const profileCreateRouting = [
	{
		path: 'couple',
		component: CreateCoupleComponent,
	},
	{
		path: 'vendor',
		component: CreateVendorComponent
	}
];