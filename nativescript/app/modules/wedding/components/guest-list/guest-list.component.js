"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var modals_1 = require("~/modules/wedding/modals");
var services_1 = require("~/shared/services");
var selectors_1 = require("~/root-store/wedding-store/selectors");
var store_1 = require("@ngrx/store");
var guest_service_1 = require("~/shared/services/guest.service");
var GuestListComponent = /** @class */ (function () {
    //---------------------------------------
    function GuestListComponent(modalService, store, guestService) {
        this.modalService = modalService;
        this.store = store;
        this.guestService = guestService;
        //---using in test----------------------
        this.guests = [];
        /*
            {
                firstName: 'Norman',
                lastName: 'Lane',
                role: 'groomsman',
                side: 'groom\'s',
                ceremony: false,
                reception: true,
            },
        ];
    */
        this.page = 1;
        this.infiniteScrollDisabled = false;
        this.term = '';
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
    }
    GuestListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("---Guest List ngOnInit---");
        this.subActiveWedding = this.store.select(selectors_1.selectActiveWedding).subscribe(function (activeWedding) {
            if (activeWedding) {
                // console.log("--Guest List ActiveWedding: "+activeWedding);
                _this.activeWedding = activeWedding;
                _this.getGuests();
                _this.getStats();
            }
            else {
                console.log("active wedding is null");
            }
        });
    };
    GuestListComponent.prototype.getGuests = function () {
        var _this = this;
        this.guestService.getGuests({
            weddingId: this.activeWedding.id,
            options: {
                page: this.page,
                term: this.term
            }
        }).toPromise().then(function (response) {
            (_a = _this.guests).push.apply(_a, response.result);
            if (response.result.length < 30) {
                _this.infiniteScrollDisabled = true;
            }
            var _a;
        });
    };
    GuestListComponent.prototype.getStats = function () {
        var _this = this;
        this.guestService.getStats(this.activeWedding.id)
            .toPromise().then(function (response) {
            _this.stats = response.result;
        });
    };
    GuestListComponent.prototype.loadMoreGuests = function () {
        this.page++;
        this.getGuests();
    };
    GuestListComponent.prototype.resetGuests = function () {
        this.page = 1;
        this.guests = [];
        this.getGuests();
    };
    GuestListComponent.prototype.ngOnDestroy = function () {
        // this.subActiveWedding.unsubscribe();
    };
    GuestListComponent.prototype.openAddGuestModal = function () {
        this.modalService.showModal(modals_1.AddGuestModal, {})
            .then(function (response) {
            // TODO add guest
            console.log(response);
        });
    };
    GuestListComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'guest-list',
            templateUrl: 'guest-list.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store,
            guest_service_1.GuestService])
    ], GuestListComponent);
    return GuestListComponent;
}());
exports.GuestListComponent = GuestListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJndWVzdC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMsc0RBQW1EO0FBQ25ELG1EQUF5RDtBQUN6RCw4Q0FBaUQ7QUFHakQsa0VBQTJFO0FBQzNFLHFDQUFvQztBQUVwQyxpRUFBK0Q7QUFPL0Q7SUF1QkMseUNBQXlDO0lBQ3pDLDRCQUNTLFlBQTBCLEVBQzFCLEtBQW1CLEVBQ25CLFlBQTBCO1FBRjFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUF4Qm5DLHdDQUF3QztRQUNqQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQy9COzs7Ozs7Ozs7O01BVUM7UUFDRSxTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUMzQyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBVWpCLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLDhCQUE4QjtJQUMxRixDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN4QywrQkFBbUIsQ0FDbkIsQ0FBQyxTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLDZEQUE2RDtnQkFDN0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDTCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBQ0Qsc0NBQVMsR0FBVDtRQUFBLGlCQWFJO1FBWkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDeEIsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNoQyxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNsQjtTQUNKLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ3hCLENBQUEsS0FBQSxLQUFJLENBQUMsTUFBTSxDQUFBLENBQUMsSUFBSSxXQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUN2QyxDQUFDOztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO2FBQzVDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDdEIsS0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNDLHVDQUF1QztJQUN4QyxDQUFDO0lBRU0sOENBQWlCLEdBQXhCO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsc0JBQWEsRUFBRSxFQUFFLENBQUM7YUFDNUMsSUFBSSxDQUFDLFVBQUMsUUFBYTtZQUNuQixpQkFBaUI7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE1Rlcsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDO2lEQTBCc0IsdUJBQVk7WUFDbkIsYUFBSztZQUNFLDRCQUFZO09BM0J2QixrQkFBa0IsQ0E4RjlCO0lBQUQseUJBQUM7Q0FBQSxBQTlGRCxJQThGQztBQTlGWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEFkZEd1ZXN0TW9kYWwgfSBmcm9tICd+L21vZHVsZXMvd2VkZGluZy9tb2RhbHMnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFdlZGRpbmcgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBJU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBzZWxlY3RBY3RpdmVXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxuaW1wb3J0IHsgR3Vlc3RTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvZ3Vlc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZ3Vlc3QtbGlzdCcsXHJcblx0dGVtcGxhdGVVcmw6ICdndWVzdC1saXN0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgR3Vlc3RMaXN0Q29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIGNvbnRhaW5lckhlaWdodDtcclxuXHQvLy0tLXVzaW5nIGluIHRlc3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0cHVibGljIGd1ZXN0czogQXJyYXk8YW55PiA9IFtdO1xyXG5cdC8qXHJcblx0XHR7XHJcblx0XHRcdGZpcnN0TmFtZTogJ05vcm1hbicsXHJcblx0XHRcdGxhc3ROYW1lOiAnTGFuZScsXHJcblx0XHRcdHJvbGU6ICdncm9vbXNtYW4nLFxyXG5cdFx0XHRzaWRlOiAnZ3Jvb21cXCdzJyxcclxuXHRcdFx0Y2VyZW1vbnk6IGZhbHNlLFxyXG5cdFx0XHRyZWNlcHRpb246IHRydWUsXHJcblx0XHR9LFxyXG5cdF07XHJcbiovXHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdHM6IGFueTtcclxuICAgIGluZmluaXRlU2Nyb2xsRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHR0ZXJtOiBzdHJpbmcgPSAnJztcclxuXHRcclxuXHRwcml2YXRlIGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmc7XHJcblx0cHJpdmF0ZSBzdWJBY3RpdmVXZWRkaW5nOiBJU3Vic2NyaXB0aW9uO1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBndWVzdFNlcnZpY2U6IEd1ZXN0U2VydmljZSxcclxuXHQpIHtcclxuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyAtIDE0MDsgLy8gVG9wYmFyIGhlaWdodCArIHNvbWUgbWFyZ2luXHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS1HdWVzdCBMaXN0IG5nT25Jbml0LS0tXCIpO1xyXG5cclxuXHRcdHRoaXMuc3ViQWN0aXZlV2VkZGluZyA9IHRoaXMuc3RvcmUuc2VsZWN0KFxyXG5cdFx0XHRzZWxlY3RBY3RpdmVXZWRkaW5nXHJcblx0XHQpLnN1YnNjcmliZShhY3RpdmVXZWRkaW5nID0+IHtcdFx0XHRcdFx0XHRcclxuXHRcdFx0aWYgKGFjdGl2ZVdlZGRpbmcpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIi0tR3Vlc3QgTGlzdCBBY3RpdmVXZWRkaW5nOiBcIithY3RpdmVXZWRkaW5nKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVdlZGRpbmcgPSBhY3RpdmVXZWRkaW5nO1xyXG5cdFx0XHRcdHRoaXMuZ2V0R3Vlc3RzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXRzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHRcdFx0XHRcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImFjdGl2ZSB3ZWRkaW5nIGlzIG51bGxcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1x0XHJcblx0XHRcclxuXHR9XHJcblx0Z2V0R3Vlc3RzKCkge1xyXG4gICAgICAgIHRoaXMuZ3Vlc3RTZXJ2aWNlLmdldEd1ZXN0cyh7XHJcbiAgICAgICAgICAgIHdlZGRpbmdJZDogdGhpcy5hY3RpdmVXZWRkaW5nLmlkLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0ZXJtOiB0aGlzLnRlcm1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmd1ZXN0cy5wdXNoKC4uLnJlc3BvbnNlLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQubGVuZ3RoIDwgMzApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGxEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0cygpIHtcclxuICAgICAgICB0aGlzLmd1ZXN0U2VydmljZS5nZXRTdGF0cyh0aGlzLmFjdGl2ZVdlZGRpbmcuaWQpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHMgPSByZXNwb25zZS5yZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNb3JlR3Vlc3RzKCkge1xyXG4gICAgICAgIHRoaXMucGFnZSsrO1xyXG4gICAgICAgIHRoaXMuZ2V0R3Vlc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRHdWVzdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICB0aGlzLmd1ZXN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0R3Vlc3RzKCk7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5zdWJBY3RpdmVXZWRkaW5nLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb3BlbkFkZEd1ZXN0TW9kYWwoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkR3Vlc3RNb2RhbCwge30pXHJcblx0XHRcdC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdFx0Ly8gVE9ETyBhZGQgZ3Vlc3RcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19