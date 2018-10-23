import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingInformationComponent } from './components/information';
import { WeddingComponent } from './wedding.component';
import { WeddingTimelineComponent } from './components/timeline/timeline.component';
import { WeddingPhotosComponent } from './components/photos/photos.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import {
    ProfileResolvers,
    AuthResolvers
} from '../../root-store';

const routes: Routes = [
    {
        path: 'wedding/:weddingId', component: WeddingComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: '', component: WeddingTimelineComponent, resolve: {
                    authInfo: AuthResolvers.AuthInfoResolver,
                    activeProfile: ProfileResolvers.ActiveProfileResolver
                }
            },
            {
                path: 'informations',
                component: WeddingInformationComponent,
                resolve: {
                    activeProfile: ProfileResolvers.ActiveProfileResolver
                }
            },
            {
                path: 'photos', component: WeddingPhotosComponent, resolve: {
                    authInfo: AuthResolvers.AuthInfoResolver,
                    activeProfile: ProfileResolvers.ActiveProfileResolver
                }
            },
            {
                path: 'post/:postId', component: WeddingTimelineComponent, resolve: {
                    authInfo: AuthResolvers.AuthInfoResolver,
                    activeProfile: ProfileResolvers.ActiveProfileResolver
                }
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
