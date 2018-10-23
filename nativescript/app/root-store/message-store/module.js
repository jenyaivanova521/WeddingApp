"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var effects_2 = require("./effects");
var reducers_1 = require("./reducers");
var MessageStoreModule = /** @class */ (function () {
    function MessageStoreModule() {
    }
    MessageStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('message', reducers_1.reducer),
                effects_1.EffectsModule.forFeature([effects_2.MessageEffects])
            ],
            declarations: [],
            providers: [
                effects_2.MessageEffects
            ]
        })
    ], MessageStoreModule);
    return MessageStoreModule;
}());
exports.MessageStoreModule = MessageStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBOEM7QUFDOUMscUNBQTBDO0FBRTFDLHFDQUEyQztBQUMzQyx1Q0FBcUM7QUFhckM7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVg5QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsbUJBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGtCQUFPLENBQUM7Z0JBQzFDLHVCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsd0JBQWMsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsWUFBWSxFQUFFLEVBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asd0JBQWM7YUFDakI7U0FDSixDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cyc7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgnbWVzc2FnZScsIHJlZHVjZXIpLFxyXG4gICAgICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbTWVzc2FnZUVmZmVjdHNdKVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIE1lc3NhZ2VFZmZlY3RzXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU3RvcmVNb2R1bGUgeyB9XHJcbiJdfQ==