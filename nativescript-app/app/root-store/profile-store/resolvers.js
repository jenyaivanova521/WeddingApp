"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var store_1 = require("@ngrx/store");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var selectors_1 = require("./selectors");
var ActiveProfileResolver = /** @class */ (function () {
    function ActiveProfileResolver(store) {
        this.store = store;
    }
    ActiveProfileResolver.prototype.resolve = function () {
        return this.store.select(selectors_1.selectActiveProfile).pipe(operators_1.filter(function (profile) { return profile != null; }), operators_1.take(1));
    };
    ActiveProfileResolver = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [store_1.Store])
    ], ActiveProfileResolver);
    return ActiveProfileResolver;
}());
exports.ActiveProfileResolver = ActiveProfileResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvQztBQUNwQyxzQ0FBMkM7QUFHM0MsNENBQThDO0FBSTlDLHlDQUFrRDtBQUdsRDtJQUNJLCtCQUNZLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7SUFDM0IsQ0FBQztJQUVMLHVDQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsK0JBQW1CLENBQUMsQ0FBQyxJQUFJLENBQzlDLGtCQUFNLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLElBQUksSUFBSSxFQUFmLENBQWUsQ0FBQyxFQUNsQyxnQkFBSSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUM7SUFDTixDQUFDO0lBVlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7aURBR1UsYUFBSztPQUZmLHFCQUFxQixDQVlqQztJQUFELDRCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0YWtlLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi4vY29tbW9uLW1vZGVscyc7XHJcbmltcG9ydCB7IHNlbGVjdEFjdGl2ZVByb2ZpbGUgfSBmcm9tICcuL3NlbGVjdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3RpdmVQcm9maWxlUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPFByb2ZpbGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICByZXNvbHZlKCk6IE9ic2VydmFibGU8UHJvZmlsZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RBY3RpdmVQcm9maWxlKS5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIocHJvZmlsZSA9PiBwcm9maWxlICE9IG51bGwpLFxyXG4gICAgICAgICAgICB0YWtlKDEpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19