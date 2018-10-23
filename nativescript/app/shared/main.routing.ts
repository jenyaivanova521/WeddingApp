import { AccountsettingsComponent } from '~/modules/auth/components';
import { socialFeedRouting } from '~/modules/social-feed/social-feed.routing';
import { tasksRouting } from '~/modules/tasks/tasks.routing';
import { weddingRouting } from '~/modules/wedding/wedding.routing';
import { profileCreateRouting } from '~/shared/components/create-profile/create-profile.routing';
import { marketplaceRouting } from '~/modules/marketplace/marketplace.routing';


import { ConversationsComponent, LoggedInAppComponent, NotificationsComponent } from '~/shared/components';

export const mainRouting = [
	{
		path: 'app',
		component: LoggedInAppComponent, 
		children: [
			...marketplaceRouting,
			...tasksRouting,
			...profileCreateRouting,
			...weddingRouting,
			...socialFeedRouting,
			{
				path: 'notifications',
				component: NotificationsComponent
			},
			{
				path: 'conversations',
				component: ConversationsComponent,
			},
			{
				path: 'account-settings',
				component: AccountsettingsComponent
			},

			
		]
	}
];