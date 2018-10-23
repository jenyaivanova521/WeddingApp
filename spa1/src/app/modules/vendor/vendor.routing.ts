import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorComponent } from './vendor.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import {
    ProfileResolvers,
    AuthResolvers
} from '../../root-store';

const routes: Routes = [
    {
        path: 'vendor/:vendorId', component: VendorComponent,
        canActivate: [AuthGuard],
        resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver,
            authInfo: AuthResolvers.AuthInfoResolver
        },
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'vendor/:vendorId/review/:vendorReviewId', component: VendorComponent,
        canActivate: [AuthGuard],
        resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver,
            authInfo: AuthResolvers.AuthInfoResolver
        },
        runGuardsAndResolvers: 'always'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
