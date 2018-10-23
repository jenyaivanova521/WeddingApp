"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var effects_2 = require("./effects");
var reducers_1 = require("./reducers");
var store_1 = require("@ngrx/store");
var WeddingStoreModule = /** @class */ (function () {
    function WeddingStoreModule() {
    }
    WeddingStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('wedding', reducers_1.reducer),
                effects_1.EffectsModule.forFeature([effects_2.WeddingEffects])
            ],
            declarations: [],
            providers: [
                effects_2.WeddingEffects
            ]
        })
    ], WeddingStoreModule);
    return WeddingStoreModule;
}());
exports.WeddingStoreModule = WeddingStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBOEM7QUFDOUMscUNBQTJDO0FBRzNDLHVDQUFxQztBQUVyQyxxQ0FBMEM7QUFhMUM7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVg5QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsbUJBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGtCQUFPLENBQUM7Z0JBQzFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsd0JBQWMsQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsWUFBWSxFQUFFLEVBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Ysd0JBQWM7YUFDZDtTQUNELENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBXZWRkaW5nRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cyc7XHJcblxyXG5cclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ3dlZGRpbmcnLCByZWR1Y2VyKSxcclxuXHRcdEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbV2VkZGluZ0VmZmVjdHNdKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFdlZGRpbmdFZmZlY3RzXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2VkZGluZ1N0b3JlTW9kdWxlIHsgfVxyXG4iXX0=