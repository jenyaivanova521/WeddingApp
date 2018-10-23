"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var app_config_1 = require("../configs/app.config");
var MemberService = /** @class */ (function () {
    function MemberService(store, http) {
        this.store = store;
        this.http = http;
        this.apiUrl = app_config_1.API_URL + '/weddings';
    }
    MemberService.prototype.getMembers = function (_a) {
        var weddingId = _a.weddingId, isActive = _a.isActive;
        console.log("get members");
        return this.http.get(this.apiUrl + '/' + weddingId + '/members' + (isActive ? '?isActive=true' : ''));
    };
    MemberService.prototype.addMember = function (_a) {
        var weddingId = _a.weddingId, member = _a.member;
        return this.http.post(this.apiUrl + '/' + weddingId + '/members', {
            email: member.email,
            role: member.role
        });
    };
    MemberService.prototype.changeMemberRole = function (_a) {
        var weddingId = _a.weddingId, memberId = _a.memberId, role = _a.role;
        return this.http.patch(this.apiUrl + '/' + weddingId + '/members/' + memberId, {
            role: role
        });
    };
    MemberService.prototype.deleteMember = function (_a) {
        var weddingId = _a.weddingId, memberId = _a.memberId;
        return this.http.delete(this.apiUrl + '/' + weddingId + '/members/' + memberId);
    };
    MemberService.prototype.getInvitations = function () {
        return this.http.get(app_config_1.API_URL + "/members/invitations");
    };
    MemberService.prototype.acceptInvite = function (_a) {
        var weddingId = _a.weddingId, memberId = _a.memberId, invitationId = _a.invitationId;
        return this.http.post(this.apiUrl + "/" + weddingId + "/members/" + memberId + "/invitations/" + invitationId, { isActive: true });
    };
    MemberService.prototype.rejectInvite = function (_a) {
        var invitationId = _a.invitationId;
        return this.http.delete(app_config_1.API_URL + "/members/invitations/" + invitationId);
    };
    MemberService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            http_1.HttpClient])
    ], MemberService);
    return MemberService;
}());
exports.MemberService = MemberService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW1iZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELHFDQUFvQztBQUNwQyxvREFBZ0Q7QUFLaEQ7SUFHSSx1QkFDWSxLQUFtQixFQUNuQixJQUFnQjtRQURoQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVk7UUFKcEIsV0FBTSxHQUFXLG9CQUFPLEdBQUcsV0FBVyxDQUFDO0lBSzNDLENBQUM7SUFFTCxrQ0FBVSxHQUFWLFVBQVcsRUFBa0U7WUFBaEUsd0JBQVMsRUFBRSxzQkFBUTtRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsVUFBVSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEVBQXFCO1lBQW5CLHdCQUFTLEVBQUUsa0JBQU07UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFNBQVMsR0FBRyxVQUFVLEVBQUU7WUFDOUQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLEVBQTZCO1lBQTNCLHdCQUFTLEVBQUUsc0JBQVEsRUFBRSxjQUFJO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHLFFBQVEsRUFBRTtZQUMzRSxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsRUFBdUI7WUFBckIsd0JBQVMsRUFBRSxzQkFBUTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sc0NBQWMsR0FBckI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksb0JBQU8seUJBQXNCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sb0NBQVksR0FBbkIsVUFBb0IsRUFBcUM7WUFBbkMsd0JBQVMsRUFBRSxzQkFBUSxFQUFFLDhCQUFZO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsTUFBTSxTQUFJLFNBQVMsaUJBQVksUUFBUSxxQkFBZ0IsWUFBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0gsQ0FBQztJQUVNLG9DQUFZLEdBQW5CLFVBQW9CLEVBQWdCO1lBQWQsOEJBQVk7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLG9CQUFPLDZCQUF3QixZQUFjLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBeENRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTtpREFLVSxhQUFLO1lBQ04saUJBQVU7T0FMbkIsYUFBYSxDQTBDekI7SUFBRCxvQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi9jb25maWdzL2FwcC5jb25maWcnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZW1iZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgYXBpVXJsOiBzdHJpbmcgPSBBUElfVVJMICsgJy93ZWRkaW5ncyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBnZXRNZW1iZXJzKHsgd2VkZGluZ0lkLCBpc0FjdGl2ZSB9OiB7IHdlZGRpbmdJZDogc3RyaW5nLCBpc0FjdGl2ZT86IGJvb2xlYW4gfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgbWVtYmVyc1wiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxNZW1iZXJbXT4odGhpcy5hcGlVcmwgKyAnLycgKyB3ZWRkaW5nSWQgKyAnL21lbWJlcnMnICsgKGlzQWN0aXZlID8gJz9pc0FjdGl2ZT10cnVlJyA6ICcnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWVtYmVyKHsgd2VkZGluZ0lkLCBtZW1iZXIgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsICsgJy8nICsgd2VkZGluZ0lkICsgJy9tZW1iZXJzJywge1xyXG4gICAgICAgICAgICBlbWFpbDogbWVtYmVyLmVtYWlsLFxyXG4gICAgICAgICAgICByb2xlOiBtZW1iZXIucm9sZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZU1lbWJlclJvbGUoeyB3ZWRkaW5nSWQsIG1lbWJlcklkLCByb2xlIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2godGhpcy5hcGlVcmwgKyAnLycgKyB3ZWRkaW5nSWQgKyAnL21lbWJlcnMvJyArIG1lbWJlcklkLCB7XHJcbiAgICAgICAgICAgIHJvbGU6IHJvbGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVNZW1iZXIoeyB3ZWRkaW5nSWQsIG1lbWJlcklkIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpVXJsICsgJy8nICsgd2VkZGluZ0lkICsgJy9tZW1iZXJzLycgKyBtZW1iZXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEludml0YXRpb25zKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7QVBJX1VSTH0vbWVtYmVycy9pbnZpdGF0aW9uc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY2NlcHRJbnZpdGUoeyB3ZWRkaW5nSWQsIG1lbWJlcklkLCBpbnZpdGF0aW9uSWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpVXJsfS8ke3dlZGRpbmdJZH0vbWVtYmVycy8ke21lbWJlcklkfS9pbnZpdGF0aW9ucy8ke2ludml0YXRpb25JZH1gLCB7IGlzQWN0aXZlOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWplY3RJbnZpdGUoeyBpbnZpdGF0aW9uSWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7QVBJX1VSTH0vbWVtYmVycy9pbnZpdGF0aW9ucy8ke2ludml0YXRpb25JZH1gKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19