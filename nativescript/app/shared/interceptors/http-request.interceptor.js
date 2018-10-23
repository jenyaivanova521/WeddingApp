"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var services_1 = require("~/shared/services");
var enum_1 = require("~/shared/types/enum");
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(injector) {
        this.injector = injector;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var authService = this.injector.get(services_1.AuthService);
        var dialogsService = this.injector.get(services_1.DialogsService);
        var token = authService.getToken();
        var authorization = "Bearer " + token;
        var headers = {
            'Content-Type': 'application/json'
            // 'Content-Type':'application/x-www-form-urlencoded'
        };
        // console.log("Authorization: "+authorization);
        if (token) {
            headers['Authorization'] = authorization;
        }
        req = req.clone({
            setHeaders: headers
        });
        return next.handle(req).catch(function (response) {
            dialogsService.showDialog({
                type: enum_1.DialogType.Alert,
                message: response.message
            });
            return Observable_1.Observable.throw(response);
        });
    };
    RequestInterceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [core_1.Injector])
    ], RequestInterceptor);
    return RequestInterceptor;
}());
exports.RequestInterceptor = RequestInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1yZXF1ZXN0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFxRDtBQUVyRCw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLHFDQUFtQztBQUVuQyw4Q0FBZ0U7QUFDaEUsNENBQWlEO0FBR2pEO0lBRUMsNEJBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBRTNDLHNDQUFTLEdBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBQ2pELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLHNCQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLENBQUM7UUFFekQsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLElBQU0sYUFBYSxHQUFHLFlBQVUsS0FBTyxDQUFDO1FBQ3hDLElBQU0sT0FBTyxHQUFHO1lBQ2YsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxxREFBcUQ7U0FDckQsQ0FBQztRQUVGLGdEQUFnRDtRQUVoRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLGFBQWEsQ0FBQTtRQUN6QyxDQUFDO1FBRUQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDZixVQUFVLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxRQUFRO1lBQ3RDLGNBQWMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxpQkFBVSxDQUFDLEtBQUs7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTzthQUN6QixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBakNXLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO2lEQUdrQixlQUFRO09BRjFCLGtCQUFrQixDQWtDOUI7SUFBRCx5QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBEaWFsb2dzU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgRGlhbG9nVHlwZSB9IGZyb20gJ34vc2hhcmVkL3R5cGVzL2VudW0nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxyXG5cclxuXHRpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHRcdGNvbnN0IGF1dGhTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQXV0aFNlcnZpY2UpO1xyXG5cdFx0Y29uc3QgZGlhbG9nc1NlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChEaWFsb2dzU2VydmljZSk7XHJcblxyXG5cdFx0Y29uc3QgdG9rZW4gPSBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG5cdFx0Y29uc3QgaGVhZGVycyA9IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHQvLyAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIkF1dGhvcml6YXRpb246IFwiK2F1dGhvcml6YXRpb24pO1xyXG5cclxuXHRcdGlmICh0b2tlbikge1xyXG5cdFx0XHRoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBhdXRob3JpemF0aW9uXHJcblx0XHR9XHJcblxyXG5cdFx0cmVxID0gcmVxLmNsb25lKHtcclxuXHRcdFx0c2V0SGVhZGVyczogaGVhZGVyc1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIG5leHQuaGFuZGxlKHJlcSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGRpYWxvZ3NTZXJ2aWNlLnNob3dEaWFsb2coe1xyXG5cdFx0XHRcdHR5cGU6IERpYWxvZ1R5cGUuQWxlcnQsXHJcblx0XHRcdFx0bWVzc2FnZTogcmVzcG9uc2UubWVzc2FnZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiBPYnNlcnZhYmxlLnRocm93KHJlc3BvbnNlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==