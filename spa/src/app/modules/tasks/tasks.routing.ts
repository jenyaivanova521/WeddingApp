import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileResolvers } from '../../root-store';

const routes: Routes = [
    {
        path: 'tasks', component: TasksComponent, canActivate: [AuthGuard], resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
