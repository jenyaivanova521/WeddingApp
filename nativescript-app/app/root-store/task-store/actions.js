"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskActionTypes;
(function (TaskActionTypes) {
    TaskActionTypes["NO_EFFECT"] = "[TASK] ---";
    TaskActionTypes["GET_TASKS"] = "[TASK] Get tasks";
    TaskActionTypes["GET_TASKS_SUCCESS"] = "[TASK] Get tasks success";
    TaskActionTypes["GET_TASKS_FAILURE"] = "[TASK] Get tasks failure";
    TaskActionTypes["ADD_TASK"] = "[TASK] Add task";
    TaskActionTypes["ADD_TASK_CANCEL"] = "[TASK] Add task cancel";
    TaskActionTypes["ADD_TASK_SUCCESS"] = "[TASK] Add task success";
    TaskActionTypes["ADD_TASK_FAILURE"] = "[TASK] Add task failure";
    TaskActionTypes["GET_TASK_DETAILS"] = "[TASK] Get task details";
    TaskActionTypes["GET_TASK_DETAILS_SUCCESS"] = "[TASK] Get task details success";
    TaskActionTypes["GET_TASK_DETAILS_FAILURE"] = "[TASK] Get task details failure";
    TaskActionTypes["TOGGLE_TASK_DETAILS"] = "[TASK] Toggle task details";
    TaskActionTypes["DELETE_TASK_CONFIRM"] = "[TASK] Confirm delete task";
    TaskActionTypes["DELETE_TASK"] = "[TASK] Delete task";
    TaskActionTypes["DELETE_TASK_SUCCESS"] = "[TASK] Delete task success";
    TaskActionTypes["DELETE_TASK_FAILURE"] = "[TASK] Delete task failure";
    TaskActionTypes["CHANGE_TASK_STATUS"] = "[TASK] Change status";
    TaskActionTypes["CHANGE_TASK_STATUS_SUCCESS"] = "[TASK] Change status success";
    TaskActionTypes["CHANGE_TASK_STATUS_FAILURE"] = "[TASK] Change status failure";
    TaskActionTypes["EDIT_TASK"] = "[TASK] Edit task";
    TaskActionTypes["EDIT_TASK_CANCEL"] = "[TASK] Edit task cancel";
    TaskActionTypes["EDIT_TASK_SUCCESS"] = "[TASK] Edit task success";
    TaskActionTypes["EDIT_TASK_FAILURE"] = "[TASK] Edit task failure";
    TaskActionTypes["GET_TASK_STATS"] = "[TASK] Get task stats";
    TaskActionTypes["GET_TASK_STATS_SUCCESS"] = "[TASK] Get task stats success";
    TaskActionTypes["GET_TASK_STATS_FAILURE"] = "[TASK] Get task stats failure";
    TaskActionTypes["SET_TASK_STATUS"] = "[TASK] Set task status";
    TaskActionTypes["SET_TASK_STATUS_SUCCESS"] = "[TASK] Set task status success";
})(TaskActionTypes = exports.TaskActionTypes || (exports.TaskActionTypes = {}));
var NoEffect = /** @class */ (function () {
    function NoEffect() {
        this.type = TaskActionTypes.NO_EFFECT;
    }
    return NoEffect;
}());
exports.NoEffect = NoEffect;
var GetTasks = /** @class */ (function () {
    function GetTasks(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASKS;
    }
    return GetTasks;
}());
exports.GetTasks = GetTasks;
var GetTasksSuccess = /** @class */ (function () {
    function GetTasksSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASKS_SUCCESS;
    }
    return GetTasksSuccess;
}());
exports.GetTasksSuccess = GetTasksSuccess;
var GetTasksFailure = /** @class */ (function () {
    function GetTasksFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASKS_FAILURE;
    }
    return GetTasksFailure;
}());
exports.GetTasksFailure = GetTasksFailure;
var AddTask = /** @class */ (function () {
    function AddTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.ADD_TASK;
    }
    return AddTask;
}());
exports.AddTask = AddTask;
var AddTaskCancel = /** @class */ (function () {
    function AddTaskCancel() {
        this.type = TaskActionTypes.ADD_TASK_CANCEL;
    }
    return AddTaskCancel;
}());
exports.AddTaskCancel = AddTaskCancel;
var AddTaskSuccess = /** @class */ (function () {
    function AddTaskSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.ADD_TASK_SUCCESS;
    }
    return AddTaskSuccess;
}());
exports.AddTaskSuccess = AddTaskSuccess;
var AddTaskFailure = /** @class */ (function () {
    function AddTaskFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.ADD_TASK_FAILURE;
    }
    return AddTaskFailure;
}());
exports.AddTaskFailure = AddTaskFailure;
var GetTaskDetails = /** @class */ (function () {
    function GetTaskDetails(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASK_DETAILS;
    }
    return GetTaskDetails;
}());
exports.GetTaskDetails = GetTaskDetails;
var GetTaskDetailsSuccess = /** @class */ (function () {
    function GetTaskDetailsSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASK_DETAILS_SUCCESS;
    }
    return GetTaskDetailsSuccess;
}());
exports.GetTaskDetailsSuccess = GetTaskDetailsSuccess;
var GetTaskDetailsFailure = /** @class */ (function () {
    function GetTaskDetailsFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASK_DETAILS_FAILURE;
    }
    return GetTaskDetailsFailure;
}());
exports.GetTaskDetailsFailure = GetTaskDetailsFailure;
var ToggleTaskDetails = /** @class */ (function () {
    function ToggleTaskDetails(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.TOGGLE_TASK_DETAILS;
    }
    return ToggleTaskDetails;
}());
exports.ToggleTaskDetails = ToggleTaskDetails;
var DeleteTask = /** @class */ (function () {
    function DeleteTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.DELETE_TASK;
    }
    return DeleteTask;
}());
exports.DeleteTask = DeleteTask;
var DeleteTaskConfirm = /** @class */ (function () {
    function DeleteTaskConfirm(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.DELETE_TASK_CONFIRM;
    }
    return DeleteTaskConfirm;
}());
exports.DeleteTaskConfirm = DeleteTaskConfirm;
var DeleteTaskSuccess = /** @class */ (function () {
    function DeleteTaskSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.DELETE_TASK_SUCCESS;
    }
    return DeleteTaskSuccess;
}());
exports.DeleteTaskSuccess = DeleteTaskSuccess;
var DeleteTaskFailure = /** @class */ (function () {
    function DeleteTaskFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.DELETE_TASK_FAILURE;
    }
    return DeleteTaskFailure;
}());
exports.DeleteTaskFailure = DeleteTaskFailure;
var ChangeTaskStatus = /** @class */ (function () {
    function ChangeTaskStatus(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CHANGE_TASK_STATUS;
    }
    return ChangeTaskStatus;
}());
exports.ChangeTaskStatus = ChangeTaskStatus;
var ChangeTaskStatusSuccess = /** @class */ (function () {
    function ChangeTaskStatusSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS;
    }
    return ChangeTaskStatusSuccess;
}());
exports.ChangeTaskStatusSuccess = ChangeTaskStatusSuccess;
var ChangeTaskStatusFailure = /** @class */ (function () {
    function ChangeTaskStatusFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.CHANGE_TASK_STATUS_FAILURE;
    }
    return ChangeTaskStatusFailure;
}());
exports.ChangeTaskStatusFailure = ChangeTaskStatusFailure;
var EditTask = /** @class */ (function () {
    function EditTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK;
    }
    return EditTask;
}());
exports.EditTask = EditTask;
var EditTaskCancel = /** @class */ (function () {
    function EditTaskCancel() {
        this.type = TaskActionTypes.EDIT_TASK_CANCEL;
    }
    return EditTaskCancel;
}());
exports.EditTaskCancel = EditTaskCancel;
var EditTaskSuccess = /** @class */ (function () {
    function EditTaskSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK_SUCCESS;
    }
    return EditTaskSuccess;
}());
exports.EditTaskSuccess = EditTaskSuccess;
var EditTaskFailure = /** @class */ (function () {
    function EditTaskFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.EDIT_TASK_FAILURE;
    }
    return EditTaskFailure;
}());
exports.EditTaskFailure = EditTaskFailure;
var GetTaskStats = /** @class */ (function () {
    function GetTaskStats(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASK_STATS;
    }
    return GetTaskStats;
}());
exports.GetTaskStats = GetTaskStats;
var GetTaskStatsSuccess = /** @class */ (function () {
    function GetTaskStatsSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASK_STATS_SUCCESS;
    }
    return GetTaskStatsSuccess;
}());
exports.GetTaskStatsSuccess = GetTaskStatsSuccess;
var GetTaskStatsFailure = /** @class */ (function () {
    function GetTaskStatsFailure(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.GET_TASK_STATS_FAILURE;
    }
    return GetTaskStatsFailure;
}());
exports.GetTaskStatsFailure = GetTaskStatsFailure;
var SetTaskStatus = /** @class */ (function () {
    function SetTaskStatus(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.SET_TASK_STATUS;
    }
    return SetTaskStatus;
}());
exports.SetTaskStatus = SetTaskStatus;
var SetTaskStatusSuccess = /** @class */ (function () {
    function SetTaskStatusSuccess(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.SET_TASK_STATUS_SUCCESS;
    }
    return SetTaskStatusSuccess;
}());
exports.SetTaskStatusSuccess = SetTaskStatusSuccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFZLGVBNkJYO0FBN0JELFdBQVksZUFBZTtJQUMxQiwyQ0FBd0IsQ0FBQTtJQUN4QixpREFBOEIsQ0FBQTtJQUM5QixpRUFBOEMsQ0FBQTtJQUM5QyxpRUFBOEMsQ0FBQTtJQUM5QywrQ0FBNEIsQ0FBQTtJQUM1Qiw2REFBMEMsQ0FBQTtJQUMxQywrREFBNEMsQ0FBQTtJQUM1QywrREFBNEMsQ0FBQTtJQUM1QywrREFBNEMsQ0FBQTtJQUM1QywrRUFBNEQsQ0FBQTtJQUM1RCwrRUFBNEQsQ0FBQTtJQUM1RCxxRUFBa0QsQ0FBQTtJQUNsRCxxRUFBa0QsQ0FBQTtJQUNsRCxxREFBa0MsQ0FBQTtJQUNsQyxxRUFBa0QsQ0FBQTtJQUNsRCxxRUFBa0QsQ0FBQTtJQUNsRCw4REFBMkMsQ0FBQTtJQUMzQyw4RUFBMkQsQ0FBQTtJQUMzRCw4RUFBMkQsQ0FBQTtJQUMzRCxpREFBOEIsQ0FBQTtJQUM5QiwrREFBNEMsQ0FBQTtJQUM1QyxpRUFBOEMsQ0FBQTtJQUM5QyxpRUFBOEMsQ0FBQTtJQUM5QywyREFBd0MsQ0FBQTtJQUN4QywyRUFBd0QsQ0FBQTtJQUN4RCwyRUFBd0QsQ0FBQTtJQUN4RCw2REFBMEMsQ0FBQTtJQUMxQyw2RUFBMEQsQ0FBQTtBQUMzRCxDQUFDLEVBN0JXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBNkIxQjtBQUVEO0lBQUE7UUFDVSxTQUFJLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksNEJBQVE7QUFJckI7SUFHQyxrQkFBbUIsT0FHbEI7UUFIa0IsWUFBTyxHQUFQLE9BQU8sQ0FHekI7UUFMUSxTQUFJLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUtyQyxDQUFDO0lBQ1AsZUFBQztBQUFELENBQUMs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QUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgVGFza1N0YXR1c0VudW0gfSBmcm9tICd+L3NoYXJlZC90eXBlcy9lbnVtJztcclxuaW1wb3J0IHsgVGFzaywgVGFza0RldGFpbHMgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBUYXNrQWN0aW9uVHlwZXMge1xyXG5cdE5PX0VGRkVDVCA9ICdbVEFTS10gLS0tJyxcclxuXHRHRVRfVEFTS1MgPSAnW1RBU0tdIEdldCB0YXNrcycsXHJcblx0R0VUX1RBU0tTX1NVQ0NFU1MgPSAnW1RBU0tdIEdldCB0YXNrcyBzdWNjZXNzJyxcclxuXHRHRVRfVEFTS1NfRkFJTFVSRSA9ICdbVEFTS10gR2V0IHRhc2tzIGZhaWx1cmUnLFxyXG5cdEFERF9UQVNLID0gJ1tUQVNLXSBBZGQgdGFzaycsXHJcblx0QUREX1RBU0tfQ0FOQ0VMID0gJ1tUQVNLXSBBZGQgdGFzayBjYW5jZWwnLFxyXG5cdEFERF9UQVNLX1NVQ0NFU1MgPSAnW1RBU0tdIEFkZCB0YXNrIHN1Y2Nlc3MnLFxyXG5cdEFERF9UQVNLX0ZBSUxVUkUgPSAnW1RBU0tdIEFkZCB0YXNrIGZhaWx1cmUnLFxyXG5cdEdFVF9UQVNLX0RFVEFJTFMgPSAnW1RBU0tdIEdldCB0YXNrIGRldGFpbHMnLFxyXG5cdEdFVF9UQVNLX0RFVEFJTFNfU1VDQ0VTUyA9ICdbVEFTS10gR2V0IHRhc2sgZGV0YWlscyBzdWNjZXNzJyxcclxuXHRHRVRfVEFTS19ERVRBSUxTX0ZBSUxVUkUgPSAnW1RBU0tdIEdldCB0YXNrIGRldGFpbHMgZmFpbHVyZScsXHJcblx0VE9HR0xFX1RBU0tfREVUQUlMUyA9ICdbVEFTS10gVG9nZ2xlIHRhc2sgZGV0YWlscycsXHJcblx0REVMRVRFX1RBU0tfQ09ORklSTSA9ICdbVEFTS10gQ29uZmlybSBkZWxldGUgdGFzaycsXHJcblx0REVMRVRFX1RBU0sgPSAnW1RBU0tdIERlbGV0ZSB0YXNrJyxcclxuXHRERUxFVEVfVEFTS19TVUNDRVNTID0gJ1tUQVNLXSBEZWxldGUgdGFzayBzdWNjZXNzJyxcclxuXHRERUxFVEVfVEFTS19GQUlMVVJFID0gJ1tUQVNLXSBEZWxldGUgdGFzayBmYWlsdXJlJyxcclxuXHRDSEFOR0VfVEFTS19TVEFUVVMgPSAnW1RBU0tdIENoYW5nZSBzdGF0dXMnLFxyXG5cdENIQU5HRV9UQVNLX1NUQVRVU19TVUNDRVNTID0gJ1tUQVNLXSBDaGFuZ2Ugc3RhdHVzIHN1Y2Nlc3MnLFxyXG5cdENIQU5HRV9UQVNLX1NUQVRVU19GQUlMVVJFID0gJ1tUQVNLXSBDaGFuZ2Ugc3RhdHVzIGZhaWx1cmUnLFxyXG5cdEVESVRfVEFTSyA9ICdbVEFTS10gRWRpdCB0YXNrJyxcclxuXHRFRElUX1RBU0tfQ0FOQ0VMID0gJ1tUQVNLXSBFZGl0IHRhc2sgY2FuY2VsJyxcclxuXHRFRElUX1RBU0tfU1VDQ0VTUyA9ICdbVEFTS10gRWRpdCB0YXNrIHN1Y2Nlc3MnLFxyXG5cdEVESVRfVEFTS19GQUlMVVJFID0gJ1tUQVNLXSBFZGl0IHRhc2sgZmFpbHVyZScsXHJcblx0R0VUX1RBU0tfU1RBVFMgPSAnW1RBU0tdIEdldCB0YXNrIHN0YXRzJyxcclxuXHRHRVRfVEFTS19TVEFUU19TVUNDRVNTID0gJ1tUQVNLXSBHZXQgdGFzayBzdGF0cyBzdWNjZXNzJyxcclxuXHRHRVRfVEFTS19TVEFUU19GQUlMVVJFID0gJ1tUQVNLXSBHZXQgdGFzayBzdGF0cyBmYWlsdXJlJyxcclxuXHRTRVRfVEFTS19TVEFUVVMgPSAnW1RBU0tdIFNldCB0YXNrIHN0YXR1cycsXHJcblx0U0VUX1RBU0tfU1RBVFVTX1NVQ0NFU1MgPSAnW1RBU0tdIFNldCB0YXNrIHN0YXR1cyBzdWNjZXNzJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTm9FZmZlY3QgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuTk9fRUZGRUNUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0VGFza3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tTO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ0lkOiBzdHJpbmcsXHJcblx0XHRhc3NpZ25lZE1lbWJlcklkPzogc3RyaW5nXHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRUYXNrc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tTX1NVQ0NFU1M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHR0YXNrczogVGFza1tdXHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRUYXNrc0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tTX0ZBSUxVUkU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHRlcnJvcjogYW55XHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRUYXNrIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLkFERF9UQVNLO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ0lkOiBzdHJpbmcsXHJcblx0XHR0YXNrOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFRhc2tDYW5jZWwgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuQUREX1RBU0tfQ0FOQ0VMO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkVGFza1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuQUREX1RBU0tfU1VDQ0VTUztcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdHdlZGRpbmdJZDogc3RyaW5nLFxyXG5cdFx0dGFzazogVGFza1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkVGFza0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuQUREX1RBU0tfRkFJTFVSRTtcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdGVycm9yOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFRhc2tEZXRhaWxzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLkdFVF9UQVNLX0RFVEFJTFM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHR3ZWRkaW5nSWQ6IHN0cmluZyxcclxuXHRcdHRhc2tJZDogc3RyaW5nXHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRUYXNrRGV0YWlsc1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuR0VUX1RBU0tfREVUQUlMU19TVUNDRVNTO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0dGFzazogVGFza0RldGFpbHNcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFRhc2tEZXRhaWxzRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRhc2tBY3Rpb25UeXBlcy5HRVRfVEFTS19ERVRBSUxTX0ZBSUxVUkU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHRlcnJvcjogYW55XHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVUYXNrRGV0YWlscyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRhc2tBY3Rpb25UeXBlcy5UT0dHTEVfVEFTS19ERVRBSUxTO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ0lkOiBzdHJpbmcsXHJcblx0XHR0YXNrSWQ6IHN0cmluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlVGFzayBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRhc2tBY3Rpb25UeXBlcy5ERUxFVEVfVEFTSztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ0lkOiBzdHJpbmcsXHJcblx0XHR0YXNrSWQ6IHN0cmluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlVGFza0NvbmZpcm0gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuREVMRVRFX1RBU0tfQ09ORklSTTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0Y2FuY2VsPzogQWN0aW9uLFxyXG5cdFx0Y29uZmlybTogQWN0aW9uLFxyXG5cdFx0dGV4dDogc3RyaW5nLFxyXG5cdFx0dGl0bGU6IHN0cmluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlVGFza1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuREVMRVRFX1RBU0tfU1VDQ0VTUztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ0lkOiBzdHJpbmcsXHJcblx0XHR0YXNrSWQ6IHN0cmluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlVGFza0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuREVMRVRFX1RBU0tfRkFJTFVSRTtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0ZXJyb3I6IGFueVxyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVGFza1N0YXR1cyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRhc2tBY3Rpb25UeXBlcy5DSEFOR0VfVEFTS19TVEFUVVM7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdHdlZGRpbmdJZDogc3RyaW5nLFxyXG5cdFx0dGFza0lkOiBzdHJpbmcsXHJcblx0XHRzdGF0dXM6IHN0cmluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVGFza1N0YXR1c1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuQ0hBTkdFX1RBU0tfU1RBVFVTX1NVQ0NFU1M7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdHdlZGRpbmdJZDogc3RyaW5nLFxyXG5cdFx0dGFza0lkOiBzdHJpbmcsXHJcblx0XHRzdGF0dXM6IHN0cmluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhbmdlVGFza1N0YXR1c0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuQ0hBTkdFX1RBU0tfU1RBVFVTX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdGVycm9yOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRUYXNrIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLkVESVRfVEFTSztcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ0lkOiBzdHJpbmcsXHJcblx0XHR0YXNrOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRUYXNrQ2FuY2VsIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLkVESVRfVEFTS19DQU5DRUw7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0VGFza1N1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuRURJVF9UQVNLX1NVQ0NFU1M7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdHdlZGRpbmdJZDogc3RyaW5nLFxyXG5cdFx0dGFzazogYW55XHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0VGFza0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBUYXNrQWN0aW9uVHlwZXMuRURJVF9UQVNLX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdGVycm9yOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFRhc2tTdGF0cyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFRhc2tBY3Rpb25UeXBlcy5HRVRfVEFTS19TVEFUUztcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdHdlZGRpbmdJZDogc3RyaW5nXHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRUYXNrU3RhdHNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLkdFVF9UQVNLX1NUQVRTX1NVQ0NFU1M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHRzdGF0czogYW55XHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRUYXNrU3RhdHNGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLkdFVF9UQVNLX1NUQVRTX0ZBSUxVUkU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHRlcnJvcjogYW55XHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRUYXNrU3RhdHVzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLlNFVF9UQVNLX1NUQVRVUztcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdHN0YXR1czogVGFza1N0YXR1c0VudW0sXHJcblx0XHR3ZWRkaW5nSWQ6IHN0cmluZyxcclxuXHRcdHRhc2tJZDogc3RyaW5nXHJcblx0fSkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldFRhc2tTdGF0dXNTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gVGFza0FjdGlvblR5cGVzLlNFVF9UQVNLX1NUQVRVU19TVUNDRVNTO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0c3RhdHVzOiBUYXNrU3RhdHVzRW51bSxcclxuXHRcdHdlZGRpbmdJZDogc3RyaW5nLFxyXG5cdFx0dGFza0lkOiBzdHJpbmdcclxuXHR9KSB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBUYXNrQWN0aW9ucyA9XHJcblx0fCBOb0VmZmVjdFxyXG5cdHwgR2V0VGFza3NcclxuXHR8IEdldFRhc2tzU3VjY2Vzc1xyXG5cdHwgR2V0VGFza3NGYWlsdXJlXHJcblx0fCBBZGRUYXNrXHJcblx0fCBBZGRUYXNrQ2FuY2VsXHJcblx0fCBBZGRUYXNrU3VjY2Vzc1xyXG5cdHwgQWRkVGFza0ZhaWx1cmVcclxuXHR8IEdldFRhc2tEZXRhaWxzXHJcblx0fCBHZXRUYXNrRGV0YWlsc1N1Y2Nlc3NcclxuXHR8IEdldFRhc2tEZXRhaWxzRmFpbHVyZVxyXG5cdHwgVG9nZ2xlVGFza0RldGFpbHNcclxuXHR8IERlbGV0ZVRhc2tcclxuXHR8IERlbGV0ZVRhc2tTdWNjZXNzXHJcblx0fCBEZWxldGVUYXNrRmFpbHVyZVxyXG5cdHwgQ2hhbmdlVGFza1N0YXR1c1xyXG5cdHwgQ2hhbmdlVGFza1N0YXR1c1N1Y2Nlc3NcclxuXHR8IENoYW5nZVRhc2tTdGF0dXNGYWlsdXJlXHJcblx0fCBFZGl0VGFza1xyXG5cdHwgRWRpdFRhc2tDYW5jZWxcclxuXHR8IEVkaXRUYXNrU3VjY2Vzc1xyXG5cdHwgRWRpdFRhc2tGYWlsdXJlXHJcblx0fCBHZXRUYXNrU3RhdHNcclxuXHR8IEdldFRhc2tTdGF0c1N1Y2Nlc3NcclxuXHR8IEdldFRhc2tTdGF0c0ZhaWx1cmVcclxuXHR8IFNldFRhc2tTdGF0dXNcclxuXHR8IFNldFRhc2tTdGF0dXNTdWNjZXNzXHJcbiJdfQ==