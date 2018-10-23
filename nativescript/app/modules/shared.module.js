"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var components_1 = require("~/shared/components");
var radio_buttons_1 = require("~/shared/components/radio-buttons");
var modals_1 = require("~/shared/modals");
var pipes_1 = require("~/shared/pipes");
var time_ago_pipe_1 = require("~/shared/pipes/time-ago.pipe");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            entryComponents: [
                modals_1.DatepickerModal,
                modals_1.ListSelectModal,
                modals_1.LocationModal,
                modals_1.UploadModal,
            ],
            declarations: [
                components_1.AvatarComponent,
                components_1.CheckboxComponent,
                components_1.ConversationsComponent,
                components_1.DateInputComponent,
                modals_1.DatepickerModal,
                pipes_1.DateWithHoursPipe,
                pipes_1.FullDatePipe,
                time_ago_pipe_1.TimeAgoPipe,
                components_1.NotificationsComponent,
                modals_1.ListSelectModal,
                modals_1.LocationModal,
                components_1.LocationInputComponent,
                modals_1.UploadModal,
                components_1.UploadPhotoComponent,
                components_1.SelectInputComponent,
                radio_buttons_1.RadioButtonsComponent,
            ],
            exports: [
                components_1.AvatarComponent,
                components_1.CheckboxComponent,
                components_1.DateInputComponent,
                modals_1.DatepickerModal,
                pipes_1.DateWithHoursPipe,
                pipes_1.FullDatePipe,
                time_ago_pipe_1.TimeAgoPipe,
                modals_1.ListSelectModal,
                modals_1.LocationModal,
                components_1.LocationInputComponent,
                modals_1.UploadModal,
                components_1.UploadPhotoComponent,
                components_1.SelectInputComponent,
                radio_buttons_1.RadioButtonsComponent,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQStDO0FBQy9DLHNDQUF5QztBQUV6QyxrREFVNkI7QUFDN0IsbUVBQTBFO0FBQzFFLDBDQUErRjtBQUMvRix3Q0FBaUU7QUFDakUsOERBQTJEO0FBZ0QzRDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQTlDeEIsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLHFCQUFZO2FBQ1o7WUFDRCxlQUFlLEVBQUU7Z0JBQ2hCLHdCQUFlO2dCQUNmLHdCQUFlO2dCQUNmLHNCQUFhO2dCQUNiLG9CQUFXO2FBQ1g7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsNEJBQWU7Z0JBQ2YsOEJBQWlCO2dCQUNqQixtQ0FBc0I7Z0JBQ3RCLCtCQUFrQjtnQkFDbEIsd0JBQWU7Z0JBQ2YseUJBQWlCO2dCQUNqQixvQkFBWTtnQkFDWiwyQkFBVztnQkFDWCxtQ0FBc0I7Z0JBQ3RCLHdCQUFlO2dCQUNmLHNCQUFhO2dCQUNiLG1DQUFzQjtnQkFDdEIsb0JBQVc7Z0JBQ1gsaUNBQW9CO2dCQUNwQixpQ0FBb0I7Z0JBQ3BCLHFDQUFxQjthQUVyQjtZQUNELE9BQU8sRUFBRTtnQkFDUiw0QkFBZTtnQkFDZiw4QkFBaUI7Z0JBQ2pCLCtCQUFrQjtnQkFDbEIsd0JBQWU7Z0JBQ2YseUJBQWlCO2dCQUNqQixvQkFBWTtnQkFDWiwyQkFBVztnQkFDWCx3QkFBZTtnQkFDZixzQkFBYTtnQkFDYixtQ0FBc0I7Z0JBQ3RCLG9CQUFXO2dCQUNYLGlDQUFvQjtnQkFDcEIsaUNBQW9CO2dCQUNwQixxQ0FBcUI7YUFDckI7U0FDRCxDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG5cdEF2YXRhckNvbXBvbmVudCxcclxuXHRDaGVja2JveENvbXBvbmVudCxcclxuXHRDb252ZXJzYXRpb25zQ29tcG9uZW50LFxyXG5cdERhdGVJbnB1dENvbXBvbmVudCxcclxuXHRMb2NhdGlvbklucHV0Q29tcG9uZW50LFxyXG5cdE5vdGlmaWNhdGlvbnNDb21wb25lbnQsXHJcblx0U2VsZWN0SW5wdXRDb21wb25lbnQsXHJcblx0VXBsb2FkUGhvdG9Db21wb25lbnQsXHJcblx0TWVudUNvbXBvbmVudCxcclxufSBmcm9tICd+L3NoYXJlZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnfi9zaGFyZWQvY29tcG9uZW50cy9yYWRpby1idXR0b25zJztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlck1vZGFsLCBMaXN0U2VsZWN0TW9kYWwsIExvY2F0aW9uTW9kYWwsIFVwbG9hZE1vZGFsIH0gZnJvbSAnfi9zaGFyZWQvbW9kYWxzJztcclxuaW1wb3J0IHsgRGF0ZVdpdGhIb3Vyc1BpcGUsIEZ1bGxEYXRlUGlwZSB9IGZyb20gJ34vc2hhcmVkL3BpcGVzJztcclxuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICd+L3NoYXJlZC9waXBlcy90aW1lLWFnby5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHREYXRlcGlja2VyTW9kYWwsXHJcblx0XHRMaXN0U2VsZWN0TW9kYWwsXHJcblx0XHRMb2NhdGlvbk1vZGFsLFxyXG5cdFx0VXBsb2FkTW9kYWwsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEF2YXRhckNvbXBvbmVudCxcclxuXHRcdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFx0Q29udmVyc2F0aW9uc0NvbXBvbmVudCxcclxuXHRcdERhdGVJbnB1dENvbXBvbmVudCxcclxuXHRcdERhdGVwaWNrZXJNb2RhbCxcclxuXHRcdERhdGVXaXRoSG91cnNQaXBlLFxyXG5cdFx0RnVsbERhdGVQaXBlLFxyXG5cdFx0VGltZUFnb1BpcGUsXHJcblx0XHROb3RpZmljYXRpb25zQ29tcG9uZW50LFxyXG5cdFx0TGlzdFNlbGVjdE1vZGFsLFxyXG5cdFx0TG9jYXRpb25Nb2RhbCxcclxuXHRcdExvY2F0aW9uSW5wdXRDb21wb25lbnQsXHJcblx0XHRVcGxvYWRNb2RhbCxcclxuXHRcdFVwbG9hZFBob3RvQ29tcG9uZW50LFxyXG5cdFx0U2VsZWN0SW5wdXRDb21wb25lbnQsXHJcblx0XHRSYWRpb0J1dHRvbnNDb21wb25lbnQsXHJcblx0XHRcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEF2YXRhckNvbXBvbmVudCxcclxuXHRcdENoZWNrYm94Q29tcG9uZW50LFxyXG5cdFx0RGF0ZUlucHV0Q29tcG9uZW50LFxyXG5cdFx0RGF0ZXBpY2tlck1vZGFsLFxyXG5cdFx0RGF0ZVdpdGhIb3Vyc1BpcGUsXHJcblx0XHRGdWxsRGF0ZVBpcGUsXHJcblx0XHRUaW1lQWdvUGlwZSxcclxuXHRcdExpc3RTZWxlY3RNb2RhbCxcclxuXHRcdExvY2F0aW9uTW9kYWwsXHJcblx0XHRMb2NhdGlvbklucHV0Q29tcG9uZW50LFxyXG5cdFx0VXBsb2FkTW9kYWwsXHJcblx0XHRVcGxvYWRQaG90b0NvbXBvbmVudCxcclxuXHRcdFNlbGVjdElucHV0Q29tcG9uZW50LFxyXG5cdFx0UmFkaW9CdXR0b25zQ29tcG9uZW50LFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH0iXX0=