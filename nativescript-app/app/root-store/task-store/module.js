"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var effects_2 = require("./effects");
var reducers_1 = require("./reducers");
var TaskStoreModule = /** @class */ (function () {
    function TaskStoreModule() {
    }
    TaskStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('task', reducers_1.reducer),
                effects_1.EffectsModule.forFeature([effects_2.TaskEffects]),
            ],
            providers: [
                effects_2.TaskEffects
            ]
        })
    ], TaskStoreModule);
    return TaskStoreModule;
}());
exports.TaskStoreModule = TaskStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBOEM7QUFDOUMscUNBQTBDO0FBRTFDLHFDQUF3QztBQUV4Qyx1Q0FBcUM7QUFXckM7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFUM0IsZUFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLG1CQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxrQkFBTyxDQUFDO2dCQUN2Qyx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsQ0FBQzthQUN2QztZQUNELFNBQVMsRUFBRTtnQkFDVixxQkFBVzthQUNYO1NBQ0QsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFza0VmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCd0YXNrJywgcmVkdWNlciksXHJcblx0XHRFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1Rhc2tFZmZlY3RzXSksXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdFRhc2tFZmZlY3RzXHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFza1N0b3JlTW9kdWxlIHsgfVxyXG4iXX0=