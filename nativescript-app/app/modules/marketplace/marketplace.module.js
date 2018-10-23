"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var components_1 = require("~/modules/marketplace/components");
var modals_1 = require("~/modules/marketplace/modals");
var shared_module_1 = require("../shared.module");
var MarketplaceModule = /** @class */ (function () {
    function MarketplaceModule() {
    }
    MarketplaceModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                components_1.MarketplaceListComponent,
                components_1.MarketplaceComponent,
                components_1.FiltersComponent,
                components_1.DetailComponent,
                modals_1.WritereviewModal,
            ],
            entryComponents: [
                modals_1.WritereviewModal,
            ],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
            ],
            exports: []
        })
    ], MarketplaceModule);
    return MarketplaceModule;
}());
exports.MarketplaceModule = MarketplaceModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0cGxhY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2V0cGxhY2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFFL0MsK0RBSzBDO0FBQzFDLHVEQUFnRTtBQUVoRSxrREFBZ0Q7QUFxQmhEO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFuQjdCLGVBQVEsQ0FBQztZQUNULFlBQVksRUFBRTtnQkFDYixxQ0FBd0I7Z0JBQ3hCLGlDQUFvQjtnQkFDcEIsNkJBQWdCO2dCQUNoQiw0QkFBZTtnQkFDZix5QkFBZ0I7YUFFaEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2hCLHlCQUFnQjthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUixxQkFBWTtnQkFDWiw0QkFBWTthQUNaO1lBQ0QsT0FBTyxFQUFFLEVBQ1I7U0FDRCxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG5cdE1hcmtldHBsYWNlQ29tcG9uZW50LFxyXG5cdE1hcmtldHBsYWNlTGlzdENvbXBvbmVudCxcclxuXHRGaWx0ZXJzQ29tcG9uZW50LFxyXG5cdERldGFpbENvbXBvbmVudCxcclxufSBmcm9tICd+L21vZHVsZXMvbWFya2V0cGxhY2UvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFdyaXRlcmV2aWV3TW9kYWwgfSBmcm9tICd+L21vZHVsZXMvbWFya2V0cGxhY2UvbW9kYWxzJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE1hcmtldHBsYWNlTGlzdENvbXBvbmVudCxcclxuXHRcdE1hcmtldHBsYWNlQ29tcG9uZW50LFxyXG5cdFx0RmlsdGVyc0NvbXBvbmVudCxcclxuXHRcdERldGFpbENvbXBvbmVudCxcclxuXHRcdFdyaXRlcmV2aWV3TW9kYWwsXHJcblxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRXcml0ZXJldmlld01vZGFsLFxyXG5cdF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0U2hhcmVkTW9kdWxlLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcmtldHBsYWNlTW9kdWxlIHsgfSJdfQ==