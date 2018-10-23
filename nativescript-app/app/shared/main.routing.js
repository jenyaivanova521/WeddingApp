"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("~/modules/auth/components");
var social_feed_routing_1 = require("~/modules/social-feed/social-feed.routing");
var tasks_routing_1 = require("~/modules/tasks/tasks.routing");
var wedding_routing_1 = require("~/modules/wedding/wedding.routing");
var create_profile_routing_1 = require("~/shared/components/create-profile/create-profile.routing");
var marketplace_routing_1 = require("~/modules/marketplace/marketplace.routing");
var components_2 = require("~/shared/components");
exports.mainRouting = [
    {
        path: 'app',
        component: components_2.LoggedInAppComponent,
        children: marketplace_routing_1.marketplaceRouting.concat(tasks_routing_1.tasksRouting, create_profile_routing_1.profileCreateRouting, wedding_routing_1.weddingRouting, social_feed_routing_1.socialFeedRouting, [
            {
                path: 'notifications',
                component: components_2.NotificationsComponent
            },
            {
                path: 'conversations',
                component: components_2.ConversationsComponent,
            },
            {
                path: 'account-settings',
                component: components_1.AccountsettingsComponent
            },
        ])
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5yb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQXFFO0FBQ3JFLGlGQUE4RTtBQUM5RSwrREFBNkQ7QUFDN0QscUVBQW1FO0FBQ25FLG9HQUFpRztBQUNqRyxpRkFBK0U7QUFHL0Usa0RBQTJHO0FBRTlGLFFBQUEsV0FBVyxHQUFHO0lBQzFCO1FBQ0MsSUFBSSxFQUFFLEtBQUs7UUFDWCxTQUFTLEVBQUUsaUNBQW9CO1FBQy9CLFFBQVEsRUFDSix3Q0FBa0IsUUFDbEIsNEJBQVksRUFDWiw2Q0FBb0IsRUFDcEIsZ0NBQWMsRUFDZCx1Q0FBaUI7WUFDcEI7Z0JBQ0MsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLFNBQVMsRUFBRSxtQ0FBc0I7YUFDakM7WUFDRDtnQkFDQyxJQUFJLEVBQUUsZUFBZTtnQkFDckIsU0FBUyxFQUFFLG1DQUFzQjthQUNqQztZQUNEO2dCQUNDLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxxQ0FBd0I7YUFDbkM7VUFHRDtLQUNEO0NBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJ34vbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBzb2NpYWxGZWVkUm91dGluZyB9IGZyb20gJ34vbW9kdWxlcy9zb2NpYWwtZmVlZC9zb2NpYWwtZmVlZC5yb3V0aW5nJztcclxuaW1wb3J0IHsgdGFza3NSb3V0aW5nIH0gZnJvbSAnfi9tb2R1bGVzL3Rhc2tzL3Rhc2tzLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyB3ZWRkaW5nUm91dGluZyB9IGZyb20gJ34vbW9kdWxlcy93ZWRkaW5nL3dlZGRpbmcucm91dGluZyc7XHJcbmltcG9ydCB7IHByb2ZpbGVDcmVhdGVSb3V0aW5nIH0gZnJvbSAnfi9zaGFyZWQvY29tcG9uZW50cy9jcmVhdGUtcHJvZmlsZS9jcmVhdGUtcHJvZmlsZS5yb3V0aW5nJztcclxuaW1wb3J0IHsgbWFya2V0cGxhY2VSb3V0aW5nIH0gZnJvbSAnfi9tb2R1bGVzL21hcmtldHBsYWNlL21hcmtldHBsYWNlLnJvdXRpbmcnO1xyXG5cclxuXHJcbmltcG9ydCB7IENvbnZlcnNhdGlvbnNDb21wb25lbnQsIExvZ2dlZEluQXBwQ29tcG9uZW50LCBOb3RpZmljYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnfi9zaGFyZWQvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpblJvdXRpbmcgPSBbXHJcblx0e1xyXG5cdFx0cGF0aDogJ2FwcCcsXHJcblx0XHRjb21wb25lbnQ6IExvZ2dlZEluQXBwQ29tcG9uZW50LCBcclxuXHRcdGNoaWxkcmVuOiBbXHJcblx0XHRcdC4uLm1hcmtldHBsYWNlUm91dGluZyxcclxuXHRcdFx0Li4udGFza3NSb3V0aW5nLFxyXG5cdFx0XHQuLi5wcm9maWxlQ3JlYXRlUm91dGluZyxcclxuXHRcdFx0Li4ud2VkZGluZ1JvdXRpbmcsXHJcblx0XHRcdC4uLnNvY2lhbEZlZWRSb3V0aW5nLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogJ25vdGlmaWNhdGlvbnMnLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogTm90aWZpY2F0aW9uc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGF0aDogJ2NvbnZlcnNhdGlvbnMnLFxyXG5cdFx0XHRcdGNvbXBvbmVudDogQ29udmVyc2F0aW9uc0NvbXBvbmVudCxcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhdGg6ICdhY2NvdW50LXNldHRpbmdzJyxcclxuXHRcdFx0XHRjb21wb25lbnQ6IEFjY291bnRzZXR0aW5nc0NvbXBvbmVudFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0XHJcblx0XHRdXHJcblx0fVxyXG5dOyJdfQ==