"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("tns-core-modules/platform");
var root_store_1 = require("~/root-store");
var app_config_1 = require("../../../../shared/configs/app.config");
var platform_browser_1 = require("@angular/platform-browser");
var services_1 = require("~/shared/services");
var Toast = require("nativescript-toast");
var router_1 = require("@angular/router");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var FileSystem = require("file-system");
var AccountsettingsComponent = /** @class */ (function () {
    function AccountsettingsComponent(store, sanitizer, authService, changeDetector, router) {
        this.store = store;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.changeDetector = changeDetector;
        this.router = router;
        this.activeTab = 'account';
        this.changePasswordForm = {
            password: '',
            password_new: '',
            password_new_repeat: ''
        };
        this.deleteAccountPassword = '';
        console.log("---account-setting---");
        var screenHeight = platform_1.screen.mainScreen.heightDIPs;
        this.scrollHeight = screenHeight - 140;
        this.indicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    AccountsettingsComponent.prototype.setActiveTab = function (tab) {
        this.activeTab = tab;
    };
    AccountsettingsComponent.prototype.photoSelected = function (event) {
        console.log(event);
        this.selectedPicture = event;
        this.submitAvatar();
    };
    AccountsettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.submitted = {
            avatar: false,
            account: false,
            changePass: null
        };
        this.errors = {
            avatar: null,
            account: null,
            changePass: null
        };
        this.cdnUrl = app_config_1.CDN_URL;
        this.webUrl = app_config_1.WEB_URL;
        this.subAccount = this.store.select(root_store_1.AuthSelectors.selectAuthInfo).subscribe(function (state) {
            _this.account = state.account;
            _this.prependAvatarUrl = "account/" + _this.account.id + "/avatars/";
            if (_this.account.avatar) {
                _this.selectedPicture = app_config_1.CDN_URL + '/' + (_this.prependAvatarUrl ? _this.prependAvatarUrl + '/' : '') + _this.account.avatar.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
            }
        });
        this.formData = new FormData();
    };
    AccountsettingsComponent.prototype.fileChange = function (filepath) {
        var file = FileSystem.File.fromPath(filepath);
        if (file != null) {
            // const file: File = fileList[0];            
            this.url = (window.URL) ? window.URL.createObjectURL(file) : window.webkitURL.createObjectURL(file);
            this.formData.delete('avatar');
            this.formData.append('avatar', file, file.name);
            this.submitAvatar();
        }
    };
    AccountsettingsComponent.prototype.submitAvatar = function () {
        var _this = this;
        if (this.formData.get('avatar')) {
            this.submitted.avatar = true;
            this.indicator.show({
                message: 'Loading...'
            });
            this.authService.setAccountAvatar(this.formData).subscribe(function () {
                _this.store.dispatch(new root_store_1.AuthActions.GetAuthInfo());
                _this.submitted.avatar = false;
                _this.indicator.hide();
                // this._flashMessagesService.show('Account photo updated', { cssClass: 'alert-success', timeout: 3000 });
                Toast.makeText("Account photo updated", "long").show();
                _this.changeDetector.markForCheck();
            }, function (err) {
                _this.errors.avatar = err.error;
                _this.submitted.avatar = false;
                _this.indicator.hide();
                _this.changeDetector.markForCheck();
            });
            if (this.submitted.avatar && !this.errors.avatar) {
                // this.fileInput.nativeElement.value = '';
            }
        }
    };
    AccountsettingsComponent.prototype.submitAccountInfo = function () {
        var _this = this;
        this.submitted.account = true;
        this.indicator.show({
            message: 'Loading...'
        });
        this.authService.updateAccount(this.account).subscribe(function () {
            _this.store.dispatch(new root_store_1.AuthActions.GetAuthInfo());
            _this.submitted.account = false;
            _this.indicator.hide();
            // this._flashMessagesService.show('Account updated', { cssClass: 'alert-success', timeout: 3000 });
            Toast.makeText("Account updated", "long").show();
            _this.changeDetector.markForCheck();
        }, function (err) {
            _this.errors.account = err.error;
            _this.submitted.account = false;
            _this.indicator.hide();
            _this.changeDetector.markForCheck();
        });
    };
    AccountsettingsComponent.prototype.submitChangePassword = function () {
        var _this = this;
        this.indicator.show({
            message: 'Loading...'
        });
        this.submitted.changePass = true;
        this.authService.changePassword(this.changePasswordForm).subscribe(function () {
            _this.submitted.changePass = false;
            _this.indicator.hide();
            _this.changePasswordForm.password = '';
            _this.changePasswordForm.password_new = '';
            _this.changePasswordForm.password_new_repeat = '';
            // this._flashMessagesService.show('Password changed', {cssClass: 'alert-success', timeout: 3000});
        }, function (err) {
            _this.errors.changePass = err.error;
            _this.submitted.changePass = false;
            _this.indicator.hide();
        });
    };
    AccountsettingsComponent.prototype.submitDeleteAccount = function () {
        var _this = this;
        this.authService.deleteAccount({ password: this.deleteAccountPassword }).subscribe(function () {
            // this._flashMessagesService.show('Account deleted', {cssClass: 'alert-success', timeout: 3000});
            _this.authService.clearToken();
            _this.router.navigate(['settings', 'account']);
        });
    };
    AccountsettingsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'account-settings',
            templateUrl: 'account-settings.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            platform_browser_1.DomSanitizer,
            services_1.AuthService,
            core_1.ChangeDetectorRef,
            router_1.Router])
    ], AccountsettingsComponent);
    return AccountsettingsComponent;
}());
exports.AccountsettingsComponent = AccountsettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1zZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QscUNBQW9DO0FBQ3BDLHNEQUFtRDtBQUVuRCwyQ0FBaUU7QUFDakUsb0VBQXlFO0FBR3pFLDhEQUF5RDtBQUN6RCw4Q0FBZ0Q7QUFDaEQsMENBQTRDO0FBQzVDLDBDQUF5QztBQUN6QyxpRkFBa0U7QUFDbEUsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBT3hDO0lBNEJDLGtDQUNTLEtBQW1CLEVBQ3BCLFNBQXVCLEVBQ2hCLFdBQXdCLEVBQ3hCLGNBQWlDLEVBQ2pDLE1BQWM7UUFKcEIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBL0J0QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBbUIzQix1QkFBa0IsR0FBUTtZQUM3QixRQUFRLEVBQUUsRUFBRTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLG1CQUFtQixFQUFFLEVBQUU7U0FDMUIsQ0FBQztRQUNFLDBCQUFxQixHQUFHLEVBQUUsQ0FBQztRQVNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFFcEMsSUFBTSxZQUFZLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sK0NBQVksR0FBbkIsVUFBb0IsR0FBVztRQUM5QixJ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bSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuXHJcbmltcG9ydCB7IFN0YXRlLCBBdXRoU2VsZWN0b3JzLCBBdXRoQWN0aW9ucyB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IENETl9VUkwsIFdFQl9VUkwgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29uZmlncy9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgQXV0aEluZm8gfSBmcm9tICd+L3Jvb3Qtc3RvcmUvYXV0aC1zdG9yZS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBJU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tICduYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3InO1xyXG52YXIgRmlsZVN5c3RlbSA9IHJlcXVpcmUoXCJmaWxlLXN5c3RlbVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdhY2NvdW50LXNldHRpbmdzJywgLy85LjQgXHJcblx0dGVtcGxhdGVVcmw6ICdhY2NvdW50LXNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRzZXR0aW5nc0NvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBhY3RpdmVUYWI6IHN0cmluZyA9ICdhY2NvdW50JztcclxuXHRwdWJsaWMgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGluZGljYXRvcjogTG9hZGluZ0luZGljYXRvcjtcclxuICAgIFxyXG5cdHNlbGVjdGVkUGljdHVyZTpzdHJpbmc7XHJcblxyXG5cdGF2YXRhcjogYW55O1xyXG4gICAgYWNjb3VudDogYW55O1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBjZG5Vcmw6IHN0cmluZztcclxuICAgIHdlYlVybDogc3RyaW5nO1xyXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhO1xyXG4gICAgc3ViQWNjb3VudDogSVN1YnNjcmlwdGlvbjtcclxuICAgIHN1YkFjY291bnRGb3JtOiBJU3Vic2NyaXB0aW9uO1xyXG4gICAgc3VibWl0dGVkOiBhbnk7XHJcbiAgICBlcnJvcnM6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgcHJlcGVuZEF2YXRhclVybDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VQYXNzd29yZEZvcm06IGFueSA9IHtcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRfbmV3OiAnJyxcclxuICAgICAgICBwYXNzd29yZF9uZXdfcmVwZWF0OiAnJ1xyXG4gICAgfTtcclxuXHRwdWJsaWMgZGVsZXRlQWNjb3VudFBhc3N3b3JkID0gJyc7ICAgXHJcblx0XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG5cdCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS1hY2NvdW50LXNldHRpbmctLS1cIilcclxuXHRcdFxyXG5cdFx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuICAgICAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHNjcmVlbkhlaWdodCAtIDE0MDtcclxuICAgICAgICB0aGlzLmluZGljYXRvciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0QWN0aXZlVGFiKHRhYjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLmFjdGl2ZVRhYiA9IHRhYjtcclxuXHR9XHJcblx0cGhvdG9TZWxlY3RlZChldmVudCl7XHJcblx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBpY3R1cmUgPSBldmVudDtcclxuICAgICAgICB0aGlzLnN1Ym1pdEF2YXRhcigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB7XHJcbiAgICAgICAgICAgIGF2YXRhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGFjY291bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXNzOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IHtcclxuICAgICAgICAgICAgYXZhdGFyOiBudWxsLFxyXG4gICAgICAgICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICAgICAgICBjaGFuZ2VQYXNzOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNkblVybCA9IENETl9VUkw7XHJcbiAgICAgICAgdGhpcy53ZWJVcmwgPSBXRUJfVVJMO1xyXG5cclxuICAgICAgICB0aGlzLnN1YkFjY291bnQgPSB0aGlzLnN0b3JlLnNlbGVjdChcclxuICAgICAgICAgICAgQXV0aFNlbGVjdG9ycy5zZWxlY3RBdXRoSW5mb1xyXG4gICAgICAgICkuc3Vic2NyaWJlKChzdGF0ZTogQXV0aEluZm8pID0+IHtcdFx0XHRcclxuXHRcdFx0dGhpcy5hY2NvdW50ID0gc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5wcmVwZW5kQXZhdGFyVXJsID0gYGFjY291bnQvJHt0aGlzLmFjY291bnQuaWR9L2F2YXRhcnMvYDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWNjb3VudC5hdmF0YXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQaWN0dXJlID0gQ0ROX1VSTCArICcvJyArICh0aGlzLnByZXBlbmRBdmF0YXJVcmwgPyB0aGlzLnByZXBlbmRBdmF0YXJVcmwgKyAnLycgOiAnJykgKyB0aGlzLmFjY291bnQuYXZhdGFyLnJlcGxhY2UoLyhcXC5bXFx3XFxkXy1dKykkL2ksICdfc3EkMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHR9XHJcblx0cHVibGljIGZpbGVDaGFuZ2UoZmlsZXBhdGgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmlsZSA9IEZpbGVTeXN0ZW0uRmlsZS5mcm9tUGF0aChmaWxlcGF0aCk7XHJcbiAgICAgICAgaWYgKGZpbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBmaWxlOiBGaWxlID0gZmlsZUxpc3RbMF07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gKHdpbmRvdy5VUkwpID8gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkgOiAod2luZG93IGFzIGFueSkud2Via2l0VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRGF0YS5kZWxldGUoJ2F2YXRhcicpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZCgnYXZhdGFyJywgZmlsZSwgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QXZhdGFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXRBdmF0YXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybURhdGEuZ2V0KCdhdmF0YXInKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5hdmF0YXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5zaG93KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldEFjY291bnRBdmF0YXIodGhpcy5mb3JtRGF0YSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkdldEF1dGhJbmZvKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmF2YXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9mbGFzaE1lc3NhZ2VzU2VydmljZS5zaG93KCdBY2NvdW50IHBob3RvIHVwZGF0ZWQnLCB7IGNzc0NsYXNzOiAnYWxlcnQtc3VjY2VzcycsIHRpbWVvdXQ6IDMwMDAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJBY2NvdW50IHBob3RvIHVwZGF0ZWRcIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLmF2YXRhciA9IGVyci5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5hdmF0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN1Ym1pdHRlZC5hdmF0YXIgJiYgIXRoaXMuZXJyb3JzLmF2YXRhcikge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXRBY2NvdW50SW5mbygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZC5hY2NvdW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluZGljYXRvci5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnVwZGF0ZUFjY291bnQodGhpcy5hY2NvdW50KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEF1dGhBY3Rpb25zLkdldEF1dGhJbmZvKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQuYWNjb3VudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3IuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fZmxhc2hNZXNzYWdlc1NlcnZpY2Uuc2hvdygnQWNjb3VudCB1cGRhdGVkJywgeyBjc3NDbGFzczogJ2FsZXJ0LXN1Y2Nlc3MnLCB0aW1lb3V0OiAzMDAwIH0pO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJBY2NvdW50IHVwZGF0ZWRcIiwgXCJsb25nXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLmFjY291bnQgPSBlcnIuZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5hY2NvdW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0Q2hhbmdlUGFzc3dvcmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbmRpY2F0b3Iuc2hvdyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuY2hhbmdlUGFzcyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jaGFuZ2VQYXNzd29yZCh0aGlzLmNoYW5nZVBhc3N3b3JkRm9ybSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZC5jaGFuZ2VQYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRm9ybS5wYXNzd29yZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZEZvcm0ucGFzc3dvcmRfbmV3ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkRm9ybS5wYXNzd29yZF9uZXdfcmVwZWF0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9mbGFzaE1lc3NhZ2VzU2VydmljZS5zaG93KCdQYXNzd29yZCBjaGFuZ2VkJywge2Nzc0NsYXNzOiAnYWxlcnQtc3VjY2VzcycsIHRpbWVvdXQ6IDMwMDB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMuY2hhbmdlUGFzcyA9IGVyci5lcnJvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkLmNoYW5nZVBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdERlbGV0ZUFjY291bnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5kZWxldGVBY2NvdW50KHtwYXNzd29yZDogdGhpcy5kZWxldGVBY2NvdW50UGFzc3dvcmR9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX2ZsYXNoTWVzc2FnZXNTZXJ2aWNlLnNob3coJ0FjY291bnQgZGVsZXRlZCcsIHtjc3NDbGFzczogJ2FsZXJ0LXN1Y2Nlc3MnLCB0aW1lb3V0OiAzMDAwfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmNsZWFyVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnc2V0dGluZ3MnLCAnYWNjb3VudCddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19