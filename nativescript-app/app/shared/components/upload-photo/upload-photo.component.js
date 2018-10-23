"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var services_1 = require("~/shared/services");
var modals_1 = require("~/shared/modals");
var UploadPhotoComponent = /** @class */ (function () {
    function UploadPhotoComponent(modalService) {
        this.modalService = modalService;
        this.photoSelected = new core_1.EventEmitter();
        this.selectedUrl = this.src;
    }
    UploadPhotoComponent.prototype.getPicture = function () {
        var _this = this;
        this.modalService.showModal(modals_1.UploadModal, {}).then(function (url) {
            _this.selectedUrl = url;
            _this.photoSelected.next(url);
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], UploadPhotoComponent.prototype, "src", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], UploadPhotoComponent.prototype, "photoSelected", void 0);
    UploadPhotoComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'upload-photo',
            templateUrl: 'upload-photo.component.html',
            styleUrls: ['./upload-photo.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService])
    ], UploadPhotoComponent);
    return UploadPhotoComponent;
}());
exports.UploadPhotoComponent = UploadPhotoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLXBob3RvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVwbG9hZC1waG90by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXVFO0FBRXZFLDhDQUFpRDtBQUNqRCwwQ0FBOEM7QUFROUM7SUFLQyw4QkFDUyxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUp6QixrQkFBYSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU0vRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDN0IsQ0FBQztJQUVNLHlDQUFVLEdBQWpCO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxvQkFBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsVUFBQyxHQUFXO1lBQ1gsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBakJRO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNYO1FBQVQsYUFBTSxFQUFFOzBDQUFnQixtQkFBWTsrREFBMkI7SUFGcEQsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM1QyxDQUFDO2lEQU9zQix1QkFBWTtPQU52QixvQkFBb0IsQ0FvQmhDO0lBQUQsMkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBVcGxvYWRNb2RhbCB9IGZyb20gJ34vc2hhcmVkL21vZGFscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAndXBsb2FkLXBob3RvJyxcclxuXHR0ZW1wbGF0ZVVybDogJ3VwbG9hZC1waG90by5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vdXBsb2FkLXBob3RvLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwbG9hZFBob3RvQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSBzcmM6IHN0cmluZztcclxuXHRAT3V0cHV0KCkgcGhvdG9TZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHNlbGVjdGVkVXJsOnN0cmluZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0KSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkVXJsID0gdGhpcy5zcmM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UGljdHVyZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChVcGxvYWRNb2RhbCwge30pLnRoZW4oXHJcblx0XHRcdCh1cmw6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRVcmwgPSB1cmw7XHJcblx0XHRcdFx0dGhpcy5waG90b1NlbGVjdGVkLm5leHQodXJsKTtcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcbn1cclxuIl19