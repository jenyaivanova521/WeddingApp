"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var shared_module_1 = require("~/modules/shared.module");
var components_1 = require("~/modules/social-feed/components");
var social_feed_component_1 = require("~/modules/social-feed/social-feed.component");
var SocialFeedModule = /** @class */ (function () {
    function SocialFeedModule() {
    }
    SocialFeedModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule,
            ],
            declarations: [
                social_feed_component_1.SocialFeedComponent,
                components_1.PostComponent,
                components_1.PostFormComponent,
                components_1.CommentComponent,
                components_1.CommentFormComponent
            ],
            exports: [
                social_feed_component_1.SocialFeedComponent,
                components_1.PostComponent,
                components_1.PostFormComponent,
                components_1.CommentComponent,
                components_1.CommentFormComponent
            ]
        })
    ], SocialFeedModule);
    return SocialFeedModule;
}());
exports.SocialFeedModule = SocialFeedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLWZlZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29jaWFsLWZlZWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsMENBQStDO0FBQy9DLHdDQUE2QztBQUM3Qyw4REFBMEQ7QUFFMUQseURBQXVEO0FBQ3ZELCtEQUswQztBQUMxQyxxRkFBa0Y7QUF5QmxGO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUF2QjVCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixxQkFBWTtnQkFDWixxQkFBWTtnQkFDWixtQkFBVztnQkFDWCxnQ0FBYTtnQkFDYiw0QkFBWTthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNiLDJDQUFtQjtnQkFDbkIsMEJBQWE7Z0JBQ2IsOEJBQWlCO2dCQUNqQiw2QkFBZ0I7Z0JBQ2hCLGlDQUFvQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDUiwyQ0FBbUI7Z0JBQ25CLDBCQUFhO2dCQUNiLDhCQUFpQjtnQkFDakIsNkJBQWdCO2dCQUNoQixpQ0FBb0I7YUFDcEI7U0FDRCxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICd+L21vZHVsZXMvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7XHJcblx0Q29tbWVudENvbXBvbmVudCxcclxuXHRDb21tZW50Rm9ybUNvbXBvbmVudCxcclxuXHRQb3N0Q29tcG9uZW50LFxyXG5cdFBvc3RGb3JtQ29tcG9uZW50XHJcbn0gZnJvbSAnfi9tb2R1bGVzL3NvY2lhbC1mZWVkL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTb2NpYWxGZWVkQ29tcG9uZW50IH0gZnJvbSAnfi9tb2R1bGVzL3NvY2lhbC1mZWVkL3NvY2lhbC1mZWVkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFJvdXRlck1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdFNoYXJlZE1vZHVsZSxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0U29jaWFsRmVlZENvbXBvbmVudCxcclxuXHRcdFBvc3RDb21wb25lbnQsXHJcblx0XHRQb3N0Rm9ybUNvbXBvbmVudCxcclxuXHRcdENvbW1lbnRDb21wb25lbnQsXHJcblx0XHRDb21tZW50Rm9ybUNvbXBvbmVudFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0U29jaWFsRmVlZENvbXBvbmVudCxcclxuXHRcdFBvc3RDb21wb25lbnQsXHJcblx0XHRQb3N0Rm9ybUNvbXBvbmVudCxcclxuXHRcdENvbW1lbnRDb21wb25lbnQsXHJcblx0XHRDb21tZW50Rm9ybUNvbXBvbmVudFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvY2lhbEZlZWRNb2R1bGUgeyB9XHJcbiJdfQ==