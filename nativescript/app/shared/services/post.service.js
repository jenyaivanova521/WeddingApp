"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var configs_1 = require("~/shared/configs");
var PostService = /** @class */ (function () {
    function PostService(store, http) {
        this.store = store;
        this.http = http;
        this.apiUrl = configs_1.API_URL;
    }
    PostService.prototype.getAllPosts = function (_a) {
        var page = _a.page, _b = _a.followed, followed = _b === void 0 ? false : _b;
        return this.http.get(this.apiUrl + "/posts?page=" + (page || 1) + (followed ? '&followed=true' : ''));
    };
    PostService.prototype.getPosts = function (_a) {
        var page = _a.page, weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts?page=' + (page || 1));
    };
    PostService.prototype.getPost = function (_a) {
        var postId = _a.postId, weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId);
    };
    PostService.prototype.addPost = function (_a) {
        var weddingId = _a.weddingId, post = _a.post;
        console.log(this.apiUrl + '/weddings/' + weddingId + '/posts', post);
        // return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts', post);
        console.log(post.text);
        return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts', post);
    };
    PostService.prototype.getPostComments = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, page = _a.page;
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments?page=' + (page || 1));
    };
    PostService.prototype.addPostComment = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, comment = _a.comment;
        console.log(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments', comment);
        return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments', comment);
    };
    PostService.prototype.getPostComment = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, commentId = _a.commentId;
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments/' + commentId);
    };
    PostService.prototype.likePost = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, like = _a.like;
        return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes', like);
    };
    PostService.prototype.unlikePost = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, likeId = _a.likeId;
        return this.http.delete(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes/' + likeId);
    };
    PostService.prototype.getLikes = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId;
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes');
    };
    PostService.prototype.getPhotos = function (_a) {
        var page = _a.page, weddingId = _a.weddingId;
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/photos?page=' + (page || 1));
    };
    PostService.prototype.deletePhoto = function (_a) {
        var weddingId = _a.weddingId, photoId = _a.photoId;
        return this.http.delete(this.apiUrl + "/weddings/" + weddingId + "/photos/" + photoId);
    };
    PostService.prototype.deletePost = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId;
        return this.http.delete(this.apiUrl + "/weddings/" + weddingId + "/posts/" + postId);
    };
    PostService.prototype.editPost = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, params = _a.params;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrl + "/weddings/" + weddingId + "/posts/" + postId, params, {
            headers: headers
        });
    };
    PostService.prototype.editComment = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, commentId = _a.commentId, text = _a.text;
        return this.http.patch(this.apiUrl + "/weddings/" + weddingId + "/posts/" + postId + "/comments/" + commentId, {
            text: text
        });
    };
    PostService.prototype.deleteComment = function (_a) {
        var weddingId = _a.weddingId, postId = _a.postId, commentId = _a.commentId;
        return this.http.delete(this.apiUrl + "/weddings/" + weddingId + "/posts/" + postId + "/comments/" + commentId);
    };
    PostService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_1.Store,
            http_1.HttpClient])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUEyQztBQUMzQyw2Q0FBMkU7QUFFM0UscUNBQW9DO0FBR3BDLDRDQUEyQztBQUkzQztJQUlDLHFCQUNTLEtBQW1CLEVBQ25CLElBQWdCO1FBRGhCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUpqQixXQUFNLEdBQVcsaUJBQU8sQ0FBQztJQU1qQyxDQUFDO0lBRU0saUNBQVcsR0FBbEIsVUFBbUIsRUFBd0I7WUFBdkIsY0FBSSxFQUFFLGdCQUFnQixFQUFoQixxQ0FBZ0I7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLElBQUksQ0FBQyxNQUFNLG9CQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFTSw4QkFBUSxHQUFmLFVBQWdCLEVBQWlCO1lBQWhCLGNBQUksRUFBRSx3QkFBUztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsU0FBUyxHQUFHLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsRUFBbUI7WUFBbEIsa0JBQU0sRUFBRSx3QkFBUztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRU0sNkJBQU8sR0FB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UyxFQUFFLGtCQUFNLEVBQUUsd0JBQVM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxNQUFNLGtCQUFhLFNBQVMsZUFBVSxNQUFNLGtCQUFhLFNBQVcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUF0RlcsV0FBVztRQUR2QixpQkFBVSxFQUFFO2lEQU1JLGFBQUs7WUFDTixpQkFBVTtPQU5iLFdBQVcsQ0F3RnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztBQXhGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnfi9zaGFyZWQvY29uZmlncyc7XHJcbmltcG9ydCB7IFBob3RvLCBQb3N0IH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvbW9kZWxzL3NvY2lhbC1mZWVkJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcclxuXHJcblx0cHJpdmF0ZSBhcGlVcmw6IHN0cmluZyA9IEFQSV9VUkw7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0QWxsUG9zdHMoe3BhZ2UsIGZvbGxvd2VkID0gZmFsc2V9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0PFBvc3RbXT4oYCR7dGhpcy5hcGlVcmwgfS9wb3N0cz9wYWdlPSR7IChwYWdlIHx8IDEpfSR7Zm9sbG93ZWQgPyAnJmZvbGxvd2VkPXRydWUnIDogJyd9YCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UG9zdHMoe3BhZ2UsIHdlZGRpbmdJZH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQ8UG9zdFtdPih0aGlzLmFwaVVybCArICcvd2VkZGluZ3MvJyArIHdlZGRpbmdJZCArICcvcG9zdHM/cGFnZT0nICsgKHBhZ2UgfHwgMSkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFBvc3Qoe3Bvc3RJZCwgd2VkZGluZ0lkfSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxQb3N0W10+KHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cy8nICsgcG9zdElkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRQb3N0KHt3ZWRkaW5nSWQsIHBvc3R9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cycsIHBvc3QpO1xyXG5cdFx0Ly8gcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cycsIHBvc3QpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKHBvc3QudGV4dCk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5hcGlVcmwgKyAnL3dlZGRpbmdzLycgKyB3ZWRkaW5nSWQgKyAnL3Bvc3RzJywgXHJcblx0XHRwb3N0KTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGdldFBvc3RDb21tZW50cyh7d2VkZGluZ0lkLCBwb3N0SWQsIHBhZ2V9OiB7IHdlZGRpbmdJZDogc3RyaW5nLCBwb3N0SWQ6IHN0cmluZywgcGFnZT86IG51bWJlciB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cy8nICsgcG9zdElkICsgJy9jb21tZW50cz9wYWdlPScgKyAocGFnZSB8fCAxKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkUG9zdENvbW1lbnQoe3dlZGRpbmdJZCwgcG9zdElkLCBjb21tZW50fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmFwaVVybCArICcvd2VkZGluZ3MvJyArIHdlZGRpbmdJZCArICcvcG9zdHMvJyArIHBvc3RJZCArICcvY29tbWVudHMnLCBjb21tZW50KTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArICcvd2VkZGluZ3MvJyArIHdlZGRpbmdJZCArICcvcG9zdHMvJyArIHBvc3RJZCArICcvY29tbWVudHMnLCBjb21tZW50KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRQb3N0Q29tbWVudCh7d2VkZGluZ0lkLCBwb3N0SWQsIGNvbW1lbnRJZH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVcmwgKyAnL3dlZGRpbmdzLycgKyB3ZWRkaW5nSWQgKyAnL3Bvc3RzLycgKyBwb3N0SWQgKyAnL2NvbW1lbnRzLycgKyBjb21tZW50SWQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxpa2VQb3N0KHt3ZWRkaW5nSWQsIHBvc3RJZCwgbGlrZX0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cy8nICsgcG9zdElkICsgJy9saWtlcycsIGxpa2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVubGlrZVBvc3Qoe3dlZGRpbmdJZCwgcG9zdElkLCBsaWtlSWR9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cy8nICsgcG9zdElkICsgJy9saWtlcy8nICsgbGlrZUlkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRMaWtlcyh7d2VkZGluZ0lkLCBwb3N0SWR9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsICsgJy93ZWRkaW5ncy8nICsgd2VkZGluZ0lkICsgJy9wb3N0cy8nICsgcG9zdElkICsgJy9saWtlcycpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFBob3Rvcyh7cGFnZSwgd2VkZGluZ0lkfSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxQaG90b1tdPih0aGlzLmFwaVVybCArICcvd2VkZGluZ3MvJyArIHdlZGRpbmdJZCArICcvcGhvdG9zP3BhZ2U9JyArIChwYWdlIHx8IDEpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWxldGVQaG90byh7d2VkZGluZ0lkLCBwaG90b0lkfSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmFwaVVybH0vd2VkZGluZ3MvJHt3ZWRkaW5nSWR9L3Bob3Rvcy8ke3Bob3RvSWR9YCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGVsZXRlUG9zdCh7d2VkZGluZ0lkLCBwb3N0SWR9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuYXBpVXJsfS93ZWRkaW5ncy8ke3dlZGRpbmdJZH0vcG9zdHMvJHtwb3N0SWR9YCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZWRpdFBvc3Qoe3dlZGRpbmdJZCwgcG9zdElkLCBwYXJhbXN9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuXHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vZm9ybS1kYXRhJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMuYXBpVXJsfS93ZWRkaW5ncy8ke3dlZGRpbmdJZH0vcG9zdHMvJHtwb3N0SWR9YCwgcGFyYW1zLCB7XHJcblx0XHRcdGhlYWRlcnNcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVkaXRDb21tZW50KHt3ZWRkaW5nSWQsIHBvc3RJZCwgY29tbWVudElkLCB0ZXh0fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBhdGNoKGAke3RoaXMuYXBpVXJsfS93ZWRkaW5ncy8ke3dlZGRpbmdJZH0vcG9zdHMvJHtwb3N0SWR9L2NvbW1lbnRzLyR7Y29tbWVudElkfWAsXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0ZXh0XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZGVsZXRlQ29tbWVudCh7d2VkZGluZ0lkLCBwb3N0SWQsIGNvbW1lbnRJZH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5hcGlVcmx9L3dlZGRpbmdzLyR7d2VkZGluZ0lkfS9wb3N0cy8ke3Bvc3RJZH0vY29tbWVudHMvJHtjb21tZW50SWR9YCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=