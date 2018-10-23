"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var services_1 = require("~/shared/services");
var modals_1 = require("~/modules/wedding/modals");
var GuestComponent = /** @class */ (function () {
    function GuestComponent(modalService, store) {
        this.modalService = modalService;
        this.store = store;
    }
    GuestComponent.prototype.ngOnInit = function () {
        console.log("Guest :");
        console.log(this.guest);
    };
    GuestComponent.prototype.delete = function () {
        // TODO delete
    };
    GuestComponent.prototype.update = function (guest, update) {
        // TODO update
    };
    GuestComponent.prototype.delete_editModal = function () {
        this.modalService.showModal(modals_1.DeleteeditModal, {})
            .then(function (response) {
            // TODO add guest
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], GuestComponent.prototype, "guest", void 0);
    GuestComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'guest',
            templateUrl: 'guest.component.html',
            styleUrls: ['./guest.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store])
    ], GuestComponent);
    return GuestComponent;
}());
exports.GuestComponent = GuestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3Vlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpRDtBQUNqRCxxQ0FBb0M7QUFHcEMsOENBQWlEO0FBQ2pELG1EQUEyRDtBQVEzRDtJQUlDLHdCQUNTLFlBQTBCLEVBQzFCLEtBQW1CO1FBRG5CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWM7SUFFNUIsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTSwrQkFBTSxHQUFiO1FBQ0MsY0FBYztJQUNmLENBQUM7SUFFTSwrQkFBTSxHQUFiLFVBQWMsS0FBVSxFQUFFLE1BQU07UUFDL0IsY0FBYztJQUNmLENBQUM7SUFFTSx5Q0FBZ0IsR0FBdkI7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyx3QkFBZSxFQUFFLEVBQUUsQ0FBQzthQUM5QyxJQUFJLENBQUMsVUFBQyxRQUFhO1lBQ25CLGlCQUFpQjtRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4QlE7UUFBUixZQUFLLEVBQUU7O2lEQUFZO0lBRlIsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDckMsQ0FBQztpREFNc0IsdUJBQVk7WUFDbkIsYUFBSztPQU5ULGNBQWMsQ0E0QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRGVsZXRlZWRpdE1vZGFsIH0gZnJvbSAnfi9tb2R1bGVzL3dlZGRpbmcvbW9kYWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdndWVzdCcsXHJcblx0dGVtcGxhdGVVcmw6ICdndWVzdC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vZ3Vlc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3Vlc3RDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBndWVzdDogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0KSB7XHRcdFxyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiR3Vlc3QgOlwiKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZ3Vlc3QpO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVsZXRlKCk6IHZvaWQge1xyXG5cdFx0Ly8gVE9ETyBkZWxldGVcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGUoZ3Vlc3Q6IGFueSwgdXBkYXRlKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPIHVwZGF0ZVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRlbGV0ZV9lZGl0TW9kYWwoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoRGVsZXRlZWRpdE1vZGFsLCB7fSlcclxuXHRcdFx0LnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuXHRcdFx0XHQvLyBUT0RPIGFkZCBndWVzdFxyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==