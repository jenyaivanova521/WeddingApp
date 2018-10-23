"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var profile_service_1 = require("~/shared/services/profile.service");
var message_service_1 = require("~/shared/services/message.service");
var store_1 = require("@ngrx/store");
var root_store_1 = require("~/root-store");
var LoggedInAppComponent = /** @class */ (function () {
    function LoggedInAppComponent(profileService, messageService, store) {
        this.profileService = profileService;
        this.messageService = messageService;
        this.store = store;
        this.showMenu = false;
    }
    LoggedInAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.initProfiles();
        this.messageService.getUnreadMessagesCount()
            .toPromise().then(function (response) {
            _this.store.dispatch(new root_store_1.MessageActions.SetUnreadMessagesCount({
                unreadMessagesCount: response.result
            }));
        });
        this.messageService.getConversations(1)
            .toPromise().then(function (response) {
            _this.store.dispatch(new root_store_1.MessageActions.AppendConversations({
                conversations: response.result,
                infiniteScroll: {
                    page: 1,
                    disabled: false
                }
            }));
        });
    };
    LoggedInAppComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    LoggedInAppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'logged-in-app',
            templateUrl: 'logged-in-app.component.html',
            styleUrls: ['./logged-in-app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService,
            message_service_1.MessageService,
            store_1.Store])
    ], LoggedInAppComponent);
    return LoggedInAppComponent;
}());
exports.LoggedInAppComponent = LoggedInAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dnZWQtaW4tYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMscUVBQW1FO0FBQ25FLHFFQUFtRTtBQUNuRSxxQ0FBb0M7QUFDcEMsMkNBQThEO0FBTzlEO0lBSUMsOEJBQ1MsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsS0FBa0M7UUFGbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUxwQyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBT2pDLENBQUM7SUFDRCx1Q0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJBLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsRUFBRTthQUNqQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQWMsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDMUQsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLE1BQU07YUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2FBQzdCLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBYyxDQUFDLG1CQUFtQixDQUFDO2dCQUN2RCxhQUFhLEVBQUUsUUFBUSxDQUFDLE1BQU07Z0JBQzlCLGNBQWMsRUFBRTtvQkFDWixJQUFJLEVBQUUsQ0FBQztvQkFDUCxRQUFRLEVBQUUsS0FBSztpQkFDbEI7YUFDSixDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUNNLHlDQUFVLEdBQWpCO1FBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQS9CVyxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDN0MsQ0FBQztpREFNd0IsZ0NBQWM7WUFDZCxnQ0FBYztZQUN2QixhQUFLO09BUFQsb0JBQW9CLENBaUNoQztJQUFELDJCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvcHJvZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgTWVzc2FnZUFjdGlvbnMsIFJvb3RTdG9yZVN0YXRlIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbG9nZ2VkLWluLWFwcCcsXHJcblx0dGVtcGxhdGVVcmw6ICdsb2dnZWQtaW4tYXBwLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9sb2dnZWQtaW4tYXBwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2dlZEluQXBwQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIHNob3dNZW51OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBwcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsXHJcblx0XHRwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFJvb3RTdG9yZVN0YXRlLlN0YXRlPlxyXG5cdCkge1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcdFx0XHJcblx0XHR0aGlzLnByb2ZpbGVTZXJ2aWNlLmluaXRQcm9maWxlcygpO1xyXG5cdFx0dGhpcy5tZXNzYWdlU2VydmljZS5nZXRVbnJlYWRNZXNzYWdlc0NvdW50KClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTWVzc2FnZUFjdGlvbnMuU2V0VW5yZWFkTWVzc2FnZXNDb3VudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5yZWFkTWVzc2FnZXNDb3VudDogcmVzcG9uc2UucmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cdFx0XHR0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldENvbnZlcnNhdGlvbnMoMSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTWVzc2FnZUFjdGlvbnMuQXBwZW5kQ29udmVyc2F0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uczogcmVzcG9uc2UucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlU2Nyb2xsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcblx0fVxyXG5cdHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93TWVudSA9ICF0aGlzLnNob3dNZW51O1xyXG5cdH1cclxuXHJcbn0iXX0=