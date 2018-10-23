import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialFeedComponent } from './social-feed.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import {
    AuthResolvers,
    ProfileResolvers
} from '../../root-store';

const routes: Routes = [
    {
        path: '', component: SocialFeedComponent, canActivate: [AuthGuard], resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver,
            authInfo: AuthResolvers.AuthInfoResolver
        },
        runGuardsAndResolvers: 'always'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
