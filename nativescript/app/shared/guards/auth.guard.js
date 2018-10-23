"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("~/shared/services");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.getToken()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib_1.__decorate([
        core_1.NgModule({
            providers: [services_1.AuthService]
        }),
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            services_1.AuthService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXFEO0FBQ3JELDBDQUFzRDtBQUV0RCw4Q0FBZ0Q7QUFNaEQ7SUFFQyxtQkFDUyxNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzdCLENBQUM7SUFFRSwrQkFBVyxHQUFsQjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBYlcsU0FBUztRQUpyQixlQUFRLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQyxzQkFBVyxDQUFDO1NBQ3RCLENBQUM7UUFDSCxpQkFBVSxFQUFFO2lEQUlLLGVBQU07WUFDRCxzQkFBVztPQUpyQixTQUFTLENBY3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxyXG4gIH0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcclxuXHQpIHsgfVxyXG5cclxuXHRwdWJsaWMgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcbiJdfQ==