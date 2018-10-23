"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var nativescript_angular_1 = require("nativescript-angular");
var applicationSettings = require("application-settings");
var actions_1 = require("~/root-store/auth-store/actions");
var configs_1 = require("~/shared/configs");
var dialogs_service_1 = require("~/shared/services/dialogs.service");
var enum_1 = require("~/shared/types/enum");
var AuthService = /** @class */ (function () {
    function AuthService(http, store, dialogsService, routerExt) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.dialogsService = dialogsService;
        this.routerExt = routerExt;
        this.apiUrlAccount = configs_1.API_URL + '/account';
        this.apiUrl = configs_1.API_URL + '/auth';
        console.log("---authService---");
        this.token = applicationSettings.getString('jwt', '');
        console.log(this.token);
        if (this.token) {
            setTimeout(function () {
                _this.store.dispatch({ type: actions_1.AuthActionTypes.LOGIN });
            });
        }
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.clearToken = function () {
        applicationSettings.remove('jwt');
    };
    AuthService.prototype.register = function (params) {
        var _this = this;
        console.log("---auth-register---");
        return new Promise(function (resolve, reject) {
            _this.http.post(configs_1.API_URL + "/auth/register", params).subscribe(function (response) {
                /*
                this.dialogsService.showDialog({
                    type: DialogType.Info,
                    message: 'Registered, please activate your email'
                });
                this.routerExt.navigate(['']);
                */
                console.log(response.result);
                resolve();
            }, function (error) {
                console.log(error.result);
                reject();
            });
        });
    };
    AuthService.prototype.registerSocial = function (params) {
        return this.http.post(configs_1.API_URL + '/auth/register/social', params);
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(configs_1.API_URL + "/auth/authenticate", { email: email, password: password }).subscribe(function (response) {
                _this.token = response.result.token;
                configs_1.Config.token = response.result.token;
                applicationSettings.setString('jwt', _this.token);
                _this.store.dispatch({ type: actions_1.AuthActionTypes.LOGIN });
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    AuthService.prototype.loginSocial = function (foreign_id, token, provider) {
        return this.http.post(configs_1.API_URL + "/auth/authenticate/social", { foreign_id: foreign_id, token: token, provider: provider });
    };
    AuthService.prototype.activateAccount = function (hash) {
        return this.http.post(configs_1.API_URL + "/auth/activate", { hash: hash });
    };
    AuthService.prototype.sendRemindPassword = function (email) {
        var _this = this;
        this.http.post(configs_1.API_URL + "/auth/password/remind", { email: email })
            .subscribe(function () {
            _this.dialogsService.showDialog({
                type: enum_1.DialogType.Info,
                message: 'Email sent, should be there in 5 minutes'
            });
        });
    };
    AuthService.prototype.setPassword = function (hash, password, password_repeat) {
        return this.http.post(configs_1.API_URL + "/auth/password/set", { hash: hash, password: password, password_repeat: password_repeat });
    };
    AuthService.prototype.logout = function () {
        return this.http.post(configs_1.API_URL + "/auth/logout", {});
    };
    AuthService.prototype.changePassword = function (_a) {
        var password_new = _a.password_new, password_new_repeat = _a.password_new_repeat, password = _a.password;
        return this.http.post(this.apiUrl + "/password/change", { password_new: password_new, password_new_repeat: password_new_repeat, password: password });
    };
    // ------------ END Register/login requests END ----------- //
    AuthService.prototype.getAccountInfo = function () {
        return this.http.get(configs_1.API_URL + "/auth/authenticate");
    };
    AuthService.prototype.deleteAccount = function (_a) {
        var password = _a.password;
        return this.http.post(this.apiUrl + "/forget", { password: password });
    };
    AuthService.prototype.updateAccount = function (account) {
        return this.http.patch(this.apiUrlAccount, account);
    };
    AuthService.prototype.setAccountAvatar = function (formData) {
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrlAccount, formData, {
            headers: headers
        });
    };
    AuthService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            store_1.Store,
            dialogs_service_1.DialogsService,
            nativescript_angular_1.RouterExtensions])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUErRDtBQUMvRCxzQ0FBMkM7QUFDM0MscUNBQW9DO0FBQ3BDLDZEQUF3RDtBQUV4RCwwREFBNEQ7QUFHNUQsMkRBQWtFO0FBRWxFLDRDQUFtRDtBQUNuRCxxRUFBbUU7QUFDbkUsNENBQWlEO0FBR2pEO0lBS0MscUJBQ1MsSUFBZ0IsRUFDaEIsS0FBbUIsRUFDbkIsY0FBOEIsRUFDOUIsU0FBMkI7UUFKcEMsaUJBY0M7UUFiUSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTjVCLGtCQUFhLEdBQVcsaUJBQU8sR0FBRyxVQUFVLENBQUM7UUFDN0MsV0FBTSxHQUFXLGlCQUFPLEdBQUcsT0FBTyxDQUFDO1FBTzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsVUFBVSxDQUFDO2dCQUNWLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLHlCQUFlLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFD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T0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLHNDQUFnQixHQUF2QixVQUF3QixRQUFRO1FBQzVCLElBQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFO1lBQ2pELE9BQU8sU0FBQTtTQUNWLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuSVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO2lEQU9HLGlCQUFVO1lBQ1QsYUFBSztZQUNJLGdDQUFjO1lBQ25CLHVDQUFnQjtPQVR4QixXQUFXLENBb0l2QjtJQUFELGtCQUFDO0NBQUEsQUFwSUQsSUFvSUM7QUFwSVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoQWN0aW9uVHlwZXMgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvYXV0aC1zdG9yZS9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IEFQSV9VUkwsIENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5pbXBvcnQgeyBEaWFsb2dzU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL2RpYWxvZ3Muc2VydmljZSc7XHJcbmltcG9ydCB7IERpYWxvZ1R5cGUgfSBmcm9tICd+L3NoYXJlZC90eXBlcy9lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuXHJcblx0cHJpdmF0ZSB0b2tlbjogc3RyaW5nXHJcblx0cHJpdmF0ZSBhcGlVcmxBY2NvdW50OiBzdHJpbmcgPSBBUElfVVJMICsgJy9hY2NvdW50JztcclxuXHRwcml2YXRlIGFwaVVybDogc3RyaW5nID0gQVBJX1VSTCArICcvYXV0aCc7XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWxvZ3NTZXJ2aWNlOiBEaWFsb2dzU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zXHJcblx0KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLWF1dGhTZXJ2aWNlLS0tXCIpXHJcblx0XHR0aGlzLnRva2VuID0gYXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ2p3dCcsICcnKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMudG9rZW4pXHJcblx0XHRpZiAodGhpcy50b2tlbikge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKHt0eXBlOiBBdXRoQWN0aW9uVHlwZXMuTE9HSU59KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRUb2tlbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMudG9rZW47XHJcblx0fVxyXG5cdHB1YmxpYyBjbGVhclRva2VuKCk6IHZvaWQge1xyXG5cdFx0YXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoJ2p3dCcpO1xyXG4gICAgfVxyXG5cclxuXHRyZWdpc3RlcihwYXJhbXM6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS1hdXRoLXJlZ2lzdGVyLS0tXCIpXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0aGlzLmh0dHAucG9zdChgJHtBUElfVVJMfS9hdXRoL3JlZ2lzdGVyYCwgXHJcblx0XHRcdHBhcmFtc1xyXG5cdFx0XHQpLnN1YnNjcmliZShcclxuXHRcdFx0XHQocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdHRoaXMuZGlhbG9nc1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IERpYWxvZ1R5cGUuSW5mbyxcclxuXHRcdFx0XHRcdFx0bWVzc2FnZTogJ1JlZ2lzdGVyZWQsIHBsZWFzZSBhY3RpdmF0ZSB5b3VyIGVtYWlsJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJyddKTtcclxuXHRcdFx0XHRcdCovXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5yZXN1bHQpXHJcblx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvci5yZXN1bHQpXHJcblx0XHRcdFx0XHRyZWplY3QoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZWdpc3RlclNvY2lhbChwYXJhbXM6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoQVBJX1VSTCsnL2F1dGgvcmVnaXN0ZXIvc29jaWFsJywgcGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmh0dHAucG9zdChgJHtBUElfVVJMfS9hdXRoL2F1dGhlbnRpY2F0ZWAsXHJcblx0XHRcdHtlbWFpbCwgcGFzc3dvcmR9XHJcblx0XHRcdCkuc3Vic2NyaWJlKFxyXG5cdFx0XHRcdChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnRva2VuID0gcmVzcG9uc2UucmVzdWx0LnRva2VuO1xyXG5cdFx0XHRcdFx0Q29uZmlnLnRva2VuID0gcmVzcG9uc2UucmVzdWx0LnRva2VuO1xyXG5cdFx0XHRcdFx0YXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoJ2p3dCcsIHRoaXMudG9rZW4pO1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaCh7dHlwZTogQXV0aEFjdGlvblR5cGVzLkxPR0lOfSk7XHJcblx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHR9LCBlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRyZWplY3QoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0KVxyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbG9naW5Tb2NpYWwoZm9yZWlnbl9pZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwcm92aWRlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtBUElfVVJMfS9hdXRoL2F1dGhlbnRpY2F0ZS9zb2NpYWxgLFxyXG5cdFx0XHR7Zm9yZWlnbl9pZCwgdG9rZW4sIHByb3ZpZGVyfVxyXG5cdFx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFjdGl2YXRlQWNjb3VudChoYXNoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvYWN0aXZhdGVgLCB7aGFzaH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbmRSZW1pbmRQYXNzd29yZChlbWFpbDogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLmh0dHAucG9zdChgJHtBUElfVVJMfS9hdXRoL3Bhc3N3b3JkL3JlbWluZGAsIHtlbWFpbH0pXHJcblx0XHRcdC5zdWJzY3JpYmUoXHJcblx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5kaWFsb2dzU2VydmljZS5zaG93RGlhbG9nKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogRGlhbG9nVHlwZS5JbmZvLFxyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiAnRW1haWwgc2VudCwgc2hvdWxkIGJlIHRoZXJlIGluIDUgbWludXRlcydcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpXHJcblx0XHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0UGFzc3dvcmQoaGFzaDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBwYXNzd29yZF9yZXBlYXQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7QVBJX1VSTH0vYXV0aC9wYXNzd29yZC9zZXRgLFxyXG5cdFx0XHR7aGFzaCwgcGFzc3dvcmQsIHBhc3N3b3JkX3JlcGVhdH1cclxuXHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtBUElfVVJMfS9hdXRoL2xvZ291dGAsIHt9KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGNoYW5nZVBhc3N3b3JkKHtwYXNzd29yZF9uZXcsIHBhc3N3b3JkX25ld19yZXBlYXQsIHBhc3N3b3JkfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpVXJsfS9wYXNzd29yZC9jaGFuZ2VgLCB7cGFzc3dvcmRfbmV3LCBwYXNzd29yZF9uZXdfcmVwZWF0LCBwYXNzd29yZH0pO1xyXG4gICAgfVxyXG5cdC8vIC0tLS0tLS0tLS0tLSBFTkQgUmVnaXN0ZXIvbG9naW4gcmVxdWVzdHMgRU5EIC0tLS0tLS0tLS0tIC8vXHJcblxyXG5cdHB1YmxpYyBnZXRBY2NvdW50SW5mbygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QVBJX1VSTH0vYXV0aC9hdXRoZW50aWNhdGVgKTtcclxuXHR9XHJcblx0cHVibGljIGRlbGV0ZUFjY291bnQoe3Bhc3N3b3JkfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpVXJsfS9mb3JnZXRgLCB7cGFzc3dvcmR9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQWNjb3VudChhY2NvdW50OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2godGhpcy5hcGlVcmxBY2NvdW50LCBhY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWNjb3VudEF2YXRhcihmb3JtRGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLmFwaVVybEFjY291bnQsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==