"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var effects_2 = require("./effects");
var reducers_1 = require("./reducers");
var resolvers_1 = require("./resolvers");
var ProfileStoreModule = /** @class */ (function () {
    function ProfileStoreModule() {
    }
    ProfileStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('profile', reducers_1.reducer),
                effects_1.EffectsModule.forFeature([effects_2.ProfileEffects])
            ],
            declarations: [],
            providers: [
                effects_2.ProfileEffects,
                resolvers_1.ActiveProfileResolver
            ]
        })
    ], ProfileStoreModule);
    return ProfileStoreModule;
}());
exports.ProfileStoreModule = ProfileStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBOEM7QUFDOUMscUNBQTBDO0FBRTFDLHFDQUEyQztBQUMzQyx1Q0FBcUM7QUFDckMseUNBQW9EO0FBY3BEO0lBQUE7SUFBa0MsQ0FBQztJQUF0QixrQkFBa0I7UUFaOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG1CQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxrQkFBTyxDQUFDO2dCQUMxQyx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHdCQUFjLENBQUMsQ0FBQzthQUM3QztZQUNELFlBQVksRUFBRSxFQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHdCQUFjO2dCQUNkLGlDQUFxQjthQUN4QjtTQUNKLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmltcG9ydCB7IFByb2ZpbGVFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgeyBBY3RpdmVQcm9maWxlUmVzb2x2ZXIgfSBmcm9tICcuL3Jlc29sdmVycyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ3Byb2ZpbGUnLCByZWR1Y2VyKSxcclxuICAgICAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1Byb2ZpbGVFZmZlY3RzXSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBQcm9maWxlRWZmZWN0cyxcclxuICAgICAgICBBY3RpdmVQcm9maWxlUmVzb2x2ZXJcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTdG9yZU1vZHVsZSB7IH1cclxuIl19