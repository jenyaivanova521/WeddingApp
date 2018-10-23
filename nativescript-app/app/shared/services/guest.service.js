"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var configs_1 = require("~/shared/configs");
var GuestService = /** @class */ (function () {
    function GuestService(http) {
        this.http = http;
        this.apiUrl = configs_1.API_URL;
    }
    GuestService.prototype.getGuests = function (_a) {
        var weddingId = _a.weddingId, options = _a.options;
        var params = '';
        Object.keys(options).map(function (key, i) {
            var value = options[key];
            if (value) {
                params += "" + (params.length == 0 ? '/?' : '&') + key + "=" + value;
            }
        });
        return this.http.get(this.apiUrl + "/weddings/" + weddingId + "/guests" + params);
    };
    GuestService.prototype.getGuest = function (_a) {
        var guestId = _a.guestId, weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + "/weddings/" + weddingId + "/guests/" + guestId);
    };
    GuestService.prototype.addGuest = function (_a) {
        var guest = _a.guest, weddingId = _a.weddingId;
        return this.http.post(this.apiUrl + "/weddings/" + weddingId + "/guests", guest);
    };
    GuestService.prototype.editGuest = function (_a) {
        var guest = _a.guest, guestId = _a.guestId, weddingId = _a.weddingId;
        return this.http.patch(this.apiUrl + "/weddings/" + weddingId + "/guests/" + guestId, guest);
    };
    GuestService.prototype.deleteGuest = function (_a) {
        var guestId = _a.guestId, weddingId = _a.weddingId;
        return this.http.delete(this.apiUrl + "/weddings/" + weddingId + "/guests/" + guestId);
    };
    GuestService.prototype.getStats = function (weddingId) {
        return this.http.get(this.apiUrl + "/weddings/" + weddingId + "/guests/stats");
    };
    GuestService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], GuestService);
    return GuestService;
}());
exports.GuestService = GuestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImd1ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCw0Q0FBMkM7QUFHM0M7SUFHSSxzQkFDWSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSHBCLFdBQU0sR0FBVyxpQkFBTyxDQUFDO0lBS2pDLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsRUFBc0I7WUFBcEIsd0JBQVMsRUFBRSxvQkFBTztRQUMxQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUCxNQUFNLElBQUksTUFBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUcsR0FBRyxTQUFJLEtBQU8sQ0FBQztZQUNsRSxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLE1BQU0sa0JBQWEsU0FBUyxlQUFVLE1BQVEsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsRUFBc0I7WUFBcEIsb0JBQU8sRUFBRSx3QkFBUztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsSUFBSSxDQUFDLE1BQU0sa0JBQWEsU0FBUyxnQkFBVyxPQUFTLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFTLEVBQW9CO1lBQWxCLGdCQUFLLEVBQUUsd0JBQVM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxNQUFNLGtCQUFhLFNBQVMsWUFBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsRUFBNkI7WUFBM0IsZ0JBQUssRUFBRSxvQkFBTyxFQUFFLHdCQUFTO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsTUFBTSxrQkFBYSxTQUFTLGdCQUFXLE9BQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLEVBQXNCO1lBQXBCLG9CQUFPLEVBQUUsd0JBQVM7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxNQUFNLGtCQUFhLFNBQVMsZ0JBQVcsT0FBUyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxTQUFTO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLElBQUksQ0FBQyxNQUFNLGtCQUFhLFNBQVMsa0JBQWUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFyQ1EsWUFBWTtRQUR4QixpQkFBVSxFQUFFO2lEQUtTLGlCQUFVO09BSm5CLFlBQVksQ0F1Q3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnfi9zaGFyZWQvY29uZmlncyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHdWVzdFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBhcGlVcmw6IHN0cmluZyA9IEFQSV9VUkw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHdWVzdHMoeyB3ZWRkaW5nSWQsIG9wdGlvbnMgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9ICcnO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcCgoa2V5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcyArPSBgJHtwYXJhbXMubGVuZ3RoID09IDAgPyAnLz8nIDogJyYnfSR7a2V5fT0ke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4oYCR7dGhpcy5hcGlVcmx9L3dlZGRpbmdzLyR7d2VkZGluZ0lkfS9ndWVzdHMke3BhcmFtc31gKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHdWVzdCh7IGd1ZXN0SWQsIHdlZGRpbmdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4oYCR7dGhpcy5hcGlVcmx9L3dlZGRpbmdzLyR7d2VkZGluZ0lkfS9ndWVzdHMvJHtndWVzdElkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEd1ZXN0KHsgZ3Vlc3QsIHdlZGRpbmdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5hcGlVcmx9L3dlZGRpbmdzLyR7d2VkZGluZ0lkfS9ndWVzdHNgLCBndWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEd1ZXN0KHsgZ3Vlc3QsIGd1ZXN0SWQsIHdlZGRpbmdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMuYXBpVXJsfS93ZWRkaW5ncy8ke3dlZGRpbmdJZH0vZ3Vlc3RzLyR7Z3Vlc3RJZH1gLCBndWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlR3Vlc3QoeyBndWVzdElkLCB3ZWRkaW5nSWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5hcGlVcmx9L3dlZGRpbmdzLyR7d2VkZGluZ0lkfS9ndWVzdHMvJHtndWVzdElkfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRzKHdlZGRpbmdJZCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KGAke3RoaXMuYXBpVXJsfS93ZWRkaW5ncy8ke3dlZGRpbmdJZH0vZ3Vlc3RzL3N0YXRzYCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==