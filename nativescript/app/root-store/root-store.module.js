"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var auth_store_1 = require("~/root-store/auth-store");
var task_store_1 = require("~/root-store/task-store");
var wedding_store_1 = require("~/root-store/wedding-store");
var module_1 = require("./member-store/module");
var profile_store_1 = require("./profile-store");
var message_store_1 = require("./message-store");
var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                auth_store_1.AuthStoreModule,
                task_store_1.TaskStoreModule,
                wedding_store_1.WeddingStoreModule,
                module_1.MemberStoreModule,
                profile_store_1.ProfileStoreModule,
                message_store_1.MessageStoreModule,
                store_1.StoreModule.forRoot({}),
                effects_1.EffectsModule.forRoot([])
            ],
            declarations: []
        })
    ], RootStoreModule);
    return RootStoreModule;
}());
exports.RootStoreModule = RootStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb290LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQ0FBK0M7QUFDL0Msc0NBQXlDO0FBQ3pDLHlDQUE4QztBQUM5QyxxQ0FBMEM7QUFFMUMsc0RBQTBEO0FBQzFELHNEQUEwRDtBQUMxRCw0REFBZ0U7QUFDaEUsZ0RBQTBEO0FBQzFELGlEQUFxRDtBQUNyRCxpREFBcUQ7QUFnQnJEO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBZDNCLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixxQkFBWTtnQkFDWiw0QkFBZTtnQkFDZiw0QkFBZTtnQkFDZixrQ0FBa0I7Z0JBQ2xCLDBCQUFpQjtnQkFDakIsa0NBQWtCO2dCQUNsQixrQ0FBa0I7Z0JBQ2xCLG1CQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsdUJBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsWUFBWSxFQUFFLEVBQUU7U0FDaEIsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXV0aFN0b3JlTW9kdWxlIH0gZnJvbSAnfi9yb290LXN0b3JlL2F1dGgtc3RvcmUnO1xyXG5pbXBvcnQgeyBUYXNrU3RvcmVNb2R1bGUgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvdGFzay1zdG9yZSc7XHJcbmltcG9ydCB7IFdlZGRpbmdTdG9yZU1vZHVsZSB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlJztcclxuaW1wb3J0IHsgTWVtYmVyU3RvcmVNb2R1bGUgfSBmcm9tICcuL21lbWJlci1zdG9yZS9tb2R1bGUnO1xyXG5pbXBvcnQgeyBQcm9maWxlU3RvcmVNb2R1bGUgfSBmcm9tICcuL3Byb2ZpbGUtc3RvcmUnO1xyXG5pbXBvcnQgeyBNZXNzYWdlU3RvcmVNb2R1bGUgfSBmcm9tICcuL21lc3NhZ2Utc3RvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRBdXRoU3RvcmVNb2R1bGUsXHJcblx0XHRUYXNrU3RvcmVNb2R1bGUsXHJcblx0XHRXZWRkaW5nU3RvcmVNb2R1bGUsXHJcblx0XHRNZW1iZXJTdG9yZU1vZHVsZSxcclxuXHRcdFByb2ZpbGVTdG9yZU1vZHVsZSxcclxuXHRcdE1lc3NhZ2VTdG9yZU1vZHVsZSxcclxuXHRcdFN0b3JlTW9kdWxlLmZvclJvb3Qoe30pLFxyXG5cdFx0RWZmZWN0c01vZHVsZS5mb3JSb290KFtdKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm9vdFN0b3JlTW9kdWxlIHsgfVxyXG4iXX0=