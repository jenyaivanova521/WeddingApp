"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var moment = require("moment");
var configs_1 = require("~/shared/configs");
var FullDatePipe = /** @class */ (function () {
    function FullDatePipe() {
    }
    FullDatePipe.prototype.transform = function (item) {
        if (item) {
            return moment(item).format(configs_1.DATE_FORMAT);
        }
        else {
            return '';
        }
    };
    FullDatePipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'fullDate' })
    ], FullDatePipe);
    return FullDatePipe;
}());
exports.FullDatePipe = FullDatePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1kYXRlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmdWxsLWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0Q7QUFDcEQsK0JBQWlDO0FBRWpDLDRDQUErQztBQUcvQztJQUFBO0lBUUEsQ0FBQztJQVBBLGdDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1gsQ0FBQztJQUNGLENBQUM7SUFQVyxZQUFZO1FBRHhCLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQztPQUNaLFlBQVksQ0FReEI7SUFBRCxtQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCB7IERBVEVfRk9STUFUIH0gZnJvbSAnfi9zaGFyZWQvY29uZmlncyc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ2Z1bGxEYXRlJ30pXHJcbmV4cG9ydCBjbGFzcyBGdWxsRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHR0cmFuc2Zvcm0oaXRlbSk6IGFueSB7XHJcblx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gbW9tZW50KGl0ZW0pLmZvcm1hdChEQVRFX0ZPUk1BVCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gJyc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==