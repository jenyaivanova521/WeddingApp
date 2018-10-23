import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspirationsComponent } from './inspirations.component';
import { InspirationDetailsComponent } from './components/inspiration-details/inspiration-details.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileResolvers } from '../../root-store';

const routes: Routes = [
    {
        path: 'inspirations/tag/:tags', component: InspirationsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'inspirations/pinned', component: InspirationsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'inspirations/yours', component: InspirationsComponent, canActivate: [AuthGuard]
    },
    {
        path: 'inspirations', component: InspirationsComponent, canActivate: [AuthGuard],
        children: [
            {
                path: ':inspirationId', component: InspirationDetailsComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
