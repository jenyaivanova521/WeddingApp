"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var store_1 = require("@ngrx/store");
var enum_1 = require("~/shared/types/enum");
var actions_1 = require("./actions");
var services_1 = require("~/shared/services");
var TaskEffects = /** @class */ (function () {
    function TaskEffects(actions$, taskService, store, dialogsService) {
        var _this = this;
        this.actions$ = actions$;
        this.taskService = taskService;
        this.store = store;
        this.dialogsService = dialogsService;
        this.getTasks$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.GET_TASKS), operators_1.exhaustMap(function (action) {
            return _this.taskService
                .getTasks({ weddingId: action.payload.weddingId })
                .pipe(operators_1.map(function (response) {
                return new actions_1.GetTasksSuccess({
                    tasks: response.result
                });
            }));
        }));
        this.addTask$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.ADD_TASK), operators_1.exhaustMap(function (action) {
            var task = action.payload.task;
            return _this.taskService
                .addTask({
                weddingId: action.payload.weddingId,
                task: task
            })
                .pipe(operators_1.map(function (response) {
                _this.dialogsService.showDialog({
                    type: enum_1.DialogType.Success,
                    message: 'Task added successfully'
                });
                return new actions_1.GetTasks({ weddingId: action.payload.weddingId });
            }), operators_1.catchError(function (error) { return of_1.of(new actions_1.AddTaskFailure({ error: error.error })); }));
        }));
        this.getTaskDetails$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.GET_TASK_DETAILS), operators_1.exhaustMap(function (action) {
            return _this.taskService
                .getTask({ weddingId: action.payload.weddingId, taskId: action.payload.taskId })
                .pipe(operators_1.map(function (response) { return new actions_1.GetTaskDetailsSuccess({
                task: response.result
            }); }), operators_1.catchError(function (error) { return of_1.of(new actions_1.GetTaskDetailsFailure({ error: error.error })); }));
        }));
        this.deleteTaskConfirm$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.DELETE_TASK_CONFIRM), operators_1.tap(function (action) {
            var options = {
                title: action.payload.title,
                message: action.payload.text,
                okButtonText: 'Ok',
                cancelButtonText: 'No',
            };
            confirm(options).then(function (result) {
                if (result) {
                    _this.store.dispatch(action.payload.confirm);
                }
            });
        }));
        this.deleteTask$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.DELETE_TASK), operators_1.exhaustMap(function (action) {
            return _this.taskService
                .deleteTask({
                weddingId: action.payload.weddingId,
                taskId: action.payload.taskId
            })
                .pipe(operators_1.map(function (response) {
                _this.dialogsService.showDialog({
                    type: enum_1.DialogType.Success,
                    message: 'Task deleted successfully'
                });
                return new actions_1.DeleteTaskSuccess({
                    weddingId: action.payload.weddingId,
                    taskId: action.payload.taskId
                });
            }), operators_1.catchError(function (error) { return of_1.of(new actions_1.DeleteTaskFailure({ error: error.error })); }));
        }));
        this.changeTaskStatusSuccess$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.TOGGLE_TASK_DETAILS, actions_1.TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS), operators_1.withLatestFrom(this.store), operators_1.map(function (_a) {
            var action = _a[0], store = _a[1];
            var taskId = action.payload.taskId;
            if (store.task.ui.taskDetails[taskId]) {
                return new actions_1.GetTaskDetails({
                    weddingId: action.payload.weddingId,
                    taskId: taskId
                });
            }
            else {
                return new actions_1.NoEffect();
            }
        }));
        this.setTaskStatus = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.SET_TASK_STATUS), operators_1.exhaustMap(function (action) {
            return _this.taskService.setTaskStatus(action.payload)
                .pipe(operators_1.map(function (response) {
                _this.dialogsService.showDialog({
                    type: enum_1.DialogType.Success,
                    message: 'Task status updated'
                });
                return new actions_1.SetTaskStatusSuccess({
                    weddingId: action.payload.weddingId,
                    taskId: action.payload.taskId,
                    status: action.payload.status
                });
            }), operators_1.catchError(function (err) { return of_1.of(new actions_1.NoEffect()); }));
        }));
        this.editTask$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.EDIT_TASK), operators_1.exhaustMap(function (action) {
            var task = action.payload.task;
            return _this.taskService
                .editTask({
                weddingId: action.payload.weddingId,
                task: task
            })
                .pipe(operators_1.map(function (response) {
                _this.dialogsService.showDialog({
                    type: enum_1.DialogType.Success,
                    message: 'Task updated successfully'
                });
                return new actions_1.EditTaskSuccess({
                    weddingId: action.payload.weddingId,
                    task: task
                });
            }), operators_1.catchError(function (error) { return of_1.of(new actions_1.EditTaskFailure({ error: error.error })); }));
        }));
        this.getTaskStats$ = this.actions$.pipe(effects_1.ofType(actions_1.TaskActionTypes.GET_TASK_STATS, actions_1.TaskActionTypes.ADD_TASK_SUCCESS, actions_1.TaskActionTypes.DELETE_TASK_SUCCESS, actions_1.TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS, actions_1.TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS), operators_1.exhaustMap(function (action) {
            return _this.taskService
                .getTaskStats({ weddingId: action.payload.weddingId })
                .pipe(operators_1.map(function (response) { return new actions_1.GetTaskStatsSuccess({
                stats: response.result
            }); }));
        }));
    }
    TaskEffects.prototype.truncate = function (text) {
        if (text.length > 40) {
            var limit = text.substr(0, 40).lastIndexOf(' ');
            text = text.substr(0, limit) + ' ...';
        }
        return text;
    };
    ;
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "getTasks$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "addTask$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "getTaskDetails$", void 0);
    tslib_1.__decorate([
        effects_1.Effect({ dispatch: false }),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "deleteTaskConfirm$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "deleteTask$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "changeTaskStatusSuccess$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "setTaskStatus", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "editTask$", void 0);
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], TaskEffects.prototype, "getTaskStats$", void 0);
    TaskEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            services_1.TaskService,
            store_1.Store,
            services_1.DialogsService])
    ], TaskEffects);
    return TaskEffects;
}());
exports.TaskEffects = TaskEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUF3RDtBQUN4RCx5Q0FBd0M7QUFDeEMsNENBQWtGO0FBQ2xGLHFDQUFvQztBQUNwQyw0Q0FBaUQ7QUFHakQscUNBMEJtQjtBQUNuQiw4Q0FBZ0U7QUFLaEU7SUFFQyxxQkFDUyxRQUFpQixFQUNqQixXQUF3QixFQUN4QixLQUFtQixFQUNuQixjQUE4QjtRQUp2QyxpQkFLSztRQUpJLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFZdkMsY0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QixnQkFBTSxDQUFXLHlCQUFlLENBQUMsU0FBUyxDQUFDLEVBQzNDLHNCQUFVLENBQUMsVUFBQSxNQUFNO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLFdBQVc7aUJBQ2QsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2pELElBQUksQ0FDSixlQUFHLENBQUMsVUFBQyxRQUFhO2dCQUNqQixNQUFNLENBQUMsSUFBSSx5QkFBZSxDQUFDO29CQUMxQixLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU07aUJBQ3RCLENBQUMsQ0FBQTtZQUNILENBQUMsQ0FBQyxDQUNGO1FBUkYsQ0FRRSxDQUNGLENBQ0QsQ0FBQztRQUdGLGFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDNUIsZ0JBQU0sQ0FBVSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxFQUN6QyxzQkFBVSxDQUFDLFVBQUEsTUFBTTtZQUNoQixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZ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QUUsUUFBUSxDQUFDLE1BQU07YUFDdEIsQ0FBQyxFQUZxQixDQUVyQixDQUFDLENBQ0g7UUFORixDQU1FLENBQ0YsQ0FDRCxDQUFDO0lBM01FLENBQUM7SUFFRyw4QkFBUSxHQUFoQixVQUFpQixJQUFZO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN2QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFBQSxDQUFDO0lBR0Y7UUFEQyxnQkFBTSxFQUFFOztrREFjUDtJQUdGO1FBREMsZ0JBQU0sRUFBRTs7aURBd0JQO0lBR0Y7UUFEQyxnQkFBTSxFQUFFOzt3REFhUDtJQUdGO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs7MkRBaUIxQjtJQUdGO1FBREMsZ0JBQU0sRUFBRTs7b0RBMEJQO0lBR0Y7UUFEQyxnQkFBTSxFQUFFOztpRUFlUDtJQUdGO1FBREMsZ0JBQU0sRUFBRTs7c0RBdUJQO0lBR0Y7UUFEQyxnQkFBTSxFQUFFOztrREEyQlA7SUFHRjtRQURDLGdCQUFNLEVBQUU7O3NEQWtCUDtJQWxOVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7aURBSU8saUJBQU87WUFDSixzQkFBVztZQUNqQixhQUFLO1lBQ0kseUJBQWM7T0FOM0IsV0FBVyxDQW9OdkI7SUFBRCxrQkFBQztDQUFBLEFBcE5ELElBb05DO0FBcE5ZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9vZic7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgdGFwLCB3aXRoTGF0ZXN0RnJvbSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IERpYWxvZ1R5cGUgfSBmcm9tICd+L3NoYXJlZC90eXBlcy9lbnVtJztcclxuXHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7XHJcblx0VGFza0FjdGlvblR5cGVzLFxyXG5cdE5vRWZmZWN0LFxyXG5cclxuXHRHZXRUYXNrcyxcclxuXHRHZXRUYXNrc1N1Y2Nlc3MsXHJcblxyXG5cdEFkZFRhc2ssXHJcblx0QWRkVGFza0ZhaWx1cmUsXHJcblxyXG5cdEdldFRhc2tEZXRhaWxzLFxyXG5cdEdldFRhc2tEZXRhaWxzU3VjY2VzcyxcclxuXHRHZXRUYXNrRGV0YWlsc0ZhaWx1cmUsXHJcblxyXG5cdERlbGV0ZVRhc2ssXHJcblx0RGVsZXRlVGFza0NvbmZpcm0sXHJcblx0RGVsZXRlVGFza1N1Y2Nlc3MsXHJcblx0RGVsZXRlVGFza0ZhaWx1cmUsXHJcblxyXG5cdEVkaXRUYXNrLFxyXG5cdEVkaXRUYXNrU3VjY2VzcyxcclxuXHRFZGl0VGFza0ZhaWx1cmUsXHJcblxyXG5cdEdldFRhc2tTdGF0c1N1Y2Nlc3MsXHJcblx0U2V0VGFza1N0YXR1cyxcclxuXHRTZXRUYXNrU3RhdHVzU3VjY2VzcyxcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBEaWFsb2dzU2VydmljZSwgVGFza1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGNvbmZpcm06IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhc2tFZmZlY3RzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG5cdFx0cHJpdmF0ZSB0YXNrU2VydmljZTogVGFza1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGRpYWxvZ3NTZXJ2aWNlOiBEaWFsb2dzU2VydmljZVxyXG5cdCkgeyB9XHJcblxyXG5cdHByaXZhdGUgdHJ1bmNhdGUodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRcdGlmICh0ZXh0Lmxlbmd0aCA+IDQwKSB7XHJcblx0XHRcdGxldCBsaW1pdCA9IHRleHQuc3Vic3RyKDAsIDQwKS5sYXN0SW5kZXhPZignICcpO1xyXG5cdFx0XHR0ZXh0ID0gdGV4dC5zdWJzdHIoMCwgbGltaXQpICsgJyAuLi4nO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0VGFza3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPEdldFRhc2tzPihUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tTKSxcclxuXHRcdGV4aGF1c3RNYXAoYWN0aW9uID0+XHJcblx0XHRcdHRoaXMudGFza1NlcnZpY2VcclxuXHRcdFx0XHQuZ2V0VGFza3MoeyB3ZWRkaW5nSWQ6IGFjdGlvbi5wYXlsb2FkLndlZGRpbmdJZCB9KVxyXG5cdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgR2V0VGFza3NTdWNjZXNzKHtcclxuXHRcdFx0XHRcdFx0XHR0YXNrczogcmVzcG9uc2UucmVzdWx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdClcclxuXHRcdClcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRhZGRUYXNrJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxBZGRUYXNrPihUYXNrQWN0aW9uVHlwZXMuQUREX1RBU0spLFxyXG5cdFx0ZXhoYXVzdE1hcChhY3Rpb24gPT4ge1xyXG5cdFx0XHRsZXQgdGFzayA9IGFjdGlvbi5wYXlsb2FkLnRhc2s7XHJcblx0XHRcdHJldHVybiB0aGlzLnRhc2tTZXJ2aWNlXHJcblx0XHRcdFx0LmFkZFRhc2soe1xyXG5cdFx0XHRcdFx0d2VkZGluZ0lkOiBhY3Rpb24ucGF5bG9hZC53ZWRkaW5nSWQsXHJcblx0XHRcdFx0XHR0YXNrOiB0YXNrXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpYWxvZ3NTZXJ2aWNlLnNob3dEaWFsb2coXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogRGlhbG9nVHlwZS5TdWNjZXNzLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1Rhc2sgYWRkZWQgc3VjY2Vzc2Z1bGx5J1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgR2V0VGFza3Moe3dlZGRpbmdJZDogYWN0aW9uLnBheWxvYWQud2VkZGluZ0lkfSlcclxuXHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgQWRkVGFza0ZhaWx1cmUoeyBlcnJvcjogZXJyb3IuZXJyb3IgfSkpKVxyXG5cdFx0XHRcdClcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0VGFza0RldGFpbHMkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxyXG5cdFx0b2ZUeXBlPEdldFRhc2tEZXRhaWxzPihUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tfREVUQUlMUyksXHJcblx0XHRleGhhdXN0TWFwKGFjdGlvbiA9PlxyXG5cdFx0XHR0aGlzLnRhc2tTZXJ2aWNlXHJcblx0XHRcdFx0LmdldFRhc2soeyB3ZWRkaW5nSWQ6IGFjdGlvbi5wYXlsb2FkLndlZGRpbmdJZCwgdGFza0lkOiBhY3Rpb24ucGF5bG9hZC50YXNrSWQgfSlcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdG1hcCgocmVzcG9uc2U6IGFueSkgPT4gbmV3IEdldFRhc2tEZXRhaWxzU3VjY2Vzcyh7XHJcblx0XHRcdFx0XHRcdHRhc2s6IHJlc3BvbnNlLnJlc3VsdFxyXG5cdFx0XHRcdFx0fSkpLFxyXG5cdFx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgR2V0VGFza0RldGFpbHNGYWlsdXJlKHsgZXJyb3I6IGVycm9yLmVycm9yIH0pKSlcclxuXHRcdFx0XHQpXHJcblx0XHQpXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxyXG5cdGRlbGV0ZVRhc2tDb25maXJtJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxEZWxldGVUYXNrQ29uZmlybT4oVGFza0FjdGlvblR5cGVzLkRFTEVURV9UQVNLX0NPTkZJUk0pLFxyXG5cdFx0dGFwKGFjdGlvbiA9PiB7XHJcblx0XHRcdGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuXHRcdFx0XHR0aXRsZTogYWN0aW9uLnBheWxvYWQudGl0bGUsXHJcblx0XHRcdFx0bWVzc2FnZTogYWN0aW9uLnBheWxvYWQudGV4dCxcclxuXHRcdFx0XHRva0J1dHRvblRleHQ6ICdPaycsXHJcblx0XHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogJ05vJyxcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGNvbmZpcm0ob3B0aW9ucykudGhlbigocmVzdWx0OiBib29sZWFuKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24ucGF5bG9hZC5jb25maXJtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHQpO1xyXG5cclxuXHRARWZmZWN0KClcclxuXHRkZWxldGVUYXNrJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxEZWxldGVUYXNrPihUYXNrQWN0aW9uVHlwZXMuREVMRVRFX1RBU0spLFxyXG5cdFx0ZXhoYXVzdE1hcChhY3Rpb24gPT4ge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50YXNrU2VydmljZVxyXG5cdFx0XHRcdC5kZWxldGVUYXNrKHtcclxuXHRcdFx0XHRcdHdlZGRpbmdJZDogYWN0aW9uLnBheWxvYWQud2VkZGluZ0lkLFxyXG5cdFx0XHRcdFx0dGFza0lkOiBhY3Rpb24ucGF5bG9hZC50YXNrSWRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5waXBlKFxyXG5cdFx0XHRcdFx0bWFwKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaWFsb2dzU2VydmljZS5zaG93RGlhbG9nKFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IERpYWxvZ1R5cGUuU3VjY2VzcyxcclxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUYXNrIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5J1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBuZXcgRGVsZXRlVGFza1N1Y2Nlc3Moe1xyXG5cdFx0XHRcdFx0XHRcdHdlZGRpbmdJZDogYWN0aW9uLnBheWxvYWQud2VkZGluZ0lkLFxyXG5cdFx0XHRcdFx0XHRcdHRhc2tJZDogYWN0aW9uLnBheWxvYWQudGFza0lkXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IERlbGV0ZVRhc2tGYWlsdXJlKHsgZXJyb3I6IGVycm9yLmVycm9yIH0pKSlcclxuXHRcdFx0XHQpXHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGNoYW5nZVRhc2tTdGF0dXNTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KFRhc2tBY3Rpb25UeXBlcy5UT0dHTEVfVEFTS19ERVRBSUxTLCBUYXNrQWN0aW9uVHlwZXMuQ0hBTkdFX1RBU0tfU1RBVFVTX1NVQ0NFU1MpLFxyXG5cdFx0d2l0aExhdGVzdEZyb20odGhpcy5zdG9yZSksXHJcblx0XHRtYXAoKFthY3Rpb24sIHN0b3JlXSkgPT4ge1xyXG5cdFx0XHRsZXQgdGFza0lkID0gYWN0aW9uLnBheWxvYWQudGFza0lkO1xyXG5cdFx0XHRpZiAoc3RvcmUudGFzay51aS50YXNrRGV0YWlsc1t0YXNrSWRdKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBHZXRUYXNrRGV0YWlscyh7XHJcblx0XHRcdFx0XHR3ZWRkaW5nSWQ6IGFjdGlvbi5wYXlsb2FkLndlZGRpbmdJZCxcclxuXHRcdFx0XHRcdHRhc2tJZDogdGFza0lkXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBOb0VmZmVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdHNldFRhc2tTdGF0dXMgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcblx0XHRvZlR5cGU8U2V0VGFza1N0YXR1cz4oVGFza0FjdGlvblR5cGVzLlNFVF9UQVNLX1NUQVRVUyksXHJcblx0XHRleGhhdXN0TWFwKGFjdGlvbiA9PiB7XHJcblx0XHRcdHJldHVybiB0aGlzLnRhc2tTZXJ2aWNlLnNldFRhc2tTdGF0dXMoYWN0aW9uLnBheWxvYWQpXHJcblx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRtYXAocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRpYWxvZ3NTZXJ2aWNlLnNob3dEaWFsb2coXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogRGlhbG9nVHlwZS5TdWNjZXNzLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1Rhc2sgc3RhdHVzIHVwZGF0ZWQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBTZXRUYXNrU3RhdHVzU3VjY2Vzcyh7XHJcblx0XHRcdFx0XHRcdFx0d2VkZGluZ0lkOiBhY3Rpb24ucGF5bG9hZC53ZWRkaW5nSWQsXHJcblx0XHRcdFx0XHRcdFx0dGFza0lkOiBhY3Rpb24ucGF5bG9hZC50YXNrSWQsXHJcblx0XHRcdFx0XHRcdFx0c3RhdHVzOiBhY3Rpb24ucGF5bG9hZC5zdGF0dXNcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdGNhdGNoRXJyb3IoZXJyID0+IG9mKG5ldyBOb0VmZmVjdCgpKSlcclxuXHRcdFx0XHQpXHJcblx0XHR9KVxyXG5cdCk7XHJcblxyXG5cdEBFZmZlY3QoKVxyXG5cdGVkaXRUYXNrJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxFZGl0VGFzaz4oVGFza0FjdGlvblR5cGVzLkVESVRfVEFTSyksXHJcblx0XHRleGhhdXN0TWFwKGFjdGlvbiA9PiB7XHJcblx0XHRcdGxldCB0YXNrID0gYWN0aW9uLnBheWxvYWQudGFzaztcclxuXHRcdFx0cmV0dXJuIHRoaXMudGFza1NlcnZpY2VcclxuXHRcdFx0XHQuZWRpdFRhc2soe1xyXG5cdFx0XHRcdFx0d2VkZGluZ0lkOiBhY3Rpb24ucGF5bG9hZC53ZWRkaW5nSWQsXHJcblx0XHRcdFx0XHR0YXNrOiB0YXNrXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQucGlwZShcclxuXHRcdFx0XHRcdG1hcChyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGlhbG9nc1NlcnZpY2Uuc2hvd0RpYWxvZyhcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiBEaWFsb2dUeXBlLlN1Y2Nlc3MsXHJcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnVGFzayB1cGRhdGVkIHN1Y2Nlc3NmdWxseSdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3IEVkaXRUYXNrU3VjY2Vzcyh7XHJcblx0XHRcdFx0XHRcdFx0d2VkZGluZ0lkOiBhY3Rpb24ucGF5bG9hZC53ZWRkaW5nSWQsXHJcblx0XHRcdFx0XHRcdFx0dGFzazogdGFza1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBFZGl0VGFza0ZhaWx1cmUoeyBlcnJvcjogZXJyb3IuZXJyb3IgfSkpKVxyXG5cdFx0XHRcdClcclxuXHRcdH0pXHJcblx0KTtcclxuXHJcblx0QEVmZmVjdCgpXHJcblx0Z2V0VGFza1N0YXRzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcclxuXHRcdG9mVHlwZTxhbnk+KFxyXG5cdFx0XHRUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tfU1RBVFMsXHJcblx0XHRcdFRhc2tBY3Rpb25UeXBlcy5BRERfVEFTS19TVUNDRVNTLFxyXG5cdFx0XHRUYXNrQWN0aW9uVHlwZXMuREVMRVRFX1RBU0tfU1VDQ0VTUyxcclxuXHRcdFx0VGFza0FjdGlvblR5cGVzLkNIQU5HRV9UQVNLX1NUQVRVU19TVUNDRVNTLFxyXG5cdFx0XHRUYXNrQWN0aW9uVHlwZXMuQ0hBTkdFX1RBU0tfU1RBVFVTX1NVQ0NFU1NcclxuXHRcdCksXHJcblx0XHRleGhhdXN0TWFwKGFjdGlvbiA9PlxyXG5cdFx0XHR0aGlzLnRhc2tTZXJ2aWNlXHJcblx0XHRcdFx0LmdldFRhc2tTdGF0cyh7IHdlZGRpbmdJZDogYWN0aW9uLnBheWxvYWQud2VkZGluZ0lkIH0pXHJcblx0XHRcdFx0LnBpcGUoXHJcblx0XHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IG5ldyBHZXRUYXNrU3RhdHNTdWNjZXNzKHtcclxuXHRcdFx0XHRcdFx0c3RhdHM6IHJlc3BvbnNlLnJlc3VsdFxyXG5cdFx0XHRcdFx0fSkpXHJcblx0XHRcdFx0KVxyXG5cdFx0KVxyXG5cdCk7XHJcblxyXG59XHJcbiJdfQ==