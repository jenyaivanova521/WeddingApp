"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var _ = require("lodash");
var RadioButtonsComponent = /** @class */ (function () {
    function RadioButtonsComponent() {
        this.valueChanged = new core_1.EventEmitter();
    }
    RadioButtonsComponent.prototype.ngOnInit = function () {
        this.radioOptions = _.map(this.options, function (val, i) {
            var selected = i === 0;
            return {
                selected: selected,
                label: val
            };
        });
    };
    RadioButtonsComponent.prototype.setActive = function (changedOption) {
        var _this = this;
        this.radioOptions = _.map(this.radioOptions, function (option) {
            if (changedOption.label === option.label) {
                _this.active = option;
            }
            return {
                selected: changedOption.label === option.label,
                label: option.label
            };
        });
        this.valueChanged.next(this.active);
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], RadioButtonsComponent.prototype, "options", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], RadioButtonsComponent.prototype, "valueChanged", void 0);
    RadioButtonsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radio-buttons',
            templateUrl: 'radio-buttons.component.html',
            styleUrls: ['./radio-buttons.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RadioButtonsComponent);
    return RadioButtonsComponent;
}());
exports.RadioButtonsComponent = RadioButtonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYWRpby1idXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FNdUI7QUFDdkIsMEJBQTRCO0FBUTVCO0lBUUM7UUFMVSxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU0vRCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBVyxFQUFFLENBQVM7WUFDOUQsSUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUM7Z0JBQ04sUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHO2FBQ1YsQ0FBQTtRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVNLHlDQUFTLEdBQWhCLFVBQWlCLGFBQWtCO1FBQW5DLGlCQVlDO1FBWEEsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFNO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLENBQUM7WUFDRCxNQUFNLENBQUM7Z0JBQ04sUUFBUSxFQUFFLGFBQWEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUs7Z0JBQzlDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzthQUNuQixDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQS9CUTtRQUFSLFlBQUssRUFBRTswQ0FBVSxLQUFLOzBEQUFTO0lBQ3RCO1FBQVQsYUFBTSxFQUFFOzBDQUFlLG1CQUFZOytEQUEyQjtJQUhuRCxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzdDLENBQUM7O09BQ1cscUJBQXFCLENBbUNqQztJQUFELDRCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRDb21wb25lbnQsXHJcblx0RXZlbnRFbWl0dGVyLFxyXG5cdElucHV0LFxyXG5cdE9uSW5pdCxcclxuXHRPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdyYWRpby1idXR0b25zJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3JhZGlvLWJ1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3JhZGlvLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgb3B0aW9uczogQXJyYXk8U3RyaW5nPjtcclxuXHRAT3V0cHV0KCkgdmFsdWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0cHVibGljIHJhZGlvT3B0aW9uczogQXJyYXk8YW55PjtcclxuXHRwcml2YXRlIGFjdGl2ZTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5yYWRpb09wdGlvbnMgPSBfLm1hcCh0aGlzLm9wdGlvbnMsICh2YWw6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XHJcblx0XHRcdGNvbnN0IHNlbGVjdGVkID0gaSA9PT0gMDtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzZWxlY3RlZDogc2VsZWN0ZWQsXHJcblx0XHRcdFx0bGFiZWw6IHZhbFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRBY3RpdmUoY2hhbmdlZE9wdGlvbjogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnJhZGlvT3B0aW9ucyA9IF8ubWFwKHRoaXMucmFkaW9PcHRpb25zLCAob3B0aW9uKSA9PiB7XHJcblx0XHRcdGlmIChjaGFuZ2VkT3B0aW9uLmxhYmVsID09PSBvcHRpb24ubGFiZWwpIHtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZSA9IG9wdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNlbGVjdGVkOiBjaGFuZ2VkT3B0aW9uLmxhYmVsID09PSBvcHRpb24ubGFiZWwsXHJcblx0XHRcdFx0bGFiZWw6IG9wdGlvbi5sYWJlbFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnZhbHVlQ2hhbmdlZC5uZXh0KHRoaXMuYWN0aXZlKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==