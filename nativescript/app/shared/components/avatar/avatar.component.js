"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configs_1 = require("~/shared/configs");
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
        this.square = false;
    }
    AvatarComponent.prototype.getUrl = function () {
        if (this.src) {
            this.imageSrc = this.src;
            return;
        }
        if (this.filename) {
            this.imageSrc = configs_1.CDN_URL + '/' + (this.dir ? this.dir + '/' : '') + this.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
        }
        else {
            this.imageSrc = '~/resources/images/avatar.png';
        }
    };
    AvatarComponent.prototype.ngOnInit = function () {
        this.getUrl();
    };
    AvatarComponent.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            this[key] = changes[key].currentValue;
        }
        this.getUrl();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AvatarComponent.prototype, "filename", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AvatarComponent.prototype, "size", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AvatarComponent.prototype, "src", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AvatarComponent.prototype, "dir", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AvatarComponent.prototype, "square", void 0);
    AvatarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'avatar',
            templateUrl: 'avatar.component.html',
            styleUrls: ['./avatar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW1GO0FBQ25GLDRDQUEyQztBQU8zQztJQVFDO1FBSFMsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUdSLENBQUM7SUFFakIsZ0NBQU0sR0FBTjtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsK0JBQStCLENBQUM7UUFDakQsQ0FBQztJQUNGLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNqQyxHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0lBOUJRO1FBQVIsWUFBSyxFQUFFOztxREFBVTtJQUNUO1FBQVIsWUFBSyxFQUFFOztpREFBTTtJQUNMO1FBQVIsWUFBSyxFQUFFOztnREFBSztJQUNKO1FBQVIsWUFBSyxFQUFFOztnREFBSztJQUNKO1FBQVIsWUFBSyxFQUFFOzttREFBZ0I7SUFMWixlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7O09BQ1csZUFBZSxDQWlDM0I7SUFBRCxzQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ0ROX1VSTCB9IGZyb20gJ34vc2hhcmVkL2NvbmZpZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhdmF0YXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hdmF0YXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cdEBJbnB1dCgpIGZpbGVuYW1lO1xyXG5cdEBJbnB1dCgpIHNpemU7XHJcblx0QElucHV0KCkgc3JjO1xyXG5cdEBJbnB1dCgpIGRpcjtcclxuXHRASW5wdXQoKSBzcXVhcmUgPSBmYWxzZTtcclxuXHRpbWFnZVNyYzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuXHRnZXRVcmwoKSB7XHJcblx0XHRpZiAodGhpcy5zcmMpIHtcclxuXHRcdFx0dGhpcy5pbWFnZVNyYyA9IHRoaXMuc3JjO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5maWxlbmFtZSkgeyAvLyBUT0RPIHVzZSBlbnYgZm9yIGNkbiBsaW5rXHJcblx0XHRcdHRoaXMuaW1hZ2VTcmMgPSBDRE5fVVJMICsgJy8nICsgKHRoaXMuZGlyID8gdGhpcy5kaXIgKyAnLycgOiAnJykgKyB0aGlzLmZpbGVuYW1lLnJlcGxhY2UoLyhcXC5bXFx3XFxkXy1dKykkL2ksICdfc3EkMScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pbWFnZVNyYyA9ICd+L3Jlc291cmNlcy9pbWFnZXMvYXZhdGFyLnBuZyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMuZ2V0VXJsKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcblx0XHRmb3IobGV0IGtleSBpbiBjaGFuZ2VzKSB7XHJcblx0XHRcdHRoaXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmdldFVybCgpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19