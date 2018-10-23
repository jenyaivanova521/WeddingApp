"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_config_1 = require("../configs/app.config");
var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
        this.apiUrl = app_config_1.API_URL;
    }
    MessageService.prototype.countUnreadMessages = function () {
        return this.http.get(this.apiUrl + '/messages/count');
    };
    MessageService.prototype.getConversations = function (page) {
        return this.http.get(this.apiUrl + '/conversations?page=' + page);
    };
    MessageService.prototype.getConversation = function (conversationId) {
        return this.http.get(this.apiUrl + '/conversations/' + conversationId);
    };
    MessageService.prototype.getUnreadMessagesCount = function () {
        return this.http.get(this.apiUrl + '/messages/count');
    };
    MessageService.prototype.getMessages = function (_a) {
        var conversationId = _a.conversationId, page = _a.page;
        return this.http.get(this.apiUrl + '/conversations/' + conversationId + '/messages?page=' + page);
    };
    MessageService.prototype.markAsRead = function (conversationId) {
        return this.http.patch(this.apiUrl + '/conversations/' + conversationId, {});
    };
    MessageService.prototype.sendMessage = function (data) {
        return this.http.post(this.apiUrl + '/messages', data);
    };
    MessageService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFFL0Qsb0RBQWdEO0FBR2hEO0lBR0ksd0JBQ1ksSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQixXQUFNLEdBQVcsb0JBQU8sQ0FBQztJQUk3QixDQUFDO0lBRUwsNENBQW1CLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBZ0IsY0FBYztRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsK0NBQXNCLEdBQXRCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLEVBQXdCO1lBQXRCLGtDQUFjLEVBQUUsY0FBSTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxjQUFjLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxjQUFjO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBUSxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixHQUFHLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQWpDUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7aURBS1MsaUJBQVU7T0FKbkIsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25maWdzL2FwcC5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBhcGlVcmw6IHN0cmluZyA9IEFQSV9VUkw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHsgfVxyXG5cclxuICAgIGNvdW50VW5yZWFkTWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL21lc3NhZ2VzL2NvdW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVyc2F0aW9ucyhwYWdlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL2NvbnZlcnNhdGlvbnM/cGFnZT0nICsgcGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVyc2F0aW9uKGNvbnZlcnNhdGlvbklkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL2NvbnZlcnNhdGlvbnMvJyArIGNvbnZlcnNhdGlvbklkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVbnJlYWRNZXNzYWdlc0NvdW50KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KHRoaXMuYXBpVXJsICsgJy9tZXNzYWdlcy9jb3VudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lc3NhZ2VzKHsgY29udmVyc2F0aW9uSWQsIHBhZ2UgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KHRoaXMuYXBpVXJsICsgJy9jb252ZXJzYXRpb25zLycgKyBjb252ZXJzYXRpb25JZCArICcvbWVzc2FnZXM/cGFnZT0nICsgcGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0FzUmVhZChjb252ZXJzYXRpb25JZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL2NvbnZlcnNhdGlvbnMvJyArIGNvbnZlcnNhdGlvbklkLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZE1lc3NhZ2UoZGF0YSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsICsgJy9tZXNzYWdlcycsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=