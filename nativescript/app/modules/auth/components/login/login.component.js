"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router"); //2018.9.4
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var services_1 = require("~/shared/services");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, routerExtensions) {
        this.authService = authService;
        this.routerExtensions = routerExtensions;
        this.processing = false;
        console.log("---SignIn---");
    }
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.processing = true;
        this.passwordInputRef.nativeElement.dismissSoftInput();
        console.log(this.email);
        console.log(this.password);
        if (!this.email || !this.password) {
            this.processing = false;
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.authService.login(this.email, this.password)
            .then(function () {
            _this.processing = false;
        })
            .catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately we could not find your account. Please confirm your email and password");
            _this.passwordInputRef.nativeElement.text = "";
        });
    };
    LoginComponent.prototype.onFieldChange = function (args, field) {
        var textField = args.object;
        this[field] = textField.text;
    };
    LoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "Wedding App",
            okButtonText: "OK",
            message: message
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('passwordInput'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "passwordInputRef", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('emailInput'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "emailInputRef", void 0);
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.AuthService, router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpRTtBQUVqRSxzREFBK0QsQ0FBQyxVQUFVO0FBQzFFLHVEQUE0RDtBQUU1RCw4Q0FBZ0Q7QUFRaEQ7SUFTQyx3QkFDUyxXQUF3QixFQUFVLGdCQUFrQztRQUFwRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIN0UsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtsQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQUEsaUJBcUJDO1FBcEJBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUV0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUM7UUFDakIsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoRCxJQUFJLENBQUM7WUFDTCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUM7WUFDTixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsS0FBSyxDQUFDLHNGQUFzRixDQUFDLENBQUM7WUFDbkcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLElBQVMsRUFBRSxLQUFhO1FBQzVDLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxPQUFlO1FBQ2QsTUFBTSxDQUFDLGVBQUssQ0FBQztZQUNULEtBQUssRUFBRSxhQUFhO1lBQ3BCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUEvQ3dCO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzBDQUFtQixpQkFBVTs0REFBQTtJQUMvQjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzswQ0FBZ0IsaUJBQVU7eURBQUE7SUFIdEMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQztpREFXcUIsc0JBQVcsRUFBNEIseUJBQWdCO09BVmpFLGNBQWMsQ0FtRDFCO0lBQUQscUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInOyAvLzIwMTguOS40XHJcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdsb2dpbicsXHJcblx0dGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cclxuXHRAVmlld0NoaWxkKCdwYXNzd29yZElucHV0JykgcGFzc3dvcmRJbnB1dFJlZjogRWxlbWVudFJlZlxyXG5cdEBWaWV3Q2hpbGQoJ2VtYWlsSW5wdXQnKSBlbWFpbElucHV0UmVmOiBFbGVtZW50UmVmXHJcblxyXG5cdHB1YmxpYyBlbWFpbDogc3RyaW5nO1xyXG5cdHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xyXG5cdHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcblx0KXtcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tU2lnbkluLS0tXCIpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2lnbkluKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wcm9jZXNzaW5nID0gdHJ1ZVxyXG5cdFx0dGhpcy5wYXNzd29yZElucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpXHJcblxyXG5cdFx0Y29uc29sZS5sb2codGhpcy5lbWFpbCk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBhc3N3b3JkKTtcclxuXHRcdGlmICghdGhpcy5lbWFpbCB8fCAhdGhpcy5wYXNzd29yZCkge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hbGVydChcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblx0XHR9IFxyXG5cdFx0XHJcblx0XHR0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpXHJcblx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuIFBsZWFzZSBjb25maXJtIHlvdXIgZW1haWwgYW5kIHBhc3N3b3JkXCIpO1xyXG5cdFx0XHR0aGlzLnBhc3N3b3JkSW5wdXRSZWYubmF0aXZlRWxlbWVudC50ZXh0PVwiXCJcclxuXHRcdH0pXHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBvbkZpZWxkQ2hhbmdlKGFyZ3M6IGFueSwgZmllbGQ6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0bGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblx0XHR0aGlzW2ZpZWxkXSA9IHRleHRGaWVsZC50ZXh0O1xyXG5cdH1cclxuXHRcclxuXHRhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJXZWRkaW5nIEFwcFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=