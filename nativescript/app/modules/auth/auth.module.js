"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_angular_1 = require("nativescript-angular");
var components_1 = require("~/modules/auth/components");
var shared_module_1 = require("../shared.module");
var auth_routing_1 = require("./auth.routing");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                components_1.LoginComponent,
                components_1.RegisterComponent,
                components_1.RemindPasswordComponent,
                components_1.SetPasswordComponent,
                components_1.AccountsettingsComponent,
                components_1.WelcomeComponent,
            ],
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                shared_module_1.SharedModule,
                nativescript_angular_1.NativeScriptRouterModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(auth_routing_1.authRoutes)
            ],
            exports: [
                components_1.AccountsettingsComponent,
                nativescript_angular_1.NativeScriptRouterModule
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBd0Q7QUFDeEQsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyw2REFBZ0U7QUFFaEUsd0RBT21DO0FBQ25DLGtEQUFnRDtBQUNoRCwrQ0FBNEM7QUF1QjVDO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFyQnRCLGVBQVEsQ0FBQztZQUNULFlBQVksRUFBRTtnQkFDYiwyQkFBYztnQkFDZCw4QkFBaUI7Z0JBQ2pCLG9DQUF1QjtnQkFDdkIsaUNBQW9CO2dCQUNwQixxQ0FBd0I7Z0JBQ3hCLDZCQUFnQjthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUixxQkFBWTtnQkFDWix1QkFBZ0I7Z0JBQ2hCLDRCQUFZO2dCQUNaLCtDQUF3QjtnQkFDeEIsK0NBQXdCLENBQUMsT0FBTyxDQUFDLHlCQUFVLENBQUM7YUFDNUM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IscUNBQXdCO2dCQUN4QiwrQ0FBd0I7YUFDeEI7U0FDRCxDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHtcclxuXHRMb2dpbkNvbXBvbmVudCxcclxuXHRSZWdpc3RlckNvbXBvbmVudCxcclxuXHRSZW1pbmRQYXNzd29yZENvbXBvbmVudCxcclxuXHRTZXRQYXNzd29yZENvbXBvbmVudCxcclxuXHRBY2NvdW50c2V0dGluZ3NDb21wb25lbnQsXHJcblx0V2VsY29tZUNvbXBvbmVudFxyXG59IGZyb20gJ34vbW9kdWxlcy9hdXRoL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgYXV0aFJvdXRlcyB9IGZyb20gJy4vYXV0aC5yb3V0aW5nJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRMb2dpbkNvbXBvbmVudCxcclxuXHRcdFJlZ2lzdGVyQ29tcG9uZW50LFxyXG5cdFx0UmVtaW5kUGFzc3dvcmRDb21wb25lbnQsXHJcblx0XHRTZXRQYXNzd29yZENvbXBvbmVudCxcclxuXHRcdEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCxcclxuXHRcdFdlbGNvbWVDb21wb25lbnQsXHJcblx0XSxcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0U2hhcmVkTW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxyXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXV0aFJvdXRlcylcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCxcclxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUgeyB9Il19