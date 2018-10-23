"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router"); //2018.9.4
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var services_1 = require("~/shared/services");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, routerExtensions) {
        this.authService = authService;
        this.routerExtensions = routerExtensions;
        this.processing = false;
        this.userType = 'couple';
        console.log("---register---");
    }
    RegisterComponent.prototype.setType = function (userType) {
        this.userType = userType;
    };
    RegisterComponent.prototype.signUp = function () {
        /*
        if (this.userType === 'guest') {
            this.routerExtensions.navigate(['/app', 'social-feed']);
        } else {
            this.routerExtensions.navigate(['/app', this.userType]);
        }
         //2018.9.4 This is deleted after screen test
        /**/
        var _this = this;
        if (!this.email || !this.password || !this.repeatPassword || !this.firstName || !this.lastName) {
            this.alert("Please provide all required input.");
            return;
        }
        if (this.repeatPassword != this.password) {
            this.alert("Please confirm repeat password and password.");
            return;
        }
        this.processing = true;
        this.authService.register({
            email: this.email,
            password: this.password,
            password_repeat: this.repeatPassword,
            first_name: this.firstName,
            last_name: this.lastName
        })
            .then(function () {
            _this.processing = false;
            if (_this.userType === 'guest') {
                _this.routerExtensions.navigate(['/app', 'social-feed']);
            }
            else {
                _this.routerExtensions.navigate(['/app', _this.userType]);
            }
        })
            .catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately we could not register your account. Please confirm your network connection");
            //--delete after test----------------------------------
            if (_this.userType === 'guest') {
                _this.routerExtensions.navigate(['/app', 'social-feed']);
            }
            else {
                _this.routerExtensions.navigate(['/app', _this.userType]);
            }
            //-----------------------------------------------------------
        });
    };
    RegisterComponent.prototype.onFieldChange = function (args, field) {
        var textField = args.object;
        this[field] = textField.text;
    };
    RegisterComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "Wedding App",
            okButtonText: "OK",
            message: message
        });
    };
    RegisterComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.AuthService, router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEwQztBQUUxQyxzREFBK0QsQ0FBQyxVQUFVO0FBQzFFLHVEQUFvRDtBQUdwRCw4Q0FBZ0Q7QUFRaEQ7SUFXQywyQkFDUyxXQUF3QixFQUFVLGdCQUFrQztRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFWN0UsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU9aLGFBQVEsR0FBVyxRQUFRLENBQUM7UUFLbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsUUFBZ0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQzs7Ozs7OztZQU9JO1FBUkwsaUJBNkNDO1FBbkNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUM7UUFDakIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQztRQUNqQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7UUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDcEMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUFFLENBQUM7YUFDM0IsSUFBSSxDQUFDO1lBQ0wsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztRQUNGLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNOLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLENBQUMsMEZBQTBGLENBQUMsQ0FBQztZQUN2Ryx1REFBdUQ7WUFDdkQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUNELDZEQUE2RDtRQUM5RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFTSx5Q0FBYSxHQUFwQixVQUFxQixJQUFTLEVBQUUsS0FBYTtRQUM1QyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBSyxHQUFMLFVBQU0sT0FBZTtRQUNkLE1BQU0sQ0FBQyxlQUFLLENBQUM7WUFDVCxLQUFLLEVBQUUsYUFBYTtZQUNwQixZQUFZLEVBQUUsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBL0VRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQztpREFhcUIsc0JBQVcsRUFBNEIseUJBQWdCO09BWmpFLGlCQUFpQixDQWdGN0I7SUFBRCx3QkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiOyAvLzIwMTguOS40XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuXHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCB7XHJcblxyXG5cdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHRwcml2YXRlIGVtYWlsOiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xyXG5cdHByaXZhdGUgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZztcclxuXHRwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgbGFzdE5hbWU6IHN0cmluZztcclxuXHRcclxuXHRwdWJsaWMgdXNlclR5cGU6IHN0cmluZyA9ICdjb3VwbGUnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuXHQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tcmVnaXN0ZXItLS1cIilcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRUeXBlKHVzZXJUeXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMudXNlclR5cGUgPSB1c2VyVHlwZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzaWduVXAoKTogdm9pZCB7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHRoaXMudXNlclR5cGUgPT09ICdndWVzdCcpIHtcclxuXHRcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2FwcCcsICdzb2NpYWwtZmVlZCddKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9hcHAnLCB0aGlzLnVzZXJUeXBlXSk7XHJcblx0XHR9XHJcblx0XHQgLy8yMDE4LjkuNCBUaGlzIGlzIGRlbGV0ZWQgYWZ0ZXIgc2NyZWVuIHRlc3RcclxuXHRcdC8qKi9cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmVtYWlsIHx8ICF0aGlzLnBhc3N3b3JkIHx8ICF0aGlzLnJlcGVhdFBhc3N3b3JkIHx8ICF0aGlzLmZpcnN0TmFtZSB8fCAhdGhpcy5sYXN0TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYWxsIHJlcXVpcmVkIGlucHV0LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnJlcGVhdFBhc3N3b3JkICE9IHRoaXMucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBjb25maXJtIHJlcGVhdCBwYXNzd29yZCBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLnByb2Nlc3NpbmcgPSB0cnVlXHJcblx0XHR0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHtcclxuXHRcdFx0ZW1haWw6IHRoaXMuZW1haWwsXHJcblx0XHRcdHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG5cdFx0XHRwYXNzd29yZF9yZXBlYXQ6IHRoaXMucmVwZWF0UGFzc3dvcmQsXHJcblx0XHRcdGZpcnN0X25hbWU6IHRoaXMuZmlyc3ROYW1lLFxyXG5cdFx0XHRsYXN0X25hbWU6IHRoaXMubGFzdE5hbWUgfSlcclxuXHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzaW5nID0gZmFsc2VcclxuXHRcdFx0aWYgKHRoaXMudXNlclR5cGUgPT09ICdndWVzdCcpIHtcclxuXHRcdFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvYXBwJywgJ3NvY2lhbC1mZWVkJ10pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9hcHAnLCB0aGlzLnVzZXJUeXBlXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgcmVnaXN0ZXIgeW91ciBhY2NvdW50LiBQbGVhc2UgY29uZmlybSB5b3VyIG5ldHdvcmsgY29ubmVjdGlvblwiKTtcclxuXHRcdFx0Ly8tLWRlbGV0ZSBhZnRlciB0ZXN0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRpZiAodGhpcy51c2VyVHlwZSA9PT0gJ2d1ZXN0Jykge1xyXG5cdFx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9hcHAnLCAnc29jaWFsLWZlZWQnXSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2FwcCcsIHRoaXMudXNlclR5cGVdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0cHVibGljIG9uRmllbGRDaGFuZ2UoYXJnczogYW55LCBmaWVsZDogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdDtcclxuXHRcdHRoaXNbZmllbGRdID0gdGV4dEZpZWxkLnRleHQ7XHJcblx0fVxyXG5cclxuXHRhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJXZWRkaW5nIEFwcFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==