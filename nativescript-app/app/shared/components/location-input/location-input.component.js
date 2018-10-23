"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modals_1 = require("~/shared/modals");
var services_1 = require("~/shared/services");
var LocationInputComponent = /** @class */ (function () {
    function LocationInputComponent(modalService, changeDetector) {
        this.modalService = modalService;
        this.changeDetector = changeDetector;
        this.locationChanged = new core_1.EventEmitter();
    }
    LocationInputComponent.prototype.openLocationModal = function () {
        var _this = this;
        this.modalService.showModal(modals_1.LocationModal, { fullscreen: true }).then((function (value) {
            _this.location = value.formatted_address;
            _this.locationChanged.next(value);
            _this.changeDetector.markForCheck();
        }));
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], LocationInputComponent.prototype, "locationChanged", void 0);
    LocationInputComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'location-input',
            templateUrl: 'location-input.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            core_1.ChangeDetectorRef])
    ], LocationInputComponent);
    return LocationInputComponent;
}());
exports.LocationInputComponent = LocationInputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24taW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUt1QjtBQUV2QiwwQ0FBZ0Q7QUFDaEQsOENBQWlEO0FBTWpEO0lBTUMsZ0NBQ1MsWUFBMEIsRUFDMUIsY0FBaUM7UUFEakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBTmhDLG9CQUFlLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBUWxFLENBQUM7SUFFTSxrREFBaUIsR0FBeEI7UUFBQSxpQkFRQztRQVBBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHNCQUFhLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDcEUsVUFBQyxLQUFVO1lBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWxCUztRQUFULGFBQU0sRUFBRTswQ0FBa0IsbUJBQVk7bUVBQTJCO0lBRnRELHNCQUFzQjtRQUpsQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsK0JBQStCO1NBQzVDLENBQUM7aURBUXNCLHVCQUFZO1lBQ1Ysd0JBQWlCO09BUjlCLHNCQUFzQixDQXVCbEM7SUFBRCw2QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0Q29tcG9uZW50LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExvY2F0aW9uTW9kYWwgfSBmcm9tICd+L3NoYXJlZC9tb2RhbHMnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2xvY2F0aW9uLWlucHV0JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2xvY2F0aW9uLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uSW5wdXRDb21wb25lbnQge1xyXG5cclxuXHRAT3V0cHV0KCkgbG9jYXRpb25DaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0cHVibGljIGxvY2F0aW9uOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb3BlbkxvY2F0aW9uTW9kYWwoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTG9jYXRpb25Nb2RhbCwge2Z1bGxzY3JlZW46IHRydWUgfSkudGhlbigoXHJcblx0XHRcdCh2YWx1ZTogYW55KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2NhdGlvbiA9IHZhbHVlLmZvcm1hdHRlZF9hZGRyZXNzO1xyXG5cdFx0XHRcdHRoaXMubG9jYXRpb25DaGFuZ2VkLm5leHQodmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdCkpO1xyXG5cdH1cclxuXHJcblxyXG59Il19