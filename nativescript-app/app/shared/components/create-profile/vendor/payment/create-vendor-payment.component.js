"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router"); //9.4
var CreateVendorPaymentComponent = /** @class */ (function () {
    function CreateVendorPaymentComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.previousStepEvent = new core_1.EventEmitter();
        this.createProfileEvent = new core_1.EventEmitter();
        this.paymentMethod = 'paypal';
        this.countries = [
            'Poland',
            'Great Britain',
            'Russia'
        ];
        this.values = {
            company_name: '',
            company_address: '',
            vat_number: '',
            country: ''
        };
    }
    CreateVendorPaymentComponent.prototype.previousStep = function () {
        this.previousStepEvent.next();
    };
    CreateVendorPaymentComponent.prototype.createProfile = function () {
        this.createProfileEvent.next();
        this.routerExtensions.navigate(['/app', 'social-feed']);
    };
    CreateVendorPaymentComponent.prototype.setValue = function (name, value) {
        this.values[name] = value;
    };
    CreateVendorPaymentComponent.prototype.selectOperator = function (operatorName) {
        this.paymentMethod = operatorName;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorPaymentComponent.prototype, "previousStepEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorPaymentComponent.prototype, "createProfileEvent", void 0);
    CreateVendorPaymentComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-vendor-payment',
            templateUrl: 'create-vendor-payment.component.html',
            styleUrls: ['../../create-profile-base.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions])
    ], CreateVendorPaymentComponent);
    return CreateVendorPaymentComponent;
}());
exports.CreateVendorPaymentComponent = CreateVendorPaymentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1wYXltZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS12ZW5kb3ItcGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWdFO0FBQ2hFLHNEQUE4RCxDQUFDLEtBQUs7QUFPcEU7SUFvQkMsc0NBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBbEI1QyxzQkFBaUIsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDMUQsdUJBQWtCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTlELGtCQUFhLEdBQVcsUUFBUSxDQUFDO1FBQ2pDLGNBQVMsR0FBZTtZQUM5QixRQUFRO1lBQ1IsZUFBZTtZQUNmLFFBQVE7U0FDUixDQUFDO1FBRUssV0FBTSxHQUFRO1lBQ3BCLFlBQVksRUFBQyxFQUFFO1lBQ2YsZUFBZSxFQUFDLEVBQUU7WUFDbEIsVUFBVSxFQUFDLEVBQUU7WUFDYixPQUFPLEVBQUUsRUFBRTtTQUVYLENBQUM7SUFJRixDQUFDO0lBRU0sbURBQVksR0FBbkI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLG9EQUFhLEdBQXBCO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRU0sK0NBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsS0FBVTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU0scURBQWMsR0FBckIsVUFBc0IsWUFBb0I7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQXJDUztRQUFULGFBQU0sRUFBRTswQ0FBb0IsbUJBQVk7MkVBQTJCO0lBQzFEO1FBQVQsYUFBTSxFQUFFOzBDQUFxQixtQkFBWTs0RUFBMkI7SUFIekQsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1NBQ3ZELENBQUM7aURBcUJxQyx5QkFBZ0I7T0FwQjFDLDRCQUE0QixDQXlDeEM7SUFBRCxtQ0FBQztDQUFBLEFBekNELElBeUNDO0FBekNZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcicgLy85LjRcclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2NyZWF0ZS12ZW5kb3ItcGF5bWVudCcsXHJcblx0dGVtcGxhdGVVcmw6ICdjcmVhdGUtdmVuZG9yLXBheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuLi8uLi9jcmVhdGUtcHJvZmlsZS1iYXNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVZlbmRvclBheW1lbnRDb21wb25lbnQge1xyXG5cclxuXHRAT3V0cHV0KCkgcHJldmlvdXNTdGVwRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBjcmVhdGVQcm9maWxlRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRwdWJsaWMgcGF5bWVudE1ldGhvZDogc3RyaW5nID0gJ3BheXBhbCc7XHJcblx0cHVibGljIGNvdW50cmllczogQXJyYXk8YW55PiA9IFtcclxuXHRcdCdQb2xhbmQnLFxyXG5cdFx0J0dyZWF0IEJyaXRhaW4nLFxyXG5cdFx0J1J1c3NpYSdcclxuXHRdO1xyXG5cclxuXHRwdWJsaWMgdmFsdWVzOiBhbnkgPSB7XHJcblx0XHRjb21wYW55X25hbWU6JycsXHJcblx0XHRjb21wYW55X2FkZHJlc3M6JycsXHJcblx0XHR2YXRfbnVtYmVyOicnLFxyXG5cdFx0Y291bnRyeTogJydcclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcHJldmlvdXNTdGVwKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wcmV2aW91c1N0ZXBFdmVudC5uZXh0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY3JlYXRlUHJvZmlsZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY3JlYXRlUHJvZmlsZUV2ZW50Lm5leHQoKTtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9hcHAnLCAnc29jaWFsLWZlZWQnXSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMudmFsdWVzW25hbWVdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0T3BlcmF0b3Iob3BlcmF0b3JOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMucGF5bWVudE1ldGhvZCA9IG9wZXJhdG9yTmFtZTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==