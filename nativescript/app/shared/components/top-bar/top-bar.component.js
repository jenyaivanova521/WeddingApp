"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var store_1 = require("@ngrx/store");
var root_store_1 = require("~/root-store");
var notification_service_1 = require("~/shared/services/notification.service");
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(store, routerExt, notificationService) {
        var _this = this;
        this.store = store;
        this.routerExt = routerExt;
        this.notificationService = notificationService;
        this.toggleMenuEvent = new core_1.EventEmitter();
        this.conversationsShown = false;
        this.notificationsShown = false;
        this.previousUrl = '';
        this.unreadMessagesCount = 0;
        this.notificationsCount = 0;
        this.routerExt.router.events.subscribe(function (s) {
            // TODO add conversation to the if after its done
            if (s instanceof router_1.NavigationEnd && (s.url !== '/conversations' && s.url !== '/notifications')) {
                _this.previousUrl = s.url;
            }
        });
    }
    TopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMessageNumber();
        this.getNotificationNumber();
        setInterval(function () {
            _this.getMessageNumber();
            _this.getNotificationNumber();
        }, 5000);
    };
    TopBarComponent.prototype.getMessageNumber = function () {
        var _this = this;
        this.store.select(root_store_1.MessageSelectors.selectUnreadMessagesCount).subscribe(function (massageCount) {
            console.log("unreadMessageCount: ");
            console.log(massageCount);
            _this.unreadMessagesCount = massageCount;
        });
    };
    TopBarComponent.prototype.getNotificationNumber = function () {
        var _this = this;
        this.notificationService.countUnreadNotifications()
            .toPromise().then(function (response) {
            console.log("notification count:");
            console.log(response.result);
            _this.notificationsCount = response.result;
        });
    };
    TopBarComponent.prototype.toggleMenu = function () {
        this.toggleMenuEvent.next();
    };
    TopBarComponent.prototype.toggleConversations = function () {
        if (this.conversationsShown) {
            this.routerExt.navigate([this.previousUrl]);
        }
        else {
            this.notificationsShown = false;
            this.routerExt.navigate(['/app', 'conversations']);
        }
        this.conversationsShown = !this.conversationsShown;
    };
    TopBarComponent.prototype.toggleNotifications = function () {
        if (this.notificationsShown) {
            this.routerExt.navigate([this.previousUrl]);
        }
        else {
            this.conversationsShown = false;
            this.routerExt.navigate(['/app', 'notifications']);
        }
        this.notificationsShown = !this.notificationsShown;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], TopBarComponent.prototype, "toggleMenuEvent", void 0);
    TopBarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'top-bar',
            templateUrl: 'top-bar.component.html',
            styleUrls: ['./top-bar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            nativescript_angular_1.RouterExtensions,
            notification_service_1.NotificationService])
    ], TopBarComponent);
    return TopBarComponent;
}());
exports.TopBarComponent = TopBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3AtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBd0U7QUFDeEUsMENBQWdEO0FBQ2hELDZEQUF3RDtBQUN4RCxxQ0FBb0M7QUFDcEMsMkNBQWdFO0FBQ2hFLCtFQUE2RTtBQU83RTtJQVNDLHlCQUNTLEtBQWtDLEVBQ2xDLFNBQTJCLEVBQzNCLG1CQUF3QztRQUhqRCxpQkFXQztRQVZRLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFWdkMsb0JBQWUsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFMUQsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBTTlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ3hDLGlEQUFpRDtZQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksc0JBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUYsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzFCLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFDRCxrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixXQUFXLENBQUM7WUFDWCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsMENBQWdCLEdBQWhCO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDUCw2QkFBZ0IsQ0FBQyx5QkFBeUIsQ0FDbkQsQ0FBQyxTQUFTLENBQUMsVUFBQSxZQUFZO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxZQUFZLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsK0NBQXFCLEdBQXJCO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLEVBQUU7YUFDeEMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sb0NBQVUsR0FBakI7UUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSw2Q0FBbUIsR0FBMUI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDcEQsQ0FBQztJQUVNLDZDQUFtQixHQUExQjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNwRCxDQUFDO0lBcEVTO1FBQVQsYUFBTSxFQUFFOzBDQUFrQixtQkFBWTs0REFBMkI7SUFGdEQsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO2lEQVdlLGFBQUs7WUFDRCx1Q0FBZ0I7WUFDTiwwQ0FBbUI7T0FackMsZUFBZSxDQXdFM0I7SUFBRCxzQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUm9vdFN0b3JlU3RhdGUsIE1lc3NhZ2VTZWxlY3RvcnMgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICd0b3AtYmFyJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3RvcC1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3RvcC1iYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9wQmFyQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcblx0QE91dHB1dCgpIHRvZ2dsZU1lbnVFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHByaXZhdGUgY29udmVyc2F0aW9uc1Nob3duOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBub3RpZmljYXRpb25zU2hvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPScnO1xyXG5cdHVucmVhZE1lc3NhZ2VzQ291bnQgPSAwO1xyXG5cdG5vdGlmaWNhdGlvbnNDb3VudDogbnVtYmVyID0gMDtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFJvb3RTdG9yZVN0YXRlLlN0YXRlPixcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0OiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlXHJcblx0KSB7XHJcblx0XHR0aGlzLnJvdXRlckV4dC5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgocykgPT4ge1xyXG5cdFx0XHQvLyBUT0RPIGFkZCBjb252ZXJzYXRpb24gdG8gdGhlIGlmIGFmdGVyIGl0cyBkb25lXHJcblx0XHRcdGlmIChzIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCAmJiAocy51cmwgIT09ICcvY29udmVyc2F0aW9ucycgJiYgcy51cmwgIT09ICcvbm90aWZpY2F0aW9ucycpKSB7XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c1VybCA9IHMudXJsO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldE1lc3NhZ2VOdW1iZXIoKTtcclxuXHRcdHRoaXMuZ2V0Tm90aWZpY2F0aW9uTnVtYmVyKCk7XHJcblx0XHRzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuZ2V0TWVzc2FnZU51bWJlcigpO1xyXG5cdFx0XHR0aGlzLmdldE5vdGlmaWNhdGlvbk51bWJlcigpO1xyXG5cdFx0fSwgNTAwMCk7XHJcblx0fVxyXG5cdGdldE1lc3NhZ2VOdW1iZXIoKXtcclxuXHRcdHRoaXMuc3RvcmUuc2VsZWN0KFxyXG4gICAgICAgICAgICBNZXNzYWdlU2VsZWN0b3JzLnNlbGVjdFVucmVhZE1lc3NhZ2VzQ291bnRcclxuXHRcdCkuc3Vic2NyaWJlKG1hc3NhZ2VDb3VudCA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwidW5yZWFkTWVzc2FnZUNvdW50OiBcIik7XHJcblx0XHRcdGNvbnNvbGUubG9nKG1hc3NhZ2VDb3VudClcclxuXHRcdFx0dGhpcy51bnJlYWRNZXNzYWdlc0NvdW50ID0gbWFzc2FnZUNvdW50O1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldE5vdGlmaWNhdGlvbk51bWJlcigpe1xyXG5cdFx0dGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmNvdW50VW5yZWFkTm90aWZpY2F0aW9ucygpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm5vdGlmaWNhdGlvbiBjb3VudDpcIik7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc0NvdW50ID0gcmVzcG9uc2UucmVzdWx0XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9nZ2xlTWVudSgpOiB2b2lkIHtcclxuXHRcdHRoaXMudG9nZ2xlTWVudUV2ZW50Lm5leHQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVDb252ZXJzYXRpb25zKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuY29udmVyc2F0aW9uc1Nob3duKSB7XHJcblx0XHRcdHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFt0aGlzLnByZXZpb3VzVXJsXSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm5vdGlmaWNhdGlvbnNTaG93biA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9hcHAnLCAnY29udmVyc2F0aW9ucyddKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbnZlcnNhdGlvbnNTaG93biA9ICF0aGlzLmNvbnZlcnNhdGlvbnNTaG93bjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVOb3RpZmljYXRpb25zKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubm90aWZpY2F0aW9uc1Nob3duKSB7XHJcblx0XHRcdHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlKFt0aGlzLnByZXZpb3VzVXJsXSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmNvbnZlcnNhdGlvbnNTaG93biA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9hcHAnLCAnbm90aWZpY2F0aW9ucyddKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5vdGlmaWNhdGlvbnNTaG93biA9ICF0aGlzLm5vdGlmaWNhdGlvbnNTaG93bjtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==