"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var objectToFormData = require("object-to-formdata");
var root_store_1 = require("~/root-store");
var post_service_1 = require("~/shared/services/post.service");
var services_1 = require("~/shared/services");
var modals_1 = require("~/shared/modals");
var PostFormComponent = /** @class */ (function () {
    function PostFormComponent(store, route, postService, modalService) {
        this.store = store;
        this.route = route;
        this.postService = postService;
        this.modalService = modalService;
        this.onSuccess = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.editForm = false;
        this.imagesToRemove = [];
    }
    PostFormComponent.prototype.ngOnInit = function () {
        this.resetForm();
        if (!this.textPlaceholder) {
            this.textPlaceholder = 'What\'s on your mind?';
        }
        if (this.post) {
            this.editForm = true;
            this.postFormData = Object.assign({}, this.post);
        }
    };
    PostFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editForm) {
            this.submitted = true;
            var params = {
                text: this.postFormData.text,
            };
            if (this.imagesToRemove.length) {
                params.deletedPhotos = this.imagesToRemove;
            }
            var photos = [];
            if (this.images) {
                for (var i = 0; i < this.images.length; i++) {
                    var image = this.images[i];
                    photos.push(image.file);
                }
            }
            if (photos.length) {
                params = Object.assign(params, { photos: photos });
            }
            var formData = objectToFormData(params);
            this.postService.editPost({
                weddingId: this.activeProfile.id,
                postId: this.post.id,
                params: formData
            }).subscribe(function () {
                _this.submitted = false;
                _this.onSuccess.emit();
            }, function (error) {
                _this.error = error.error;
                _this.submitted = false;
            });
        }
        else {
            var post = this.postFormData;
            var photos = [];
            if (this.images) {
                for (var i = 0; i < this.images.length; i++) {
                    var image = this.images[i];
                    photos.push(image.file);
                }
            }
            var formData = objectToFormData(Object.assign(post, { photos: photos }));
            console.log(formData);
            this.submitted = true;
            this.postService.addPost({
                weddingId: this.activeProfile.id,
                post: {
                    text: this.postFormData.text,
                    post: photos
                }
            }).subscribe(function (response) {
                console.log("Post Success");
                // this.postForm.reset();
                // this.uploader.reset();
                _this.submitted = false;
                var postId = response.result;
                console.log(postId);
                _this.text = "";
                // this.refreshPost();
                _this.postService.getPost({
                    weddingId: _this.activeProfile.id,
                    postId: postId
                }).toPromise().then(function (response) {
                    console.log("Post refresh");
                    _this.onSuccess.emit(response.result);
                });
            }, function (error) {
                _this.error = error.error;
                _this.submitted = false;
            });
        }
        /// open after test
        console.log("Post submit");
    };
    PostFormComponent.prototype.camera_image = function () {
        this.modalService.showModal(modals_1.UploadModal, {}).then(function (url) {
            // this.selectedUrl = url;
            // this.photoSelected.next(url);
        });
    };
    PostFormComponent.prototype.resetForm = function () {
        this.postFormData = {
            text: null
        };
    };
    PostFormComponent.prototype.removeImage = function (removedPhoto) {
        this.imagesToRemove.push(removedPhoto.id);
    };
    PostFormComponent.prototype.cancel = function () {
        this.onClose.next();
    };
    PostFormComponent.prototype.setValue = function (valueName, element, useParam) {
        var value = useParam ? element[useParam] : element;
        this.postFormData[valueName] = value;
    };
    tslib_1.__decorate([
        core_1.ViewChild('postForm'),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "postForm", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('uploader'),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "uploader", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "activeProfile", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "uploaderImages", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], PostFormComponent.prototype, "textPlaceholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "post", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "onSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], PostFormComponent.prototype, "onClose", void 0);
    PostFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'post-form',
            templateUrl: 'post-form.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            router_1.ActivatedRoute,
            post_service_1.PostService,
            services_1.ModalService])
    ], PostFormComponent);
    return PostFormComponent;
}());
exports.PostFormComponent = PostFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBGO0FBQzFGLDBDQUFpRDtBQUNqRCxxQ0FBb0M7QUFDcEMscURBQXVEO0FBRXZELDJDQUFtRDtBQUVuRCwrREFBNkQ7QUFHN0QsOENBQWlEO0FBQ2pELDBDQUE4QztBQU05QztJQXFCSSwyQkFDWSxLQUFtQixFQUNuQixLQUFxQixFQUNyQixXQUF3QixFQUN4QixZQUEwQjtRQUgxQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBaEI1QixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDcEMsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBTWhDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsbUJBQWMsR0FBa0IsRUFBRSxDQUFDO0lBVTFDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQztRQUNuRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFBQSxpQkFzRkM7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LHVCQUFjO1lBQ1IsMEJBQVc7WUFDVix1QkFBWTtPQXpCN0IsaUJBQWlCLENBNEo3QjtJQUFELHdCQUFDO0NBQUEsQUE1SkQsSUE0SkM7QUE1SlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIG9iamVjdFRvRm9ybURhdGEgZnJvbSAnb2JqZWN0LXRvLWZvcm1kYXRhJztcclxuXHJcbmltcG9ydCB7IFN0YXRlLCBDb21tb25Nb2RlbHMgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvbW9kZWxzL3NvY2lhbC1mZWVkJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9zaGFyZWQvY29uZmlncyc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgVXBsb2FkTW9kYWwgfSBmcm9tICd+L3NoYXJlZC9tb2RhbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Bvc3QtZm9ybScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc3QtZm9ybS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncG9zdEZvcm0nKSBwcml2YXRlIHBvc3RGb3JtOiBhbnk7XHJcbiAgICBAVmlld0NoaWxkKCd1cGxvYWRlcicpIHByaXZhdGUgdXBsb2FkZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIGFjdGl2ZVByb2ZpbGU6IENvbW1vbk1vZGVscy5Qcm9maWxlO1xyXG4gICAgQElucHV0KCkgdXBsb2FkZXJJbWFnZXM/OiBhbnk7XHJcbiAgICBASW5wdXQoKSB0ZXh0UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwb3N0PzogUG9zdDtcclxuXHJcbiAgICBAT3V0cHV0KCkgb25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwdWJsaWMgcG9zdEZvcm1EYXRhOiBhbnk7XHJcbiAgICBwdWJsaWMgaW1hZ2VzOiBhbnk7XHJcbiAgICBwdWJsaWMgZXJyb3I6IGFueTtcclxuICAgIHB1YmxpYyBzdWJtaXR0ZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZWRpdEZvcm0gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpbWFnZXNUb1JlbW92ZTogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAgIHRleHQ6c3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRleHRQbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRQbGFjZWhvbGRlciA9ICdXaGF0XFwncyBvbiB5b3VyIG1pbmQ/JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0Rm9ybSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdEZvcm1EYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wb3N0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmVkaXRGb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHBhcmFtczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5wb3N0Rm9ybURhdGEudGV4dCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlc1RvUmVtb3ZlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmRlbGV0ZWRQaG90b3MgPSB0aGlzLmltYWdlc1RvUmVtb3ZlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwaG90b3MgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBwaG90b3MucHVzaChpbWFnZS5maWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBob3Rvcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7cGhvdG9zfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBvYmplY3RUb0Zvcm1EYXRhKHBhcmFtcyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmVkaXRQb3N0KHtcclxuICAgICAgICAgICAgICAgIHdlZGRpbmdJZDogdGhpcy5hY3RpdmVQcm9maWxlLmlkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiB0aGlzLnBvc3QuaWQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGZvcm1EYXRhXHJcbiAgICAgICAgICAgIH0pLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdCgpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvci5lcnJvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwb3N0ID0gdGhpcy5wb3N0Rm9ybURhdGE7XHJcbiAgICAgICAgICAgIGxldCBwaG90b3MgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gdGhpcy5pbWFnZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9zLnB1c2goaW1hZ2UuZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gb2JqZWN0VG9Gb3JtRGF0YShcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocG9zdCwge3Bob3Rvc30pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdFNlcnZpY2UuYWRkUG9zdCh7XHJcbiAgICAgICAgICAgICAgICB3ZWRkaW5nSWQ6IHRoaXMuYWN0aXZlUHJvZmlsZS5pZCxcclxuICAgICAgICAgICAgICAgIHBvc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OnRoaXMucG9zdEZvcm1EYXRhLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdDpwaG90b3NcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb3N0IFN1Y2Nlc3NcIik7XHJcblx0ICAgICAgICAgICAgLy8gdGhpcy5wb3N0Rm9ybS5yZXNldCgpO1xyXG5cdCAgICAgICAgICAgIC8vIHRoaXMudXBsb2FkZXIucmVzZXQoKTtcclxuXHQgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RJZCA9IHJlc3BvbnNlLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvc3RJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJcIjtcclxuXHJcblx0ICAgICAgICAgICAgLy8gdGhpcy5yZWZyZXNoUG9zdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRQb3N0KHtcclxuXHRcdCAgICAgICAgICAgIHdlZGRpbmdJZDogdGhpcy5hY3RpdmVQcm9maWxlLmlkLFxyXG5cdFx0ICAgICAgICAgICAgcG9zdElkOiBwb3N0SWRcclxuICAgICAgICAgICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUG9zdCByZWZyZXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQocmVzcG9uc2UucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4geyAgICAgICAgICAgICAgICBcclxuXHQgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IuZXJyb3I7XHJcblx0ICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLyBvcGVuIGFmdGVyIHRlc3RcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBvc3Qgc3VibWl0XCIpXHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhX2ltYWdlKCl7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFVwbG9hZE1vZGFsLCB7fSkudGhlbihcclxuXHRcdFx0KHVybDogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0Ly8gdGhpcy5zZWxlY3RlZFVybCA9IHVybDtcclxuXHRcdFx0XHQvLyB0aGlzLnBob3RvU2VsZWN0ZWQubmV4dCh1cmwpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcbiAgICB9XHJcbiAgICByZXNldEZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5wb3N0Rm9ybURhdGEgPSB7XHJcbiAgICAgICAgICAgIHRleHQ6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJbWFnZShyZW1vdmVkUGhvdG86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzVG9SZW1vdmUucHVzaChyZW1vdmVkUGhvdG8uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlLm5leHQoKTtcclxuICAgIH1cclxuXHJcblx0cHVibGljIHNldFZhbHVlKHZhbHVlTmFtZTogc3RyaW5nLCBlbGVtZW50OiBhbnksIHVzZVBhcmFtPzogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHVzZVBhcmFtID8gZWxlbWVudFt1c2VQYXJhbV0gOiBlbGVtZW50O1xyXG5cdFx0dGhpcy5wb3N0Rm9ybURhdGFbdmFsdWVOYW1lXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcbn1cclxuIl19