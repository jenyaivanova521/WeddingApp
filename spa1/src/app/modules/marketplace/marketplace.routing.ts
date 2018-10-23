import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketplaceComponent } from './marketplace.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileResolvers } from '../../root-store';

const routes: Routes = [
    {
        path: 'marketplace', component: MarketplaceComponent, canActivate: [AuthGuard], resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
