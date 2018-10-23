"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var store_1 = require("@ngrx/store");
var services_1 = require("~/shared/services");
var selectors_1 = require("~/root-store/wedding-store/selectors");
var configs_1 = require("~/shared/configs");
var CoupleProfileComponent = /** @class */ (function () {
    function CoupleProfileComponent(modalService, store) {
        this.modalService = modalService;
        this.store = store;
        this.activeTab = 'timeline';
        // TODO get from user data
        this.privateProfile = false;
        var screenHeight = platform_1.screen.mainScreen.heightDIPs;
        this.scrollHeight = screenHeight - 140;
    }
    CoupleProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("couple profile ngOnit");
        this.subActiveWedding = this.store.select(selectors_1.selectActiveWedding).subscribe(function (activeWedding) {
            if (activeWedding) {
                _this.activeWedding = activeWedding;
                configs_1.Config.activeWedding = activeWedding;
                console.log(activeWedding);
            }
            else {
                console.log("active Wedding is null");
            }
        });
    };
    CoupleProfileComponent.prototype.ngOnDestroy = function () {
        // this.subActiveWedding.unsubscribe();
    };
    CoupleProfileComponent.prototype.selectTab = function (selectedTab) {
        this.activeTab = selectedTab;
    };
    tslib_1.__decorate([
        core_1.ViewChild('topElements'),
        tslib_1.__metadata("design:type", Object)
    ], CoupleProfileComponent.prototype, "topElements", void 0);
    CoupleProfileComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'couple-profile',
            templateUrl: 'couple-profile.component.html',
            styleUrls: ['./couple-profile.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store])
    ], CoupleProfileComponent);
    return CoupleProfileComponent;
}());
exports.CoupleProfileComponent = CoupleProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cGxlLXByb2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291cGxlLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEwRTtBQUMxRSxxQ0FBa0M7QUFDbEMscUNBQW9DO0FBR3BDLDhDQUFpRDtBQUdqRCxrRUFBMkU7QUFDM0UsNENBQTBDO0FBUTFDO0lBV0MsZ0NBQ1MsWUFBMEIsRUFDMUIsS0FBbUI7UUFEbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQVZyQixjQUFTLEdBQVcsVUFBVSxDQUFDO1FBRXRDLDBCQUEwQjtRQUNuQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQVN0QyxJQUFNLFlBQVksR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3hDLENBQUM7SUFDRCx5Q0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN4QywrQkFBbUIsQ0FDbkIsQ0FBQyxTQUFTLENBQUMsVUFBQSxhQUFhO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUNuQyxnQkFBTSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBQ0QsNENBQVcsR0FBWDtRQUNDLHVDQUF1QztJQUN4QyxDQUFDO0lBQ00sMENBQVMsR0FBaEIsVUFBaUIsV0FBbUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7SUFDOUIsQ0FBQztJQXJDeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OytEQUFhO0lBRjFCLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUM5QyxDQUFDO2lEQWFzQix1QkFBWTtZQUNuQixhQUFLO09BYlQsc0JBQXNCLENBeUNsQztJQUFELDZCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIElTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IFdlZGRpbmcgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzZWxlY3RBY3RpdmVXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9zaGFyZWQvY29uZmlncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY291cGxlLXByb2ZpbGUnLFxyXG5cdHRlbXBsYXRlVXJsOiAnY291cGxlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2NvdXBsZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdXBsZVByb2ZpbGVDb21wb25lbnR7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ3RvcEVsZW1lbnRzJykgdG9wRWxlbWVudHM7XHJcblx0cHVibGljIGFjdGl2ZVRhYjogc3RyaW5nID0gJ3RpbWVsaW5lJztcclxuXHRwdWJsaWMgc2Nyb2xsSGVpZ2h0OiBudW1iZXI7XHJcblx0Ly8gVE9ETyBnZXQgZnJvbSB1c2VyIGRhdGFcclxuXHRwdWJsaWMgcHJpdmF0ZVByb2ZpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0cHJpdmF0ZSBhY3RpdmVXZWRkaW5nOiBXZWRkaW5nO1xyXG5cdHByaXZhdGUgc3ViQWN0aXZlV2VkZGluZzogSVN1YnNjcmlwdGlvbjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0KSB7XHJcblx0XHRjb25zdCBzY3JlZW5IZWlnaHQgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xyXG5cdFx0dGhpcy5zY3JvbGxIZWlnaHQgPSBzY3JlZW5IZWlnaHQgLSAxNDA7XHJcblx0fVxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjb3VwbGUgcHJvZmlsZSBuZ09uaXRcIik7XHJcblx0XHR0aGlzLnN1YkFjdGl2ZVdlZGRpbmcgPSB0aGlzLnN0b3JlLnNlbGVjdChcclxuXHRcdFx0c2VsZWN0QWN0aXZlV2VkZGluZ1xyXG5cdFx0KS5zdWJzY3JpYmUoYWN0aXZlV2VkZGluZyA9PiB7XHRcdFx0XHRcdFx0XHJcblx0XHRcdGlmIChhY3RpdmVXZWRkaW5nKSB7XHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVdlZGRpbmcgPSBhY3RpdmVXZWRkaW5nO1x0XHJcblx0XHRcdFx0Q29uZmlnLmFjdGl2ZVdlZGRpbmcgPSBhY3RpdmVXZWRkaW5nO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGFjdGl2ZVdlZGRpbmcpO1x0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImFjdGl2ZSBXZWRkaW5nIGlzIG51bGxcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHQvLyB0aGlzLnN1YkFjdGl2ZVdlZGRpbmcudW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblx0cHVibGljIHNlbGVjdFRhYihzZWxlY3RlZFRhYjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLmFjdGl2ZVRhYiA9IHNlbGVjdGVkVGFiO1xyXG5cdH1cclxuXHJcbn1cclxuIl19