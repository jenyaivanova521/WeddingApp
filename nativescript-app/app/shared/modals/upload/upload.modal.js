"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var nativescript_camera_1 = require("nativescript-camera");
var imagepickerModule = require("nativescript-imagepicker");
var permissions = require("nativescript-permissions");
var platformModule = require("tns-core-modules/platform");
var services_1 = require("~/shared/services");
var enum_1 = require("~/shared/types/enum");
var UploadModal = /** @class */ (function () {
    function UploadModal(params, changeDetector, dialogService) {
        this.params = params;
        this.changeDetector = changeDetector;
        this.dialogService = dialogService;
    }
    UploadModal.prototype.selectPicture = function () {
        var _this = this;
        if (platformModule.device.os === 'Android' && parseInt(platformModule.device.sdkVersion) >= 23) {
            var hasPermission = permissions.hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE);
            if (hasPermission) {
                this.startSelection();
            }
            else {
                permissions.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE).then(function () {
                    _this.startSelection();
                }, function (e) {
                    _this.dialogService.showDialog({
                        type: enum_1.DialogType.Alert,
                        message: e.message
                    });
                });
            }
        }
        else {
            this.startSelection();
        }
    };
    UploadModal.prototype.close = function (param) {
        this.params.closeCallback(param);
    };
    UploadModal.prototype.takePicture = function () {
        var _this = this;
        this.requestPermission().then(function () {
            nativescript_camera_1.takePicture().then(function (image) {
                var imageUrl = platformModule.isAndroid ? image.android : image.ios;
                _this.close(imageUrl);
            }).catch(function (err) {
                _this.dialogService.showDialog({
                    type: enum_1.DialogType.Alert,
                    message: err.message
                });
            });
        }, function (err) {
            _this.dialogService.showDialog({
                type: enum_1.DialogType.Alert,
                message: err.message
            });
        });
    };
    UploadModal.prototype.startSelection = function () {
        var _this = this;
        // TODO fix for multiple if multiple is needed
        this.imagePicker = imagepickerModule.create({
            mode: 'single'
        });
        this.imagePicker
            .authorize()
            .then(function () {
            return _this.imagePicker.present();
        })
            .then(function (selection) {
            // TODO fix for multiple if multiple is needed (close with array of imageUrls)
            selection.forEach(function (selected_item) {
                var imageUrl = platformModule.isAndroid ? selected_item.android : selected_item.ios;
                _this.close(imageUrl);
            });
        }).catch(function (e) {
            _this.dialogService.showDialog({
                type: enum_1.DialogType.Alert,
                message: e,
            });
        });
    };
    UploadModal.prototype.requestPermission = function () {
        return nativescript_camera_1.requestPermissions();
    };
    UploadModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'upload-modal',
            templateUrl: 'upload.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams,
            core_1.ChangeDetectorRef,
            services_1.DialogsService])
    ], UploadModal);
    return UploadModal;
}());
exports.UploadModal = UploadModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBsb2FkLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RDtBQUM3RCxtRUFBNEU7QUFDNUUsMkRBQXNFO0FBQ3RFLDREQUE4RDtBQUM5RCxzREFBd0Q7QUFFeEQsMERBQTREO0FBQzVELDhDQUFtRDtBQUNuRCw0Q0FBaUQ7QUFRakQ7SUFJQyxxQkFDUyxNQUF5QixFQUN6QixjQUFpQyxFQUNqQyxhQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBRXRDLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUFBLGlCQXNCQztRQXBCQSxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxTQUFTLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRyxJQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkcsRUFBRSxDQUFBLENBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQ3BGO29CQUNDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLFVBQUMsQ0FBQztvQkFDSixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQzt3QkFDN0IsSUFBSSxFQUFFLGlCQUFVLENBQUMsS0FBSzt3QkFDdEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0gsQ0FBQyxDQUNELENBQUE7WUFDRixDQUFDO1FBQ0YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBRVAsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDRixDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLEtBQVc7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLGlDQUFXLEdBQWxCO1FBQUEsaUJBb0JDO1FBbEJBLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QixpQ0FBVyxFQUFFLENBQUMsSUFBSSxDQUNqQixVQUFDLEtBQWlCO2dCQUNqQixJQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUN0RSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FDRCxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ1YsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7b0JBQzdCLElBQUksRUFBRSxpQkFBVSxDQUFDLEtBQUs7b0JBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztpQkFDcEIsQ0FBQyxDQUFBO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ04sS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLElBQUksRUFBRSxpQkFBVSxDQUFDLEtBQUs7Z0JBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTzthQUNwQixDQUFDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxvQ0FBYyxHQUF0QjtRQUFBLGlCQXlCQztRQXhCQSw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBSSxFQUFFLFFBQVE7U0FDZCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVzthQUNkLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQztZQUNMLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELElBQUksQ0FBRSxVQUFDLFNBQVM7WUFDaEIsOEVBQThFO1lBQzlFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUMvQixJQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO2dCQUV0RixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNWLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO2dCQUM3QixJQUFJLEVBQUUsaUJBQVUsQ0FBQyxLQUFLO2dCQUN0QixPQUFPLEVBQUUsQ0FBQzthQUNWLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVPLHVDQUFpQixHQUF6QjtRQUNDLE1BQU0sQ0FBQyx3Q0FBa0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUExRlcsV0FBVztRQUp2QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLG1CQUFtQjtTQUNoQyxDQUFDO2lEQU1nQiwyQkFBaUI7WUFDVCx3QkFBaUI7WUFDbEIseUJBQWM7T0FQMUIsV0FBVyxDQTRGdkI7SUFBRCxrQkFBQztDQUFBLEFBNUZELElBNEZDO0FBNUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XHJcbmltcG9ydCB7IHJlcXVlc3RQZXJtaXNzaW9ucywgdGFrZVBpY3R1cmUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXJNb2R1bGUgZnJvbSAnbmF0aXZlc2NyaXB0LWltYWdlcGlja2VyJztcclxuaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xyXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBEaWFsb2dzU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRGlhbG9nVHlwZSB9IGZyb20gJ34vc2hhcmVkL3R5cGVzL2VudW0nO1xyXG5cclxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3VwbG9hZC1tb2RhbCcsXHJcblx0dGVtcGxhdGVVcmw6ICd1cGxvYWQubW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRNb2RhbCB7XHJcblxyXG5cdHByaXZhdGUgaW1hZ2VQaWNrZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0XHRwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ3NTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdFBpY3R1cmUoKTogYW55IHtcclxuXHRcdFxyXG5cdFx0aWYgKHBsYXRmb3JtTW9kdWxlLmRldmljZS5vcyA9PT0gJ0FuZHJvaWQnICYmIHBhcnNlSW50KHBsYXRmb3JtTW9kdWxlLmRldmljZS5zZGtWZXJzaW9uKSA+PSAyMykge1xyXG5cdFx0XHRjb25zdCBoYXNQZXJtaXNzaW9uID0gcGVybWlzc2lvbnMuaGFzUGVybWlzc2lvbihhbmRyb2lkLk1hbmlmZXN0LnBlcm1pc3Npb24uUkVBRF9FWFRFUk5BTF9TVE9SQUdFKTtcclxuXHRcdFx0aWYoIGhhc1Blcm1pc3Npb24pIHtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0U2VsZWN0aW9uKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGVybWlzc2lvbnMucmVxdWVzdFBlcm1pc3Npb24oYW5kcm9pZC5NYW5pZmVzdC5wZXJtaXNzaW9uLlJFQURfRVhURVJOQUxfU1RPUkFHRSkudGhlbihcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGFydFNlbGVjdGlvbigpO1xyXG5cdFx0XHRcdFx0fSwgKGUpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaWFsb2dTZXJ2aWNlLnNob3dEaWFsb2coe1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IERpYWxvZ1R5cGUuQWxlcnQsXHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogZS5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zdGFydFNlbGVjdGlvbigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlKHBhcmFtPzogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHBhcmFtKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0YWtlUGljdHVyZSgpOiBhbnkge1xyXG5cdFxyXG5cdFx0dGhpcy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHR0YWtlUGljdHVyZSgpLnRoZW4oXHJcblx0XHRcdFx0KGltYWdlOiBJbWFnZUFzc2V0KSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpbWFnZVVybCA9IHBsYXRmb3JtTW9kdWxlLmlzQW5kcm9pZCA/IGltYWdlLmFuZHJvaWQgOiBpbWFnZS5pb3M7XHJcblx0XHRcdFx0XHR0aGlzLmNsb3NlKGltYWdlVXJsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcblx0XHRcdFx0XHR0eXBlOiBEaWFsb2dUeXBlLkFsZXJ0LFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyLm1lc3NhZ2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KVxyXG5cdFx0fSwgKGVycikgPT4ge1xyXG5cdFx0XHR0aGlzLmRpYWxvZ1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcblx0XHRcdFx0dHlwZTogRGlhbG9nVHlwZS5BbGVydCxcclxuXHRcdFx0XHRtZXNzYWdlOiBlcnIubWVzc2FnZVxyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXJ0U2VsZWN0aW9uKCkge1xyXG5cdFx0Ly8gVE9ETyBmaXggZm9yIG11bHRpcGxlIGlmIG11bHRpcGxlIGlzIG5lZWRlZFxyXG5cdFx0dGhpcy5pbWFnZVBpY2tlciA9IGltYWdlcGlja2VyTW9kdWxlLmNyZWF0ZSh7XHJcblx0XHRcdG1vZGU6ICdzaW5nbGUnXHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5pbWFnZVBpY2tlclxyXG5cdFx0XHQuYXV0aG9yaXplKClcclxuXHRcdFx0LnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmltYWdlUGlja2VyLnByZXNlbnQoKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oIChzZWxlY3Rpb24pID0+IHtcclxuXHRcdFx0XHQvLyBUT0RPIGZpeCBmb3IgbXVsdGlwbGUgaWYgbXVsdGlwbGUgaXMgbmVlZGVkIChjbG9zZSB3aXRoIGFycmF5IG9mIGltYWdlVXJscylcclxuXHRcdFx0XHRzZWxlY3Rpb24uZm9yRWFjaCgoc2VsZWN0ZWRfaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaW1hZ2VVcmwgPSBwbGF0Zm9ybU1vZHVsZS5pc0FuZHJvaWQgPyBzZWxlY3RlZF9pdGVtLmFuZHJvaWQgOiBzZWxlY3RlZF9pdGVtLmlvcztcclxuXHJcblx0XHRcdFx0XHR0aGlzLmNsb3NlKGltYWdlVXJsKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSkuY2F0Y2goKGUpID0+IHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcblx0XHRcdFx0XHR0eXBlOiBEaWFsb2dUeXBlLkFsZXJ0LFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xyXG5cdH1cclxuXHJcbn0iXX0=