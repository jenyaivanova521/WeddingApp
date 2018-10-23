"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_config_1 = require("../configs/app.config");
var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
        this.apiUrl = app_config_1.API_URL;
    }
    NotificationService.prototype.countUnreadNotifications = function () {
        return this.http.get(this.apiUrl + '/notifications/count');
    };
    NotificationService.prototype.getNotifications = function (page) {
        return this.http.get(this.apiUrl + '/notifications?page=' + page);
    };
    NotificationService.prototype.markAsRead = function () {
        return this.http.patch(this.apiUrl + '/notifications', {});
    };
    NotificationService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBRS9ELG9EQUFnRDtBQUloRDtJQUdJLDZCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFIcEIsV0FBTSxHQUFXLG9CQUFPLENBQUM7SUFJOUIsQ0FBQztJQUVKLHNEQUF3QixHQUF4QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELDhDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxJQUFJLENBQUMsTUFBTSxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQWpCUSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTtpREFLUyxpQkFBVTtPQUpuQixtQkFBbUIsQ0FtQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uL2NvbmZpZ3MvYXBwLmNvbmZpZyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGFwaVVybDogc3RyaW5nID0gQVBJX1VSTDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICkge31cclxuXHJcbiAgICBjb3VudFVucmVhZE5vdGlmaWNhdGlvbnMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL25vdGlmaWNhdGlvbnMvY291bnQnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RpZmljYXRpb25zKHBhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPih0aGlzLmFwaVVybCArICcvbm90aWZpY2F0aW9ucz9wYWdlPScgKyBwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQXNSZWFkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL25vdGlmaWNhdGlvbnMnLCB7fSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==