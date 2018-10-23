import { Routes } from '@angular/router';

import { SocialFeedComponent } from './social-feed.component';
import { AuthGuard } from '~/shared/guards/auth.guard';

export const socialFeedRouting: Routes = [
	{
		path: 'social-feed',
		component: SocialFeedComponent,
		// canActivate: [AuthGuard], //TODO uncomment this after testing
	}
];
