"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var modals_1 = require("~/shared/modals");
var services_1 = require("~/shared/services");
var post_service_1 = require("~/shared/services/post.service");
var enum_1 = require("~/shared/types/enum");
var root_store_1 = require("../../../../root-store");
var CommentComponent = /** @class */ (function () {
    function CommentComponent(postService, dialogsService, modalService) {
        this.postService = postService;
        this.dialogsService = dialogsService;
        this.modalService = modalService;
        this.commentDeleted = new core_1.EventEmitter();
        this.commentEditToggled = new core_1.EventEmitter();
        this.editActive = false;
    }
    CommentComponent.prototype.ngOnInit = function () {
        console.log("comment ngOnInit");
    };
    CommentComponent.prototype.toggleEdit = function () {
        this.editActive = !this.editActive;
        this.commentEditToggled.next(this.editActive);
    };
    CommentComponent.prototype.deleteComment = function () {
        var _this = this;
        dialogs.confirm({
            title: 'Delete comment',
            message: 'Are you sure ?',
            okButtonText: 'Yes',
            cancelButtonText: 'No, cancel',
        }).then(function (result) {
            if (result) {
                _this.sendDeleteReq();
            }
        });
    };
    CommentComponent.prototype.onCommentEditSuccess = function (editedText) {
        this.comment.text = editedText;
    };
    CommentComponent.prototype.sendDeleteReq = function () {
        var _this = this;
        this.postService.deleteComment({ weddingId: this.weddingId, postId: this.postId, commentId: this.comment.id }).subscribe(function () {
            _this.commentDeleted.next(_this.comment);
            _this.dialogsService.showDialog({
                message: 'Comment deleted',
                type: enum_1.DialogType.Success,
            });
        }, function () {
            _this.dialogsService.showDialog({
                message: 'Comment delete failed',
                type: enum_1.DialogType.Alert
            });
        });
    };
    CommentComponent.prototype.openSelectActionModal = function () {
        var _this = this;
        this.modalService.showModal(modals_1.ListSelectModal, { context: {
                items: ['Edit comment', 'Delete comment'],
            }, fullscreen: true
        })
            .then(function (result) {
            if (result === 'Edit comment') {
                _this.toggleEdit();
            }
            else {
                _this.deleteComment();
            }
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CommentComponent.prototype, "comment", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CommentComponent.prototype, "authInfo", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CommentComponent.prototype, "postId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CommentComponent.prototype, "weddingId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CommentComponent.prototype, "asWedding", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CommentComponent.prototype, "commentDeleted", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CommentComponent.prototype, "commentEditToggled", void 0);
    CommentComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'comment',
            templateUrl: 'comment.component.html',
            styleUrls: ['./comment.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [post_service_1.PostService,
            services_1.DialogsService,
            services_1.ModalService])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FNdUI7QUFDdkIscURBQXVEO0FBRXZELDBDQUFrRDtBQUVsRCw4Q0FBaUU7QUFDakUsK0RBQTZEO0FBQzdELDRDQUFpRDtBQUNqRCxxREFBb0Q7QUFPcEQ7SUFXSSwwQkFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixZQUEwQjtRQUYxQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFSNUIsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkQsdUJBQWtCLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRWxFLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFPMUIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLHdDQUFhLEdBQXBCO1FBQUEsaUJBV0M7UUFWQSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2YsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLFlBQVk7U0FDOUIsQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFDLE1BQU07WUFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN0QixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sK0NBQW9CLEdBQTNCLFVBQTRCLFVBQWtCO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sd0NBQWEsR0FBckI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUNsSDtZQUNJLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsSUFBSSxFQUFFLGlCQUFVLENBQUMsT0FBTzthQUMvQixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0Q7WUFDSSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsSUFBSSxFQUFFLGlCQUFVLENBQUMsS0FBSzthQUN6QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRyxnREFBcUIsR0FBNUI7UUFBQSxpQkFlQztRQWRBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHdCQUFlLEVBQzFDLEVBQUMsT0FBTyxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQzthQUN6QyxFQUFFLFVBQVUsRUFBRSxJQUFJO1NBQ25CLENBQUM7YUFDRCxJQUFJLENBQ0osVUFBQyxNQUFNO1lBQ04sRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RCLENBQUM7UUFDRixDQUFDLENBQ0QsQ0FBQTtJQUNILENBQUM7SUE1RVc7UUFBUixZQUFLLEVBQUU7O3FEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O3NEQUErQjtJQUM5QjtRQUFSLFlBQUssRUFBRTs7b0RBQWdCO0lBQ2Y7UUFBUixZQUFLLEVBQUU7O3VEQUFtQjtJQUNsQjtRQUFSLFlBQUssRUFBRTs7dURBQW9CO0lBQ2xCO1FBQVQsYUFBTSxFQUFFOzBDQUFpQixtQkFBWTs0REFBMkI7SUFDdkQ7UUFBVCxhQUFNLEVBQUU7MENBQXFCLG1CQUFZO2dFQUErQjtJQVBoRSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDMUMsQ0FBQztpREFhMkIsMEJBQVc7WUFDUix5QkFBYztZQUNoQix1QkFBWTtPQWQ3QixnQkFBZ0IsQ0FnRjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhGRCxJQWdGQztBQWhGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgT25Jbml0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgTGlzdFNlbGVjdE1vZGFsIH0gZnJvbSAnfi9zaGFyZWQvbW9kYWxzJztcclxuXHJcbmltcG9ydCB7IERpYWxvZ3NTZXJ2aWNlLCBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFBvc3RTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvcG9zdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlhbG9nVHlwZSB9IGZyb20gJ34vc2hhcmVkL3R5cGVzL2VudW0nO1xyXG5pbXBvcnQgeyBBdXRoTW9kZWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vcm9vdC1zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29tbWVudCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbW1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29tbWVudC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGNvbW1lbnQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGF1dGhJbmZvOiBBdXRoTW9kZWxzLkF1dGhJbmZvO1xyXG4gICAgQElucHV0KCkgcG9zdElkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB3ZWRkaW5nSWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGFzV2VkZGluZzogYm9vbGVhbjtcclxuICAgIEBPdXRwdXQoKSBjb21tZW50RGVsZXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgY29tbWVudEVkaXRUb2dnbGVkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgcHVibGljIGVkaXRBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ3NTZXJ2aWNlOiBEaWFsb2dzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbW1lbnQgbmdPbkluaXRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZUVkaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZGl0QWN0aXZlID0gIXRoaXMuZWRpdEFjdGl2ZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRFZGl0VG9nZ2xlZC5uZXh0KHRoaXMuZWRpdEFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUNvbW1lbnQoKTogdm9pZCB7XHJcblx0ICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcblx0XHQgICAgdGl0bGU6ICdEZWxldGUgY29tbWVudCcsXHJcblx0XHQgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSA/JyxcclxuXHRcdCAgICBva0J1dHRvblRleHQ6ICdZZXMnLFxyXG5cdFx0ICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObywgY2FuY2VsJyxcclxuXHQgICAgfSkudGhlbiggKHJlc3VsdCkgPT4ge1xyXG5cdFx0ICAgIGlmIChyZXN1bHQpIHtcclxuXHRcdFx0ICAgIHRoaXMuc2VuZERlbGV0ZVJlcSgpO1xyXG5cdFx0ICAgIH1cclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29tbWVudEVkaXRTdWNjZXNzKGVkaXRlZFRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tbWVudC50ZXh0ID0gZWRpdGVkVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmREZWxldGVSZXEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wb3N0U2VydmljZS5kZWxldGVDb21tZW50KHt3ZWRkaW5nSWQ6IHRoaXMud2VkZGluZ0lkLCBwb3N0SWQ6IHRoaXMucG9zdElkLCBjb21tZW50SWQ6IHRoaXMuY29tbWVudC5pZH0pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50RGVsZXRlZC5uZXh0KHRoaXMuY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ3NTZXJ2aWNlLnNob3dEaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ29tbWVudCBkZWxldGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRGlhbG9nVHlwZS5TdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nc1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NvbW1lbnQgZGVsZXRlIGZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogRGlhbG9nVHlwZS5BbGVydFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHRwdWJsaWMgb3BlblNlbGVjdEFjdGlvbk1vZGFsKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKExpc3RTZWxlY3RNb2RhbCxcclxuXHRcdFx0e2NvbnRleHQ6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOiBbJ0VkaXQgY29tbWVudCcsICdEZWxldGUgY29tbWVudCddLFxyXG5cdFx0XHRcdH0sIGZ1bGxzY3JlZW46IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4oXHJcblx0XHRcdFx0KHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gJ0VkaXQgY29tbWVudCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVFZGl0KCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRlbGV0ZUNvbW1lbnQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdClcclxuXHR9XHJcblxyXG5cclxufVxyXG4iXX0=