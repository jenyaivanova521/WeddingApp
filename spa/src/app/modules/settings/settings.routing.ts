import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsWeddingInvitationsComponent } from './components/invitations';

import { SettingsComponent } from './settings.component';
import { SettingsWeddingComponent } from './components/wedding';
import { SettingsVendorComponent } from './components/vendor/vendor.component';
import { SettingsMembersComponent } from './components/members/members.component';
import { SettingsAccountComponent } from './components/account/account.component';

import { AuthGuard } from '../../shared/guards/auth.guard';
import { IsOwnerGuard } from '../../shared/guards/isOwner.guard';
import { ProfileResolvers, AuthResolvers } from '../../root-store';

const routes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
        resolve: {
            authInfo: AuthResolvers.AuthInfoResolver,
            activeProfile: ProfileResolvers.ActiveProfileResolver
        },
        runGuardsAndResolvers: 'always',
        children: [
            {path: '', redirectTo: 'wedding', pathMatch: 'full'},
            {
                path: 'wedding',
                component: SettingsWeddingComponent,
                canActivate: [IsOwnerGuard],
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'vendor',
                component: SettingsVendorComponent,
                canActivate: [IsOwnerGuard],
                runGuardsAndResolvers: 'always'
            },
            {path: 'account', component: SettingsAccountComponent},
            {path: 'members', component: SettingsMembersComponent, canActivate: [IsOwnerGuard]},
            {path: 'invitations', component: SettingsWeddingInvitationsComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
