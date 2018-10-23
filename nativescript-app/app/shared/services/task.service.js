"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var configs_1 = require("~/shared/configs");
var TaskService = /** @class */ (function () {
    function TaskService(store, http) {
        this.store = store;
        this.http = http;
        this.apiUrl = configs_1.API_URL + "/weddings";
    }
    TaskService.prototype.getTasks = function (_a) {
        var weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + "/" + weddingId + "/tasks");
    };
    TaskService.prototype.getTask = function (_a) {
        var weddingId = _a.weddingId, taskId = _a.taskId;
        return this.http.get(this.apiUrl + "/" + weddingId + "/tasks/" + taskId);
    };
    TaskService.prototype.setTaskStatus = function (_a) {
        var weddingId = _a.weddingId, taskId = _a.taskId, status = _a.status;
        return this.http.patch(this.apiUrl + "/" + weddingId + "/tasks/" + taskId, {
            status: status
        });
    };
    TaskService.prototype.addTask = function (_a) {
        var weddingId = _a.weddingId, task = _a.task;
        return this.http.post(this.apiUrl + "/" + weddingId + "/tasks", {
            name: task.name,
            assignedMemberId: task.assignedMemberId,
            dueDate: task.dueDate
        });
    };
    TaskService.prototype.deleteTask = function (_a) {
        var weddingId = _a.weddingId, taskId = _a.taskId;
        return this.http.delete(this.apiUrl + "/" + weddingId + "/tasks/" + taskId);
    };
    TaskService.prototype.editTask = function (_a) {
        var weddingId = _a.weddingId, task = _a.task;
        return this.http.patch(this.apiUrl + "/" + weddingId + "/tasks/" + task.id, {
            name: task.name,
            dueDate: task.dueDate,
            assignedMemberId: task.assignedMemberId
        });
    };
    TaskService.prototype.getTaskStats = function (_a) {
        var weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + "/" + weddingId + "/tasks/stats");
    };
    TaskService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            http_1.HttpClient])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFDbEQscUNBQW9DO0FBR3BDLDRDQUEyQztBQUkzQztJQUlDLHFCQUNTLEtBQW1CLEVBQ25CLElBQWdCO1FBRGhCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUpqQixXQUFNLEdBQWMsaUJBQU8sY0FBVyxDQUFDO0lBSzNDLENBQUM7SUFFRSw4QkFBUSxHQUFmLFVBQWdCLEVBQWE7WUFBWCx3QkFBUztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE1BQU0sU0FBSSxTQUFTLFdBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsRUFBcUI7WUFBbkIsd0JBQVMsRUFBRSxrQkFBTTtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLElBQUksQ0FBQyxNQUFNLFNBQUksU0FBUyxlQUFVLE1BQVEsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxtQ0FBYSxHQUFwQixVQUFxQixFQUE2QjtZQUEzQix3QkFBUyxFQUFFLGtCQUFNLEVBQUUsa0JBQU07UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxNQUFNLFNBQUksU0FBUyxlQUFVLE1BQVEsRUFBRTtZQUNyRSxNQUFNLFFBQUE7U0FDTixDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sNkJBQU8sR0FBZCxVQUFlLEVBQW1CO1lBQWpCLHdCQUFTLEVBQUUsY0FBSTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksSUFBSSxDQUFDLE1BQU0sU0FBSSxTQUFTLFdBQVEsRUFBRTtZQUMxRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUNyQixDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsRUFBcUI7WUFBbkIsd0JBQVMsRUFBRSxrQkFBTTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLE1BQU0sU0FBSSxTQUFTLGVBQVUsTUFBUSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLDhCQUFRLEdBQWYsVUFBZ0IsRUFBbUI7WUFBakIsd0JBQVMsRUFBRSxjQUFJO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsTUFBTSxTQUFJLFNBQVMsZUFBVSxJQUFJLENBQUMsRUFBSSxFQUFFO1lBQ3RFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ3ZDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSxrQ0FBWSxHQUFuQixVQUFvQixFQUFhO1lBQVgsd0JBQVM7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBQyxNQUFNLFNBQUksU0FBUyxpQkFBYyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQTdDVyxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7aURBTUksYUFBSztZQUNOLGlCQUFVO09BTmIsV0FBVyxDQStDdkI7SUFBRCxrQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnfi9zaGFyZWQvY29uZmlncyc7XHJcbmltcG9ydCB7IFN0YXRlLCBUYXNrLCBUYXNrRGV0YWlscyB9IGZyb20gJy4uLy4uL3Jvb3Qtc3RvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFza1NlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIGFwaVVybDogc3RyaW5nID0gYCR7QVBJX1VSTH0vd2VkZGluZ3NgO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPixcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG5cdCkgeyB9XHJcblxyXG5cdHB1YmxpYyBnZXRUYXNrcyh7IHdlZGRpbmdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYXBpVXJsfS8ke3dlZGRpbmdJZH0vdGFza3NgKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRUYXNrKHsgd2VkZGluZ0lkLCB0YXNrSWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxUYXNrRGV0YWlscz4oYCR7dGhpcy5hcGlVcmx9LyR7d2VkZGluZ0lkfS90YXNrcy8ke3Rhc2tJZH1gKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRUYXNrU3RhdHVzKHsgd2VkZGluZ0lkLCB0YXNrSWQsIHN0YXR1cyB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy5hcGlVcmx9LyR7d2VkZGluZ0lkfS90YXNrcy8ke3Rhc2tJZH1gLCB7XHJcblx0XHRcdHN0YXR1c1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkVGFzayh7IHdlZGRpbmdJZCwgdGFzayB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmFwaVVybH0vJHt3ZWRkaW5nSWR9L3Rhc2tzYCwge1xyXG5cdFx0XHRuYW1lOiB0YXNrLm5hbWUsXHJcblx0XHRcdGFzc2lnbmVkTWVtYmVySWQ6IHRhc2suYXNzaWduZWRNZW1iZXJJZCxcclxuXHRcdFx0ZHVlRGF0ZTogdGFzay5kdWVEYXRlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWxldGVUYXNrKHsgd2VkZGluZ0lkLCB0YXNrSWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmFwaVVybH0vJHt3ZWRkaW5nSWR9L3Rhc2tzLyR7dGFza0lkfWApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVkaXRUYXNrKHsgd2VkZGluZ0lkLCB0YXNrIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLmFwaVVybH0vJHt3ZWRkaW5nSWR9L3Rhc2tzLyR7dGFzay5pZH1gLCB7XHJcblx0XHRcdG5hbWU6IHRhc2submFtZSxcclxuXHRcdFx0ZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxyXG5cdFx0XHRhc3NpZ25lZE1lbWJlcklkOiB0YXNrLmFzc2lnbmVkTWVtYmVySWRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFRhc2tTdGF0cyh7IHdlZGRpbmdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFRhc2tbXT4oYCR7dGhpcy5hcGlVcmx9LyR7d2VkZGluZ0lkfS90YXNrcy9zdGF0c2ApO1xyXG5cdH1cclxuXHJcbn1cclxuIl19