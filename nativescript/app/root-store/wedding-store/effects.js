"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var applicationSettings = require("application-settings");
var actions_1 = require("~/root-store/task-store/actions");
var services_1 = require("~/shared/services");
var enum_1 = require("~/shared/types/enum");
var actions_2 = require("./actions");
var WeddingEffects = /** @class */ (function () {
    function WeddingEffects(actions$, weddingService, taskService, store, dialogsService) {
        var _this = this;
        this.actions$ = actions$;
        this.weddingService = weddingService;
        this.taskService = taskService;
        this.store = store;
        this.dialogsService = dialogsService;
        this.getWeddings$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.GET_WEDDINGS), operators_1.exhaustMap(function () {
            return _this.weddingService
                .getWeddings()
                .pipe(operators_1.map(function (response) { return new actions_2.GetWeddingsSuccess({
                weddings: response.result
            }); }));
        }));
        this.getWeddingsSuccess$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.GET_WEDDINGS_SUCCESS), operators_1.map(function (action) {
            var weddings = action.payload.weddings;
            var activeWeddingId = applicationSettings.getString('activeWeddingId');
            if (!activeWeddingId && weddings[0]) {
                activeWeddingId = weddings[0].id;
                applicationSettings.setString('activeWeddingId', activeWeddingId);
            }
            return new actions_2.SetActiveWedding();
        }));
        this.setActiveWedding$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.SET_ACTIVE_WEDDING), operators_1.withLatestFrom(this.store), operators_1.map(function (_a) {
            var action = _a[0], store = _a[1];
            var accountId = store.auth.authInfo.account.id;
            var activeWeddingId = action.payload ? action.payload.id : null;
            var localActiveWeddingId = applicationSettings.getString(accountId + "-activeWeddingId");
            var activeWedding = null;
            var weddings = store.wedding.weddings;
            if (!activeWeddingId && localActiveWeddingId) {
                activeWeddingId = localActiveWeddingId;
            }
            else if (!activeWeddingId && weddings[0]) {
                activeWeddingId = weddings[0].id;
            }
            if (activeWeddingId) {
                applicationSettings.setString(accountId + "-activeWeddingId", activeWeddingId);
            }
            if (activeWeddingId && weddings) {
                for (var i = 0; i < weddings.length; i++) {
                    var wedding = weddings[i];
                    if (wedding.id == activeWeddingId) {
                        activeWedding = wedding;
                        break;
                    }
                }
            }
            if (!activeWedding) {
                applicationSettings.remove(accountId + "-activeWeddingId");
            }
            if (activeWedding) {
                return new actions_2.SetActiveWeddingSuccess({
                    wedding: activeWedding
                });
            }
            else {
                return new actions_2.SetActiveWeddingFailure();
            }
        }));
        this.setActiveWeddingSuccess$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.SET_ACTIVE_WEDDING_SUCCESS), operators_1.map(function (action) { return action.payload; }), operators_1.concatMap(function (payload) { return [
            new actions_2.GetWeddingMembers(),
            new actions_1.GetTasks({ weddingId: payload.wedding.id })
        ]; }));
        this.getWeddingMembers$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.GET_WEDDING_MEMBERS), operators_1.exhaustMap(function (action) {
            return _this.weddingService
                .getWeddingMembers()
                .pipe(operators_1.map(function (response) { return new actions_2.GetWeddingMembersSuccess({
                weddingMembers: response.result
            }); }));
        }));
        this.createWedding$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.CREATE_WEDDING), operators_1.exhaustMap(function (action) {
            return _this.weddingService
                .createWedding(action.payload)
                .pipe(operators_1.concatMapTo([
                new actions_2.GetWeddings(),
                new actions_2.CreateWeddingSuccess()
            ]), operators_1.catchError(function (error) { return of_1.of(new actions_2.CreateWeddingFailure(error)); }));
        }));
        this.updateWedding$ = this.actions$.pipe(effects_1.ofType(actions_2.WeddingActionTypes.UPDATE_WEDDING), operators_1.exhaustMap(function (action) {
            var wedding = action.payload.wedding;
            return _this.weddingService
                .changeWeddingName({
                name: wedding.name
            })
                .pipe(operators_1.map(function (response) {
                _this.dialogsService.showDialog({
                    type: enum_1.DialogType.Success,
                    message: 'Wedding updated successfully'
                });
                return new actions_2.UpdateWeddingSuccess({
                    wedding: wedding
                });
            }), operators_1.catchError(function (error) {
                _this.dialogsService.showDialog({
                    type: enum_1.DialogType.Alert,
                    message: error.error.title
                });
                return of_1.of(new actions_2.UpdateWeddingFailure({ error: error.error }));
            }));
        }));
    }
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "getWeddings$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "getWeddingsSuccess$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "setActiveWedding$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "setActiveWeddingSuccess$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "getWeddingMembers$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "createWedding$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], WeddingEffects.prototype, "updateWedding$", void 0);
    WeddingEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            services_1.WeddingService,
            services_1.TaskService,
            store_1.Store,
            services_1.DialogsService])
    ], WeddingEffects);
    return WeddingEffects;
}());
exports.WeddingEffects = WeddingEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUF3RDtBQUN4RCxxQ0FBb0M7QUFDcEMseUNBQXdDO0FBQ3hDLDRDQUFxRztBQUNyRywwREFBNEQ7QUFHNUQsMkRBQTJEO0FBRTNELDhDQUFnRjtBQUNoRiw0Q0FBaUQ7QUFFakQscUNBbUJtQjtBQUduQjtJQUVDLHdCQUNTLFFBQWlCLEVBQ2pCLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLEtBQW1CLEVBQ25CLGNBQThCO1FBTHZDLGlCQU1LO1FBTEksYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFJdkMsaUJBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEMsZ0JBQU0sQ0FBYyw0QkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFDcEQsc0JBQVUsQ0FBQztZQUNWLE9BQUEsS0FBSSxDQUFDLGNBQWM7aUJBQ2pCLFdBQVcsRUFBRTtpQkFDYixJQUFJLENBQ0osZUFBRyxDQUNGLFVBQUEsUUFBUSxJQUFJLE9BQUEsSUFBSSw0QkFBa0IsQ0FBQztnQkFDbEMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNO2FBQ3pCLENBQUMsRUFGVSxDQUVWLENBQ0YsQ0FDRDtRQVJGLENBUUUsQ0FDRixDQUNELENBQUM7UUFHRix3QkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkMsZ0JBQU0sQ0FBcUIsNEJBQWtCLENBQUMsb0JBQW9CLENBQUMsRUFDbkUsZUFBRyxDQUFDLFVBQUMsTUFBTTtZQUNWLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lB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QXZKRSxDQUFDO0lBR0w7UUFEQyxnQkFBTSxFQUFFOzt3REFjUDtJQUdGO1FBREMsZ0JBQU0sRUFBRTs7K0RBZVA7SUFHRjtRQURDLGdCQUFNLEVBQUU7OzZEQTRDUDtJQUdGO1FBREMsZ0JBQU0sRUFBRTs7b0VBUVA7SUFHRjtRQURDLGdCQUFNLEVBQUU7OzhEQVlQO0lBR0Y7UUFEQyxnQkFBTSxFQUFFOzswREFjUDtJQUdGO1FBREMsZ0JBQU0sRUFBRTs7MERBOEJQO0lBL0pVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtpREFJTyxpQkFBTztZQUNELHlCQUFjO1lBQ2pCLHNCQUFXO1lBQ2pCLGFBQUs7WUFDSSx5QkFBYztPQVAzQixjQUFjLENBaUsxQjtJQUFELHFCQUFDO0NBQUEsQUFqS0QsSUFpS0M7QUFqS1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9vZic7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgd2l0aExhdGVzdEZyb20sIGNvbmNhdE1hcCwgY29uY2F0TWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBHZXRUYXNrcyB9IGZyb20gJ34vcm9vdC1zdG9yZS90YXNrLXN0b3JlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBQcml2YWN5U2V0dGluZ0VudW0sIFdlZGRpbmdSb2xlRW51bSB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcbmltcG9ydCB7IERpYWxvZ3NTZXJ2aWNlLCBUYXNrU2VydmljZSwgV2VkZGluZ1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IERpYWxvZ1R5cGUgfSBmcm9tICd+L3NoYXJlZC90eXBlcy9lbnVtJztcclxuXHJcbmltcG9ydCB7XHJcblx0V2VkZGluZ0FjdGlvblR5cGVzLFxyXG5cdEdldFdlZGRpbmdzLFxyXG5cdEdldFdlZGRpbmdzU3VjY2VzcyxcclxuXHJcblx0U2V0QWN0aXZlV2VkZGluZyxcclxuXHRTZXRBY3RpdmVXZWRkaW5nU3VjY2VzcyxcclxuXHRTZXRBY3RpdmVXZWRkaW5nRmFpbHVyZSxcclxuXHJcblx0Q3JlYXRlV2VkZGluZyxcclxuXHRDcmVhdGVXZWRkaW5nU3VjY2VzcyxcclxuXHRDcmVhdGVXZWRkaW5nRmFpbHVyZSxcclxuXHJcblx0R2V0V2VkZGluZ01lbWJlcnMsXHJcblx0R2V0V2VkZGluZ01lbWJlcnNTdWNjZXNzLFxyXG5cclxuXHRVcGRhdGVXZWRkaW5nLFxyXG5cdFVwZGF0ZVdlZGRpbmdTdWNjZXNzLFxyXG5cdFVwZGF0ZVdlZGRpbmdGYWlsdXJlLFxyXG59IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWRkaW5nRWZmZWN0cyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcclxuXHRcdHByaXZhdGUgd2VkZGluZ1NlcnZpY2U6IFdlZGRpbmdTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWxvZ3NTZXJ2aWNlOiBEaWFsb2dzU2VydmljZSxcclxuXHQpIHsgfVxyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRXZWRkaW5ncyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8R2V0V2VkZGluZ3M+KFdlZGRpbmdBY3Rpb25UeXBlcy5HRVRfV0VERElOR1MpLFxyXG5cdFx0ZXhoYXVzdE1hcCgoKSA9PlxyXG5cdFx0XHR0aGlzLndlZGRpbmdTZXJ2aWNlXHJcblx0XHRcdFx0LmdldFdlZGRpbmdzKClcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdG1hcChcclxuXHRcdFx0XHRcdFx0cmVzcG9uc2UgPT4gbmV3IEdldFdlZGRpbmdzU3VjY2Vzcyh7XHJcblx0XHRcdFx0XHRcdFx0d2VkZGluZ3M6IHJlc3BvbnNlLnJlc3VsdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRnZXRXZWRkaW5nc1N1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPEdldFdlZGRpbmdzU3VjY2Vzcz4oV2VkZGluZ0FjdGlvblR5cGVzLkdFVF9XRURESU5HU19TVUNDRVNTKSxcclxuXHRcdG1hcCgoYWN0aW9uKSA9PiB7XHJcblx0XHRcdGNvbnN0IHdlZGRpbmdzID0gYWN0aW9uLnBheWxvYWQud2VkZGluZ3M7XHJcblxyXG5cdFx0XHRsZXQgYWN0aXZlV2VkZGluZ0lkID0gYXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoJ2FjdGl2ZVdlZGRpbmdJZCcpO1xyXG5cclxuXHRcdFx0aWYgKCFhY3RpdmVXZWRkaW5nSWQgJiYgd2VkZGluZ3NbMF0pIHtcclxuXHRcdFx0XHRhY3RpdmVXZWRkaW5nSWQgPSB3ZWRkaW5nc1swXS5pZDtcclxuXHRcdFx0XHRhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZygnYWN0aXZlV2VkZGluZ0lkJywgYWN0aXZlV2VkZGluZ0lkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBTZXRBY3RpdmVXZWRkaW5nKCk7XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHNldEFjdGl2ZVdlZGRpbmckID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPFNldEFjdGl2ZVdlZGRpbmc+KFdlZGRpbmdBY3Rpb25UeXBlcy5TRVRfQUNUSVZFX1dFRERJTkcpLFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZSksXHJcblx0XHRtYXAoKFthY3Rpb24sIHN0b3JlXSkgPT4ge1xyXG5cdFx0XHRjb25zdCBhY2NvdW50SWQgPSBzdG9yZS5hdXRoLmF1dGhJbmZvLmFjY291bnQuaWQ7XHJcblx0XHRcdGxldCBhY3RpdmVXZWRkaW5nSWQgPSBhY3Rpb24ucGF5bG9hZCA/IGFjdGlvbi5wYXlsb2FkLmlkIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgbG9jYWxBY3RpdmVXZWRkaW5nSWQgPSBhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhgJHthY2NvdW50SWR9LWFjdGl2ZVdlZGRpbmdJZGApO1xyXG5cdFx0XHRsZXQgYWN0aXZlV2VkZGluZyA9IG51bGw7XHJcblx0XHRcdGNvbnN0IHdlZGRpbmdzID0gc3RvcmUud2VkZGluZy53ZWRkaW5ncztcclxuXHJcblx0XHRcdGlmICghYWN0aXZlV2VkZGluZ0lkICYmIGxvY2FsQWN0aXZlV2VkZGluZ0lkKSB7XHJcblx0XHRcdFx0YWN0aXZlV2VkZGluZ0lkID0gbG9jYWxBY3RpdmVXZWRkaW5nSWQ7XHJcblx0XHRcdH0gZWxzZSBpZiAoIWFjdGl2ZVdlZGRpbmdJZCAmJiB3ZWRkaW5nc1swXSkge1xyXG5cdFx0XHRcdGFjdGl2ZVdlZGRpbmdJZCA9IHdlZGRpbmdzWzBdLmlkO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYWN0aXZlV2VkZGluZ0lkKSB7XHJcblx0XHRcdFx0YXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoYCR7YWNjb3VudElkfS1hY3RpdmVXZWRkaW5nSWRgLCBhY3RpdmVXZWRkaW5nSWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYWN0aXZlV2VkZGluZ0lkICYmIHdlZGRpbmdzKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB3ZWRkaW5ncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IHdlZGRpbmcgPSB3ZWRkaW5nc1tpXTtcclxuXHRcdFx0XHRcdGlmICh3ZWRkaW5nLmlkID09IGFjdGl2ZVdlZGRpbmdJZCkge1xyXG5cdFx0XHRcdFx0XHRhY3RpdmVXZWRkaW5nID0gd2VkZGluZztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWFjdGl2ZVdlZGRpbmcpIHtcclxuXHRcdFx0XHRhcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShgJHthY2NvdW50SWR9LWFjdGl2ZVdlZGRpbmdJZGApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoYWN0aXZlV2VkZGluZykge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgU2V0QWN0aXZlV2VkZGluZ1N1Y2Nlc3Moe1xyXG5cdFx0XHRcdFx0d2VkZGluZzogYWN0aXZlV2VkZGluZ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgU2V0QWN0aXZlV2VkZGluZ0ZhaWx1cmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0c2V0QWN0aXZlV2VkZGluZ1N1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPFNldEFjdGl2ZVdlZGRpbmdTdWNjZXNzPihXZWRkaW5nQWN0aW9uVHlwZXMuU0VUX0FDVElWRV9XRURESU5HX1NVQ0NFU1MpLFxyXG5cdFx0bWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZCksXHJcblx0XHRjb25jYXRNYXAocGF5bG9hZCA9PiBbXHJcblx0XHRcdFx0bmV3IEdldFdlZGRpbmdNZW1iZXJzKCksXHJcblx0XHRcdFx0bmV3IEdldFRhc2tzKHt3ZWRkaW5nSWQ6IHBheWxvYWQud2VkZGluZy5pZH0pXHJcblx0XHRdKVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGdldFdlZGRpbmdNZW1iZXJzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxHZXRXZWRkaW5nTWVtYmVycz4oV2VkZGluZ0FjdGlvblR5cGVzLkdFVF9XRURESU5HX01FTUJFUlMpLFxyXG5cdFx0ZXhoYXVzdE1hcChhY3Rpb24gPT5cclxuXHRcdFx0dGhpcy53ZWRkaW5nU2VydmljZVxyXG5cdFx0XHRcdC5nZXRXZWRkaW5nTWVtYmVycygpXHJcblx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IG5ldyBHZXRXZWRkaW5nTWVtYmVyc1N1Y2Nlc3Moe1xyXG5cdFx0XHRcdFx0XHR3ZWRkaW5nTWVtYmVyczogcmVzcG9uc2UucmVzdWx0XHJcblx0XHRcdFx0XHR9KSlcclxuXHRcdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Y3JlYXRlV2VkZGluZyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8Q3JlYXRlV2VkZGluZz4oV2VkZGluZ0FjdGlvblR5cGVzLkNSRUFURV9XRURESU5HKSxcclxuXHRcdGV4aGF1c3RNYXAoYWN0aW9uID0+XHJcblx0XHRcdHRoaXMud2VkZGluZ1NlcnZpY2VcclxuXHRcdFx0XHQuY3JlYXRlV2VkZGluZyhhY3Rpb24ucGF5bG9hZClcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdGNvbmNhdE1hcFRvKFtcclxuXHRcdFx0XHRcdFx0bmV3IEdldFdlZGRpbmdzKCksXHJcblx0XHRcdFx0XHRcdG5ldyBDcmVhdGVXZWRkaW5nU3VjY2VzcygpXHJcblx0XHRcdFx0XHRdKSxcclxuXHRcdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IENyZWF0ZVdlZGRpbmdGYWlsdXJlKGVycm9yKSkpXHJcblx0XHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHVwZGF0ZVdlZGRpbmckID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPFVwZGF0ZVdlZGRpbmc+KFdlZGRpbmdBY3Rpb25UeXBlcy5VUERBVEVfV0VERElORyksXHJcblx0XHRleGhhdXN0TWFwKGFjdGlvbiA9PiB7XHJcblx0XHRcdGxldCB3ZWRkaW5nID0gYWN0aW9uLnBheWxvYWQud2VkZGluZztcclxuXHRcdFx0cmV0dXJuIHRoaXMud2VkZGluZ1NlcnZpY2VcclxuXHRcdFx0XHQuY2hhbmdlV2VkZGluZ05hbWUoe1xyXG5cdFx0XHRcdFx0bmFtZTogd2VkZGluZy5uYW1lXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdG1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlhbG9nc1NlcnZpY2Uuc2hvd0RpYWxvZyhcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBEaWFsb2dUeXBlLlN1Y2Nlc3MsXHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnV2VkZGluZyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgVXBkYXRlV2VkZGluZ1N1Y2Nlc3Moe1xyXG5cdFx0XHRcdFx0XHRcdHdlZGRpbmc6IHdlZGRpbmdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlhbG9nc1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogRGlhbG9nVHlwZS5BbGVydCxcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBlcnJvci5lcnJvci50aXRsZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG5ldyBVcGRhdGVXZWRkaW5nRmFpbHVyZSh7IGVycm9yOiBlcnJvci5lcnJvciB9KSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdClcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcbn1cclxuIl19