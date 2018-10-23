"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var store_1 = require("@ngrx/store");
var actions_1 = require("./actions");
var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions$, store, router) {
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.setActiveProfile$ = this.actions$.pipe(effects_1.ofType(actions_1.ProfileActionTypes.SET_ACTIVE_PROFILE), operators_1.tap(function (action) {
            if (action.payload.profile) {
                localStorage.setItem(action.payload.accountId + '-activeProfileId', action.payload.profile.id);
            }
        }));
    }
    tslib_1.__decorate([
        effects_1.Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], ProfileEffects.prototype, "setActiveProfile$", void 0);
    ProfileEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            store_1.Store,
            router_1.Router])
    ], ProfileEffects);
    return ProfileEffects;
}());
exports.ProfileEffects = ProfileEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUN6Qyx5Q0FBd0Q7QUFDeEQsNENBQXNHO0FBRXRHLHFDQUFvQztBQUVwQyxxQ0FLbUI7QUFJbkI7SUFFSSx3QkFDWSxRQUFpQixFQUNqQixLQUFtQixFQUNuQixNQUFjO1FBRmQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFJMUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xDLGdCQUFNLENBQW1CLDRCQUFrQixDQUFDLGtCQUFrQixDQUFDLEVBQy9ELGVBQUcsQ0FBQyxVQUFBLE1BQU07WUFDTixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkcsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFWRSxDQUFDO0lBR0w7UUFEQyxnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDOzs2REFRMUI7SUFoQk8sY0FBYztRQUQxQixpQkFBVSxFQUFFO2lEQUlhLGlCQUFPO1lBQ1YsYUFBSztZQUNKLGVBQU07T0FMakIsY0FBYyxDQWtCMUI7SUFBRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIG1hcFRvLCB3aXRoTGF0ZXN0RnJvbSwgY29uY2F0TWFwVG8sIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFByb2ZpbGVBY3Rpb25UeXBlcyxcclxuICAgIFNldEFjdGl2ZVByb2ZpbGUsXHJcbiAgICBTZXRBY3RpdmVQcm9maWxlU3VjY2VzcyxcclxuICAgIFNldEFjdGl2ZVByb2ZpbGVGYWlsdXJlLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnfi9yb290LXN0b3JlL3Byb2ZpbGUtc3RvcmUvc3RhdGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVmZmVjdHMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICkgeyB9XHJcblxyXG4gICAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG4gICAgc2V0QWN0aXZlUHJvZmlsZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgICAgICAgb2ZUeXBlPFNldEFjdGl2ZVByb2ZpbGU+KFByb2ZpbGVBY3Rpb25UeXBlcy5TRVRfQUNUSVZFX1BST0ZJTEUpLFxyXG4gICAgICAgIHRhcChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZihhY3Rpb24ucGF5bG9hZC5wcm9maWxlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhY3Rpb24ucGF5bG9hZC5hY2NvdW50SWQgKyAnLWFjdGl2ZVByb2ZpbGVJZCcsIGFjdGlvbi5wYXlsb2FkLnByb2ZpbGUuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG59XHJcbiJdfQ==