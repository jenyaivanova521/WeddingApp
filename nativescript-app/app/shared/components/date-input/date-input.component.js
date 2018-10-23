"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var moment = require("moment");
var configs_1 = require("~/shared/configs");
var modals_1 = require("~/shared/modals");
var services_1 = require("~/shared/services");
var DateInputComponent = /** @class */ (function () {
    function DateInputComponent(modalService, changeDetector) {
        this.modalService = modalService;
        this.changeDetector = changeDetector;
        this.useHours = false;
        this.dateChanged = new core_1.EventEmitter();
    }
    DateInputComponent.prototype.ngOnInit = function () {
        var format = this.useHours ? configs_1.DATETIME_FORMAT : configs_1.DATE_FORMAT;
        this.date = this.startValue ? moment(this.startValue).format(format) : format;
        this.displayFormat = format;
    };
    DateInputComponent.prototype.openDatepickerModal = function () {
        var _this = this;
        this.modalService.showModal(modals_1.DatepickerModal, { fullscreen: true, context: { useHours: this.useHours } }).then((function (value) {
            _this.date = value;
            _this.dateChanged.next(new Date(value).toISOString());
            _this.changeDetector.markForCheck();
        }));
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], DateInputComponent.prototype, "startValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], DateInputComponent.prototype, "useHours", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], DateInputComponent.prototype, "dateChanged", void 0);
    DateInputComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'date-input',
            templateUrl: 'date-input.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            core_1.ChangeDetectorRef])
    ], DateInputComponent);
    return DateInputComponent;
}());
exports.DateInputComponent = DateInputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FPdUI7QUFDdkIsK0JBQWlDO0FBRWpDLDRDQUFnRTtBQUNoRSwwQ0FBa0Q7QUFDbEQsOENBQWlEO0FBTWpEO0lBU0MsNEJBQ1MsWUFBMEIsRUFDMUIsY0FBaUM7UUFEakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBUmpDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDekIsZ0JBQVcsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFTOUQsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx5QkFBZSxDQUFDLENBQUMsQ0FBQyxxQkFBVyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM5RSxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0RBQW1CLEdBQTFCO1FBQUEsaUJBUUM7UUFQQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx3QkFBZSxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDMUcsVUFBQyxLQUFhO1lBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7WUFDbEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBM0JRO1FBQVIsWUFBSyxFQUFFOzswREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O3dEQUEyQjtJQUN6QjtRQUFULGFBQU0sRUFBRTswQ0FBYyxtQkFBWTsyREFBMkI7SUFKbEQsa0JBQWtCO1FBSjlCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1NBQ3hDLENBQUM7aURBV3NCLHVCQUFZO1lBQ1Ysd0JBQWlCO09BWDlCLGtCQUFrQixDQWdDOUI7SUFBRCx5QkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0Q29tcG9uZW50LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRJbnB1dCxcclxuXHRPbkluaXQsXHJcblx0T3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgREFURV9GT1JNQVQsIERBVEVUSU1FX0ZPUk1BVCB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyTW9kYWwgfSBmcm9tICd+L3NoYXJlZC9tb2RhbHMnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2RhdGUtaW5wdXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnZGF0ZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRASW5wdXQoKSBzdGFydFZhbHVlOiBhbnk7XHJcblx0QElucHV0KCkgdXNlSG91cnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRwdWJsaWMgZGF0ZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgZGlzcGxheUZvcm1hdDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG5cdCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBmb3JtYXQgPSB0aGlzLnVzZUhvdXJzID8gREFURVRJTUVfRk9STUFUIDogREFURV9GT1JNQVQ7XHJcblx0XHR0aGlzLmRhdGUgPSB0aGlzLnN0YXJ0VmFsdWUgPyBtb21lbnQodGhpcy5zdGFydFZhbHVlKS5mb3JtYXQoZm9ybWF0KSA6IGZvcm1hdDtcclxuXHRcdHRoaXMuZGlzcGxheUZvcm1hdCA9IGZvcm1hdDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvcGVuRGF0ZXBpY2tlck1vZGFsKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERhdGVwaWNrZXJNb2RhbCwge2Z1bGxzY3JlZW46IHRydWUsIGNvbnRleHQ6IHt1c2VIb3VyczogdGhpcy51c2VIb3Vyc30gfSkudGhlbigoXHJcblx0XHRcdCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5kYXRlID0gdmFsdWU7XHJcblx0XHRcdFx0dGhpcy5kYXRlQ2hhbmdlZC5uZXh0KG5ldyBEYXRlKHZhbHVlKS50b0lTT1N0cmluZygpKTtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG5cdFx0XHR9XHJcblx0XHQpKTtcclxuXHR9XHJcblxyXG5cclxufSJdfQ==