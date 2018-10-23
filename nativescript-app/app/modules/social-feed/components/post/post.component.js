"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var PhotoViewer = require('nativescript-photoviewer');
var selectors_1 = require("~/root-store/auth-store/selectors");
var configs_1 = require("~/shared/configs");
var modals_1 = require("~/shared/modals");
var services_1 = require("~/shared/services");
var post_service_1 = require("~/shared/services/post.service");
var Toast = require("nativescript-toast");
var PostComponent = /** @class */ (function () {
    function PostComponent(route, postService, dialogsService, changeDetector, store, modalService) {
        this.route = route;
        this.postService = postService;
        this.dialogsService = dialogsService;
        this.changeDetector = changeDetector;
        this.store = store;
        this.modalService = modalService;
        // @Input() activeProfile: CommonModels.Profile;
        this.postDeleted = new core_1.EventEmitter();
        this.photoViewer = new PhotoViewer();
        this.addCommentActive = false;
        this.shownPhotosLength = 3;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authInfoSubscription = this.store.select(selectors_1.selectAuthInfo).subscribe(function (authInfo) {
            _this.authInfo = authInfo;
        });
        this.post.comments = [];
        this.cdnUrl = configs_1.CDN_URL + '/wedding/' + this.post.wedding.id + '/photos/';
        this.commentsLoadMore = false;
        this.commentsPage = 1;
        this.activeProfile = configs_1.Config.activeProfile;
        // console.log("active profile:" + this.activeProfile);
        this.asWedding = this.activeProfile && this.activeProfile.type == 'wedding' ? true : false;
        this.likeId = this.checkLikes();
    };
    PostComponent.prototype.ngOnDestroy = function () {
        // this.activeWeddingSubscription.unsubscribe();
        // this.authInfoSubscription.unsubscribe();
    };
    PostComponent.prototype.showGallery = function (iterator) {
        var _this = this;
        var photos = this.post.photos.map(function (photo) {
            return _this.cdnUrl + photo.filename; //.replace(/(\.[\w\d_-]+)$/i, '_lg$1')
        });
        this.photoViewer.startIndex = iterator || 0;
        this.photoViewer.showViewer(photos);
    };
    PostComponent.prototype.checkLikes = function () {
        if (this.post.yourLikes.length > 0) {
            for (var i = 0; i < this.post.yourLikes.length; i++) {
                var like = this.post.yourLikes[i];
                if ((this.asWedding && like.asWedding && like.authorWeddingId == this.activeProfile.id)
                    || !this.asWedding && !like.asWedding) {
                    return like.id;
                }
            }
        }
        else {
            return false;
        }
    };
    PostComponent.prototype.like = function () {
        var _this = this;
        this.postService.likePost({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            like: {
                authorWeddingId: this.activeProfile.type == 'wedding' ? this.activeProfile.id : null,
                asWedding: this.asWedding
            }
        }).toPromise().then(function (response) {
            _this.post.likesCount++;
            _this.post.yourLikes.push({
                id: response.result,
                authorWeddingId: _this.activeProfile.id,
                asWedding: _this.asWedding
            });
            _this.likeId = _this.checkLikes();
        });
    };
    PostComponent.prototype.unlike = function () {
        var _this = this;
        this.postService.unlikePost({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            likeId: this.likeId
        }).subscribe(function (response) {
            _this.post.likesCount--;
            _this.post.yourLikes = _this.post.yourLikes.filter(function (like) {
                return like.id != _this.likeId;
            });
            _this.likeId = _this.checkLikes();
        });
    };
    PostComponent.prototype.getComments = function () {
        var _this = this;
        console.log("get comments");
        this.commentsLoading = true;
        this.postService.getPostComments({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            page: this.commentsPage
        }).subscribe(function (response) {
            var comments = response.result;
            _this.post.comments = comments.reverse().concat(_this.post.comments);
            if (_this.post.comments.length < _this.post.commentsCount) {
                _this.commentsLoadMore = true;
                _this.commentsPage++;
            }
            else {
                _this.commentsLoadMore = false;
            }
            _this.commentsLoading = false;
            _this.commentsLoaded = true;
            _this.changeDetector.markForCheck();
        });
    };
    PostComponent.prototype.onCommentAdded = function (comment) {
        if (this.post.commentsCount == 0) {
            this.commentsLoaded = true;
        }
        this.post.commentsCount++;
        if (!this.post.comments) {
            this.post.comments = [];
        }
        this.post.comments.push(comment);
    };
    PostComponent.prototype.editPost = function () {
        // TODO
        // const modalRef = this.modalService.open(PostFormComponent);
        // modalRef.componentInstance.activeWedding = this.post.wedding;
        // modalRef.componentInstance.post = this.post;
        //
        // modalRef.componentInstance.onSuccess.subscribe(
        //     (event) => {
        //         this.postService.getPost({postId: this.post.id, weddingId: this.post.wedding.id}).subscribe(
        //             (response: any) => {
        //                 this.post = response.result;
        //                 this.changeDetector.markForCheck();
        //             },
        //             () => {
        //                 // TODO delete
        //                 // this._flashMessagesService.show('Getting post data failed', {cssClass: 'alert-danger', timeout: 3000});
        //             }
        //         );
        //         modalRef.close();
        //     }
        // );
        // modalRef.componentInstance.onClose.subscribe(
        //     () => {
        //         modalRef.close();
        //     }
        // );
    };
    PostComponent.prototype.deletePost = function () {
        var _this = this;
        dialogs.confirm({
            title: 'Delete post',
            message: 'Are you sure ?',
            okButtonText: 'Yes',
            cancelButtonText: 'No, cancel',
        }).then(function (result) {
            if (result) {
                _this.sendDeleteReq();
            }
        });
    };
    PostComponent.prototype.sendDeleteReq = function () {
        var _this = this;
        this.postService.deletePost({ weddingId: this.activeProfile.id, postId: this.post.id }).subscribe(function () {
            _this.postDeleted.next(_this.post);
            Toast.makeText("Post deleted", "long").show();
        }, function () {
            Toast.makeText("Post delete failed", "long").show();
        });
    };
    PostComponent.prototype.removeComment = function (removedComment) {
        this.post.comments = this.post.comments.filter(function (comment) {
            return removedComment.id !== comment.id;
        });
        this.post.commentsCount--;
        this.changeDetector.markForCheck();
    };
    PostComponent.prototype.cancelEditEvent = function (event) {
        this.addCommentActive = false;
    };
    PostComponent.prototype.toggleAddComment = function () {
        this.addCommentActive = !this.addCommentActive;
        this.commentsPage = 1;
        this.changeDetector.markForCheck();
    };
    PostComponent.prototype.toggleShowComments = function () {
        this.showComments = !this.showComments;
        if (this.showComments && !this.post.comments.length) {
            this.getComments();
        }
    };
    PostComponent.prototype.openSelectActionModal = function () {
        var _this = this;
        this.modalService.showModal(modals_1.ListSelectModal, { context: {
                items: ['Edit post', 'Delete post'],
            }, fullscreen: true
        })
            .then(function (result) {
            if (result === 'Edit post') {
                // TODO open edit post
                _this.editPost();
            }
            else {
                _this.deletePost();
            }
        });
    };
    PostComponent.prototype.showMorePhotos = function () {
        this.shownPhotosLength += 5;
    };
    PostComponent.prototype.showMoreComments = function () {
        this.commentsPage++;
        this.getComments();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], PostComponent.prototype, "index", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], PostComponent.prototype, "postDeleted", void 0);
    PostComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: 'post.component.html',
            styleUrls: ['./post.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            post_service_1.PostService,
            services_1.DialogsService,
            core_1.ChangeDetectorRef,
            store_1.Store,
            services_1.ModalService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FRdUI7QUFDdkIscUNBQW9DO0FBRXBDLDBDQUFpRDtBQUNqRCxvQ0FBc0M7QUFDdEMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFJeEQsK0RBQW1FO0FBR25FLDRDQUFtRDtBQUNuRCwwQ0FBa0Q7QUFDbEQsOENBQWlFO0FBQ2pFLCtEQUE2RDtBQUc3RCwwQ0FBNEM7QUFRNUM7SUEyQkksdUJBQ1ksS0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsY0FBaUMsRUFDakMsS0FBbUIsRUFDbkIsWUFBMEI7UUFMMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ25CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBN0J0QyxnREFBZ0Q7UUFDdEMsZ0JBQVcsR0FBdUIsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFXMUQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNyQyxzQkFBaUIsR0FBVyxDQUFDLENBQUM7SUFlbEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQywwQkFBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtZQUM3RSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFB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QUN2QyxDQUFDO2lEQThCcUIsdUJBQWM7WUFDUiwwQkFBVztZQUNSLHlCQUFjO1lBQ2Qsd0JBQWlCO1lBQzFCLGFBQUs7WUFDRSx1QkFBWTtPQWpDN0IsYUFBYSxDQThQekI7SUFBRCxvQkFBQztDQUFBLEFBOVBELElBOFBDO0FBOVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIE9uSW5pdCxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IElTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd1aS9kaWFsb2dzJztcclxuY29uc3QgUGhvdG9WaWV3ZXIgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGhvdG92aWV3ZXInKTtcclxuXHJcbmltcG9ydCB7IFN0YXRlLCBDb21tb25Nb2RlbHMgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBBdXRoSW5mbyB9IGZyb20gJ34vcm9vdC1zdG9yZS9hdXRoLXN0b3JlL21vZGVscyc7XHJcbmltcG9ydCB7IHNlbGVjdEF1dGhJbmZvIH0gZnJvbSAnfi9yb290LXN0b3JlL2F1dGgtc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgV2VkZGluZywgUHJpdmFjeVNldHRpbmdFbnVtIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgc2VsZWN0QWN0aXZlV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IENETl9VUkwsIENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5pbXBvcnQgeyBMaXN0U2VsZWN0TW9kYWwgfSBmcm9tICd+L3NoYXJlZC9tb2RhbHMnO1xyXG5pbXBvcnQgeyBEaWFsb2dzU2VydmljZSwgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL3Bvc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IERpYWxvZ1R5cGUgfSBmcm9tICd+L3NoYXJlZC90eXBlcy9lbnVtJztcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vc2hhcmVkL3R5cGVzL21vZGVscy9zb2NpYWwtZmVlZCc7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Bvc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcG9zdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBwb3N0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xyXG4gICAgLy8gQElucHV0KCkgYWN0aXZlUHJvZmlsZTogQ29tbW9uTW9kZWxzLlByb2ZpbGU7XHJcbiAgICBAT3V0cHV0KCkgcG9zdERlbGV0ZWQ6IEV2ZW50RW1pdHRlcjxQb3N0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBhdXRoSW5mbzogQXV0aEluZm87XHJcbiAgICAvLyBhY3RpdmVXZWRkaW5nOiBXZWRkaW5nO1xyXG4gICAgY29tbWVudHNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgY29tbWVudHNMb2FkZWQ6IGJvb2xlYW47XHJcbiAgICBjb21tZW50c0xvYWRNb3JlOiBib29sZWFuO1xyXG4gICAgY29tbWVudHNQYWdlOiBudW1iZXI7XHJcbiAgICBhc1dlZGRpbmc6IGJvb2xlYW47XHJcbiAgICBsaWtlSWQ6IHN0cmluZyB8IGJvb2xlYW47ICAgIFxyXG4gICAgXHJcblx0cHJpdmF0ZSBwaG90b1ZpZXdlciA9IG5ldyBQaG90b1ZpZXdlcigpO1xyXG5cdHB1YmxpYyBjZG5Vcmw6IHN0cmluZztcclxuICAgIHB1YmxpYyBzaG93Q29tbWVudHM6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgYWRkQ29tbWVudEFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyBzaG93blBob3Rvc0xlbmd0aDogbnVtYmVyID0gMztcclxuXHJcblx0Ly8gcHJpdmF0ZSBhY3RpdmVXZWRkaW5nU3Vic2NyaXB0aW9uOiBJU3Vic2NyaXB0aW9uO1xyXG5cdHByaXZhdGUgYXV0aEluZm9TdWJzY3JpcHRpb246IElTdWJzY3JpcHRpb247XHJcbiAgICByZXNvbHZlclN1YnNjcmlwdGlvbjogSVN1YnNjcmlwdGlvbjtcclxuICAgIGFjdGl2ZVByb2ZpbGU6IENvbW1vbk1vZGVscy5Qcm9maWxlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcG9zdFNlcnZpY2U6IFBvc3RTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nc1NlcnZpY2U6IERpYWxvZ3NTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPixcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmF1dGhJbmZvU3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0QXV0aEluZm8pLnN1YnNjcmliZSgoYXV0aEluZm8pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoSW5mbyA9IGF1dGhJbmZvOyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBvc3QuY29tbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNkblVybCA9IENETl9VUkwgKyAnL3dlZGRpbmcvJyArIHRoaXMucG9zdC53ZWRkaW5nLmlkICsgJy9waG90b3MvJztcclxuICAgICAgICB0aGlzLmNvbW1lbnRzTG9hZE1vcmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbW1lbnRzUGFnZSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlUHJvZmlsZSA9IENvbmZpZy5hY3RpdmVQcm9maWxlOyAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3RpdmUgcHJvZmlsZTpcIiArIHRoaXMuYWN0aXZlUHJvZmlsZSk7XHJcbiAgICAgICAgdGhpcy5hc1dlZGRpbmcgPSB0aGlzLmFjdGl2ZVByb2ZpbGUgJiYgdGhpcy5hY3RpdmVQcm9maWxlLnR5cGUgPT0gJ3dlZGRpbmcnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGlrZUlkID0gdGhpcy5jaGVja0xpa2VzKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hY3RpdmVXZWRkaW5nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0ICAgIC8vIHRoaXMuYXV0aEluZm9TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0dhbGxlcnkoaXRlcmF0b3I/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIFx0Y29uc3QgcGhvdG9zID0gdGhpcy5wb3N0LnBob3Rvcy5tYXAoKHBob3RvKSA9PiB7XHJcblx0XHQgICAgcmV0dXJuIHRoaXMuY2RuVXJsICsgcGhvdG8uZmlsZW5hbWU7Ly8ucmVwbGFjZSgvKFxcLltcXHdcXGRfLV0rKSQvaSwgJ19sZyQxJylcclxuXHQgICAgfSk7XHJcblxyXG4gICAgXHR0aGlzLnBob3RvVmlld2VyLnN0YXJ0SW5kZXggPSBpdGVyYXRvciB8fCAwO1xyXG5cclxuXHQgICAgdGhpcy5waG90b1ZpZXdlci5zaG93Vmlld2VyKHBob3Rvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tMaWtlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3N0LnlvdXJMaWtlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3N0LnlvdXJMaWtlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpa2UgPSB0aGlzLnBvc3QueW91ckxpa2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmFzV2VkZGluZyAmJiBsaWtlLmFzV2VkZGluZyAmJiBsaWtlLmF1dGhvcldlZGRpbmdJZCA9PSB0aGlzLmFjdGl2ZVByb2ZpbGUuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgIXRoaXMuYXNXZWRkaW5nICYmICFsaWtlLmFzV2VkZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaWtlLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlrZSgpIHtcclxuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmxpa2VQb3N0KHtcclxuICAgICAgICAgICAgd2VkZGluZ0lkOiB0aGlzLnBvc3Qud2VkZGluZy5pZCxcclxuICAgICAgICAgICAgcG9zdElkOiB0aGlzLnBvc3QuaWQsXHJcbiAgICAgICAgICAgIGxpa2U6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcldlZGRpbmdJZDogdGhpcy5hY3RpdmVQcm9maWxlLnR5cGUgPT0gJ3dlZGRpbmcnID8gdGhpcy5hY3RpdmVQcm9maWxlLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFzV2VkZGluZzogdGhpcy5hc1dlZGRpbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3QubGlrZXNDb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3QueW91ckxpa2VzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJlc3BvbnNlLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgIGF1dGhvcldlZGRpbmdJZDogdGhpcy5hY3RpdmVQcm9maWxlLmlkLFxyXG4gICAgICAgICAgICAgICAgYXNXZWRkaW5nOiB0aGlzLmFzV2VkZGluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5saWtlSWQgPSB0aGlzLmNoZWNrTGlrZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5saWtlKCkge1xyXG4gICAgICAgIHRoaXMucG9zdFNlcnZpY2UudW5saWtlUG9zdCh7XHJcbiAgICAgICAgICAgIHdlZGRpbmdJZDogdGhpcy5wb3N0LndlZGRpbmcuaWQsXHJcbiAgICAgICAgICAgIHBvc3RJZDogdGhpcy5wb3N0LmlkLFxyXG4gICAgICAgICAgICBsaWtlSWQ6IHRoaXMubGlrZUlkXHJcbiAgICAgICAgfSkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG5cdCAgICAgICAgdGhpcy5wb3N0Lmxpa2VzQ291bnQtLTtcclxuXHQgICAgICAgIHRoaXMucG9zdC55b3VyTGlrZXMgPSB0aGlzLnBvc3QueW91ckxpa2VzLmZpbHRlcihsaWtlID0+IHtcclxuXHRcdCAgICAgICAgcmV0dXJuIGxpa2UuaWQgIT0gdGhpcy5saWtlSWQ7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgICAgIHRoaXMubGlrZUlkID0gdGhpcy5jaGVja0xpa2VzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbW1lbnRzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNvbW1lbnRzXCIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmdldFBvc3RDb21tZW50cyh7XHJcbiAgICAgICAgICAgIHdlZGRpbmdJZDogdGhpcy5wb3N0LndlZGRpbmcuaWQsXHJcbiAgICAgICAgICAgIHBvc3RJZDogdGhpcy5wb3N0LmlkLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLmNvbW1lbnRzUGFnZVxyXG4gICAgICAgIH0pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuXHQgICAgICAgIGNvbnN0IGNvbW1lbnRzID0gcmVzcG9uc2UucmVzdWx0O1xyXG5cdCAgICAgICAgdGhpcy5wb3N0LmNvbW1lbnRzID0gY29tbWVudHMucmV2ZXJzZSgpLmNvbmNhdCh0aGlzLnBvc3QuY29tbWVudHMpO1xyXG5cdCAgICAgICAgaWYgKHRoaXMucG9zdC5jb21tZW50cy5sZW5ndGggPCB0aGlzLnBvc3QuY29tbWVudHNDb3VudCkge1xyXG5cdFx0ICAgICAgICB0aGlzLmNvbW1lbnRzTG9hZE1vcmUgPSB0cnVlO1xyXG5cdFx0ICAgICAgICB0aGlzLmNvbW1lbnRzUGFnZSsrO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgdGhpcy5jb21tZW50c0xvYWRNb3JlID0gZmFsc2U7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICB0aGlzLmNvbW1lbnRzTG9hZGluZyA9IGZhbHNlO1xyXG5cdCAgICAgICAgdGhpcy5jb21tZW50c0xvYWRlZCA9IHRydWU7XHJcblxyXG5cdCAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1lbnRBZGRlZChjb21tZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zdC5jb21tZW50c0NvdW50ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZW50c0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zdC5jb21tZW50c0NvdW50Kys7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBvc3QuY29tbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0LmNvbW1lbnRzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zdC5jb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlZGl0UG9zdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBUT0RPXHJcbiAgICAgICAgLy8gY29uc3QgbW9kYWxSZWYgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKFBvc3RGb3JtQ29tcG9uZW50KTtcclxuICAgICAgICAvLyBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5hY3RpdmVXZWRkaW5nID0gdGhpcy5wb3N0LndlZGRpbmc7XHJcbiAgICAgICAgLy8gbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UucG9zdCA9IHRoaXMucG9zdDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLm9uU3VjY2Vzcy5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRQb3N0KHtwb3N0SWQ6IHRoaXMucG9zdC5pZCwgd2VkZGluZ0lkOiB0aGlzLnBvc3Qud2VkZGluZy5pZH0pLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSByZXNwb25zZS5yZXN1bHQ7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFRPRE8gZGVsZXRlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHRoaXMuX2ZsYXNoTWVzc2FnZXNTZXJ2aWNlLnNob3coJ0dldHRpbmcgcG9zdCBkYXRhIGZhaWxlZCcsIHtjc3NDbGFzczogJ2FsZXJ0LWRhbmdlcicsIHRpbWVvdXQ6IDMwMDB9KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgbW9kYWxSZWYuY2xvc2UoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICk7XHJcbiAgICAgICAgLy8gbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uub25DbG9zZS5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIG1vZGFsUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVQb3N0KCk6IHZvaWQge1xyXG5cdCAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG5cdFx0ICAgIHRpdGxlOiAnRGVsZXRlIHBvc3QnLFxyXG5cdFx0ICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgPycsXHJcblx0XHQgICAgb2tCdXR0b25UZXh0OiAnWWVzJyxcclxuXHRcdCAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8sIGNhbmNlbCcsXHJcblx0ICAgIH0pLnRoZW4oIChyZXN1bHQpID0+IHtcclxuXHRcdCAgICBpZiAocmVzdWx0KSB7XHJcblx0XHQgICAgXHR0aGlzLnNlbmREZWxldGVSZXEoKTtcclxuXHRcdCAgICB9XHJcblx0ICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VuZERlbGV0ZVJlcSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmRlbGV0ZVBvc3QoeyB3ZWRkaW5nSWQ6IHRoaXMuYWN0aXZlUHJvZmlsZS5pZCwgcG9zdElkOiB0aGlzLnBvc3QuaWQgfSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3REZWxldGVkLm5leHQodGhpcy5wb3N0KTtcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiUG9zdCBkZWxldGVkXCIsIFwibG9uZ1wiKS5zaG93KCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIlBvc3QgZGVsZXRlIGZhaWxlZFwiLCBcImxvbmdcIikuc2hvdygpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUNvbW1lbnQocmVtb3ZlZENvbW1lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9zdC5jb21tZW50cyA9IHRoaXMucG9zdC5jb21tZW50cy5maWx0ZXIoKGNvbW1lbnQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbW92ZWRDb21tZW50LmlkICE9PSBjb21tZW50LmlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9zdC5jb21tZW50c0NvdW50LS07XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2FuY2VsRWRpdEV2ZW50KGV2ZW50KXtcclxuICAgICAgICB0aGlzLmFkZENvbW1lbnRBY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlQWRkQ29tbWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZENvbW1lbnRBY3RpdmUgPSAhdGhpcy5hZGRDb21tZW50QWN0aXZlO1xyXG4gICAgICAgIHRoaXMuY29tbWVudHNQYWdlID0gMTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVTaG93Q29tbWVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93Q29tbWVudHMgPSAhdGhpcy5zaG93Q29tbWVudHM7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0NvbW1lbnRzICYmICF0aGlzLnBvc3QuY29tbWVudHMubGVuZ3RoKSB7XHJcblx0ICAgICAgICB0aGlzLmdldENvbW1lbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU2VsZWN0QWN0aW9uTW9kYWwoKTogdm9pZCB7XHJcblx0ICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChMaXN0U2VsZWN0TW9kYWwsXHJcblx0XHQgICAge2NvbnRleHQ6IHtcclxuXHRcdFx0XHQgICAgaXRlbXM6IFsnRWRpdCBwb3N0JywgJ0RlbGV0ZSBwb3N0J10sXHJcblx0XHRcdCAgICB9LCBmdWxsc2NyZWVuOiB0cnVlXHJcblx0XHQgICAgfSlcclxuXHRcdCAgICAudGhlbihcclxuXHRcdFx0ICAgIChyZXN1bHQpID0+IHtcclxuXHRcdFx0ICAgIFx0aWYgKHJlc3VsdCA9PT0gJ0VkaXQgcG9zdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBvcGVuIGVkaXQgcG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRQb3N0KCk7XHJcblx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICBcdFx0dGhpcy5kZWxldGVQb3N0KCk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dNb3JlUGhvdG9zKCk6IHZvaWQge1xyXG4gICAgXHR0aGlzLnNob3duUGhvdG9zTGVuZ3RoICs9IDU7XHJcbiAgICB9XHJcbiAgICBzaG93TW9yZUNvbW1lbnRzKCl7XHJcbiAgICAgICAgdGhpcy5jb21tZW50c1BhZ2UrKztcclxuICAgICAgICB0aGlzLmdldENvbW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==