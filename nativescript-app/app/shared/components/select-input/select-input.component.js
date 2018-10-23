"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var modals_1 = require("~/shared/modals");
var services_1 = require("~/shared/services");
var SelectInputComponent = /** @class */ (function () {
    function SelectInputComponent(modalService) {
        this.modalService = modalService;
        this.hint = '';
        this.selectedElement = '';
        this.itemSelected = new core_1.EventEmitter();
    }
    SelectInputComponent.prototype.openSelectModal = function () {
        var _this = this;
        this.modalService.showModal(modals_1.ListSelectModal, { context: {
                items: this.items,
                propertyToShow: this.propertyToShow
            }, fullscreen: true
        })
            .then(function (result) {
            _this.selectedElement = result;
            _this.itemSelected.next(result);
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], SelectInputComponent.prototype, "items", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SelectInputComponent.prototype, "hint", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SelectInputComponent.prototype, "propertyToShow", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SelectInputComponent.prototype, "selectedElement", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], SelectInputComponent.prototype, "itemSelected", void 0);
    SelectInputComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-input',
            templateUrl: 'select-input.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService])
    ], SelectInputComponent);
    return SelectInputComponent;
}());
exports.SelectInputComponent = SelectInputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBS3VCO0FBRXZCLDBDQUFrRDtBQUNsRCw4Q0FBaUQ7QUFPakQ7SUFRQyw4QkFDUyxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU4xQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGlCQUFZLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBTS9ELENBQUM7SUFFTSw4Q0FBZSxHQUF0QjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsd0JBQWUsRUFDMUMsRUFBQyxPQUFPLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7YUFDbkMsRUFBRSxVQUFVLEVBQUUsSUFBSTtTQUNsQixDQUFDO2FBQ0QsSUFBSSxDQUNKLFVBQUMsTUFBTTtZQUNOLEtBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FDRCxDQUFBO0lBQ0gsQ0FBQztJQXpCUTtRQUFSLFlBQUssRUFBRTswQ0FBUSxLQUFLO3VEQUFNO0lBQ2xCO1FBQVIsWUFBSyxFQUFFOztzREFBbUI7SUFDbEI7UUFBUixZQUFLLEVBQUU7O2dFQUF3QjtJQUN2QjtRQUFSLFlBQUssRUFBRTs7aUVBQThCO0lBQzVCO1FBQVQsYUFBTSxFQUFFOzBDQUFlLG1CQUFZOzhEQUEyQjtJQU5uRCxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1NBQzFDLENBQUM7aURBVXNCLHVCQUFZO09BVHZCLG9CQUFvQixDQTZCaEM7SUFBRCwyQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRJbnB1dCxcclxuXHRPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExpc3RTZWxlY3RNb2RhbCB9IGZyb20gJ34vc2hhcmVkL21vZGFscyc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdzZWxlY3QtaW5wdXQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnc2VsZWN0LWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdElucHV0Q29tcG9uZW50IHtcclxuXHJcblx0QElucHV0KCkgaXRlbXM6IEFycmF5PGFueT47XHJcblx0QElucHV0KCkgaGludDogc3RyaW5nID0gJyc7XHJcblx0QElucHV0KCkgcHJvcGVydHlUb1Nob3c6IHN0cmluZztcclxuXHRASW5wdXQoKSBzZWxlY3RlZEVsZW1lbnQ6IHN0cmluZyA9ICcnO1xyXG5cdEBPdXRwdXQoKSBpdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0KSB7XHJcblxyXG5cdH1cclxuXHJcblx0cHVibGljIG9wZW5TZWxlY3RNb2RhbCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChMaXN0U2VsZWN0TW9kYWwsXHJcblx0XHRcdHtjb250ZXh0OiB7XHJcblx0XHRcdFx0aXRlbXM6IHRoaXMuaXRlbXMsXHJcblx0XHRcdFx0cHJvcGVydHlUb1Nob3c6IHRoaXMucHJvcGVydHlUb1Nob3dcclxuXHRcdFx0fSwgZnVsbHNjcmVlbjogdHJ1ZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihcclxuXHRcdFx0XHQocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkRWxlbWVudCA9IHJlc3VsdDtcclxuXHRcdFx0XHRcdHRoaXMuaXRlbVNlbGVjdGVkLm5leHQocmVzdWx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==