"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var configs_1 = require("~/shared/configs");
var services_1 = require("~/shared/services");
var CoupleInformationsComponent = /** @class */ (function () {
    function CoupleInformationsComponent(store, weddingService, changeDetector) {
        this.store = store;
        this.weddingService = weddingService;
        this.changeDetector = changeDetector;
    }
    CoupleInformationsComponent.prototype.ngOnInit = function () {
        console.log("couple profile Information ngOnit");
        // console.log(Config.activeWedding);
        this.activeWedding = configs_1.Config.activeWedding;
        if (configs_1.Config.activeWedding) {
            this.weddingId = configs_1.Config.activeWedding.id;
            this.getWeddingDetails(this.weddingId);
        }
    };
    CoupleInformationsComponent.prototype.getWeddingDetails = function (weddingId) {
        var _this = this;
        this.weddingService.getWedding({
            weddingId: weddingId
        }).subscribe(function (response) {
            console.log(response);
            _this.wedding = response.result;
            _this.weddingService.getWeddingPartners({ weddingId: weddingId }).subscribe(function (res) {
                _this.partners = res.result;
                _this.changeDetector.markForCheck();
            });
            _this.weddingService.getWeddingEvents({ weddingId: weddingId }).subscribe(function (res) {
                console.log(res);
                _this.events = res.result;
                _this.changeDetector.markForCheck();
            });
        }, function (error) {
            console.log(error);
        });
    };
    CoupleInformationsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'couple-informations',
            templateUrl: 'couple-informations.component.html',
            styleUrls: ['./couple-informations.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            services_1.WeddingService,
            core_1.ChangeDetectorRef])
    ], CoupleInformationsComponent);
    return CoupleInformationsComponent;
}());
exports.CoupleInformationsComponent = CoupleInformationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cGxlLWluZm9ybWF0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VwbGUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QscUNBQW9DO0FBR3BDLDRDQUEwQztBQUUxQyw4Q0FBbUQ7QUFTbkQ7SUFRQyxxQ0FDUyxLQUFtQixFQUNuQixjQUE4QixFQUM5QixjQUFpQztRQUZqQyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7SUFFMUMsQ0FBQztJQUNELDhDQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsRUFBRSxDQUFBLENBQUUsZ0JBQU0sQ0FBQyxhQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNGLENBQUM7SUFDRCx1REFBaUIsR0FBakIsVUFBa0IsU0FBUztRQUEzQixpQkF3Qkk7UUF2QkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDM0IsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUUvQixLQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQUMsU0FBUyxXQUFBLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDekQsVUFBQyxHQUFHO2dCQUNBLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQ0osQ0FBQztZQUVGLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxTQUFTLFdBQUEsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUN2RCxVQUFDLEdBQUc7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDRixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkMsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNELENBQUM7SUEvQ1EsMkJBQTJCO1FBTnZDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO1NBQ25ELENBQUM7aURBVWUsYUFBSztZQUNJLHlCQUFjO1lBQ2Qsd0JBQWlCO09BWDlCLDJCQUEyQixDQWdEdkM7SUFBRCxrQ0FBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5pbXBvcnQgeyBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgV2VkZGluZ1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IE1vbWVudE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY291cGxlLWluZm9ybWF0aW9ucycsXHJcblx0dGVtcGxhdGVVcmw6ICdjb3VwbGUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jb3VwbGUtaW5mb3JtYXRpb25zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdXBsZUluZm9ybWF0aW9uc0NvbXBvbmVudCB7XHJcblx0cHJpdmF0ZSBhY3RpdmVXZWRkaW5nOiBXZWRkaW5nO1xyXG5cdHB1YmxpYyB3ZWRkaW5nSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyB3ZWRkaW5nOiBXZWRkaW5nO1xyXG5cclxuICAgIHB1YmxpYyBwYXJ0bmVyczogQXJyYXk8YW55PjtcclxuXHRwdWJsaWMgZXZlbnRzOiBBcnJheTxhbnk+O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSB3ZWRkaW5nU2VydmljZTogV2VkZGluZ1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHQpIHtcclxuXHR9XHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcImNvdXBsZSBwcm9maWxlIEluZm9ybWF0aW9uIG5nT25pdFwiKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKENvbmZpZy5hY3RpdmVXZWRkaW5nKTtcclxuXHRcdHRoaXMuYWN0aXZlV2VkZGluZyA9IENvbmZpZy5hY3RpdmVXZWRkaW5nO1xyXG5cdFx0aWYoIENvbmZpZy5hY3RpdmVXZWRkaW5nICkge1xyXG5cdFx0XHR0aGlzLndlZGRpbmdJZCA9IENvbmZpZy5hY3RpdmVXZWRkaW5nLmlkO1xyXG5cdFx0XHR0aGlzLmdldFdlZGRpbmdEZXRhaWxzKHRoaXMud2VkZGluZ0lkKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0V2VkZGluZ0RldGFpbHMod2VkZGluZ0lkKSB7XHRcdFxyXG4gICAgICAgIHRoaXMud2VkZGluZ1NlcnZpY2UuZ2V0V2VkZGluZyh7XHJcbiAgICAgICAgICAgIHdlZGRpbmdJZDogd2VkZGluZ0lkXHJcbiAgICAgICAgfSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLndlZGRpbmcgPSByZXNwb25zZS5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndlZGRpbmdTZXJ2aWNlLmdldFdlZGRpbmdQYXJ0bmVycyh7d2VkZGluZ0lkfSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFydG5lcnMgPSByZXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndlZGRpbmdTZXJ2aWNlLmdldFdlZGRpbmdFdmVudHMoe3dlZGRpbmdJZH0pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSByZXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0XHR9KTtcclxuICAgIH1cclxufVxyXG4iXX0=