"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var components_1 = require("~/modules/wedding/components");
var modals_1 = require("~/modules/wedding/modals");
var shared_module_1 = require("../shared.module");
var social_feed_module_1 = require("~/modules/social-feed/social-feed.module");
var angular2_moment_1 = require("angular2-moment");
var WeddingModule = /** @class */ (function () {
    function WeddingModule() {
    }
    WeddingModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                modals_1.AddGuestModal,
                components_1.CouplePhotosComponent,
                components_1.CoupleProfileComponent,
                components_1.CoupleInformationsComponent,
                components_1.CoupleTimelineComponent,
                components_1.GuestComponent,
                components_1.GuestListComponent,
                modals_1.DeleteeditModal
            ],
            entryComponents: [
                modals_1.AddGuestModal,
                modals_1.DeleteeditModal
            ],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                social_feed_module_1.SocialFeedModule,
                angular2_moment_1.MomentModule
            ],
            exports: []
        })
    ], WeddingModule);
    return WeddingModule;
}());
exports.WeddingModule = WeddingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VkZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWRkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLDJEQU9zQztBQUN0QyxtREFBMEU7QUFFMUUsa0RBQWdEO0FBRWhELCtFQUE0RTtBQUM1RSxtREFBK0M7QUEwQi9DO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBeEJ6QixlQUFRLENBQUM7WUFDVCxZQUFZLEVBQUU7Z0JBQ2Isc0JBQWE7Z0JBQ2Isa0NBQXFCO2dCQUNyQixtQ0FBc0I7Z0JBQ3RCLHdDQUEyQjtnQkFDM0Isb0NBQXVCO2dCQUN2QiwyQkFBYztnQkFDZCwrQkFBa0I7Z0JBQ2xCLHdCQUFlO2FBQ2Y7WUFDRCxlQUFlLEVBQUU7Z0JBQ2hCLHNCQUFhO2dCQUNiLHdCQUFlO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7Z0JBQ1osNEJBQVk7Z0JBQ1oscUNBQWdCO2dCQUNoQiw4QkFBWTthQUNaO1lBQ0QsT0FBTyxFQUFFLEVBQ1I7U0FDRCxDQUFDO09BQ1csYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG5cdENvdXBsZUluZm9ybWF0aW9uc0NvbXBvbmVudCxcclxuXHRDb3VwbGVQaG90b3NDb21wb25lbnQsXHJcblx0Q291cGxlUHJvZmlsZUNvbXBvbmVudCxcclxuXHRDb3VwbGVUaW1lbGluZUNvbXBvbmVudCxcclxuXHRHdWVzdENvbXBvbmVudCxcclxuXHRHdWVzdExpc3RDb21wb25lbnRcclxufSBmcm9tICd+L21vZHVsZXMvd2VkZGluZy9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQWRkR3Vlc3RNb2RhbCwgRGVsZXRlZWRpdE1vZGFsIH0gZnJvbSAnfi9tb2R1bGVzL3dlZGRpbmcvbW9kYWxzJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQb3N0Q29tcG9uZW50LCBQb3N0Rm9ybUNvbXBvbmVudCwgQ29tbWVudENvbXBvbmVudCwgQ29tbWVudEZvcm1Db21wb25lbnQgfSBmcm9tICd+L21vZHVsZXMvc29jaWFsLWZlZWQvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNvY2lhbEZlZWRNb2R1bGUgfSBmcm9tICd+L21vZHVsZXMvc29jaWFsLWZlZWQvc29jaWFsLWZlZWQubW9kdWxlJztcclxuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbW9tZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRBZGRHdWVzdE1vZGFsLFxyXG5cdFx0Q291cGxlUGhvdG9zQ29tcG9uZW50LFxyXG5cdFx0Q291cGxlUHJvZmlsZUNvbXBvbmVudCxcclxuXHRcdENvdXBsZUluZm9ybWF0aW9uc0NvbXBvbmVudCxcclxuXHRcdENvdXBsZVRpbWVsaW5lQ29tcG9uZW50LFxyXG5cdFx0R3Vlc3RDb21wb25lbnQsXHJcblx0XHRHdWVzdExpc3RDb21wb25lbnQsXHJcblx0XHREZWxldGVlZGl0TW9kYWxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0QWRkR3Vlc3RNb2RhbCxcclxuXHRcdERlbGV0ZWVkaXRNb2RhbFxyXG5cdF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0U2hhcmVkTW9kdWxlLFxyXG5cdFx0U29jaWFsRmVlZE1vZHVsZSxcclxuXHRcdE1vbWVudE1vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdlZGRpbmdNb2R1bGUgeyB9Il19