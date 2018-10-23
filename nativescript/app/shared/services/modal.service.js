"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var ModalService = /** @class */ (function () {
    function ModalService(modal) {
        this.modal = modal;
    }
    ModalService.prototype.setContainerRef = function (element) {
        this.parentRef = element;
    };
    ModalService.prototype.showModal = function (component, options) {
        options.viewContainerRef = this.parentRef;
        return this.modal.showModal(component, options);
    };
    ModalService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [nativescript_angular_1.ModalDialogService])
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RTtBQUc5RTtJQUlDLHNCQUNTLEtBQXlCO1FBQXpCLFVBQUssR0FBTCxLQUFLLENBQW9CO0lBQzlCLENBQUM7SUFFRSxzQ0FBZSxHQUF0QixVQUF1QixPQUF5QjtRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBRU0sZ0NBQVMsR0FBaEIsVUFBaUIsU0FBYyxFQUFFLE9BQTJCO1FBQzNELE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQWZXLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtpREFNSSx5Q0FBa0I7T0FMdEIsWUFBWSxDQWlCeEI7SUFBRCxtQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgcGFyZW50UmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZVxyXG5cdCkgeyB9XHJcblxyXG5cdHB1YmxpYyBzZXRDb250YWluZXJSZWYoZWxlbWVudDogVmlld0NvbnRhaW5lclJlZik6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXJlbnRSZWYgPSBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dNb2RhbChjb21wb25lbnQ6IGFueSwgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuXHRcdG9wdGlvbnMudmlld0NvbnRhaW5lclJlZiA9IHRoaXMucGFyZW50UmVmO1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kYWwuc2hvd01vZGFsKGNvbXBvbmVudCwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=