"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var services_1 = require("~/shared/services");
var modals_1 = require("~/shared/modals");
var CreateVendorPhotosComponent = /** @class */ (function () {
    function CreateVendorPhotosComponent(modalService) {
        this.modalService = modalService;
        this.nextStepEvent = new core_1.EventEmitter();
        this.previousStepEvent = new core_1.EventEmitter();
        this.photoSelected = new core_1.EventEmitter();
        this.values = {
            uploadphoto: '',
        };
    }
    CreateVendorPhotosComponent.prototype.nextStep = function () {
        this.nextStepEvent.next();
        console.log(this.values);
    };
    CreateVendorPhotosComponent.prototype.previousStep = function () {
        this.previousStepEvent.next();
    };
    CreateVendorPhotosComponent.prototype.setValue = function (valueName, element, useParam) {
        this.values[valueName] = useParam ? element[useParam] : element;
    };
    CreateVendorPhotosComponent.prototype.getPicture = function () {
        var _this = this;
        this.modalService.showModal(modals_1.UploadModal, {}).then(function (url) {
            _this.photoSelected.next(url);
        });
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorPhotosComponent.prototype, "nextStepEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorPhotosComponent.prototype, "previousStepEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorPhotosComponent.prototype, "photoSelected", void 0);
    CreateVendorPhotosComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-vendor-photos',
            templateUrl: 'create-vendor-photos.component.html',
            styleUrls: ['../../create-profile-base.component.scss', './create-vendor-photos.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService])
    ], CreateVendorPhotosComponent);
    return CreateVendorPhotosComponent;
}());
exports.CreateVendorPhotosComponent = CreateVendorPhotosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1waG90b3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLXZlbmRvci1waG90b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFnRTtBQUVoRSw4Q0FBaUQ7QUFDakQsMENBQThDO0FBUTlDO0lBTUMscUNBQ1MsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMekIsa0JBQWEsR0FBdUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkQsc0JBQWlCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBT3pELFdBQU0sR0FBUTtZQUNwQixXQUFXLEVBQUMsRUFBRTtTQUVkLENBQUM7SUFMRixDQUFDO0lBT00sOENBQVEsR0FBZjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLGtEQUFZLEdBQW5CO1FBQ0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSw4Q0FBUSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsT0FBWSxFQUFFLFFBQWlCO1FBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNqRSxDQUFDO0lBRU0sZ0RBQVUsR0FBakI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLG9CQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxVQUFDLEdBQVc7WUFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0QsQ0FBQTtJQUNGLENBQUM7SUFqQ1M7UUFBVCxhQUFNLEVBQUU7MENBQWdCLG1CQUFZO3NFQUE0QjtJQUN2RDtRQUFULGFBQU0sRUFBRTswQ0FBb0IsbUJBQVk7MEVBQTJCO0lBQzFEO1FBQVQsYUFBTSxFQUFFOzBDQUFnQixtQkFBWTtzRUFBMkI7SUFKcEQsMkJBQTJCO1FBTnZDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLHVDQUF1QyxDQUFDO1NBQ2hHLENBQUM7aURBUXNCLHVCQUFZO09BUHZCLDJCQUEyQixDQXFDdkM7SUFBRCxrQ0FBQztDQUFBLEFBckNELElBcUNDO0FBckNZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgVXBsb2FkTW9kYWwgfSBmcm9tICd+L3NoYXJlZC9tb2RhbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2NyZWF0ZS12ZW5kb3ItcGhvdG9zJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NyZWF0ZS12ZW5kb3ItcGhvdG9zLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vLi4vY3JlYXRlLXByb2ZpbGUtYmFzZS5jb21wb25lbnQuc2NzcycsICcuL2NyZWF0ZS12ZW5kb3ItcGhvdG9zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVZlbmRvclBob3Rvc0NvbXBvbmVudCB7XHJcblxyXG5cdEBPdXRwdXQoKSBuZXh0U3RlcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHByZXZpb3VzU3RlcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgcGhvdG9TZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuXHQpIHtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB2YWx1ZXM6IGFueSA9IHtcclxuXHRcdHVwbG9hZHBob3RvOicnLFxyXG5cclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgbmV4dFN0ZXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLm5leHRTdGVwRXZlbnQubmV4dCgpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy52YWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHByZXZpb3VzU3RlcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMucHJldmlvdXNTdGVwRXZlbnQubmV4dCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFZhbHVlKHZhbHVlTmFtZTogc3RyaW5nLCBlbGVtZW50OiBhbnksIHVzZVBhcmFtPzogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLnZhbHVlc1t2YWx1ZU5hbWVdID0gdXNlUGFyYW0gPyBlbGVtZW50W3VzZVBhcmFtXSA6IGVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UGljdHVyZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChVcGxvYWRNb2RhbCwge30pLnRoZW4oXHJcblx0XHRcdCh1cmw6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGhvdG9TZWxlY3RlZC5uZXh0KHVybCk7XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==