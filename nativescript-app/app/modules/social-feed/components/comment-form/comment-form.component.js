"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("~/shared/services");
var post_service_1 = require("~/shared/services/post.service");
var enum_1 = require("~/shared/types/enum");
var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(route, postService, dialogsService, changeDetector) {
        this.route = route;
        this.postService = postService;
        this.dialogsService = dialogsService;
        this.changeDetector = changeDetector;
        this.editForm = false;
        this.onSuccess = new core_1.EventEmitter();
        this.cancelEditEvent = new core_1.EventEmitter();
    }
    CommentFormComponent.prototype.ngOnInit = function () {
        if (!this.editForm) {
            this.commentFormData = {
                text: ''
            };
        }
        else {
            this.commentFormData = Object.assign({}, this.comment);
            this.changeDetector.markForCheck();
        }
        // console.log("comment-form ngOnInit");
        // console.log(this.activeWedding);
    };
    CommentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editForm) {
            this.postService.editComment({
                weddingId: this.postWeddingId,
                postId: this.postId,
                commentId: this.comment.id,
                text: this.commentFormData.text
            }).toPromise().then(function () {
                _this.onSuccess.emit(_this.commentFormData.text);
                _this.cancelEdit();
            }).catch(function () {
                _this.dialogsService.showDialog({
                    message: 'Comment edit failed',
                    type: enum_1.DialogType.Alert
                });
            });
        }
        else {
            this.commentFormData = Object.assign(this.commentFormData, {
                authorWeddingId: this.activeWedding ? this.activeWedding.id : undefined,
                asWedding: this.asWedding
            });
            console.log(this.commentFormData);
            this.postService.addPostComment({
                weddingId: this.postWeddingId,
                postId: this.postId,
                comment: this.commentFormData
                /*{
                    authorWeddingId: this.activeWedding ? this.activeWedding.id : undefined,
                    asWedding: this.asWedding,
                    text: this.commentFormData.text
                }*/
            }).subscribe(function (response) {
                var commentId = response.result;
                _this.resetForm();
                _this.postService.getPostComment({
                    weddingId: _this.postWeddingId,
                    postId: _this.postId,
                    commentId: commentId
                }).toPromise().then(function (response) {
                    _this.onSuccess.emit(response.result);
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    CommentFormComponent.prototype.resetForm = function () {
        this.commentFormData.text = null;
    };
    CommentFormComponent.prototype.cancelEdit = function () {
        this.cancelEditEvent.next();
    };
    CommentFormComponent.prototype.setValue = function (valueName, element, useParam) {
        var value = useParam ? element[useParam] : element;
        this.commentFormData[valueName] = value;
    };
    CommentFormComponent.prototype.onTextViewLoaded = function (args) {
        args.object.focus();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CommentFormComponent.prototype, "asWedding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CommentFormComponent.prototype, "postId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CommentFormComponent.prototype, "postWeddingId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CommentFormComponent.prototype, "authInfo", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CommentFormComponent.prototype, "activeWedding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CommentFormComponent.prototype, "comment", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CommentFormComponent.prototype, "editForm", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], CommentFormComponent.prototype, "onSuccess", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], CommentFormComponent.prototype, "cancelEditEvent", void 0);
    CommentFormComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'comment-form',
            templateUrl: 'comment-form.component.html',
            styleUrls: ['./comment-form.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            post_service_1.PostService,
            services_1.DialogsService,
            core_1.ChangeDetectorRef])
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnQtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBT3VCO0FBQ3ZCLDBDQUFpRDtBQUlqRCw4Q0FBbUQ7QUFDbkQsK0RBQTZEO0FBQzdELDRDQUFpRDtBQU9qRDtJQWVJLDhCQUNZLEtBQXFCLEVBQ3JCLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGNBQWlDO1FBSGpDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFYcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDcEMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVcvQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRztnQkFDbkIsSUFBSSxFQUFFLEVBQUU7YUFDWCxDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBQ0Qsd0NBQXdDO1FBQ3hDLG1DQUFtQztJQUN2QyxDQUFDO0lBRU0sdUNBQVEsR0FBZjtRQUFBLGlCQWlEQztRQWhERyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsV0FB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R1E7UUFBUixZQUFLLEVBQUU7OzJEQUFvQjtJQUNuQjtRQUFSLFlBQUssRUFBRTs7d0RBQWdCO0lBQ2Y7UUFBUixZQUFLLEVBQUU7OytEQUF1QjtJQUN0QjtRQUFSLFlBQUssRUFBRTs7MERBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOzsrREFBd0I7SUFDdkI7UUFBUixZQUFLLEVBQUU7O3lEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7OzBEQUFrQjtJQUNoQjtRQUFULGFBQU0sRUFBRTs7MkRBQXFDO0lBQ3BDO1FBQVQsYUFBTSxFQUFFOztpRUFBc0M7SUFWdEMsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7aURBaUJxQix1QkFBYztZQUNSLDBCQUFXO1lBQ1IseUJBQWM7WUFDZCx3QkFBaUI7T0FuQnBDLG9CQUFvQixDQXdHaEM7SUFBRCwyQkFBQztDQUFBLEFBeEdELElBd0dDO0FBeEdZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Q29tcG9uZW50LFxyXG5cdEV2ZW50RW1pdHRlcixcclxuXHRPbkluaXQsXHJcblx0SW5wdXQsXHJcblx0T3V0cHV0LFxyXG5cdENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEF1dGhJbmZvIH0gZnJvbSAnfi9yb290LXN0b3JlL2F1dGgtc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcbmltcG9ydCB7IERpYWxvZ3NTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL3Bvc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IERpYWxvZ1R5cGUgfSBmcm9tICd+L3NoYXJlZC90eXBlcy9lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjb21tZW50LWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdjb21tZW50LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29tbWVudC1mb3JtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBhc1dlZGRpbmc6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwb3N0SWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBvc3RXZWRkaW5nSWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGF1dGhJbmZvOiBBdXRoSW5mbztcclxuICAgIEBJbnB1dCgpIGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmc7XHJcbiAgICBASW5wdXQoKSBjb21tZW50OiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0Rm9ybSA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIG9uU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIGNhbmNlbEVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwdWJsaWMgY29tbWVudEZvcm1EYXRhOiBhbnk7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dzU2VydmljZTogRGlhbG9nc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lZGl0Rm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRGb3JtRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50Rm9ybURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbW1lbnQtZm9ybSBuZ09uSW5pdFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFjdGl2ZVdlZGRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0Rm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmVkaXRDb21tZW50KHtcclxuICAgICAgICAgICAgICAgIHdlZGRpbmdJZDogdGhpcy5wb3N0V2VkZGluZ0lkLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiB0aGlzLnBvc3RJZCxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogdGhpcy5jb21tZW50LmlkLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb21tZW50Rm9ybURhdGEudGV4dFxyXG4gICAgICAgICAgICB9KS50b1Byb21pc2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQodGhpcy5jb21tZW50Rm9ybURhdGEudGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEVkaXQoKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dzU2VydmljZS5zaG93RGlhbG9nKHtcclxuXHQgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NvbW1lbnQgZWRpdCBmYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IERpYWxvZ1R5cGUuQWxlcnRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRGb3JtRGF0YSA9IE9iamVjdC5hc3NpZ24odGhpcy5jb21tZW50Rm9ybURhdGEsIHtcclxuXHQgICAgICAgICAgICBhdXRob3JXZWRkaW5nSWQ6IHRoaXMuYWN0aXZlV2VkZGluZyA/IHRoaXMuYWN0aXZlV2VkZGluZy5pZCA6IHVuZGVmaW5lZCxcclxuXHQgICAgICAgICAgICBhc1dlZGRpbmc6IHRoaXMuYXNXZWRkaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tZW50Rm9ybURhdGEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3N0U2VydmljZS5hZGRQb3N0Q29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICB3ZWRkaW5nSWQ6IHRoaXMucG9zdFdlZGRpbmdJZCxcclxuICAgICAgICAgICAgICAgIHBvc3RJZDogdGhpcy5wb3N0SWQsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0aGlzLmNvbW1lbnRGb3JtRGF0YVxyXG4gICAgICAgICAgICAgICAgLyp7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yV2VkZGluZ0lkOiB0aGlzLmFjdGl2ZVdlZGRpbmcgPyB0aGlzLmFjdGl2ZVdlZGRpbmcuaWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNXZWRkaW5nOiB0aGlzLmFzV2VkZGluZyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbW1lbnRGb3JtRGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHQgICAgICAgICAgICBjb25zdCBjb21tZW50SWQgPSByZXNwb25zZS5yZXN1bHQ7XHJcblx0ICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuXHJcblx0ICAgICAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRQb3N0Q29tbWVudCh7XHJcblx0XHQgICAgICAgICAgICB3ZWRkaW5nSWQ6IHRoaXMucG9zdFdlZGRpbmdJZCxcclxuXHRcdCAgICAgICAgICAgIHBvc3RJZDogdGhpcy5wb3N0SWQsXHJcblx0XHQgICAgICAgICAgICBjb21tZW50SWQ6IGNvbW1lbnRJZFxyXG5cdCAgICAgICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0ICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdChyZXNwb25zZS5yZXN1bHQpO1xyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7ICAgICAgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Rm9ybSgpIHtcclxuICAgICAgICB0aGlzLmNvbW1lbnRGb3JtRGF0YS50ZXh0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsRWRpdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbmNlbEVkaXRFdmVudC5uZXh0KCk7XHJcbiAgICB9XHJcblxyXG5cdHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZU5hbWU6IHN0cmluZywgZWxlbWVudDogYW55LCB1c2VQYXJhbT86IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc3QgdmFsdWUgPSB1c2VQYXJhbSA/IGVsZW1lbnRbdXNlUGFyYW1dIDogZWxlbWVudDtcclxuXHRcdHRoaXMuY29tbWVudEZvcm1EYXRhW3ZhbHVlTmFtZV0gPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvblRleHRWaWV3TG9hZGVkKGFyZ3MpOiB2b2lkIHtcclxuICAgIFx0YXJncy5vYmplY3QuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19