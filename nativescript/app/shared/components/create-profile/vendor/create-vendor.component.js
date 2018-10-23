"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var configs_1 = require("~/shared/configs");
var CreateVendorComponent = /** @class */ (function () {
    function CreateVendorComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.activeStep = 0;
        this.steps = [
            {
                name: 'Vendor info',
                done: false,
            },
            {
                name: 'Photos',
                done: false,
            },
            {
                name: 'Products',
                done: false,
            },
            {
                name: 'Payment',
                done: false,
            }
        ];
        this.screenHeight = platform_1.screen.mainScreen.heightDIPs - configs_1.TOP_BAR_HEIGHT;
        this.height = this.screenHeight - 230;
    }
    CreateVendorComponent.prototype.nextStep = function () {
        this.activeStep++;
        this.changeDetector.markForCheck();
    };
    CreateVendorComponent.prototype.previousStep = function () {
        this.activeStep--;
        this.changeDetector.markForCheck();
    };
    CreateVendorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'create-vendor',
            templateUrl: 'create-vendor.component.html',
            styleUrls: ['../create-profile-base.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], CreateVendorComponent);
    return CreateVendorComponent;
}());
exports.CreateVendorComponent = CreateVendorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtdmVuZG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0Qsc0RBQW1EO0FBQ25ELDRDQUFrRDtBQU9sRDtJQTBCQywrQkFDUyxjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUF0Qm5DLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsVUFBSyxHQUFlO1lBQzFCO2dCQUNDLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsS0FBSzthQUNYO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUNEO2dCQUNDLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsS0FBSzthQUNYO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLEtBQUs7YUFDWDtTQUNELENBQUM7UUFLRCxJQUFJLENBQUMsWUFBWSxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyx3QkFBYyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDdkMsQ0FBQztJQUVNLHdDQUFRLEdBQWY7UUFDQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0sNENBQVksR0FBbkI7UUFDQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBekNXLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUNwRCxDQUFDO2lEQTRCd0Isd0JBQWlCO09BM0I5QixxQkFBcUIsQ0EyQ2pDO0lBQUQsNEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBUT1BfQkFSX0hFSUdIVCB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjcmVhdGUtdmVuZG9yJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2NyZWF0ZS12ZW5kb3IuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuLi9jcmVhdGUtcHJvZmlsZS1iYXNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVZlbmRvckNvbXBvbmVudCB7XHJcblxyXG5cdHB1YmxpYyBzY3JlZW5IZWlnaHQ7XHJcblx0cHVibGljIGhlaWdodDtcclxuXHJcblx0cHVibGljIGFjdGl2ZVN0ZXA6IG51bWJlciA9IDA7XHJcblxyXG5cdHB1YmxpYyBzdGVwczogQXJyYXk8YW55PiA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogJ1ZlbmRvciBpbmZvJyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnUGhvdG9zJyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnUHJvZHVjdHMnLFxyXG5cdFx0XHRkb25lOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6ICdQYXltZW50JyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHR9XHJcblx0XTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG5cdCkge1xyXG5cdFx0dGhpcy5zY3JlZW5IZWlnaHQgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzIC0gVE9QX0JBUl9IRUlHSFQ7XHJcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMjMwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHRTdGVwKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5hY3RpdmVTdGVwKys7XHJcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHByZXZpb3VzU3RlcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYWN0aXZlU3RlcC0tO1xyXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuXHR9XHJcblxyXG59Il19