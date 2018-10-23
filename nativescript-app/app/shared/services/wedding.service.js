"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
// import { Observable } from 'rxjs/add/operator/map'
// import { Observable } from 'rxjs/Rx';
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var selectors_1 = require("~/root-store/wedding-store/selectors");
var configs_1 = require("~/shared/configs");
var WeddingService = /** @class */ (function () {
    function WeddingService(store, http) {
        var _this = this;
        this.store = store;
        this.http = http;
        this.apiUrl = configs_1.API_URL + '/weddings';
        console.log("wedding service");
        this.store.select(selectors_1.selectActiveWedding).subscribe(function (activeWedding) {
            console.log(activeWedding);
            _this.activeWedding = activeWedding;
        });
    }
    WeddingService.prototype.getWeddings = function () {
        // console.log("get weddings");
        return this.http.get(this.apiUrl + "?isMember=true");
    };
    WeddingService.prototype.getWedding = function (_a) {
        var weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + "/" + weddingId);
    };
    WeddingService.prototype.getWeddingMembers = function () {
        return this.http.get(this.apiUrl + "/" + this.activeWedding.id + "/members?isActive=true");
    };
    WeddingService.prototype.getWeddingPartners = function (_a) {
        var weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + "/" + weddingId + "/partners");
    };
    WeddingService.prototype.getWeddingEvents = function (_a) {
        var weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + "/" + weddingId + "/events");
    };
    WeddingService.prototype.createWedding = function (params) {
        return this.http.post(this.apiUrl, params);
    };
    WeddingService.prototype.changeWeddingName = function (_a) {
        var name = _a.name;
        return this.http.patch(this.apiUrl + "/" + this.activeWedding.id, { name: name });
    };
    WeddingService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            http_1.HttpClient])
    ], WeddingService);
    return WeddingService;
}());
exports.WeddingService = WeddingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VkZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VkZGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFFbEQscUNBQW9DO0FBRXBDLHFEQUFxRDtBQUNyRCx3Q0FBd0M7QUFDeEMsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFLOUIsa0VBQTJFO0FBQzNFLDRDQUFtRDtBQUduRDtJQUtDLHdCQUNTLEtBQW1CLEVBQ25CLElBQWdCO1FBRnpCLGlCQVdDO1FBVlEsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSmpCLFdBQU0sR0FBVyxpQkFBTyxHQUFHLFdBQVcsQ0FBQztRQU05QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2hCLCtCQUFtQixDQUNuQixDQUFDLFNBQVMsQ0FBQyxVQUFBLGFBQWE7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSxvQ0FBVyxHQUFsQjtRQUNDLCtCQUErQjtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsSUFBSSxDQUFDLE1BQU0sbUJBQWdCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sbUNBQVUsR0FBakIsVUFBa0IsRUFBYTtZQUFYLHdCQUFTO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYSxJQUFJLENBQUMsTUFBTSxTQUFJLFNBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSwwQ0FBaUIsR0FBeEI7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsSUFBSSxDQUFDLE1BQU0sU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsMkJBQXdCLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRU0sMkNBQWtCLEdBQXpCLFVBQTBCLEVBQVc7WUFBVix3QkFBUztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWUsSUFBSSxDQUFDLE1BQU0sU0FBSSxTQUFTLGNBQVcsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSx5Q0FBZ0IsR0FBdkIsVUFBd0IsRUFBVztZQUFWLHdCQUFTO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxJQUFJLENBQUMsTUFBTSxTQUFJLFNBQVMsWUFBUyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLE1BQWU7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLDBDQUFpQixHQUF4QixVQUF5QixFQUFRO1lBQU4sY0FBSTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLE1BQU0sU0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBN0NXLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtpREFPSSxhQUFLO1lBQ04saUJBQVU7T0FQYixjQUFjLENBK0MxQjtJQUFELHFCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgc2VsZWN0QWN0aXZlV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IEFQSV9VUkwsIENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2VkZGluZ1NlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIGFjdGl2ZVdlZGRpbmc6IGFueTtcclxuXHRwcml2YXRlIGFwaVVybDogc3RyaW5nID0gQVBJX1VSTCArICcvd2VkZGluZ3MnO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPixcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG5cdCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJ3ZWRkaW5nIHNlcnZpY2VcIik7XHJcblx0XHR0aGlzLnN0b3JlLnNlbGVjdChcclxuXHRcdFx0c2VsZWN0QWN0aXZlV2VkZGluZ1xyXG5cdFx0KS5zdWJzY3JpYmUoYWN0aXZlV2VkZGluZyA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGFjdGl2ZVdlZGRpbmcpO1xyXG5cdFx0XHR0aGlzLmFjdGl2ZVdlZGRpbmcgPSBhY3RpdmVXZWRkaW5nO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0V2VkZGluZ3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwiZ2V0IHdlZGRpbmdzXCIpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8V2VkZGluZ1tdPihgJHt0aGlzLmFwaVVybH0/aXNNZW1iZXI9dHJ1ZWApO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgZ2V0V2VkZGluZyh7IHdlZGRpbmdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFdlZGRpbmc+KGAke3RoaXMuYXBpVXJsfS8ke3dlZGRpbmdJZH1gKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRXZWRkaW5nTWVtYmVycygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8V2VkZGluZ1tdPihgJHt0aGlzLmFwaVVybH0vJHt0aGlzLmFjdGl2ZVdlZGRpbmcuaWR9L21lbWJlcnM/aXNBY3RpdmU9dHJ1ZWApO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFdlZGRpbmdQYXJ0bmVycyh7d2VkZGluZ0lkfSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxXZWRkaW5nW10+KGAke3RoaXMuYXBpVXJsfS8ke3dlZGRpbmdJZH0vcGFydG5lcnNgKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRXZWRkaW5nRXZlbnRzKHt3ZWRkaW5nSWR9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFdlZGRpbmdbXT4oYCR7dGhpcy5hcGlVcmx9LyR7d2VkZGluZ0lkfS9ldmVudHNgKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjcmVhdGVXZWRkaW5nKHBhcmFtczogV2VkZGluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwsIHBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlV2VkZGluZ05hbWUoeyBuYW1lIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLmFwaVVybH0vJHt0aGlzLmFjdGl2ZVdlZGRpbmcuaWR9YCwgeyBuYW1lIH0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19