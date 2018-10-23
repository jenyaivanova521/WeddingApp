"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var store_1 = require("@ngrx/store");
var root_store_1 = require("~/root-store");
var notification_service_1 = require("~/shared/services/notification.service");
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(store, notificationService) {
        this.store = store;
        this.notificationService = notificationService;
        this.notifications = [];
        this.loading = false;
        this.page = 0;
        this.infiniteScrollDisabled = false;
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 220; // Topbar height + some margin (bottom clear all bar)
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeProfileSub = this.store.select(root_store_1.ProfileSelectors.selectActiveProfile).subscribe(function (activeProfile) {
            _this.activeProfile = activeProfile;
            _this.readNotifcations(true);
        });
        // this.notificationService.countUnreadNotifications()
        //     .toPromise().then(response => {
        //         this.notificationsCount = response.result
        // 	});
    };
    NotificationsComponent.prototype.ngOnDestroy = function () {
        this.activeProfileSub.unsubscribe();
    };
    NotificationsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.page++;
        this.notificationService.getNotifications(this.page)
            .toPromise().then(function (response) {
            _this.loading = false;
            if (response.result.length == 0) {
                _this.infiniteScrollDisabled = true;
            }
            else {
                _this.notifications = _this.notifications.concat(response.result);
            }
            console.log("notifications: ");
            console.log(_this.notifications);
        }).catch(function (error) {
            _this.loading = false;
        });
    };
    NotificationsComponent.prototype.readNotifcations = function (opening) {
        if (opening) {
            this.loading = true;
            this.page = 0;
            this.infiniteScrollDisabled = false;
            this.notifications = [];
            this.getNotifications();
            this.notificationService.markAsRead()
                .toPromise().then(function (response) {
                // this.notificationsCount = 0;
                console.log("read notification");
                console.log(response);
            });
        }
    };
    NotificationsComponent.prototype.getRouterLink = function (notification) {
        var link;
        switch (notification.type) {
            case 'comment_created':
            case 'like_created':
                link = ['/', 'wedding', notification.additionalData.weddingId, 'post', notification.additionalData.postId];
                break;
            case 'invitation_received':
                link = ['/settings/invitations'];
                break;
            case 'vendor_review_created':
                link = ['/', 'vendor', notification.additionalData.vendorId, 'review', notification.entityId];
                break;
            case 'guest_status_changed':
                link = ['/', 'guest-list'];
                break;
        }
        return link;
    };
    NotificationsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notifications',
            templateUrl: 'notifications.component.html',
            styleUrls: ['./notifications.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            notification_service_1.NotificationService])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQW1EO0FBRW5ELHFDQUFvQztBQUNwQywyQ0FBZ0U7QUFDaEUsK0VBQTZFO0FBUTdFO0lBc0JDLGdDQUNTLEtBQWtDLEVBQzVCLG1CQUF3QztRQUQ5QyxVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBVHBELGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNwQiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFPdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMscURBQXFEO0lBQ2pILENBQUM7SUFDRCx5Q0FBUSxHQUFSO1FBQUEsaUJBWUk7UUFYRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3JDLDZCQUFnQixDQUFDLG1CQUFtQixDQUN2QyxDQUFDLFNBQVMsQ0FBQyxVQUFBLGFBQWE7WUFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDekMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsc0RBQXNEO1FBQ3RELHNDQUFzQztRQUN0QyxvREFBb0Q7UUFDMUQsT0FBTztJQUVMLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxpREFBZ0IsR0FBaEI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxJQUFJ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Q0FBQztpREF3QmUsYUFBSztZQUNlLDBDQUFtQjtPQXhCM0Msc0JBQXNCLENBaUdsQztJQUFELDZCQUFDO0NBQUEsQUFqR0QsSUFpR0M7QUFqR1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBJU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUm9vdFN0b3JlU3RhdGUsIFByb2ZpbGVTZWxlY3RvcnMgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ25vdGlmaWNhdGlvbnMnLFxyXG5cdHRlbXBsYXRlVXJsOiAnbm90aWZpY2F0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zQ29tcG9uZW50IHtcclxuXHJcblx0Ly8gcHVibGljIG5vdGlmaWNhdGlvbnM6IEFycmF5PGFueT4gPSBbXHJcblx0Ly8gXHR7XHJcblx0Ly8gXHRcdHVucmVhZDogdHJ1ZSxcclxuXHQvLyBcdH0se1xyXG5cdC8vIFx0XHR1bnJlYWQ6IGZhbHNlLFxyXG5cdC8vIFx0fSx7XHJcblx0Ly8gXHRcdHVucmVhZDogZmFsc2UsXHJcblx0Ly8gXHR9XHJcblx0Ly8gXTtcclxuXHRhY3RpdmVQcm9maWxlOiBhbnk7XHJcbiAgICBhY3RpdmVQcm9maWxlU3ViOiBJU3Vic2NyaXB0aW9uO1xyXG4gICAgc2lvU3Vic2NyaXB0aW9uOiBhbnk7XHJcbiAgICBub3RpZmljYXRpb25zQ291bnQ6IG51bWJlcjtcclxuICAgIG5vdGlmaWNhdGlvbnMgPSBbXTtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHBhZ2U6IG51bWJlciA9IDA7XHJcblx0aW5maW5pdGVTY3JvbGxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdHB1YmxpYyBjb250YWluZXJIZWlnaHQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8Um9vdFN0b3JlU3RhdGUuU3RhdGU+LFxyXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSkge1xyXG5cdFx0dGhpcy5jb250YWluZXJIZWlnaHQgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzIC0gMjIwOyAvLyBUb3BiYXIgaGVpZ2h0ICsgc29tZSBtYXJnaW4gKGJvdHRvbSBjbGVhciBhbGwgYmFyKVxyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVByb2ZpbGVTdWIgPSB0aGlzLnN0b3JlLnNlbGVjdChcclxuICAgICAgICAgICAgUHJvZmlsZVNlbGVjdG9ycy5zZWxlY3RBY3RpdmVQcm9maWxlXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoYWN0aXZlUHJvZmlsZSA9PiB7XHRcdFx0XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvZmlsZSA9IGFjdGl2ZVByb2ZpbGU7XHJcbiAgICBcdFx0dGhpcy5yZWFkTm90aWZjYXRpb25zKHRydWUpOyAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5jb3VudFVucmVhZE5vdGlmaWNhdGlvbnMoKVxyXG4gICAgICAgIC8vICAgICAudG9Qcm9taXNlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnNDb3VudCA9IHJlc3BvbnNlLnJlc3VsdFxyXG5cdFx0Ly8gXHR9KTtcclxuXHRcdFx0XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9maWxlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm90aWZpY2F0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnBhZ2UrKztcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0Tm90aWZpY2F0aW9ucyh0aGlzLnBhZ2UpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGxEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyA9IHRoaXMubm90aWZpY2F0aW9ucy5jb25jYXQocmVzcG9uc2UucmVzdWx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJub3RpZmljYXRpb25zOiBcIik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5ub3RpZmljYXRpb25zKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWROb3RpZmNhdGlvbnMob3BlbmluZykge1xyXG4gICAgICAgIGlmIChvcGVuaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGxEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5tYXJrQXNSZWFkKClcclxuICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdC8vIHRoaXMubm90aWZpY2F0aW9uc0NvdW50ID0gMDtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwicmVhZCBub3RpZmljYXRpb25cIik7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3V0ZXJMaW5rKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIGxldCBsaW5rO1xyXG4gICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnY29tbWVudF9jcmVhdGVkJzpcclxuICAgICAgICAgICAgY2FzZSAnbGlrZV9jcmVhdGVkJzpcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBbJy8nLCAnd2VkZGluZycsIG5vdGlmaWNhdGlvbi5hZGRpdGlvbmFsRGF0YS53ZWRkaW5nSWQsICdwb3N0Jywgbm90aWZpY2F0aW9uLmFkZGl0aW9uYWxEYXRhLnBvc3RJZF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaW52aXRhdGlvbl9yZWNlaXZlZCc6XHJcbiAgICAgICAgICAgICAgICBsaW5rID0gWycvc2V0dGluZ3MvaW52aXRhdGlvbnMnXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd2ZW5kb3JfcmV2aWV3X2NyZWF0ZWQnOlxyXG4gICAgICAgICAgICAgICAgbGluayA9IFsnLycsICd2ZW5kb3InLCBub3RpZmljYXRpb24uYWRkaXRpb25hbERhdGEudmVuZG9ySWQsICdyZXZpZXcnLCBub3RpZmljYXRpb24uZW50aXR5SWRdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2d1ZXN0X3N0YXR1c19jaGFuZ2VkJzpcclxuICAgICAgICAgICAgICAgIGxpbmsgPSBbJy8nLCAnZ3Vlc3QtbGlzdCddO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==