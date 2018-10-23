"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var store_1 = require("@ngrx/store");
var root_store_1 = require("~/root-store");
var message_service_1 = require("~/shared/services/message.service");
var ConversationsComponent = /** @class */ (function () {
    function ConversationsComponent(store, messageService) {
        this.store = store;
        this.messageService = messageService;
        // unreadMessagesCount: Observable<number>;
        this.conversations = [];
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 220; // Topbar height + some margin (bottom clear all bar)
    }
    ConversationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeProfileSubscription = this.store.select(root_store_1.ProfileSelectors.selectActiveProfile).subscribe(function (activeProfile) {
            _this.activeProfile = activeProfile;
        });
        // this.unreadMessagesCount = this.store.select(
        //     MessageSelectors.selectUnreadMessagesCount
        // ).pipe(delay(0));
        this.store.select(root_store_1.MessageSelectors.selectConversations).subscribe(function (conv) {
            _this.conversations = conv;
            console.log("converations: ");
            console.log(conv);
        });
        this.infiniteScrollSubscription = this.store.select(root_store_1.MessageSelectors.selectInfiniteScroll).subscribe(function (infiniteScroll) {
            _this.infiniteScroll = infiniteScroll;
        });
    };
    ConversationsComponent.prototype.ngOnDestroy = function () {
        this.activeProfileSubscription.unsubscribe();
        this.infiniteScrollSubscription.unsubscribe();
    };
    ConversationsComponent.prototype.getConversations = function (page) {
        var _this = this;
        page++;
        this.loading = true;
        this.messageService.getConversations(page)
            .toPromise().then(function (response) {
            _this.loading = false;
            _this.store.dispatch(new root_store_1.MessageActions.AppendConversations({
                conversations: response.result,
                infiniteScroll: {
                    page: page,
                    disabled: response.result.length == 0 ? true : false
                }
            }));
        });
    };
    ConversationsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'conversations',
            templateUrl: 'conversations.component.html',
            styleUrls: ['./conversations.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            message_service_1.MessageService])
    ], ConversationsComponent);
    return ConversationsComponent;
}());
exports.ConversationsComponent = ConversationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb252ZXJzYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0Qsc0RBQW1EO0FBR25ELHFDQUFvQztBQUNwQywyQ0FBa0c7QUFDbEcscUVBQW1FO0FBU25FO0lBWUMsZ0NBQ1MsS0FBa0MsRUFDNUIsY0FBOEI7UUFEcEMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUDFDLDJDQUEyQztRQUMzQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztRQU9yQixJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxxREFBcUQ7SUFDakgsQ0FBQztJQUNELHlDQUFRLEdBQVI7UUFBQSxpQkFxQkk7UUFwQkcsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUM5Qyw2QkFBZ0IsQ0FBQyxtQkFBbUIsQ0FDdkMsQ0FBQyxTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3JCLEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsZ0RBQWdEO1FBQ2hELGlEQUFpRDtRQUNqRCxvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ2IsNkJBQWdCLENBQUMsbUJBQW1CLENBQ3ZDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNyQixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtRQUNJLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDL0MsNkJBQWdCLENBQUMsb0JBQW9CLENBQ3hDLENBQUMsU0FBUyxDQUFDLFVBQUEsY0FBYztZQUN0QixLQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsaURBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBY0M7UUFiRyxJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQ3JDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBYyxDQUFDLG1CQUFtQixDQUFDO2dCQUN2RCxhQUFhLEVBQUUsUUFBUSxDQUFDLE1BQU07Z0JBQzlCLGNBQWMsRUFBRTtvQkFDWixJQUFJLEVBQUUsSUFBSTtvQkFDVixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7aUJBQ3ZEO2FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDUixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUEzRFEsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUM3QyxDQUFDO2lEQWNlLGFBQUs7WUFDVSxnQ0FBYztPQWRqQyxzQkFBc0IsQ0E0RGxDO0lBQUQsNkJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBJU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFJvb3RTdG9yZVN0YXRlLCBQcm9maWxlU2VsZWN0b3JzLCBNZXNzYWdlU2VsZWN0b3JzLCBNZXNzYWdlQWN0aW9ucyB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY29udmVyc2F0aW9ucycsXHJcblx0dGVtcGxhdGVVcmw6ICdjb252ZXJzYXRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jb252ZXJzYXRpb25zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuXHJcblx0cHVibGljIGNvbnRhaW5lckhlaWdodDtcclxuXHRhY3RpdmVDb252ZXJzYXRpb25JZDogc3RyaW5nO1xyXG4gICAgYWN0aXZlUHJvZmlsZTogYW55O1xyXG4gICAgYWN0aXZlUHJvZmlsZVN1YnNjcmlwdGlvbjogSVN1YnNjcmlwdGlvbjtcclxuICAgIGluZmluaXRlU2Nyb2xsU3Vic2NyaXB0aW9uOiBJU3Vic2NyaXB0aW9uO1xyXG4gICAgLy8gdW5yZWFkTWVzc2FnZXNDb3VudDogT2JzZXJ2YWJsZTxudW1iZXI+O1xyXG4gICAgY29udmVyc2F0aW9ucyA9IFtdO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuXHRpbmZpbml0ZVNjcm9sbDogb2JqZWN0O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8Um9vdFN0b3JlU3RhdGUuU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgLSAyMjA7IC8vIFRvcGJhciBoZWlnaHQgKyBzb21lIG1hcmdpbiAoYm90dG9tIGNsZWFyIGFsbCBiYXIpXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUHJvZmlsZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KFxyXG4gICAgICAgICAgICBQcm9maWxlU2VsZWN0b3JzLnNlbGVjdEFjdGl2ZVByb2ZpbGVcclxuICAgICAgICApLnN1YnNjcmliZShhY3RpdmVQcm9maWxlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9maWxlID0gYWN0aXZlUHJvZmlsZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnVucmVhZE1lc3NhZ2VzQ291bnQgPSB0aGlzLnN0b3JlLnNlbGVjdChcclxuICAgICAgICAvLyAgICAgTWVzc2FnZVNlbGVjdG9ycy5zZWxlY3RVbnJlYWRNZXNzYWdlc0NvdW50XHJcbiAgICAgICAgLy8gKS5waXBlKGRlbGF5KDApKTtcclxuICAgICAgICB0aGlzLnN0b3JlLnNlbGVjdChcclxuICAgICAgICAgICAgTWVzc2FnZVNlbGVjdG9ycy5zZWxlY3RDb252ZXJzYXRpb25zXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoY29udiA9PiB7XHJcblx0XHRcdHRoaXMuY29udmVyc2F0aW9ucyA9IGNvbnY7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiY29udmVyYXRpb25zOiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNvbnYpO1xyXG5cdFx0fSlcclxuICAgICAgICB0aGlzLmluZmluaXRlU2Nyb2xsU3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3QoXHJcbiAgICAgICAgICAgIE1lc3NhZ2VTZWxlY3RvcnMuc2VsZWN0SW5maW5pdGVTY3JvbGxcclxuICAgICAgICApLnN1YnNjcmliZShpbmZpbml0ZVNjcm9sbCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGwgPSBpbmZpbml0ZVNjcm9sbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2ZpbGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLmluZmluaXRlU2Nyb2xsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udmVyc2F0aW9ucyhwYWdlKSB7XHJcbiAgICAgICAgcGFnZSsrO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5nZXRDb252ZXJzYXRpb25zKHBhZ2UpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTWVzc2FnZUFjdGlvbnMuQXBwZW5kQ29udmVyc2F0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uczogcmVzcG9uc2UucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlU2Nyb2xsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiByZXNwb25zZS5yZXN1bHQubGVuZ3RoID09IDAgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==