"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_angular_1 = require("nativescript-angular");
var shared_module_1 = require("~/modules/shared.module");
var social_feed_module_1 = require("~/modules/social-feed/social-feed.module");
var tasks_module_1 = require("~/modules/tasks/tasks.module");
var wedding_module_1 = require("~/modules/wedding/wedding.module");
var marketplace_module_1 = require("~/modules/marketplace/marketplace.module");
var root_store_module_1 = require("~/root-store/root-store.module");
var components_1 = require("~/shared/components");
var main_routing_1 = require("~/shared/main.routing");
var services_1 = require("~/shared/services");
var http_request_interceptor_1 = require("~/shared/interceptors/http-request.interceptor");
var auth_module_1 = require("~/modules/auth/auth.module");
var app_component_1 = require("./app.component");
var add_member_1 = require("~/shared/modals/add-member");
var http_2 = require("@angular/http");
var angular2_moment_1 = require("angular2-moment");
var vendor_service_1 = require("~/shared/services/vendor.service");
var profile_service_1 = require("~/shared/services/profile.service");
var message_service_1 = require("~/shared/services/message.service");
var notification_service_1 = require("~/shared/services/notification.service");
nativescript_angular_1.registerElement('Gradient', function () { return require('nativescript-gradient').Gradient; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                components_1.DialogsComponent,
                components_1.MenuComponent,
                components_1.LoggedInAppComponent,
                components_1.AddProductModal,
                components_1.CreateCoupleComponent,
                components_1.CreateCoupleProfileComponent,
                components_1.CreateCouplePartnerComponent,
                components_1.CreateCouplePrivacyComponent,
                components_1.CreateVendorComponent,
                components_1.CreateVendorProfileComponent,
                components_1.CreateVendorPhotosComponent,
                components_1.CreateVendorProductsComponent,
                components_1.CreateVendorPaymentComponent,
                components_1.TopBarComponent,
                components_1.MemberComponent,
                add_member_1.AddMemberModal
            ],
            entryComponents: [
                components_1.AddProductModal,
                add_member_1.AddMemberModal
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                auth_module_1.AuthModule,
                root_store_module_1.RootStoreModule,
                tasks_module_1.TasksModule,
                wedding_module_1.WeddingModule,
                marketplace_module_1.MarketplaceModule,
                social_feed_module_1.SocialFeedModule,
                shared_module_1.SharedModule,
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(main_routing_1.mainRouting),
                http_2.HttpModule,
                angular2_moment_1.MomentModule
            ],
            providers: services_1.appServices.concat([
                vendor_service_1.VendorService,
                profile_service_1.ProfileService,
                message_service_1.MessageService,
                notification_service_1.NotificationService,
                nativescript_angular_1.ModalDialogService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: http_request_interceptor_1.RequestInterceptor,
                    multi: true
                }
            ]),
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXlEO0FBQ3pELHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkRBQXFHO0FBRXJHLHlEQUF1RDtBQUN2RCwrRUFBNEU7QUFDNUUsNkRBQTJEO0FBQzNELG1FQUFpRTtBQUNqRSwrRUFBNkU7QUFHN0Usb0VBQWlFO0FBQ2pFLGtEQWdCNkI7QUFFN0Isc0RBQW9EO0FBQ3BELDhDQUFnRDtBQUVoRCwyRkFBb0Y7QUFDcEYsMERBQXdEO0FBQ3hELGlEQUErQztBQUUvQyx5REFBNEQ7QUFFNUQsc0NBQTJDO0FBQzNDLG1EQUErQztBQUMvQyxtRUFBaUU7QUFDakUscUVBQW1FO0FBQ25FLHFFQUFtRTtBQUNuRSwrRUFBNkU7QUFFN0Usc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBd0Q3RTtJQUFBO0lBQ0EsQ0FBQztJQURZLFNBQVM7UUF0RHJCLGVBQVEsQ0FBQztZQUNULFlBQVksRUFBRTtnQkFDYiw0QkFBWTtnQkFDWiw2QkFBZ0I7Z0JBQ2hCLDBCQUFhO2dCQUNiLGlDQUFvQjtnQkFDcEIsNEJBQWU7Z0JBQ2Ysa0NBQXFCO2dCQUNyQix5Q0FBNEI7Z0JBQzVCLHlDQUE0QjtnQkFDNUIseUNBQTRCO2dCQUM1QixrQ0FBcUI7Z0JBQ3JCLHlDQUE0QjtnQkFDNUIsd0NBQTJCO2dCQUMzQiwwQ0FBNkI7Z0JBQzdCLHlDQUE0QjtnQkFDNUIsNEJBQWU7Z0JBQ2YsNEJBQWU7Z0JBQ2YsMkJBQWM7YUFDZDtZQUNELGVBQWUsRUFBRTtnQkFDaEIsNEJBQWU7Z0JBQ2YsMkJBQWM7YUFDZDtZQUNELFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7WUFDM0IsT0FBTyxFQUFFO2dCQUNSLHdCQUFVO2dCQUNWLG1DQUFlO2dCQUNmLDBCQUFXO2dCQUNYLDhCQUFhO2dCQUNiLHNDQUFpQjtnQkFDakIscUNBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWix3Q0FBa0I7Z0JBQ2xCLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLDBCQUFXLENBQUM7Z0JBQzdDLGlCQUFVO2dCQUNWLDhCQUFZO2FBQ1o7WUFDRCxTQUFTLEVBQ0wsc0JBQVc7Z0JBQ2QsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsMENBQW1CO2dCQUNuQix5Q0FBa0I7Z0JBQ2xCO29CQUNDLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSw2Q0FBa0I7b0JBQzVCLEtBQUssRUFBRSxJQUFJO2lCQUNYO2NBQ0Q7WUFDRCxPQUFPLEVBQUUsQ0FBRSx1QkFBZ0IsQ0FBRTtTQUM3QixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCByZWdpc3RlckVsZW1lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICd+L21vZHVsZXMvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNvY2lhbEZlZWRNb2R1bGUgfSBmcm9tICd+L21vZHVsZXMvc29jaWFsLWZlZWQvc29jaWFsLWZlZWQubW9kdWxlJztcclxuaW1wb3J0IHsgVGFza3NNb2R1bGUgfSBmcm9tICd+L21vZHVsZXMvdGFza3MvdGFza3MubW9kdWxlJztcclxuaW1wb3J0IHsgV2VkZGluZ01vZHVsZSB9IGZyb20gJ34vbW9kdWxlcy93ZWRkaW5nL3dlZGRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgTWFya2V0cGxhY2VNb2R1bGUgfSBmcm9tICd+L21vZHVsZXMvbWFya2V0cGxhY2UvbWFya2V0cGxhY2UubW9kdWxlJztcclxuXHJcblxyXG5pbXBvcnQgeyBSb290U3RvcmVNb2R1bGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvcm9vdC1zdG9yZS5tb2R1bGUnO1xyXG5pbXBvcnQge1xyXG5cdENyZWF0ZUNvdXBsZUNvbXBvbmVudCxcclxuXHRDcmVhdGVDb3VwbGVQYXJ0bmVyQ29tcG9uZW50LFxyXG5cdENyZWF0ZUNvdXBsZVByaXZhY3lDb21wb25lbnQsXHJcblx0Q3JlYXRlQ291cGxlUHJvZmlsZUNvbXBvbmVudCxcclxuXHRDcmVhdGVWZW5kb3JDb21wb25lbnQsXHJcblx0Q3JlYXRlVmVuZG9yUHJvZmlsZUNvbXBvbmVudCxcclxuXHREaWFsb2dzQ29tcG9uZW50LFxyXG5cdE1lbnVDb21wb25lbnQsXHJcblx0TG9nZ2VkSW5BcHBDb21wb25lbnQsXHJcblx0VG9wQmFyQ29tcG9uZW50LFxyXG5cdENyZWF0ZVZlbmRvclBob3Rvc0NvbXBvbmVudCxcclxuXHRDcmVhdGVWZW5kb3JQcm9kdWN0c0NvbXBvbmVudCxcclxuXHRDcmVhdGVWZW5kb3JQYXltZW50Q29tcG9uZW50LFxyXG5cdEFkZFByb2R1Y3RNb2RhbCxcclxuXHRNZW1iZXJDb21wb25lbnQsLy85LjVcclxufSBmcm9tICd+L3NoYXJlZC9jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IG1haW5Sb3V0aW5nIH0gZnJvbSAnfi9zaGFyZWQvbWFpbi5yb3V0aW5nJztcclxuaW1wb3J0IHsgYXBwU2VydmljZXMgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgeyBSZXF1ZXN0SW50ZXJjZXB0b3IgfSBmcm9tICd+L3NoYXJlZC9pbnRlcmNlcHRvcnMvaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJ34vbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEFkZE1lbWJlck1vZGFsIH0gZnJvbSAnfi9zaGFyZWQvbW9kYWxzL2FkZC1tZW1iZXInO1xyXG5cclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1tb21lbnQnO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudCgnR3JhZGllbnQnLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtZ3JhZGllbnQnKS5HcmFkaWVudCk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0QXBwQ29tcG9uZW50LFxyXG5cdFx0RGlhbG9nc0NvbXBvbmVudCxcclxuXHRcdE1lbnVDb21wb25lbnQsXHJcblx0XHRMb2dnZWRJbkFwcENvbXBvbmVudCxcclxuXHRcdEFkZFByb2R1Y3RNb2RhbCxcclxuXHRcdENyZWF0ZUNvdXBsZUNvbXBvbmVudCxcclxuXHRcdENyZWF0ZUNvdXBsZVByb2ZpbGVDb21wb25lbnQsXHJcblx0XHRDcmVhdGVDb3VwbGVQYXJ0bmVyQ29tcG9uZW50LFxyXG5cdFx0Q3JlYXRlQ291cGxlUHJpdmFjeUNvbXBvbmVudCxcclxuXHRcdENyZWF0ZVZlbmRvckNvbXBvbmVudCxcclxuXHRcdENyZWF0ZVZlbmRvclByb2ZpbGVDb21wb25lbnQsXHJcblx0XHRDcmVhdGVWZW5kb3JQaG90b3NDb21wb25lbnQsXHJcblx0XHRDcmVhdGVWZW5kb3JQcm9kdWN0c0NvbXBvbmVudCxcclxuXHRcdENyZWF0ZVZlbmRvclBheW1lbnRDb21wb25lbnQsXHJcblx0XHRUb3BCYXJDb21wb25lbnQsXHJcblx0XHRNZW1iZXJDb21wb25lbnQsLy85LjVcclxuXHRcdEFkZE1lbWJlck1vZGFsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEFkZFByb2R1Y3RNb2RhbCxcclxuXHRcdEFkZE1lbWJlck1vZGFsXHJcblx0XSxcclxuXHRib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcblx0aW1wb3J0czogW1x0XHRcclxuXHRcdEF1dGhNb2R1bGUsXHJcblx0XHRSb290U3RvcmVNb2R1bGUsXHJcblx0XHRUYXNrc01vZHVsZSxcclxuXHRcdFdlZGRpbmdNb2R1bGUsXHJcblx0XHRNYXJrZXRwbGFjZU1vZHVsZSxcclxuXHRcdFNvY2lhbEZlZWRNb2R1bGUsXHJcblx0XHRTaGFyZWRNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChtYWluUm91dGluZyksXHJcblx0XHRIdHRwTW9kdWxlLCBcclxuXHRcdE1vbWVudE1vZHVsZVxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5hcHBTZXJ2aWNlcyxcclxuXHRcdFZlbmRvclNlcnZpY2UsXHJcblx0XHRQcm9maWxlU2VydmljZSxcclxuXHRcdE1lc3NhZ2VTZXJ2aWNlLFxyXG5cdFx0Tm90aWZpY2F0aW9uU2VydmljZSxcclxuXHRcdE1vZGFsRGlhbG9nU2VydmljZSxcclxuXHRcdHtcclxuXHRcdFx0cHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcblx0XHRcdHVzZUNsYXNzOiBSZXF1ZXN0SW50ZXJjZXB0b3IsXHJcblx0XHRcdG11bHRpOiB0cnVlXHJcblx0XHR9XHJcblx0XSxcclxuXHRzY2hlbWFzOiBbIE5PX0VSUk9SU19TQ0hFTUEgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn0iXX0=