"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var nativescript_angular_1 = require("nativescript-angular");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var applicationSettings = require("tns-core-modules/application-settings");
var actions_1 = require("~/root-store/wedding-store/actions");
var actions_2 = require("./actions");
var auth_service_1 = require("~/shared/services/auth.service");
var wedding_service_1 = require("../../shared/services/wedding.service");
var configs_1 = require("~/shared/configs");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, weddingService, routerExt, store) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.weddingService = weddingService;
        this.routerExt = routerExt;
        this.store = store;
        this.login = this.actions$.pipe(effects_1.ofType(actions_2.AuthActionTypes.LOGIN), operators_1.tap(function () {
            console.log("go to social feed");
            _this.store.dispatch(new actions_2.GetAuthInfo());
            // this.weddingService.getWeddingsID();
            _this.routerExt.navigate(['/app', 'social-feed']);
        }));
        this.getAuthInfo$ = this.actions$.pipe(effects_1.ofType(actions_2.AuthActionTypes.GET_AUTH_INFO), operators_1.exhaustMap(function () {
            return _this.authService
                .getAccountInfo()
                .pipe(operators_1.concatMap(function (response) {
                console.log("Get Auth Info");
                console.log(response);
                configs_1.Config.authInfo = response.result.account;
                return [
                    new actions_2.GetAuthInfoSuccess(response.result),
                    new actions_1.GetWeddings(),
                ];
            }), operators_1.catchError(function (error) { return of_1.of(new actions_2.GetAuthInfoFailure(error)); }));
        }));
        this.logout$ = this.actions$.pipe(effects_1.ofType(actions_2.AuthActionTypes.LOGOUT), operators_1.exhaustMap(function () {
            return _this.authService
                .logout()
                .pipe(operators_1.map(function (response) { return new actions_2.LogoutSuccess(); }), operators_1.catchError(function (error) { return of_1.of(new actions_2.LogoutFailure()); }));
        }));
        this.logoutSuccess$ = this.actions$.pipe(effects_1.ofType(actions_2.AuthActionTypes.LOGOUT_SUCCESS), operators_1.tap(function (authed) {
            applicationSettings.remove('jwt');
            _this.routerExt.navigate(['/welcome']);
        }));
    }
    tslib_1.__decorate([
        effects_1.Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "login", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "getAuthInfo$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    tslib_1.__decorate([
        effects_1.Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], AuthEffects.prototype, "logoutSuccess$", void 0);
    AuthEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            auth_service_1.AuthService,
            wedding_service_1.WeddingService,
            nativescript_angular_1.RouterExtensions,
            store_1.Store])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUF3RDtBQUN4RCxxQ0FBb0M7QUFDcEMsNkRBQXdEO0FBQ3hELHlDQUF3QztBQUN4Qyw0Q0FBNkU7QUFDN0UsMkVBQTZFO0FBRTdFLDhEQUFpRTtBQUVqRSxxQ0FRbUI7QUFDbkIsK0RBQTZEO0FBRTdELHlFQUF1RTtBQUN2RSw0Q0FBMEM7QUFHMUM7SUFFQyxxQkFDUyxRQUFpQixFQUNqQixXQUF3QixFQUN4QixjQUE4QixFQUM5QixTQUEyQixFQUMzQixLQUFtQjtRQUw1QixpQkFNSztRQUxJLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFJNUIsVUFBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN6QixnQkFBTSxDQUFjLHlCQUFlLENBQUMsS0FBSyxDQUFDLEVBQzFDLGVBQUcsQ0FBQztZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLHVDQUF1QztZQUV2QyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FDRCxDQUNELENBQUM7UUFHRixpQkFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQyxnQkFBTSxDQUFjLHlCQUFlLENBQUMsYUFBYSxDQUFDLEVBQ2xELHNCQUFVLENBQUM7WUFDVixPQUFBLEtBQUksQ0FBQyxXQUFXO2lCQUNkLGNBQWMsRUFBRTtpQkFDaEIsSUFBSSxDQUNKLHFCQUFTLENBQUMsVUFBQyxRQUFRO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixnQkFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsTUFBTSxDQUFDO29CQUNOLElBQUksNEJBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDdkMsSUFBSSxxQkFBVyxFQUFFO2lCQUNqQixDQUFBO1lBQ0YsQ0FBQyxDQUFDLEVBQ0Ysc0JBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQUUsQ0FBQyxJQUFJLDRCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FDdEQ7UUFiRixDQWFFLENBQ0YsQ0FDRCxDQUFDO1FBR0YsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQixnQkFBTSxDQUFTLHlCQUFlLENBQUMsTUFBTSxDQUFDLEVBQ3RDLHNCQUFVLENBQUM7WUFDVixPQUFBLEtBQUksQ0FBQyxXQUFXO2lCQUNkLE1BQU0sRUFBRTtpQkFDUixJQUFJLENBQ0osZUFBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsSUFBSSx1QkFBYSxFQUFFLEVBQW5CLENBQW1CLENBQUMsRUFDcEMsc0JBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQUUsQ0FBQyxJQUFJLHVCQUFhLEVBQUUsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQzVDO1FBTEYsQ0FLRSxDQUNGLENBQ0QsQ0FBQztRQUdGLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xDLGdCQUFNLENBQWdCLHlCQUFlLENBQUMsY0FBYyxDQUFDLEVBQ3JELGVBQUcsQ0FBQyxVQUFBLE1BQU07WUFDVCxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUNGLENBQUE7SUExREcsQ0FBQztJQUdMO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7OENBWTFCO0lBR0Y7UUFEQyxnQkFBTSxFQUFFOztxREFtQlA7SUFHRjtRQURDLGdCQUFNLEVBQUU7O2dEQVdQO0lBR0Y7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzt1REFRM0I7SUFsRVcsV0FBVztRQUR2QixpQkFBVSxFQUFFO2lEQUlPLGlCQUFPO1lBQ0osMEJBQVc7WUFDUixnQ0FBYztZQUNuQix1Q0FBZ0I7WUFDcEIsYUFBSztPQVBULFdBQVcsQ0FtRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBleGhhdXN0TWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBHZXRXZWRkaW5ncyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuXHRBdXRoQWN0aW9uVHlwZXMsXHJcblx0R2V0QXV0aEluZm8sXHJcblx0R2V0QXV0aEluZm9GYWlsdXJlLFxyXG5cdEdldEF1dGhJbmZvU3VjY2VzcyxcclxuXHRMb2dvdXQsXHJcblx0TG9nb3V0U3VjY2VzcyxcclxuXHRMb2dvdXRGYWlsdXJlXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBzZWxlY3RBY3RpdmVXZWRkaW5nIH0gZnJvbSAnLi4vd2VkZGluZy1zdG9yZS9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBXZWRkaW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy93ZWRkaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L3NoYXJlZC9jb25maWdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhFZmZlY3RzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHdlZGRpbmdTZXJ2aWNlOiBXZWRkaW5nU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+XHJcblx0KSB7IH1cclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdGxvZ2luID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPEdldEF1dGhJbmZvPihBdXRoQWN0aW9uVHlwZXMuTE9HSU4pLFxyXG5cdFx0dGFwKCgpID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImdvIHRvIHNvY2lhbCBmZWVkXCIpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IEdldEF1dGhJbmZvKCkpO1xyXG5cdFx0XHRcdC8vIHRoaXMud2VkZGluZ1NlcnZpY2UuZ2V0V2VkZGluZ3NJRCgpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9hcHAnLCAnc29jaWFsLWZlZWQnXSk7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRBdXRoSW5mbyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8R2V0QXV0aEluZm8+KEF1dGhBY3Rpb25UeXBlcy5HRVRfQVVUSF9JTkZPKSxcclxuXHRcdGV4aGF1c3RNYXAoKCkgPT5cclxuXHRcdFx0dGhpcy5hdXRoU2VydmljZVxyXG5cdFx0XHRcdC5nZXRBY2NvdW50SW5mbygpXHJcblx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRjb25jYXRNYXAoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiR2V0IEF1dGggSW5mb1wiKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRDb25maWcuYXV0aEluZm8gPSByZXNwb25zZS5yZXN1bHQuYWNjb3VudDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHRcdFx0XHRuZXcgR2V0QXV0aEluZm9TdWNjZXNzKHJlc3BvbnNlLnJlc3VsdCksXHJcblx0XHRcdFx0XHRcdFx0bmV3IEdldFdlZGRpbmdzKCksXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBHZXRBdXRoSW5mb0ZhaWx1cmUoZXJyb3IpKSlcclxuXHRcdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0bG9nb3V0JCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxMb2dvdXQ+KEF1dGhBY3Rpb25UeXBlcy5MT0dPVVQpLFxyXG5cdFx0ZXhoYXVzdE1hcCgoKSA9PlxyXG5cdFx0XHR0aGlzLmF1dGhTZXJ2aWNlXHJcblx0XHRcdFx0LmxvZ291dCgpXHJcblx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRtYXAocmVzcG9uc2UgPT4gbmV3IExvZ291dFN1Y2Nlc3MoKSksXHJcblx0XHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBMb2dvdXRGYWlsdXJlKCkpKVxyXG5cdFx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXHJcblx0bG9nb3V0U3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8TG9nb3V0U3VjY2Vzcz4oQXV0aEFjdGlvblR5cGVzLkxPR09VVF9TVUNDRVNTKSxcclxuXHRcdHRhcChhdXRoZWQgPT4ge1xyXG5cdFx0XHRhcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZSgnand0Jyk7XHJcblxyXG5cdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy93ZWxjb21lJ10pXHJcblx0XHR9KVxyXG5cdClcclxufVxyXG4iXX0=