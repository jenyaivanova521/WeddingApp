"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var models_1 = require("~/root-store/wedding-store/models");
var CreateCouplePartnerComponent = /** @class */ (function () {
    function CreateCouplePartnerComponent() {
        this.nextStepEvent = new core_1.EventEmitter();
        this.previousStepEvent = new core_1.EventEmitter();
        this.values = {
            avatar: '',
            firstName: '',
            lastName: '',
            role: models_1.WeddingRoleEnum.Bride,
            birthDate: '',
            description: ''
        };
        this.roles = [
            'Groom',
            'Bride'
        ];
        console.log("---create-couple-partner---");
    }
    CreateCouplePartnerComponent.prototype.nextStep = function () {
        this.values.role = this.values.role.toLowerCase();
        this.nextStepEvent.next(this.values);
    };
    CreateCouplePartnerComponent.prototype.previousStep = function () {
        this.previousStepEvent.next();
    };
    CreateCouplePartnerComponent.prototype.setValue = function (valueName, element, useParam) {
        this.values[valueName] = useParam ? element[useParam] : element;
        console.log(this.values);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], CreateCouplePartnerComponent.prototype, "partnerNumber", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateCouplePartnerComponent.prototype, "nextStepEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateCouplePartnerComponent.prototype, "previousStepEvent", void 0);
    CreateCouplePartnerComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-couple-partner',
            templateUrl: 'create-couple-partner.component.html',
            styleUrls: ['../../create-profile-base.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CreateCouplePartnerComponent);
    return CreateCouplePartnerComponent;
}());
exports.CreateCouplePartnerComponent = CreateCouplePartnerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvdXBsZS1wYXJ0bmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1jb3VwbGUtcGFydG5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXVFO0FBQ3ZFLDREQUE2RTtBQVM3RTtJQW1CQztRQWhCVSxrQkFBYSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0RCxzQkFBaUIsR0FBdUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFN0QsV0FBTSxHQUFZO1lBQ3pCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSx3QkFBZSxDQUFDLEtBQUs7WUFDM0IsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFDSyxVQUFLLEdBQUc7WUFDZCxPQUFPO1lBQ1AsT0FBTztTQUNQLENBQUM7UUFJRCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVNLCtDQUFRLEdBQWY7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBb0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxtREFBWSxHQUFuQjtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sK0NBQVEsR0FBZixVQUFnQixTQUFpQixFQUFFLE9BQVksRUFBRSxRQUFpQjtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWxDUTtRQUFSLFlBQUssRUFBRTs7dUVBQXVCO0lBQ3JCO1FBQVQsYUFBTSxFQUFFOzBDQUFnQixtQkFBWTt1RUFBMkI7SUFDdEQ7UUFBVCxhQUFNLEVBQUU7MENBQW9CLG1CQUFZOzJFQUE0QjtJQUp6RCw0QkFBNEI7UUFOeEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDdkQsQ0FBQzs7T0FDVyw0QkFBNEIsQ0FzQ3hDO0lBQUQsbUNBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJ0bmVyLCBXZWRkaW5nUm9sZUVudW0gfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9tb2RlbHMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdjcmVhdGUtY291cGxlLXBhcnRuZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnY3JlYXRlLWNvdXBsZS1wYXJ0bmVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vLi4vY3JlYXRlLXByb2ZpbGUtYmFzZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVDb3VwbGVQYXJ0bmVyQ29tcG9uZW50IHtcclxuXHJcblx0QElucHV0KCkgcGFydG5lck51bWJlcjogbnVtYmVyO1xyXG5cdEBPdXRwdXQoKSBuZXh0U3RlcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRAT3V0cHV0KCkgcHJldmlvdXNTdGVwRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0cHJpdmF0ZSB2YWx1ZXM6IFBhcnRuZXIgPSB7XHJcblx0XHRhdmF0YXI6ICcnLFxyXG5cdFx0Zmlyc3ROYW1lOiAnJyxcclxuXHRcdGxhc3ROYW1lOiAnJyxcclxuXHRcdHJvbGU6IFdlZGRpbmdSb2xlRW51bS5CcmlkZSxcclxuXHRcdGJpcnRoRGF0ZTogJycsXHJcblx0XHRkZXNjcmlwdGlvbjogJydcclxuXHR9O1xyXG5cdHB1YmxpYyByb2xlcyA9IFtcclxuXHRcdCdHcm9vbScsXHJcblx0XHQnQnJpZGUnXHJcblx0XTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLWNyZWF0ZS1jb3VwbGUtcGFydG5lci0tLVwiKVxyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHRTdGVwKCk6IHZvaWQge1xyXG5cdFx0dGhpcy52YWx1ZXMucm9sZSA9IDxXZWRkaW5nUm9sZUVudW0+dGhpcy52YWx1ZXMucm9sZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0dGhpcy5uZXh0U3RlcEV2ZW50Lm5leHQodGhpcy52YWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHByZXZpb3VzU3RlcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMucHJldmlvdXNTdGVwRXZlbnQubmV4dCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFZhbHVlKHZhbHVlTmFtZTogc3RyaW5nLCBlbGVtZW50OiBhbnksIHVzZVBhcmFtPzogc3RyaW5nKTogdm9pZCB7XHJcblx0XHR0aGlzLnZhbHVlc1t2YWx1ZU5hbWVdID0gdXNlUGFyYW0gPyBlbGVtZW50W3VzZVBhcmFtXSA6IGVsZW1lbnQ7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnZhbHVlcyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=