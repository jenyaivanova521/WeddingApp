"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("tns-core-modules/platform");
var AddGuestModal = /** @class */ (function () {
    function AddGuestModal(params) {
        this.params = params;
        this.radioOptions = [
            'Not invited',
            'Not attending',
            'Invited',
            'Attending'
        ];
        this.roles = [
            'Groomsman',
            'Bridesmaid'
        ];
        this.sides = [
            'Groom\'s',
            'Bride\'s'
        ];
        this.values = {
            firstName: '',
            lastName: '',
            side: '',
            role: '',
            email: '',
            sendRSVP: ''
        };
        this.width = platform_1.screen.mainScreen.widthDIPs;
    }
    AddGuestModal.prototype.close = function (values) {
        this.params.closeCallback(values);
    };
    AddGuestModal.prototype.setValue = function (valueName, element) {
        this.values[valueName] = element.value;
    };
    AddGuestModal.prototype.setChecked = function (valueName, value) {
        this.values[valueName] = value;
    };
    AddGuestModal.prototype.submit = function () {
        this.close(this.values);
    };
    AddGuestModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'add-guest',
            templateUrl: 'add-guest.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], AddGuestModal);
    return AddGuestModal;
}());
exports.AddGuestModal = AddGuestModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWd1ZXN0Lm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWd1ZXN0Lm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEwQztBQUMxQyxtRUFBNEU7QUFDNUUsc0RBQW1EO0FBTW5EO0lBMkJDLHVCQUNTLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBekIzQixpQkFBWSxHQUFrQjtZQUNwQyxhQUFhO1lBQ2IsZUFBZTtZQUNmLFNBQVM7WUFDVCxXQUFXO1NBQ1gsQ0FBQztRQUNLLFVBQUssR0FBa0I7WUFDN0IsV0FBVztZQUNYLFlBQVk7U0FDWixDQUFDO1FBQ0ssVUFBSyxHQUFrQjtZQUM3QixVQUFVO1lBQ1YsVUFBVTtTQUNWLENBQUM7UUFFTSxXQUFNLEdBQVE7WUFDckIsU0FBUyxFQUFFLEVBQUU7WUFDYixRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUtELElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFTSw2QkFBSyxHQUFaLFVBQWEsTUFBWTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixTQUFpQixFQUFFLE9BQVk7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixTQUFpQixFQUFFLEtBQWM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBL0NXLGFBQWE7UUFKekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQztpREE2QmdCLDJCQUFpQjtPQTVCdEIsYUFBYSxDQWlEekI7SUFBRCxvQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FkZC1ndWVzdCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhZGQtZ3Vlc3QubW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRHdWVzdE1vZGFsIHtcclxuXHJcblx0cHVibGljIHdpZHRoOiBhbnk7XHJcblx0cHVibGljIHJhZGlvT3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtcclxuXHRcdCdOb3QgaW52aXRlZCcsXHJcblx0XHQnTm90IGF0dGVuZGluZycsXHJcblx0XHQnSW52aXRlZCcsXHJcblx0XHQnQXR0ZW5kaW5nJ1xyXG5cdF07XHJcblx0cHVibGljIHJvbGVzOiBBcnJheTxzdHJpbmc+ID0gW1xyXG5cdFx0J0dyb29tc21hbicsXHJcblx0XHQnQnJpZGVzbWFpZCdcclxuXHRdO1xyXG5cdHB1YmxpYyBzaWRlczogQXJyYXk8c3RyaW5nPiA9IFtcclxuXHRcdCdHcm9vbVxcJ3MnLFxyXG5cdFx0J0JyaWRlXFwncydcclxuXHRdO1xyXG5cclxuXHRwcml2YXRlIHZhbHVlczogYW55ID0ge1xyXG5cdFx0Zmlyc3ROYW1lOiAnJyxcclxuXHRcdGxhc3ROYW1lOiAnJyxcclxuXHRcdHNpZGU6ICcnLFxyXG5cdFx0cm9sZTogJycsXHJcblx0XHRlbWFpbDogJycsXHJcblx0XHRzZW5kUlNWUDogJydcclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtc1xyXG5cdCkge1xyXG5cdFx0dGhpcy53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZSh2YWx1ZXM/OiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodmFsdWVzKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZU5hbWU6IHN0cmluZywgZWxlbWVudDogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnZhbHVlc1t2YWx1ZU5hbWVdID0gZWxlbWVudC52YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRDaGVja2VkKHZhbHVlTmFtZTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy52YWx1ZXNbdmFsdWVOYW1lXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN1Ym1pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY2xvc2UodGhpcy52YWx1ZXMpO1xyXG5cdH1cclxuXHJcbn0iXX0=