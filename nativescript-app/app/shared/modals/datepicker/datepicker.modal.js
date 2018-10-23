"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var moment = require("moment");
var configs_1 = require("~/shared/configs");
var DatepickerModal = /** @class */ (function () {
    function DatepickerModal(params) {
        this.params = params;
        this.date = moment();
        this.time = moment();
        this.showHours = false;
        this.useHours = this.params.context.useHours;
    }
    DatepickerModal.prototype.onDateChanged = function (event) {
        this.date = moment(event.value);
    };
    DatepickerModal.prototype.onTimeChanged = function (event) {
        this.time = moment(event.value);
    };
    DatepickerModal.prototype.close = function () {
        var date = this.date.format(configs_1.DATE_FORMAT);
        if (this.useHours) {
            if (this.showHours) {
                var hour = this.time.hour();
                var minutes = this.time.minutes();
                date = date + ' ' + hour + ':' + minutes;
            }
            else {
                this.showHours = true;
                return;
            }
        }
        this.params.closeCallback(date);
    };
    DatepickerModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'datepicker-modal',
            templateUrl: 'datepicker.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], DatepickerModal);
    return DatepickerModal;
}());
exports.DatepickerModal = DatepickerModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBDO0FBRTFDLG1FQUE0RTtBQUM1RSwrQkFBaUM7QUFFakMsNENBQStDO0FBTS9DO0lBUUMseUJBQ1MsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFQMUIsU0FBSSxHQUFXLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBVyxNQUFNLEVBQUUsQ0FBQztRQUd6QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBS2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIsS0FBSztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBVyxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQzFDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsTUFBTSxDQUFDO1lBQ1IsQ0FBQztRQUNGLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcENXLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLHVCQUF1QjtTQUNwQyxDQUFDO2lEQVVnQiwyQkFBaUI7T0FUdEIsZUFBZSxDQXNDM0I7SUFBRCxzQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBEQVRFX0ZPUk1BVCB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdkYXRlcGlja2VyLW1vZGFsJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXIubW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTW9kYWwge1xyXG5cclxuXHRwcml2YXRlIGRhdGU6IE1vbWVudCA9IG1vbWVudCgpO1xyXG5cdHByaXZhdGUgdGltZTogTW9tZW50ID0gbW9tZW50KCk7XHJcblx0cHJpdmF0ZSB1c2VIb3VyczogYm9vbGVhbjtcclxuXHJcblx0cHVibGljIHNob3dIb3VyczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtc1xyXG5cdCkge1xyXG5cdFx0dGhpcy51c2VIb3VycyA9IHRoaXMucGFyYW1zLmNvbnRleHQudXNlSG91cnM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25EYXRlQ2hhbmdlZChldmVudCk6IHZvaWQge1xyXG5cdFx0dGhpcy5kYXRlID0gbW9tZW50KGV2ZW50LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvblRpbWVDaGFuZ2VkKGV2ZW50KTogdm9pZCB7XHJcblx0XHR0aGlzLnRpbWUgPSBtb21lbnQoZXZlbnQudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG5cdFx0bGV0IGRhdGUgPSB0aGlzLmRhdGUuZm9ybWF0KERBVEVfRk9STUFUKTtcclxuXHRcdGlmICh0aGlzLnVzZUhvdXJzKSB7XHJcblx0XHRcdGlmICh0aGlzLnNob3dIb3Vycykge1xyXG5cdFx0XHRcdGNvbnN0IGhvdXIgPSB0aGlzLnRpbWUuaG91cigpO1xyXG5cdFx0XHRcdGNvbnN0IG1pbnV0ZXMgPSB0aGlzLnRpbWUubWludXRlcygpO1xyXG5cdFx0XHRcdGRhdGUgPSBkYXRlICsgJyAnICsgaG91ciArICc6JyArIG1pbnV0ZXM7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zaG93SG91cnMgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soZGF0ZSk7XHJcblx0fVxyXG5cclxufSJdfQ==