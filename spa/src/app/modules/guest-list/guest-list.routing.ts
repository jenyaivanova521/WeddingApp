import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestListComponent } from './guest-list.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileResolvers } from '../../root-store';
import { HasWeddingGuard } from '../../shared/guards/hasWedding.guard';

const routes: Routes = [
    {
        path: 'guest-list', component: GuestListComponent, canActivate: [AuthGuard], resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
