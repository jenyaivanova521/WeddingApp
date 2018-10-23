import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesManagerComponent } from './messages-manager.component';
import { MessagesConversationComponent } from './components/conversation/conversation.component';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { ProfileResolvers } from '../../root-store';

const routes: Routes = [
    {
        path: 'messages', component: MessagesManagerComponent, canActivate: [AuthGuard], resolve: {
            activeProfile: ProfileResolvers.ActiveProfileResolver
        },
        children: [
            {
                path: ':conversationId', component: MessagesConversationComponent
            }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
