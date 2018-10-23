"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router"); //9.4
var models_1 = require("~/root-store/wedding-store/models");
var CreateCouplePrivacyComponent = /** @class */ (function () {
    function CreateCouplePrivacyComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.createProfileEvent = new core_1.EventEmitter();
        this.previousStepEvent = new core_1.EventEmitter();
        this.privacyType = models_1.PrivacySettingEnum.Public;
        this.PrivacySettingsEnum = models_1.PrivacySettingEnum;
        console.log("---create-couple-privacy---");
    }
    CreateCouplePrivacyComponent.prototype.previousStep = function () {
        this.previousStepEvent.next();
    };
    CreateCouplePrivacyComponent.prototype.createProfile = function () {
        this.createProfileEvent.next(this.privacyType);
        //this.routerExtensions.navigate(['/app', 'social-feed'])
    };
    CreateCouplePrivacyComponent.prototype.selectPrivacyType = function (type) {
        this.privacyType = type;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateCouplePrivacyComponent.prototype, "createProfileEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateCouplePrivacyComponent.prototype, "previousStepEvent", void 0);
    CreateCouplePrivacyComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-couple-privacy',
            templateUrl: 'create-couple-privacy.component.html',
            styleUrls: ['../../create-profile-base.component.scss', './create-couple-privacy.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions])
    ], CreateCouplePrivacyComponent);
    return CreateCouplePrivacyComponent;
}());
exports.CreateCouplePrivacyComponent = CreateCouplePrivacyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvdXBsZS1wcml2YWN5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1jb3VwbGUtcHJpdmFjeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWdFO0FBQ2hFLHNEQUE4RCxDQUFDLEtBQUs7QUFHcEUsNERBQXVFO0FBUXZFO0lBUUMsc0NBQXFCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTjdDLHVCQUFrQixHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMzRCxzQkFBaUIsR0FBdUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFOUQsZ0JBQVcsR0FBdUIsMkJBQWtCLENBQUMsTUFBTSxDQUFDO1FBQzVELHdCQUFtQixHQUFHLDJCQUFrQixDQUFDO1FBSS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRU0sbURBQVksR0FBbkI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLG9EQUFhLEdBQXBCO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MseURBQXlEO0lBQzFELENBQUM7SUFFTSx3REFBaUIsR0FBeEIsVUFBeUIsSUFBd0I7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQXRCUztRQUFULGFBQU0sRUFBRTswQ0FBcUIsbUJBQVk7NEVBQTJCO0lBQzNEO1FBQVQsYUFBTSxFQUFFOzBDQUFvQixtQkFBWTsyRUFBNEI7SUFIekQsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxFQUFFLHdDQUF3QyxDQUFDO1NBQ2pHLENBQUM7aURBU3NDLHlCQUFnQjtPQVIzQyw0QkFBNEIsQ0EwQnhDO0lBQUQsbUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInIC8vOS40XHJcblxyXG5cclxuaW1wb3J0IHsgUHJpdmFjeVNldHRpbmdFbnVtIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdjcmVhdGUtY291cGxlLXByaXZhY3knLFxyXG5cdHRlbXBsYXRlVXJsOiAnY3JlYXRlLWNvdXBsZS1wcml2YWN5LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vLi4vY3JlYXRlLXByb2ZpbGUtYmFzZS5jb21wb25lbnQuc2NzcycsICcuL2NyZWF0ZS1jb3VwbGUtcHJpdmFjeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb3VwbGVQcml2YWN5Q29tcG9uZW50IHtcclxuXHJcblx0QE91dHB1dCgpIGNyZWF0ZVByb2ZpbGVFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0QE91dHB1dCgpIHByZXZpb3VzU3RlcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHB1YmxpYyBwcml2YWN5VHlwZTogUHJpdmFjeVNldHRpbmdFbnVtID0gUHJpdmFjeVNldHRpbmdFbnVtLlB1YmxpYztcclxuXHRwdWJsaWMgUHJpdmFjeVNldHRpbmdzRW51bSA9IFByaXZhY3lTZXR0aW5nRW51bTtcclxuXHJcblx0Y29uc3RydWN0b3IoIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG5cdCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCItLS1jcmVhdGUtY291cGxlLXByaXZhY3ktLS1cIilcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwcmV2aW91c1N0ZXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLnByZXZpb3VzU3RlcEV2ZW50Lm5leHQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjcmVhdGVQcm9maWxlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jcmVhdGVQcm9maWxlRXZlbnQubmV4dCh0aGlzLnByaXZhY3lUeXBlKTtcclxuXHRcdC8vdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2FwcCcsICdzb2NpYWwtZmVlZCddKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdFByaXZhY3lUeXBlKHR5cGU6IFByaXZhY3lTZXR0aW5nRW51bSk6IHZvaWQge1xyXG5cdFx0dGhpcy5wcml2YWN5VHlwZSA9IHR5cGU7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=