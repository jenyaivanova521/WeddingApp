"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var services_1 = require("~/shared/services");
var RemindPasswordComponent = /** @class */ (function () {
    function RemindPasswordComponent(authService, routerExtensions) {
        this.authService = authService;
        this.routerExtensions = routerExtensions;
        this.email = '';
        console.log("---RemindPassword---");
    }
    RemindPasswordComponent.prototype.remindPassword = function () {
        //this.authService.sendRemindPassword(this.email);
        this.routerExtensions.back(); //9.4 This is deleted after screen test
    };
    RemindPasswordComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'remind-password',
            templateUrl: 'remind-password.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.AuthService, router_1.RouterExtensions])
    ], RemindPasswordComponent);
    return RemindPasswordComponent;
}());
exports.RemindPasswordComponent = RemindPasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtaW5kLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbWluZC1wYXNzd29yZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUE4RDtBQUU5RCw4Q0FBZ0Q7QUFPaEQ7SUFJQyxpQ0FDUyxXQUF3QixFQUFVLGdCQUFrQztRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIdEUsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUt6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVNLGdEQUFjLEdBQXJCO1FBQ0Msa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFDLHVDQUF1QztJQUNyRSxDQUFDO0lBYlcsdUJBQXVCO1FBTG5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1NBQzdDLENBQUM7aURBTXFCLHNCQUFXLEVBQTRCLHlCQUFnQjtPQUxqRSx1QkFBdUIsQ0FlbkM7SUFBRCw4QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAncmVtaW5kLXBhc3N3b3JkJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3JlbWluZC1wYXNzd29yZC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW1pbmRQYXNzd29yZENvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBlbWFpbDogc3RyaW5nID0gJyc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG5cdCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS1SZW1pbmRQYXNzd29yZC0tLVwiKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbWluZFBhc3N3b3JkKCk6IHZvaWQge1xyXG5cdFx0Ly90aGlzLmF1dGhTZXJ2aWNlLnNlbmRSZW1pbmRQYXNzd29yZCh0aGlzLmVtYWlsKTtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCkgLy85LjQgVGhpcyBpcyBkZWxldGVkIGFmdGVyIHNjcmVlbiB0ZXN0XHJcblx0fVxyXG5cclxufVxyXG4iXX0=