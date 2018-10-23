"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var moment = require("moment");
var configs_1 = require("~/shared/configs");
var DateWithHoursPipe = /** @class */ (function () {
    function DateWithHoursPipe() {
    }
    DateWithHoursPipe.prototype.transform = function (item) {
        if (item) {
            return moment(item).format(configs_1.DATETIME_FORMAT);
        }
        else {
            return '';
        }
    };
    DateWithHoursPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'dateWithHours' })
    ], DateWithHoursPipe);
    return DateWithHoursPipe;
}());
exports.DateWithHoursPipe = DateWithHoursPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS13aXRoLWhvdXJzLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRlLXdpdGgtaG91cnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0Q7QUFDcEQsK0JBQWlDO0FBRWpDLDRDQUFtRDtBQUduRDtJQUFBO0lBUUEsQ0FBQztJQVBBLHFDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLHlCQUFlLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1gsQ0FBQztJQUNGLENBQUM7SUFQVyxpQkFBaUI7UUFEN0IsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBQyxDQUFDO09BQ2pCLGlCQUFpQixDQVE3QjtJQUFELHdCQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IERBVEVUSU1FX0ZPUk1BVCB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5cclxuQFBpcGUoe25hbWU6ICdkYXRlV2l0aEhvdXJzJ30pXHJcbmV4cG9ydCBjbGFzcyBEYXRlV2l0aEhvdXJzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cdHRyYW5zZm9ybShpdGVtKTogYW55IHtcclxuXHRcdGlmIChpdGVtKSB7XHJcblx0XHRcdHJldHVybiBtb21lbnQoaXRlbSkuZm9ybWF0KERBVEVUSU1FX0ZPUk1BVCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==