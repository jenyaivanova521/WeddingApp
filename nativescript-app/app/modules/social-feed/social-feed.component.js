"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var applicationSettings = require("tns-core-modules/application-settings");
var platform_1 = require("tns-core-modules/platform");
var configs_1 = require("~/shared/configs");
var post_service_1 = require("~/shared/services/post.service");
var root_store_1 = require("~/root-store");
var http_get_services_1 = require("~/shared/services/http-get.services");
var app_config_1 = require("../../shared/configs/app.config");
var vendor_service_1 = require("~/shared/services/vendor.service");
var SocialFeedComponent = /** @class */ (function () {
    function SocialFeedComponent(route, store, postService, myService, changeDetector, vendorService) {
        this.route = route;
        this.store = store;
        this.postService = postService;
        this.myService = myService;
        this.changeDetector = changeDetector;
        this.vendorService = vendorService;
        this.loadingNewPosts = false;
        console.log("---Soicial Feed---");
        this.screenHeight = platform_1.screen.mainScreen.heightDIPs - configs_1.TOP_BAR_HEIGHT - 80; // Topbar height
    }
    SocialFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("---Soicial Feed ngOnInit---");
        this.showForm = true;
        this.posts = [];
        this.page = 1;
        this.subActiveProfile = this.store.select(root_store_1.ProfileSelectors.selectActiveProfile).subscribe(function (activeProfile) {
            if (activeProfile) {
                _this.activeProfile = activeProfile;
                app_config_1.Config.activeProfile = activeProfile;
                _this.followed = (localStorage.getItem(_this.activeProfile + '-socialFeedShowFollowed') == 'true' ? true : false) || false;
            }
        });
        this.getPosts({
            init: true
        });
    };
    SocialFeedComponent.prototype.ngOnDestroy = function () {
        // this.subActiveWedding.unsubscribe();
    };
    SocialFeedComponent.prototype.appendPost = function (post) {
        console.log("append Post");
        this.posts.unshift(post);
    };
    SocialFeedComponent.prototype.showFollowed = function (value) {
        this.followed = value;
        applicationSettings.setBoolean(this.activeWedding + '-socialFeedShowFollowed', value);
        this.getPosts({
            init: true
        });
    };
    SocialFeedComponent.prototype.getPosts = function (_a) {
        var _this = this;
        var init = _a.init;
        console.log("get posts");
        if (init) {
            this.posts = [];
            this.page = 1;
            this.infiniteScrollDisabled = false;
            if (this.activeProfile && this.activeProfile.type == 'wedding' && (['public', 'registered'].indexOf(this.activeProfile.privacySetting) > -1
                || (['followers', 'private'].indexOf(this.activeProfile.privacySetting) > -1 && this.followed))) {
                this.showForm = true;
            }
            else {
                this.showForm = false;
            }
        }
        this.postService.getAllPosts({
            page: this.page,
            followed: this.followed
        }).toPromise().then(function (response) {
            console.log(response.result.length);
            for (var i = 0; i < response.result.length; i++) {
                _this.posts.push(response.result[i]);
            }
            return _this.posts;
        });
        // this.posts = Object.assign(this.posts, request);
    };
    SocialFeedComponent.prototype.onScroll = function (event) {
        if (!this.loadingNewPosts && !this.infiniteScrollDisabled) {
            var currentPage = this.page;
            if (event.scrollY > event.object.height - 150) {
                this.page++;
            }
            if (currentPage != this.page) {
                this.loadingNewPosts = true;
                this.getPosts({
                    init: false
                });
            }
        }
    };
    SocialFeedComponent.prototype.removePost = function (deletePost) {
        for (var i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == deletePost.id) {
                this.posts.splice(i, 1);
            }
        }
        // this.posts = Object.keys(this.posts)
        //     .filter((key) => {
        //         const val = this.posts[key];
        //         return val.id !== deletePost.id;
        //     })
        //     .reduce((obj, key) => {
        //         obj[key] = this.posts[key];
        //         return obj;
        //     }, {});
        this.changeDetector.markForCheck();
    };
    tslib_1.__decorate([
        core_1.ViewChild('itemsContainer'),
        tslib_1.__metadata("design:type", Object)
    ], SocialFeedComponent.prototype, "itemsContainer", void 0);
    SocialFeedComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'app-social-feed',
            templateUrl: 'social-feed.component.html',
            providers: [http_get_services_1.MyHttpGetService],
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            post_service_1.PostService,
            http_get_services_1.MyHttpGetService,
            core_1.ChangeDetectorRef,
            vendor_service_1.VendorService])
    ], SocialFeedComponent);
    return SocialFeedComponent;
}());
exports.SocialFeedComponent = SocialFeedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLWZlZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29jaWFsLWZlZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUt1QjtBQUV2QiwwQ0FBaUQ7QUFDakQscUNBQW9DO0FBQ3BDLDJFQUE2RTtBQUM3RSxzREFBbUQ7QUFLbkQsNENBQWtEO0FBQ2xELCtEQUE2RDtBQUM3RCwyQ0FBcUU7QUFHckUseUVBQXVFO0FBQ3ZFLDhEQUF5RDtBQUN6RCxtRUFBaUU7QUFPakU7SUF3QkMsNkJBQ1MsS0FBcUIsRUFDckIsS0FBbUIsRUFDbkIsV0FBd0IsRUFDeEIsU0FBMkIsRUFDM0IsY0FBaUMsRUFDakMsYUFBNEI7UUFMNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYN0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFheEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLHdCQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsZ0JBQWdCO0lBRXpGLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBa0JDO1FBakJBLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FB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QUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDO1FBQ0YsQ0FBQztRQUNLLHVDQUF1QztRQUN2Qyx5QkFBeUI7UUFDekIsdUNBQXVDO1FBQ3ZDLDJDQUEyQztRQUMzQyxTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLHNDQUFzQztRQUN0QyxzQkFBc0I7UUFDdEIsY0FBYztRQUVkLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQW5JeUI7UUFBNUIsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQzs7K0RBQWdCO0lBRmhDLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQzdCLENBQUM7aURBMEJlLHVCQUFjO1lBQ2QsYUFBSztZQUNDLDBCQUFXO1lBQ2Isb0NBQWdCO1lBQ1gsd0JBQWlCO1lBQ2xCLDhCQUFhO09BOUJ6QixtQkFBbUIsQ0F1SS9CO0lBQUQsMEJBQUM7Q0FBQSxBQXZJRCxJQXVJQztBQXZJWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENvbXBvbmVudCxcclxuXHRPbkluaXQsXHJcblx0T25EZXN0cm95LFxyXG5cdENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25TZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IFdlZGRpbmcgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzZWxlY3RBY3RpdmVXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgVE9QX0JBUl9IRUlHSFQgfSBmcm9tICd+L3NoYXJlZC9jb25maWdzJztcclxuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9wb3N0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdGF0ZSwgQ29tbW9uTW9kZWxzLCBQcm9maWxlU2VsZWN0b3JzIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ34vc2hhcmVkL3R5cGVzL21vZGVscy9zb2NpYWwtZmVlZCc7XHJcbmltcG9ydCB7IFdlZGRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3dlZGRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9odHRwLWdldC5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb25maWdzL2FwcC5jb25maWcnO1xyXG5pbXBvcnQgeyBWZW5kb3JTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvdmVuZG9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAtc29jaWFsLWZlZWQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnc29jaWFsLWZlZWQuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29jaWFsRmVlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcblx0QFZpZXdDaGlsZCgnaXRlbXNDb250YWluZXInKSBpdGVtc0NvbnRhaW5lcjtcclxuXHJcblx0cHVibGljIHNjcmVlbkhlaWdodDogbnVtYmVyO1xyXG5cdHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuXHJcblx0YWN0aXZlUHJvZmlsZTogQ29tbW9uTW9kZWxzLlByb2ZpbGU7XHJcblx0c3ViQWN0aXZlUHJvZmlsZTogSVN1YnNjcmlwdGlvbjtcclxuXHRcclxuXHRwcml2YXRlIGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmc7XHJcblx0cHJpdmF0ZSBzdWJBY3RpdmVXZWRkaW5nOiBJU3Vic2NyaXB0aW9uO1xyXG5cdHBvc3RzOiBDb21tb25Nb2RlbHMuUG9zdFtdO1xyXG5cdHB1YmxpYyBwb3N0Rm9ybTogYW55O1xyXG5cdHB1YmxpYyBwYWdlOiBudW1iZXI7XHJcblx0cHVibGljIGluZmluaXRlU2Nyb2xsRGlzYWJsZWQ6IGJvb2xlYW47XHJcblx0cHVibGljIGZvbGxvd2VkOiBib29sZWFuO1xyXG5cdHB1YmxpYyBzaG93Rm9ybTogYm9vbGVhbjtcclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nTmV3UG9zdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0cHJvZmlsaW5nVGVzdDogYW55O1xyXG5cdHJlY29tbWVuZGVkVmVuZG9yczogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZSxcclxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG5cdFx0cHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlXHJcblx0KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLVNvaWNpYWwgRmVlZC0tLVwiKTtcclxuXHRcdHRoaXMuc2NyZWVuSGVpZ2h0ID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyAtIFRPUF9CQVJfSEVJR0hUIC0gODA7IC8vIFRvcGJhciBoZWlnaHRcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLVNvaWNpYWwgRmVlZCBuZ09uSW5pdC0tLVwiKTtcclxuXHRcdHRoaXMuc2hvd0Zvcm0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucG9zdHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuc3ViQWN0aXZlUHJvZmlsZSA9IHRoaXMuc3RvcmUuc2VsZWN0KFxyXG4gICAgICAgICAgICBQcm9maWxlU2VsZWN0b3JzLnNlbGVjdEFjdGl2ZVByb2ZpbGVcclxuICAgICAgICApLnN1YnNjcmliZShhY3RpdmVQcm9maWxlID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZVByb2ZpbGUpIHtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZVByb2ZpbGUgPSBhY3RpdmVQcm9maWxlO1xyXG5cdFx0XHRcdENvbmZpZy5hY3RpdmVQcm9maWxlID0gYWN0aXZlUHJvZmlsZTtcclxuXHRcdFx0XHR0aGlzLmZvbGxvd2VkID0gKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuYWN0aXZlUHJvZmlsZSArICctc29jaWFsRmVlZFNob3dGb2xsb3dlZCcpID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSkgfHwgZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0gIFx0XHRcdCAgICAgICAgICBcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5nZXRQb3N0cyh7XHJcblx0XHRcdGluaXQ6IHRydWVcclxuXHRcdH0pO1x0XHRcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0Ly8gdGhpcy5zdWJBY3RpdmVXZWRkaW5nLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYXBwZW5kUG9zdChwb3N0KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFwcGVuZCBQb3N0XCIpO1xyXG5cdFx0dGhpcy5wb3N0cy51bnNoaWZ0KHBvc3QpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNob3dGb2xsb3dlZCh2YWx1ZSkge1xyXG5cdFx0dGhpcy5mb2xsb3dlZCA9IHZhbHVlO1xyXG5cdFx0YXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKHRoaXMuYWN0aXZlV2VkZGluZyArICctc29jaWFsRmVlZFNob3dGb2xsb3dlZCcsIHZhbHVlKTtcclxuXHRcdHRoaXMuZ2V0UG9zdHMoe1xyXG5cdFx0XHRpbml0OiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UG9zdHMoeyBpbml0IH0pIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZ2V0IHBvc3RzXCIpO1xyXG4gICAgICAgIGlmIChpbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zdHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5pbmZpbml0ZVNjcm9sbERpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVByb2ZpbGUgJiYgdGhpcy5hY3RpdmVQcm9maWxlLnR5cGUgPT0gJ3dlZGRpbmcnICYmIChbJ3B1YmxpYycsICdyZWdpc3RlcmVkJ10uaW5kZXhPZih0aGlzLmFjdGl2ZVByb2ZpbGUucHJpdmFjeVNldHRpbmcpID4gLTFcclxuICAgICAgICAgICAgICAgIHx8IChbJ2ZvbGxvd2VycycsICdwcml2YXRlJ10uaW5kZXhPZih0aGlzLmFjdGl2ZVByb2ZpbGUucHJpdmFjeVNldHRpbmcpID4gLTEgJiYgdGhpcy5mb2xsb3dlZCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmdldEFsbFBvc3RzKHtcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxyXG4gICAgICAgICAgICBmb2xsb3dlZDogdGhpcy5mb2xsb3dlZFxyXG4gICAgICAgIH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZS5yZXN1bHQubGVuZ3RoKTtcclxuXHRcdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5yZXN1bHQubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0dGhpcy5wb3N0cy5wdXNoKHJlc3BvbnNlLnJlc3VsdFtpXSk7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zdHM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5wb3N0cyA9IE9iamVjdC5hc3NpZ24odGhpcy5wb3N0cywgcmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG5cdHB1YmxpYyBvblNjcm9sbChldmVudCkge1xyXG5cdFx0aWYgKCF0aGlzLmxvYWRpbmdOZXdQb3N0cyAmJiAhdGhpcy5pbmZpbml0ZVNjcm9sbERpc2FibGVkKSB7XHJcblx0XHRcdGxldCBjdXJyZW50UGFnZSA9IHRoaXMucGFnZTtcclxuXHJcblx0XHRcdGlmIChldmVudC5zY3JvbGxZID4gZXZlbnQub2JqZWN0LmhlaWdodCAtIDE1MCkge1xyXG5cdFx0XHRcdHRoaXMucGFnZSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChjdXJyZW50UGFnZSAhPSB0aGlzLnBhZ2UpIHtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmdOZXdQb3N0cyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5nZXRQb3N0cyh7XHJcblx0XHRcdFx0XHRpbml0OiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlUG9zdChkZWxldGVQb3N0OiBQb3N0KTogdm9pZCB7XHJcblx0XHRmb3IoIHZhciBpID0gMDsgaSA8IHRoaXMucG9zdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYodGhpcy5wb3N0c1tpXS5pZD09ZGVsZXRlUG9zdC5pZCkge1xyXG5cdFx0XHRcdHRoaXMucG9zdHMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgICAgLy8gdGhpcy5wb3N0cyA9IE9iamVjdC5rZXlzKHRoaXMucG9zdHMpXHJcbiAgICAgICAgLy8gICAgIC5maWx0ZXIoKGtleSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5wb3N0c1trZXldO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHZhbC5pZCAhPT0gZGVsZXRlUG9zdC5pZDtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIG9ialtrZXldID0gdGhpcy5wb3N0c1trZXldO1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAvLyAgICAgfSwge30pO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=