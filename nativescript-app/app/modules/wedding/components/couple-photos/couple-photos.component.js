"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("platform");
var services_1 = require("~/shared/services");
var configs_1 = require("~/shared/configs");
var PhotoViewer = require('nativescript-photoviewer');
var CouplePhotosComponent = /** @class */ (function () {
    function CouplePhotosComponent(modalService, store, postService) {
        this.modalService = modalService;
        this.store = store;
        this.postService = postService;
        this.photoViewer = new PhotoViewer();
        this.photoWidth = (platform_1.screen.mainScreen.widthDIPs - 60) / 2;
    }
    CouplePhotosComponent.prototype.ngOnInit = function () {
        console.log("couple profile Information ngOnit");
        // console.log(Config.activeWedding);
        this.activeWedding = configs_1.Config.activeWedding;
        this.page = 1;
        if (configs_1.Config.activeWedding) {
            this.weddingId = configs_1.Config.activeWedding.id;
            this.cdnUrl = configs_1.CDN_URL + '/wedding/' + this.weddingId + '/photos/';
            this.getPhotos();
        }
    };
    CouplePhotosComponent.prototype.getPhotos = function () {
        var _this = this;
        this.postService.getPhotos({
            weddingId: this.weddingId,
            page: this.page
        }).toPromise().then(function (response) {
            if (response.result.length === 0) {
                _this.infiniteScrollDisabled = true;
            }
            console.log(response);
            response.result.map(function (photo) {
                var baseUrl = configs_1.CDN_URL + '/wedding/' + _this.weddingId + '/photos/';
                photo.src = baseUrl + photo.filename;
                photo.thumb = baseUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
                // console.log(photo.filename+", "+photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1'));
                return photo;
            });
            _this.photos = [];
            _this.photos = _this.photos.concat(response.result);
        });
    };
    CouplePhotosComponent.prototype.showGallery = function (iterator) {
        var _this = this;
        var photos = this.photos.map(function (photo) {
            return _this.cdnUrl + photo.filename; //.replace(/(\.[\w\d_-]+)$/i, '_lg$1')
        });
        this.photoViewer.startIndex = iterator || 0;
        this.photoViewer.showViewer(photos);
    };
    CouplePhotosComponent.prototype.uploaderImagesChange = function (event) {
        // this.modalRef = this.modalService.open(PostFormComponent);
        // this.modalRef.componentInstance.uploaderImages = event;
        // this.modalRef.componentInstance.activeProfile = this.activeProfile;
        // this.modalRef.componentInstance.textPlaceholder = 'Write something about this photo...';
        // this.modalRef.componentInstance.onSuccess.subscribe(event => {
        //     this.page = 1;
        //     this.getPhotos();
        //     this.modalRef.close();
        // });
    };
    CouplePhotosComponent.prototype.onScroll = function (direction) {
        var currentPage = this.page;
        if (direction == 'down') {
            this.page++;
        }
        else if (this.page > 1) {
            this.page--;
        }
        if (currentPage != this.page) {
            this.getPhotos();
        }
    };
    CouplePhotosComponent.prototype.deletePhoto = function (deletedPhoto, event) {
        // event.preventDefault();
        // const modal = this.modalService.open(ConfirmDialogComponent, {backdrop: 'static'});
        // modal.componentInstance['data'] = {
        //     title: 'Delete photo',
        //     text: 'Are you sure?',
        //     confirm: this.sendDeletePhotoReq.bind(this),
        //     callbackParam: deletedPhoto
        // };
    };
    CouplePhotosComponent.prototype.sendDeletePhotoReq = function (deletedPhoto) {
        var _this = this;
        this.postService.deletePhoto({ weddingId: this.weddingId, photoId: deletedPhoto.id }).subscribe(function () {
            _this.photos = _this.photos.filter(function (photo) {
                return photo.id !== deletedPhoto.id;
            });
            // this._flashMessagesService.show('Photo deleted successfully', {cssClass: 'alert-success', timeout: 3000});
        }, function () {
            // this._flashMessagesService.show('Photo deletion failed', {cssClass: 'alert-danger', timeout: 3000});
        });
    };
    CouplePhotosComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'couple-photos',
            templateUrl: 'couple-photos.component.html',
            styleUrls: ['./couple-photos.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store,
            services_1.PostService])
    ], CouplePhotosComponent);
    return CouplePhotosComponent;
}());
exports.CouplePhotosComponent = CouplePhotosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cGxlLXBob3Rvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3VwbGUtcGhvdG9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMscUNBQW9DO0FBQ3BDLHFDQUFrQztBQUdsQyw4Q0FBOEQ7QUFDOUQsNENBQW1EO0FBR25ELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBUXhEO0lBY0MsK0JBQ1MsWUFBMEIsRUFDMUIsS0FBbUIsRUFDbkIsV0FBd0I7UUFGeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVR6QixnQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFXdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFFZCxFQUFFLENBQUEsQ0FBRSxnQkFBTSxDQUFDLGFBQWMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBTyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUNsRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNGLENBQUM7SUFD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LENBQUM7SUFFTSxrREFBa0IsR0FBekIsVUFBMEIsWUFBWTtRQUF0QyxpQkFZQztRQVhHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDekY7WUFDSSxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSztnQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztZQUNILDZHQUE2RztRQUNqSCxDQUFDLEVBQ0Q7WUFDSSx1R0FBdUc7UUFDM0csQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBN0dRLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDN0MsQ0FBQztpREFnQnNCLHVCQUFZO1lBQ25CLGFBQUs7WUFDQyxzQkFBVztPQWpCckIscUJBQXFCLENBOEdqQztJQUFELDRCQUFDO0NBQUEsQUE5R0QsSUE4R0M7QUE5R1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSwgUG9zdFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IENvbmZpZywgQ0ROX1VSTCB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5pbXBvcnQgeyBQb3N0Rm9ybUNvbXBvbmVudCB9IGZyb20gJ34vbW9kdWxlcy9zb2NpYWwtZmVlZC9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcbmNvbnN0IFBob3RvVmlld2VyID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBob3Rvdmlld2VyJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY291cGxlLXBob3RvcycsXHJcblx0dGVtcGxhdGVVcmw6ICdjb3VwbGUtcGhvdG9zLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9jb3VwbGUtcGhvdG9zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdXBsZVBob3Rvc0NvbXBvbmVudCB7XHJcblxyXG5cdHByaXZhdGUgYWN0aXZlV2VkZGluZzogV2VkZGluZztcclxuXHRwdWJsaWMgd2VkZGluZ0lkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2VkZGluZzogV2VkZGluZztcclxuXHRwdWJsaWMgcGhvdG9XaWR0aDogbnVtYmVyO1xyXG5cdHBob3RvczogYW55W107XHJcbiAgICBwYWdlOiBudW1iZXI7XHJcblx0cHJpdmF0ZSBwaG90b1ZpZXdlciA9IG5ldyBQaG90b1ZpZXdlcigpO1xyXG5cdFxyXG4gICAgaW5maW5pdGVTY3JvbGxEaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHVwbG9hZGVySW1hZ2VzOiBhbnk7XHJcblx0Y2RuVXJsOnN0cmluZztcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcclxuXHQpIHtcclxuXHRcdHRoaXMucGhvdG9XaWR0aCA9IChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLSA2MCkgLyAyO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiY291cGxlIHByb2ZpbGUgSW5mb3JtYXRpb24gbmdPbml0XCIpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coQ29uZmlnLmFjdGl2ZVdlZGRpbmcpO1xyXG5cdFx0dGhpcy5hY3RpdmVXZWRkaW5nID0gQ29uZmlnLmFjdGl2ZVdlZGRpbmc7XHJcblx0XHR0aGlzLnBhZ2UgPSAxO1xyXG5cdFx0XHJcblx0XHRpZiggQ29uZmlnLmFjdGl2ZVdlZGRpbmcgKSB7XHJcblx0XHRcdHRoaXMud2VkZGluZ0lkID0gQ29uZmlnLmFjdGl2ZVdlZGRpbmcuaWQ7XHJcblx0XHRcdHRoaXMuY2RuVXJsID0gQ0ROX1VSTCArICcvd2VkZGluZy8nICsgdGhpcy53ZWRkaW5nSWQgKyAnL3Bob3Rvcy8nO1xyXG5cdFx0XHR0aGlzLmdldFBob3RvcygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRnZXRQaG90b3MoKSB7XHJcbiAgICAgICAgdGhpcy5wb3N0U2VydmljZS5nZXRQaG90b3Moe1xyXG4gICAgICAgICAgICB3ZWRkaW5nSWQ6IHRoaXMud2VkZGluZ0lkLFxyXG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2VcclxuICAgICAgICB9KS50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGxEaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5yZXN1bHQubWFwKHBob3RvID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBDRE5fVVJMICsgJy93ZWRkaW5nLycgKyB0aGlzLndlZGRpbmdJZCArICcvcGhvdG9zLyc7XHJcbiAgICAgICAgICAgICAgICBwaG90by5zcmMgPSBiYXNlVXJsICsgcGhvdG8uZmlsZW5hbWU7XHJcblx0XHRcdFx0cGhvdG8udGh1bWIgPSBiYXNlVXJsICsgcGhvdG8uZmlsZW5hbWUucmVwbGFjZSgvKFxcLltcXHdcXGRfLV0rKSQvaSwgJ19zcSQxJyk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocGhvdG8uZmlsZW5hbWUrXCIsIFwiK3Bob3RvLmZpbGVuYW1lLnJlcGxhY2UoLyhcXC5bXFx3XFxkXy1dKykkL2ksICdfc3EkMScpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwaG90bztcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMucGhvdG9zID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucGhvdG9zID0gdGhpcy5waG90b3MuY29uY2F0KHJlc3BvbnNlLnJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblx0cHVibGljIHNob3dHYWxsZXJ5KGl0ZXJhdG9yPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBcdGNvbnN0IHBob3RvcyA9IHRoaXMucGhvdG9zLm1hcCgocGhvdG8pID0+IHtcclxuXHRcdCAgICByZXR1cm4gdGhpcy5jZG5VcmwgKyBwaG90by5maWxlbmFtZTsvLy5yZXBsYWNlKC8oXFwuW1xcd1xcZF8tXSspJC9pLCAnX2xnJDEnKVxyXG5cdCAgICB9KTtcclxuXHJcbiAgICBcdHRoaXMucGhvdG9WaWV3ZXIuc3RhcnRJbmRleCA9IGl0ZXJhdG9yIHx8IDA7XHJcblxyXG5cdCAgICB0aGlzLnBob3RvVmlld2VyLnNob3dWaWV3ZXIocGhvdG9zKTtcclxuICAgIH1cclxuICAgIHVwbG9hZGVySW1hZ2VzQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUG9zdEZvcm1Db21wb25lbnQpO1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudXBsb2FkZXJJbWFnZXMgPSBldmVudDtcclxuICAgICAgICAvLyB0aGlzLm1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmFjdGl2ZVByb2ZpbGUgPSB0aGlzLmFjdGl2ZVByb2ZpbGU7XHJcbiAgICAgICAgLy8gdGhpcy5tb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS50ZXh0UGxhY2Vob2xkZXIgPSAnV3JpdGUgc29tZXRoaW5nIGFib3V0IHRoaXMgcGhvdG8uLi4nO1xyXG4gICAgICAgIC8vIHRoaXMubW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2Uub25TdWNjZXNzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0UGhvdG9zKCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubW9kYWxSZWYuY2xvc2UoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IHRoaXMucGFnZTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09ICdkb3duJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSAhPSB0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQaG90b3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZVBob3RvKGRlbGV0ZWRQaG90bywgZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihDb25maXJtRGlhbG9nQ29tcG9uZW50LCB7YmFja2Ryb3A6ICdzdGF0aWMnfSk7XHJcbiAgICAgICAgLy8gbW9kYWwuY29tcG9uZW50SW5zdGFuY2VbJ2RhdGEnXSA9IHtcclxuICAgICAgICAvLyAgICAgdGl0bGU6ICdEZWxldGUgcGhvdG8nLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgICAgLy8gICAgIGNvbmZpcm06IHRoaXMuc2VuZERlbGV0ZVBob3RvUmVxLmJpbmQodGhpcyksXHJcbiAgICAgICAgLy8gICAgIGNhbGxiYWNrUGFyYW06IGRlbGV0ZWRQaG90b1xyXG4gICAgICAgIC8vIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmREZWxldGVQaG90b1JlcShkZWxldGVkUGhvdG8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmRlbGV0ZVBob3RvKHt3ZWRkaW5nSWQ6IHRoaXMud2VkZGluZ0lkLCBwaG90b0lkOiBkZWxldGVkUGhvdG8uaWR9KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhvdG9zID0gdGhpcy5waG90b3MuZmlsdGVyKChwaG90bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwaG90by5pZCAhPT0gZGVsZXRlZFBob3RvLmlkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9mbGFzaE1lc3NhZ2VzU2VydmljZS5zaG93KCdQaG90byBkZWxldGVkIHN1Y2Nlc3NmdWxseScsIHtjc3NDbGFzczogJ2FsZXJ0LXN1Y2Nlc3MnLCB0aW1lb3V0OiAzMDAwfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX2ZsYXNoTWVzc2FnZXNTZXJ2aWNlLnNob3coJ1Bob3RvIGRlbGV0aW9uIGZhaWxlZCcsIHtjc3NDbGFzczogJ2FsZXJ0LWRhbmdlcicsIHRpbWVvdXQ6IDMwMDB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19