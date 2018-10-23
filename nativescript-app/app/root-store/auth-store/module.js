"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var effects_2 = require("./effects");
var store_1 = require("@ngrx/store");
var reducers_1 = require("./reducers");
var AuthStoreModule = /** @class */ (function () {
    function AuthStoreModule() {
    }
    AuthStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpClientModule,
                store_1.StoreModule.forFeature('auth', reducers_1.reducer),
                effects_1.EffectsModule.forFeature([effects_2.AuthEffects])
            ],
            declarations: [],
            providers: [
                effects_2.AuthEffects
            ]
        })
    ], AuthStoreModule);
    return AuthStoreModule;
}());
exports.AuthStoreModule = AuthStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF3RDtBQUN4RCxzQ0FBeUM7QUFDekMseUNBQThDO0FBQzlDLHFDQUF3QztBQUV4QyxxQ0FBMEM7QUFDMUMsdUNBQXFDO0FBY3JDO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBWjNCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUix1QkFBZ0I7Z0JBQ2hCLG1CQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxrQkFBTyxDQUFDO2dCQUN2Qyx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsQ0FBQzthQUN2QztZQUNELFlBQVksRUFBRSxFQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNWLHFCQUFXO2FBQ1g7U0FDRCxDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgQXV0aEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ2F1dGgnLCByZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbQXV0aEVmZmVjdHNdKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdEF1dGhFZmZlY3RzXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFN0b3JlTW9kdWxlIHsgfVxyXG4iXX0=