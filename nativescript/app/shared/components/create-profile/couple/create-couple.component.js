"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var bghttp = require("nativescript-background-http");
var platform_1 = require("tns-core-modules/platform");
var _ = require("lodash");
var models_1 = require("~/root-store/wedding-store/models");
var configs_1 = require("~/shared/configs");
var services_1 = require("~/shared/services");
var enum_1 = require("~/shared/types/enum");
var CreateCoupleComponent = /** @class */ (function () {
    function CreateCoupleComponent(changeDetector, authService, dialogService) {
        this.changeDetector = changeDetector;
        this.authService = authService;
        this.dialogService = dialogService;
        this.activeStep = 0;
        this.steps = [
            {
                name: 'Profile info',
                done: false,
            },
            {
                name: 'Partner 1',
                done: false,
            },
            {
                name: 'Partner 2',
                done: false,
            },
            {
                name: 'Privacy settings',
                done: false,
            }
        ];
        this.fields = {
            description: '',
            privacySetting: models_1.PrivacySettingEnum.Public,
            avatar: '',
            partners: []
        };
        console.log("---create-couple---");
        this.screenHeight = platform_1.screen.mainScreen.heightDIPs - configs_1.TOP_BAR_HEIGHT;
        this.height = this.screenHeight - 230;
    }
    CreateCoupleComponent.prototype.nextStep = function (values) {
        if (this.activeStep === 0) {
            this.fields = Object.assign({}, this.fields, values);
        }
        else if (this.activeStep === 1 || this.activeStep === 2) {
            this.fields.partners.push(values);
        }
        else {
            this.fields.privacySetting = values;
            this.uploadForm(); //recreate in wedding service
        }
        if (this.activeStep !== 3) {
            this.activeStep++;
        }
        this.changeDetector.markForCheck();
    };
    CreateCoupleComponent.prototype.uploadForm = function () {
        var session = bghttp.session('create-profile');
        var params = [];
        // TODO move this to service and make function for converting objects to formData
        _.forEach(this.fields, function (value, key) {
            if (key === 'avatar' && value) {
                var param = {
                    name: key,
                    mimeType: 'image/jpeg',
                    fileName: value,
                };
                params.push(param);
            }
            else if (key === 'events' || key === 'partners') {
                _.forEach(value, function (item, iterator) {
                    _.forEach(item, function (itemValue, itemKey) {
                        if (itemValue) {
                            var param = void 0;
                            var paramName = key + "[" + iterator + "][" + itemKey + "]";
                            if (itemKey !== 'avatar') {
                                param = {
                                    value: itemValue,
                                    name: paramName
                                };
                            }
                            else {
                                param = {
                                    name: paramName,
                                    filename: itemValue,
                                    mimeType: 'image/jpeg',
                                };
                            }
                            params.push(param);
                        }
                    });
                });
            }
            else {
                if (value) {
                    var param = {
                        value: value,
                        name: key
                    };
                    params.push(param);
                }
            }
        });
        var url = configs_1.API_URL + '/weddings';
        var request = {
            url: url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.authService.getToken(),
            },
        };
        var task;
        console.log("mmmmmmmmmmmmmmmm");
        console.log(params);
        task = session.multipartUpload(params, request);
        task.on('complete', this.onCompleteUpload);
        task.on('error', this.onUploadError);
    };
    CreateCoupleComponent.prototype.previousStep = function () {
        this.activeStep--;
        this.changeDetector.markForCheck();
    };
    CreateCoupleComponent.prototype.onCompleteUpload = function () {
        // TODO redirect to app and get weddings
        this.dialogService.showDialog({
            type: enum_1.DialogType.Success,
            message: 'Wedding created'
        });
    };
    CreateCoupleComponent.prototype.onUploadError = function (error) {
        this.dialogService.showDialog({
            type: enum_1.DialogType.Alert,
            message: 'Wedding creation failed'
        });
    };
    CreateCoupleComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-couple',
            templateUrl: 'create-couple.component.html',
            styleUrls: ['../create-profile-base.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            services_1.AuthService,
            services_1.DialogsService])
    ], CreateCoupleComponent);
    return CreateCoupleComponent;
}());
exports.CreateCoupleComponent = CreateCoupleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvdXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtY291cGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QscURBQXVEO0FBQ3ZELHNEQUFtRDtBQUNuRCwwQkFBNEI7QUFFNUIsNERBQWdGO0FBQ2hGLDRDQUEyRDtBQUMzRCw4Q0FBZ0U7QUFDaEUsNENBQWlEO0FBUWpEO0lBaUNDLCtCQUNTLGNBQWlDLEVBQ2pDLFdBQXdCLEVBQ3hCLGFBQTZCO1FBRjdCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUEvQi9CLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsVUFBSyxHQUFlO1lBQzFCO2dCQUNDLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsS0FBSzthQUNYO1lBQ0Q7Z0JBQ0MsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLElBQUksRUFBRSxLQUFLO2FBQ1g7WUFDRDtnQkFDQyxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWDtZQUNEO2dCQUNDLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLElBQUksRUFBRSxLQUFLO2FBQ1g7U0FDRCxDQUFDO1FBRU0sV0FBTSxHQUFZO1lBQ3pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsY0FBYyxFQUFFLDJCQUFrQixDQUFDLE1BQU07WUFDekMsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFPRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsd0JBQWMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx3Q0FBUSxHQUFmLFVBQWdCLE1BQVc7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUNqRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU8sMENBQVUsR0FBbEI7UUFDQyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGlGQUFpRjtRQUNqRixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUNqQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQU0sS0FBSyxHQUFHO29CQUNiLElBQUksRUFBRSxHQUFHO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsS0FBSztpQkFDZixDQUFDO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFDLElBQUksRUFBRSxRQUFRO29CQUMvQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLFNBQVMsRUFBRSxPQUFPO3dCQUNsQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNmLElBQUksS0FBSyxTQUFBLENBQUM7NEJBQ1YsSUFBTSxTQUFTLEdBQU0sR0FBRyxTQUFJLFFBQVEsVUFBSyxPQUFPLE1BQUcsQ0FBQzs0QkFDcEQsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0NBQzFCLEtBQUssR0FBRztvQ0FDUCxLQUFLLEVBQUUsU0FBUztvQ0FDaEIsSUFBSSxFQUFFLFNBQVM7aUNBQ2YsQ0FBQzs0QkFDSCxDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNQLEtBQUssR0FBRztvQ0FDUCxJQUFJLEVBQUUsU0FBUztvQ0FDZixRQUFRLEVBQUUsU0FBUztvQ0FDbkIsUUFBUSxFQUFFLFlBQVk7aUNBQ3RCLENBQUM7NEJBQ0gsQ0FBQzs0QkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwQixDQUFDO29CQUNGLENBQUMsQ0FBQyxDQUFBO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1gsSUFBSSxLQUFLLEdBQUc7d0JBQ1gsS0FBSyxFQUFFLEtBQUs7d0JBQ1osSUFBSSxFQUFFLEdBQUc7cUJBQ1QsQ0FBQztvQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBTSxHQUFHLEdBQUcsaUJBQU8sR0FBRyxXQUFXLENBQUM7UUFFbEMsSUFBSSxPQUFPLEdBQUc7WUFDYixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDeEQ7U0FDRCxDQUFDO1FBQ0YsSUFBSSxJQUFpQixDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVNLDRDQUFZLEdBQW5CO1FBQ0MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLGdEQUFnQixHQUF2QjtRQUNDLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztZQUM3QixJQUFJLEVBQUUsaUJBQVUsQ0FBQyxPQUFPO1lBQ3hCLE9BQU8sRUFBRSxpQkFBaUI7U0FDMUIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVNLDZDQUFhLEdBQXBCLFVBQXFCLEtBQUs7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7WUFDN0IsSUFBSSxFQUFFLGlCQUFVLENBQUMsS0FBSztZQUN0QixPQUFPLEVBQUUseUJBQXlCO1NBQ2xDLENBQUMsQ0FBQTtJQUNILENBQUM7SUE3SVcscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUNwRCxDQUFDO2lEQW1Dd0Isd0JBQWlCO1lBQ3BCLHNCQUFXO1lBQ1QseUJBQWM7T0FwQzFCLHFCQUFxQixDQStJakM7SUFBRCw0QkFBQztDQUFBLEFBL0lELElBK0lDO0FBL0lZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgYmdodHRwIGZyb20gJ25hdGl2ZXNjcmlwdC1iYWNrZ3JvdW5kLWh0dHAnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgUHJpdmFjeVNldHRpbmdFbnVtLCBXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgQVBJX1VSTCwgVE9QX0JBUl9IRUlHSFQgfSBmcm9tICd+L3NoYXJlZC9jb25maWdzJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIERpYWxvZ3NTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBEaWFsb2dUeXBlIH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY3JlYXRlLWNvdXBsZScsXHJcblx0dGVtcGxhdGVVcmw6ICdjcmVhdGUtY291cGxlLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vY3JlYXRlLXByb2ZpbGUtYmFzZS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ291cGxlQ29tcG9uZW50IHtcclxuXHJcblx0cHVibGljIHNjcmVlbkhlaWdodDtcclxuXHRwdWJsaWMgaGVpZ2h0O1xyXG5cclxuXHRwdWJsaWMgYWN0aXZlU3RlcDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIHN0ZXBzOiBBcnJheTxhbnk+ID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnUHJvZmlsZSBpbmZvJyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnUGFydG5lciAxJyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnUGFydG5lciAyJyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnUHJpdmFjeSBzZXR0aW5ncycsXHJcblx0XHRcdGRvbmU6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdF07XHJcblxyXG5cdHByaXZhdGUgZmllbGRzOiBXZWRkaW5nID0ge1xyXG5cdFx0ZGVzY3JpcHRpb246ICcnLFxyXG5cdFx0cHJpdmFjeVNldHRpbmc6IFByaXZhY3lTZXR0aW5nRW51bS5QdWJsaWMsXHJcblx0XHRhdmF0YXI6ICcnLFxyXG5cdFx0cGFydG5lcnM6IFtdXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHRcdHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dzU2VydmljZSxcclxuXHQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tY3JlYXRlLWNvdXBsZS0tLVwiKVxyXG5cdFx0dGhpcy5zY3JlZW5IZWlnaHQgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzIC0gVE9QX0JBUl9IRUlHSFQ7XHJcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuc2NyZWVuSGVpZ2h0IC0gMjMwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5leHRTdGVwKHZhbHVlczogYW55KTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5hY3RpdmVTdGVwID09PSAwKSB7XHJcblx0XHRcdHRoaXMuZmllbGRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5maWVsZHMsIHZhbHVlcyk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYWN0aXZlU3RlcCA9PT0gMSB8fCB0aGlzLmFjdGl2ZVN0ZXAgPT09IDIpIHtcclxuXHRcdFx0dGhpcy5maWVsZHMucGFydG5lcnMucHVzaCh2YWx1ZXMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5maWVsZHMucHJpdmFjeVNldHRpbmcgPSB2YWx1ZXM7XHJcblx0XHRcdHRoaXMudXBsb2FkRm9ybSgpOyAvL3JlY3JlYXRlIGluIHdlZGRpbmcgc2VydmljZVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmFjdGl2ZVN0ZXAgIT09IDMpIHtcclxuXHRcdFx0dGhpcy5hY3RpdmVTdGVwKys7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSB1cGxvYWRGb3JtKCk6IHZvaWQge1xyXG5cdFx0bGV0IHNlc3Npb24gPSBiZ2h0dHAuc2Vzc2lvbignY3JlYXRlLXByb2ZpbGUnKTtcclxuXHRcdGxldCBwYXJhbXMgPSBbXTtcclxuXHRcdFxyXG5cdFx0Ly8gVE9ETyBtb3ZlIHRoaXMgdG8gc2VydmljZSBhbmQgbWFrZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBvYmplY3RzIHRvIGZvcm1EYXRhXHJcblx0XHRfLmZvckVhY2godGhpcy5maWVsZHMsICh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdGlmIChrZXkgPT09ICdhdmF0YXInICYmIHZhbHVlKSB7XHJcblx0XHRcdFx0Y29uc3QgcGFyYW0gPSB7XHJcblx0XHRcdFx0XHRuYW1lOiBrZXksXHJcblx0XHRcdFx0XHRtaW1lVHlwZTogJ2ltYWdlL2pwZWcnLFxyXG5cdFx0XHRcdFx0ZmlsZU5hbWU6IHZhbHVlLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0cGFyYW1zLnB1c2gocGFyYW0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ2V2ZW50cycgfHwga2V5ID09PSAncGFydG5lcnMnKSB7XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHZhbHVlLCAoaXRlbSwgaXRlcmF0b3IpID0+IHtcclxuXHRcdFx0XHRcdF8uZm9yRWFjaChpdGVtLCAoaXRlbVZhbHVlLCBpdGVtS2V5KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtVmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgcGFyYW07XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgcGFyYW1OYW1lID0gYCR7a2V5fVske2l0ZXJhdG9yfV1bJHtpdGVtS2V5fV1gO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpdGVtS2V5ICE9PSAnYXZhdGFyJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyYW0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBpdGVtVmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IHBhcmFtTmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyYW0gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IHBhcmFtTmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsZW5hbWU6IGl0ZW1WYWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWltZVR5cGU6ICdpbWFnZS9qcGVnJyxcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRwYXJhbXMucHVzaChwYXJhbSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRsZXQgcGFyYW0gPSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0bmFtZToga2V5XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0cGFyYW1zLnB1c2gocGFyYW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgdXJsID0gQVBJX1VSTCArICcvd2VkZGluZ3MnO1xyXG5cclxuXHRcdGxldCByZXF1ZXN0ID0ge1xyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHQnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKSxcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0XHRsZXQgdGFzazogYmdodHRwLlRhc2s7XHJcblx0XHRjb25zb2xlLmxvZyhcIm1tbW1tbW1tbW1tbW1tbW1cIik7XHJcblx0XHRjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cdFx0dGFzayA9IHNlc3Npb24ubXVsdGlwYXJ0VXBsb2FkKHBhcmFtcywgcmVxdWVzdCk7XHJcblx0XHR0YXNrLm9uKCdjb21wbGV0ZScsIHRoaXMub25Db21wbGV0ZVVwbG9hZCk7XHJcblx0XHR0YXNrLm9uKCdlcnJvcicsIHRoaXMub25VcGxvYWRFcnJvcilcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwcmV2aW91c1N0ZXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLmFjdGl2ZVN0ZXAtLTtcclxuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Db21wbGV0ZVVwbG9hZCgpOiB2b2lkIHtcclxuXHRcdC8vIFRPRE8gcmVkaXJlY3QgdG8gYXBwIGFuZCBnZXQgd2VkZGluZ3NcclxuXHRcdHRoaXMuZGlhbG9nU2VydmljZS5zaG93RGlhbG9nKHtcclxuXHRcdFx0dHlwZTogRGlhbG9nVHlwZS5TdWNjZXNzLFxyXG5cdFx0XHRtZXNzYWdlOiAnV2VkZGluZyBjcmVhdGVkJ1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvblVwbG9hZEVycm9yKGVycm9yKTogdm9pZCB7XHJcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2Uuc2hvd0RpYWxvZyh7XHJcblx0XHRcdHR5cGU6IERpYWxvZ1R5cGUuQWxlcnQsXHJcblx0XHRcdG1lc3NhZ2U6ICdXZWRkaW5nIGNyZWF0aW9uIGZhaWxlZCdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0=