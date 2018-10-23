import { SetPasswordComponent } from '~/modules/auth/components';

import {
	LoginComponent,
	RegisterComponent,
	RemindPasswordComponent,
	WelcomeComponent
} from './components';

export const authRoutes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'set-password', component: SetPasswordComponent },
	{ path: 'remind-password', component: RemindPasswordComponent}
];