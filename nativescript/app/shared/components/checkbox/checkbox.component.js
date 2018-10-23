"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.small = false;
        this.valueChanged = new core_1.EventEmitter();
    }
    CheckboxComponent.prototype.toggle = function () {
        this.checked = !this.checked;
        this.valueChanged.next(this.checked);
        this.changeDetector.markForCheck();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "small", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "checked", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CheckboxComponent.prototype, "valueChanged", void 0);
    CheckboxComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkbox-component',
            templateUrl: 'checkbox.component.html',
            styleUrls: ['./checkbox.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQU91QjtBQVN2QjtJQU1DLDJCQUNTLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUxqQyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBRXRCLGlCQUFZLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO0lBSXhFLENBQUM7SUFFRSxrQ0FBTSxHQUFiO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQVpRO1FBQVIsWUFBSyxFQUFFOztvREFBd0I7SUFDdkI7UUFBUixZQUFLLEVBQUU7O3NEQUFrQjtJQUNoQjtRQUFULGFBQU0sRUFBRTswQ0FBZSxtQkFBWTsyREFBd0M7SUFKaEUsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQy9DLENBQUM7aURBUXdCLHdCQUFpQjtPQVA5QixpQkFBaUIsQ0FnQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG5cdENoYW5nZURldGVjdG9yUmVmLFxyXG5cdENvbXBvbmVudCxcclxuXHRFdmVudEVtaXR0ZXIsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY2hlY2tib3gtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddLFxyXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCB7XHJcblxyXG5cdEBJbnB1dCgpIHNtYWxsOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgY2hlY2tlZDogYm9vbGVhbjtcclxuXHRAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuXHQpIHsgfVxyXG5cclxuXHRwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcclxuXHRcdHRoaXMudmFsdWVDaGFuZ2VkLm5leHQodGhpcy5jaGVja2VkKTtcclxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=