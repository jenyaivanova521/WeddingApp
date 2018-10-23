"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var components_1 = require("~/modules/tasks/components");
var modals_1 = require("~/modules/tasks/modals");
var shared_module_1 = require("../shared.module");
var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                components_1.TasksListComponent,
                components_1.TaskComponent,
                modals_1.CreateTaskModal,
            ],
            entryComponents: [
                modals_1.CreateTaskModal,
            ],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
            ],
            exports: []
        })
    ], TasksModule);
    return TasksModule;
}());
exports.TasksModule = TasksModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFFL0MseURBR29DO0FBQ3BDLGlEQUF5RDtBQUV6RCxrREFBZ0Q7QUFrQmhEO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFoQnZCLGVBQVEsQ0FBQztZQUNULFlBQVksRUFBRTtnQkFDYiwrQkFBa0I7Z0JBQ2xCLDBCQUFhO2dCQUNiLHdCQUFlO2FBQ2Y7WUFDRCxlQUFlLEVBQUU7Z0JBQ2hCLHdCQUFlO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IscUJBQVk7Z0JBQ1osNEJBQVk7YUFDWjtZQUNELE9BQU8sRUFBRSxFQUNSO1NBQ0QsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG5cdFRhc2tDb21wb25lbnQsXHJcblx0VGFza3NMaXN0Q29tcG9uZW50XHJcbn0gZnJvbSAnfi9tb2R1bGVzL3Rhc2tzL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBDcmVhdGVUYXNrTW9kYWwgfSBmcm9tICd+L21vZHVsZXMvdGFza3MvbW9kYWxzJztcclxuXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdFRhc2tzTGlzdENvbXBvbmVudCxcclxuXHRcdFRhc2tDb21wb25lbnQsXHJcblx0XHRDcmVhdGVUYXNrTW9kYWwsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdENyZWF0ZVRhc2tNb2RhbCxcclxuXHRdLFxyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdFNoYXJlZE1vZHVsZSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXNrc01vZHVsZSB7IH0iXX0=