import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingFormComponent } from './wedding-form.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileResolvers } from '../../root-store';

const routes: Routes = [
    {
        path: 'wedding', component: WeddingFormComponent, canActivate: [AuthGuard], resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
