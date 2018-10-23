"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var router_1 = require("nativescript-angular/router"); //2018.9.4
var services_1 = require("~/shared/services");
var configs_1 = require("~/shared/configs");
var MarketplaceComponent = /** @class */ (function () {
    function MarketplaceComponent(modalService, routerExtensions) {
        this.modalService = modalService;
        this.routerExtensions = routerExtensions;
        this.showActions = false;
        this.mratingList = ['any', '$ - Inexpensive', '$$ - Affordable', '$$$ - Moderate', '$$$$ - Expensive'];
        this.city = 'Moncton, NB';
        this.containerWidth = platform_1.screen.mainScreen.widthDIPs;
        // console.log("---marketplace---")		
    }
    MarketplaceComponent.prototype.ngOnInit = function () {
        // console.log(this.marketplace);
        if (this.marketplace.avatar == null)
            this.imageSrc = '';
        else {
            this.imageSrc = configs_1.CDN_URL + '/vendor/' + this.marketplace.id + '/avatars/' + this.marketplace.avatar.replace(/(\.[\w\d_-]+)$/i, '_lg$1');
        }
    };
    MarketplaceComponent.prototype.detail_info = function () {
        //this.passwordInputRef.nativeElement.dismissSoftInput();
        //this.authService.login(this.email, this.password);
        configs_1.Config.marketplaceID = this.marketplace.id;
        this.routerExtensions.navigate(['/app', 'detail']); //2018.9.4 This is deleted after screen test
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], MarketplaceComponent.prototype, "marketplace", void 0);
    MarketplaceComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'marketplace',
            templateUrl: 'marketplace.component.html',
            styleUrls: ['./marketplace.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            router_1.RouterExtensions])
    ], MarketplaceComponent);
    return MarketplaceComponent;
}());
exports.MarketplaceComponent = MarketplaceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0cGxhY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2V0cGxhY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RDtBQUV6RCxzREFBbUQ7QUFFbkQsc0RBQStELENBQUMsVUFBVTtBQUMxRSw4Q0FBaUQ7QUFDakQsNENBQW1EO0FBUW5EO0lBV0MsOEJBQ1MsWUFBMEIsRUFDMUIsZ0JBQWtDO1FBRGxDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFUcEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFJcEMsZ0JBQVcsR0FBRyxDQUFDLEtBQUssRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlGLFNBQUksR0FBRyxhQUFhLENBQUM7UUFNcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDbEQscUNBQXFDO0lBQ3RDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0MsaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBTyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsR0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BJLENBQUM7SUFDRixDQUFDO0lBQ00sMENBQVcsR0FBbEI7UUFDQyx5REFBeUQ7UUFDekQsb0RBQW9EO1FBQ3BELGdCQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLDRDQUE0QztJQUNqRyxDQUFDO0lBN0JRO1FBQVIsWUFBSyxFQUFFOzs2REFBa0I7SUFGZCxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzNDLENBQUM7aURBYXNCLHVCQUFZO1lBQ1IseUJBQWdCO09BYi9CLG9CQUFvQixDQWtDaEM7SUFBRCwyQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJzsgLy8yMDE4LjkuNFxyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IENETl9VUkwsIENvbmZpZyB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ21hcmtldHBsYWNlJyxcclxuXHR0ZW1wbGF0ZVVybDogJ21hcmtldHBsYWNlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9tYXJrZXRwbGFjZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJrZXRwbGFjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcblx0QElucHV0KCkgbWFya2V0cGxhY2U6IGFueTtcclxuXHJcblx0cHVibGljIHNob3dBY3Rpb25zOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBjb250YWluZXJXaWR0aDogbnVtYmVyO1xyXG5cdHByaXZhdGUgaW1hZ2VTcmM7XHJcblx0cHJpdmF0ZSBtcmF0aW5nO1xyXG5cdG1yYXRpbmdMaXN0ID0gWydhbnknLCckIC0gSW5leHBlbnNpdmUnLCckJCAtIEFmZm9yZGFibGUnLCckJCQgLSBNb2RlcmF0ZScsJyQkJCQgLSBFeHBlbnNpdmUnXTtcclxuXHRjaXR5ID0gJ01vbmN0b24sIE5CJztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lcldpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCItLS1tYXJrZXRwbGFjZS0tLVwiKVx0XHRcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5tYXJrZXRwbGFjZSk7XHJcblx0XHRpZih0aGlzLm1hcmtldHBsYWNlLmF2YXRhcj09bnVsbCkgdGhpcy5pbWFnZVNyYyA9ICcnO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMuaW1hZ2VTcmMgPSBDRE5fVVJMICsgJy92ZW5kb3IvJyArIHRoaXMubWFya2V0cGxhY2UuaWQrJy9hdmF0YXJzLycrdGhpcy5tYXJrZXRwbGFjZS5hdmF0YXIucmVwbGFjZSgvKFxcLltcXHdcXGRfLV0rKSQvaSwgJ19sZyQxJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBkZXRhaWxfaW5mbygpOiB2b2lkIHtcclxuXHRcdC8vdGhpcy5wYXNzd29yZElucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cdFx0Ly90aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpO1xyXG5cdFx0Q29uZmlnLm1hcmtldHBsYWNlSUQgPSB0aGlzLm1hcmtldHBsYWNlLmlkO1xyXG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2FwcCcsICdkZXRhaWwnXSk7IC8vMjAxOC45LjQgVGhpcyBpcyBkZWxldGVkIGFmdGVyIHNjcmVlbiB0ZXN0XHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl19