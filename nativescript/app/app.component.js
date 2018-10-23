"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_urlhandler_1 = require("nativescript-urlhandler");
var page_1 = require("tns-core-modules/ui/page"); //for actionbar hidden
var services_1 = require("~/shared/services");
var dialogs_service_1 = require("~/shared/services/dialogs.service");
var enum_1 = require("~/shared/types/enum");
var AppComponent = /** @class */ (function () {
    function AppComponent(vcRef, routerExt, modalService, authService, changeDetector, dialogsService, page) {
        this.vcRef = vcRef;
        this.routerExt = routerExt;
        this.modalService = modalService;
        this.authService = authService;
        this.changeDetector = changeDetector;
        this.dialogsService = dialogsService;
        this.page = page;
        this.handlingRedirection = false;
        console.log("---AppComponent---");
        this.page.actionBarHidden = true; //hide ationbar
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        nativescript_urlhandler_1.handleOpenURL(function (AppURL) {
            _this.handleRouting(AppURL);
        });
        this.modalService.setContainerRef(this.vcRef);
        console.log("---AppInit---");
    };
    AppComponent.prototype.handleRouting = function (url) {
        var _this = this;
        console.log("handleRouting");
        if (!this.handlingRedirection) {
            this.handlingRedirection = true;
            var decodedUrl = decodeURIComponent(url);
            if (decodedUrl) {
                var indexOfActivate = decodedUrl.indexOf('activate/') + 9;
                decodedUrl = decodedUrl.slice(indexOfActivate);
                var params = decodedUrl.split('?');
                var hash_1 = params.shift();
                // TODO fix redirecting to couple profile creation to only when these params after another routes are added redirect=%2Fwedding%3Flayout%3Dblank&app=true
                params.forEach(function (param) {
                    var arr = param.split('=');
                    if (arr[0] === 'redirect') {
                        if (arr[1] !== '/wedding') {
                            _this.routerExt.navigate([arr[1]]);
                            _this.handlingRedirection = false;
                        }
                        else {
                            if (hash_1) {
                                _this.authService.activateAccount(hash_1).subscribe(function (res) {
                                    _this.dialogsService.showDialog({
                                        type: enum_1.DialogType.Info,
                                        message: 'Account activated successfully'
                                    });
                                    _this.routerExt.navigateByUrl("/app/couple").then(function () {
                                        _this.changeDetector.detectChanges();
                                    });
                                    _this.handlingRedirection = false;
                                }, function () {
                                    _this.handlingRedirection = false;
                                });
                            }
                            else {
                                _this.handlingRedirection = false;
                            }
                        }
                    }
                });
            }
        }
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ViewContainerRef,
            nativescript_angular_1.RouterExtensions,
            services_1.ModalService,
            services_1.AuthService,
            core_1.ChangeDetectorRef,
            dialogs_service_1.DialogsService,
            page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXVGO0FBQ3ZGLDZEQUF3RDtBQUN4RCxtRUFBZ0U7QUFDaEUsaURBQWdELENBQUMsc0JBQXNCO0FBRXZFLDhDQUE4RDtBQUM5RCxxRUFBbUU7QUFDbkUsNENBQWlEO0FBTWpEO0lBSUMsc0JBQ1MsS0FBdUIsRUFDdkIsU0FBMkIsRUFDM0IsWUFBMEIsRUFDMUIsV0FBd0IsRUFDeEIsY0FBaUMsRUFDakMsY0FBOEIsRUFDOUIsSUFBVTtRQU5WLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVRYLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQVc1QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMsZUFBZTtJQUNsRCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkEsdUNBQWEsQ0FBQyxVQUFDLE1BQWM7WUFDNUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixHQUFXO1FBQWhDLGlCQW1EQztRQWxEQSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBRTVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLElBQUksVUFBVSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1RCxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDL0MsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFckMsSUFBTSxNQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUU1Qix5SkFBeUo7Z0JBQ3pKLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhO29CQUM1QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUU3QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQzt3QkFDbEMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDUCxFQUFFLENBQUMsQ0FBQyxNQUFJLENBQUMsQ0FBQyxDQUFDO2dDQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQUksQ0FBQyxDQUFDLFNBQVMsQ0FDL0MsVUFBQyxHQUFHO29DQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO3dDQUM5QixJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJO3dDQUNyQixPQUFPLEVBQUUsZ0NBQWdDO3FDQUN6QyxDQUFDLENBQUM7b0NBRUgsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDO3dDQUNoRCxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO29DQUNyQyxDQUFDLENBQUMsQ0FBQztvQ0FDSCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO2dDQUNsQyxDQUFDLEVBQ0Q7b0NBQ0MsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztnQ0FDbEMsQ0FBQyxDQUNELENBQUE7NEJBQ0YsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDUCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDOzRCQUNsQyxDQUFDO3dCQUNGLENBQUM7b0JBQ0YsQ0FBQztnQkFFRixDQUFDLENBQUMsQ0FBQztZQUdKLENBQUM7UUFDRixDQUFDO0lBRUYsQ0FBQztJQTdFVyxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2pDLENBQUM7aURBTWUsdUJBQWdCO1lBQ1osdUNBQWdCO1lBQ2IsdUJBQVk7WUFDYixzQkFBVztZQUNSLHdCQUFpQjtZQUNqQixnQ0FBYztZQUN4QixXQUFJO09BWFAsWUFBWSxDQStFeEI7SUFBRCxtQkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IGhhbmRsZU9wZW5VUkwsIEFwcFVSTCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11cmxoYW5kbGVyJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjsgLy9mb3IgYWN0aW9uYmFyIGhpZGRlblxyXG5cclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRGlhbG9nc1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9kaWFsb2dzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaWFsb2dUeXBlIH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ215LWFwcCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRwcml2YXRlIGhhbmRsaW5nUmVkaXJlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuXHRcdHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0XHRwcml2YXRlIGRpYWxvZ3NTZXJ2aWNlOiBEaWFsb2dzU2VydmljZSxcclxuXHRcdHByaXZhdGUgcGFnZTogUGFnZSxcclxuXHQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tQXBwQ29tcG9uZW50LS0tXCIpXHJcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgLy9oaWRlIGF0aW9uYmFyXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdGhhbmRsZU9wZW5VUkwoKEFwcFVSTDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdHRoaXMuaGFuZGxlUm91dGluZyhBcHBVUkwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2V0Q29udGFpbmVyUmVmKHRoaXMudmNSZWYpO1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS1BcHBJbml0LS0tXCIpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaGFuZGxlUm91dGluZyh1cmw6IHN0cmluZykge1xyXG5cdFx0Y29uc29sZS5sb2coXCJoYW5kbGVSb3V0aW5nXCIpXHJcblx0XHRcclxuXHRcdGlmICghdGhpcy5oYW5kbGluZ1JlZGlyZWN0aW9uKSB7XHJcblx0XHRcdHRoaXMuaGFuZGxpbmdSZWRpcmVjdGlvbiA9IHRydWU7XHJcblx0XHRcdGxldCBkZWNvZGVkVXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybCk7XHJcblx0XHRcdGlmIChkZWNvZGVkVXJsKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXhPZkFjdGl2YXRlID0gZGVjb2RlZFVybC5pbmRleE9mKCdhY3RpdmF0ZS8nKSArIDk7XHJcblx0XHRcdFx0ZGVjb2RlZFVybCA9IGRlY29kZWRVcmwuc2xpY2UoaW5kZXhPZkFjdGl2YXRlKTtcclxuXHRcdFx0XHRjb25zdCBwYXJhbXMgPSBkZWNvZGVkVXJsLnNwbGl0KCc/Jyk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGhhc2ggPSBwYXJhbXMuc2hpZnQoKTtcclxuXHJcblx0XHRcdFx0Ly8gVE9ETyBmaXggcmVkaXJlY3RpbmcgdG8gY291cGxlIHByb2ZpbGUgY3JlYXRpb24gdG8gb25seSB3aGVuIHRoZXNlIHBhcmFtcyBhZnRlciBhbm90aGVyIHJvdXRlcyBhcmUgYWRkZWQgcmVkaXJlY3Q9JTJGd2VkZGluZyUzRmxheW91dCUzRGJsYW5rJmFwcD10cnVlXHJcblx0XHRcdFx0cGFyYW1zLmZvckVhY2goKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGFyclswXSA9PT0gJ3JlZGlyZWN0Jykge1xyXG5cdFx0XHRcdFx0XHRpZiAoYXJyWzFdICE9PSAnL3dlZGRpbmcnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yb3V0ZXJFeHQubmF2aWdhdGUoW2FyclsxXV0pO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaGFuZGxpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChoYXNoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmF1dGhTZXJ2aWNlLmFjdGl2YXRlQWNjb3VudChoYXNoKS5zdWJzY3JpYmUoXHJcblx0XHRcdFx0XHRcdFx0XHRcdChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRpYWxvZ3NTZXJ2aWNlLnNob3dEaWFsb2coe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogRGlhbG9nVHlwZS5JbmZvLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ0FjY291bnQgYWN0aXZhdGVkIHN1Y2Nlc3NmdWxseSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yb3V0ZXJFeHQubmF2aWdhdGVCeVVybChgL2FwcC9jb3VwbGVgKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaGFuZGxpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGluZ1JlZGlyZWN0aW9uID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVxyXG4iXX0=