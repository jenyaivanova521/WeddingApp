"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var dialog_model_1 = require("~/shared/types/models/dialog.model");
var DialogsService = /** @class */ (function () {
    function DialogsService() {
        this.dialog$ = new Subject_1.Subject();
    }
    DialogsService.prototype.showDialog = function (dialog) {
        this.dialog$.next(new dialog_model_1.Dialog(dialog)); // making new Instance of class Dialog to generate id
    };
    DialogsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], DialogsService);
    return DialogsService;
}());
exports.DialogsService = DialogsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlhbG9ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyx3Q0FBdUM7QUFFdkMsbUVBQTREO0FBRzVEO0lBSUM7UUFGTyxZQUFPLEdBQW9CLElBQUksaUJBQU8sRUFBRSxDQUFDO0lBRWpDLENBQUM7SUFFVCxtQ0FBVSxHQUFqQixVQUFrQixNQUFjO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMscURBQXFEO0lBQzdGLENBQUM7SUFSVyxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQVUxQjtJQUFELHFCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvbW9kZWxzL2RpYWxvZy5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dzU2VydmljZSB7XHJcblxyXG5cdHB1YmxpYyBkaWFsb2ckOiBTdWJqZWN0PERpYWxvZz4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdHB1YmxpYyBzaG93RGlhbG9nKGRpYWxvZzogRGlhbG9nKTogdm9pZCB7XHJcblx0XHR0aGlzLmRpYWxvZyQubmV4dChuZXcgRGlhbG9nKGRpYWxvZykpOyAvLyBtYWtpbmcgbmV3IEluc3RhbmNlIG9mIGNsYXNzIERpYWxvZyB0byBnZW5lcmF0ZSBpZFxyXG5cdH1cclxuXHJcbn0iXX0=