"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var services_1 = require("~/shared/services");
var MemberComponent = /** @class */ (function () {
    function MemberComponent(modalService, store) {
        this.modalService = modalService;
        this.store = store;
    }
    MemberComponent.prototype.delete = function () {
        // TODO delete
    };
    MemberComponent.prototype.update = function (member, update) {
        // TODO update
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], MemberComponent.prototype, "member", void 0);
    MemberComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member',
            templateUrl: 'member.component.html',
            styleUrls: ['./member.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWlEO0FBQ2pELHFDQUFvQztBQUdwQyw4Q0FBaUQ7QUFRakQ7SUFJQyx5QkFDUyxZQUEwQixFQUMxQixLQUFtQjtRQURuQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFjO0lBRzVCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0MsY0FBYztJQUNmLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsTUFBVyxFQUFFLE1BQU07UUFDaEMsY0FBYztJQUNmLENBQUM7SUFmUTtRQUFSLFlBQUssRUFBRTs7bURBQWE7SUFGVCxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO2lEQU1zQix1QkFBWTtZQUNuQixhQUFLO09BTlQsZUFBZSxDQW1CM0I7SUFBRCxzQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ21lbWJlcicsXHJcblx0dGVtcGxhdGVVcmw6ICdtZW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL21lbWJlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW1iZXJDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBtZW1iZXI6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZWxldGUoKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPIGRlbGV0ZVxyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZShtZW1iZXI6IGFueSwgdXBkYXRlKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPIHVwZGF0ZVxyXG5cdH1cclxuXHJcbn1cclxuIl19