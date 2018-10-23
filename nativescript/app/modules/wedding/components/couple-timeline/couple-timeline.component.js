"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var services_1 = require("~/shared/services");
var configs_1 = require("~/shared/configs");
var CoupleTimelineComponent = /** @class */ (function () {
    function CoupleTimelineComponent(modalService, store, postService) {
        this.modalService = modalService;
        this.store = store;
        this.postService = postService;
    }
    CoupleTimelineComponent.prototype.ngOnInit = function () {
        console.log("couple profile timeline ngOnit");
        console.log(configs_1.Config.activeWedding);
        this.activeWedding = configs_1.Config.activeWedding;
        this.showForm = true;
        if (configs_1.Config.activeWedding) {
            this.weddingId = configs_1.Config.activeWedding.id;
        }
        this.getPosts({
            init: true
        });
    };
    CoupleTimelineComponent.prototype.getPosts = function (_a) {
        var _this = this;
        var init = _a.init;
        if (init) {
            this.posts = [];
            this.page = 1;
        }
        this.postService.getPosts({
            weddingId: this.weddingId,
            page: this.page
        }).subscribe(function (response) {
            // console.log(response);
            var posts = [];
            response.result.forEach(function (post) {
                // posts[post.id] = post;
                console.log(post);
                posts.push(post);
            });
            if (response.result.length == 0) {
                console.log("no posts");
            }
            _this.posts = Object.assign(_this.posts, posts);
        }, function (error) {
            console.log(error);
        });
    };
    CoupleTimelineComponent.prototype.ngOnDestroy = function () {
    };
    CoupleTimelineComponent.prototype.appendPost = function (post) {
        console.log("append Post");
        this.posts.unshift(post);
    };
    CoupleTimelineComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'couple-timeline',
            templateUrl: 'couple-timeline.component.html',
            styleUrls: ['./couple-timeline.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store,
            services_1.PostService])
    ], CoupleTimelineComponent);
    return CoupleTimelineComponent;
}());
exports.CoupleTimelineComponent = CoupleTimelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cGxlLXRpbWVsaW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvdXBsZS10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBDO0FBQzFDLHFDQUFvQztBQUdwQyw4Q0FBOEQ7QUFDOUQsNENBQTBDO0FBVTFDO0lBT0MsaUNBQ1MsWUFBMEIsRUFDMUIsS0FBbUIsRUFDbkIsV0FBd0I7UUFGeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUdqQyxDQUFDO0lBQ0QsMENBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUEsQ0FBRSxnQkFBTSxDQUFDLGFBQWMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDMUMsQ0FBQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUM7WUFDSixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCwwQ0FBUSxHQUFSLFVBQVMsRUFBUTtRQUFqQixpQkF1Qkk7WUF2Qk8sY0FBSTtRQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMxQix5QkFBeUI7WUFDaEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNwQyx5QkFBeUI7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDVCxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBQyxVQUFBLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0QsQ0FBQztJQUNKLDZDQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ00sNENBQVUsR0FBakIsVUFBa0IsSUFBSTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUF6RFcsdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQy9DLENBQUM7aURBU3NCLHVCQUFZO1lBQ25CLGFBQUs7WUFDQyxzQkFBVztPQVZyQix1QkFBdUIsQ0EwRG5DO0lBQUQsOEJBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSwgUG9zdFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvbW9kZWxzL3NvY2lhbC1mZWVkJztcclxuaW1wb3J0IHsgV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY291cGxlLXRpbWVsaW5lJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NvdXBsZS10aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vY291cGxlLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvdXBsZVRpbWVsaW5lQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIHBvc3RzOiBQb3N0W107XHJcblx0cGFnZTogbnVtYmVyO1xyXG5cdHdlZGRpbmdJZDpzdHJpbmc7XHJcblx0cHVibGljIHNob3dGb3JtOiBib29sZWFuO1xyXG5cdHByaXZhdGUgYWN0aXZlV2VkZGluZzogV2VkZGluZztcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIHBvc3RTZXJ2aWNlOiBQb3N0U2VydmljZSxcclxuXHQpIHtcclxuXHJcblx0fVxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJjb3VwbGUgcHJvZmlsZSB0aW1lbGluZSBuZ09uaXRcIik7XHJcblx0XHRjb25zb2xlLmxvZyhDb25maWcuYWN0aXZlV2VkZGluZyk7XHJcblx0XHR0aGlzLmFjdGl2ZVdlZGRpbmcgPSBDb25maWcuYWN0aXZlV2VkZGluZztcclxuXHRcdHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xyXG5cdFx0aWYoIENvbmZpZy5hY3RpdmVXZWRkaW5nICkge1xyXG5cdFx0XHR0aGlzLndlZGRpbmdJZCA9IENvbmZpZy5hY3RpdmVXZWRkaW5nLmlkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZ2V0UG9zdHMoe1xyXG4gICAgICAgICAgICBpbml0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cdGdldFBvc3RzKHsgaW5pdCB9KSB7XHJcbiAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3N0cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSAxOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmdldFBvc3RzKHtcclxuICAgICAgICAgICAgd2VkZGluZ0lkOiB0aGlzLndlZGRpbmdJZCxcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlXHJcbiAgICAgICAgfSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBsZXQgcG9zdHMgPSBbXTtcclxuICAgICAgICAgICAgcmVzcG9uc2UucmVzdWx0LmZvckVhY2gocG9zdCA9PiB7XHJcblx0XHRcdFx0Ly8gcG9zdHNbcG9zdC5pZF0gPSBwb3N0O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHBvc3QpO1xyXG5cdFx0XHRcdHBvc3RzLnB1c2gocG9zdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHBvc3RzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucG9zdHMgPSBPYmplY3QuYXNzaWduKHRoaXMucG9zdHMsIHBvc3RzKTtcclxuICAgICAgICB9LGVycm9yID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgXHJcblx0fVxyXG5cdHB1YmxpYyBhcHBlbmRQb3N0KHBvc3QpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiYXBwZW5kIFBvc3RcIik7XHJcblx0XHR0aGlzLnBvc3RzLnVuc2hpZnQocG9zdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==