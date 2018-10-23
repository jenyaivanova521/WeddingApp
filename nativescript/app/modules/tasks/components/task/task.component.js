"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("tns-core-modules/platform");
var modals_1 = require("~/modules/tasks/modals");
var actions_1 = require("~/root-store/task-store/actions");
var services_1 = require("~/shared/services");
var enum_1 = require("~/shared/types/enum");
var TaskComponent = /** @class */ (function () {
    function TaskComponent(modalService, store) {
        this.modalService = modalService;
        this.store = store;
        this.showActions = false;
        this.containerWidth = platform_1.screen.mainScreen.widthDIPs;
        console.log("---task---");
    }
    TaskComponent.prototype.toggleActions = function () {
        this.showActions = !this.showActions;
    };
    TaskComponent.prototype.openEditModal = function (task) {
        var _this = this;
        this.modalService.showModal(modals_1.CreateTaskModal, {
            context: {
                task: task,
                weddingId: this.activeWeddingId,
                modalType: 'edit'
            }
        }).then(function (res) {
            _this.store.dispatch(new actions_1.EditTask({
                weddingId: _this.activeWeddingId,
                task: res
            }));
        });
    };
    TaskComponent.prototype.deleteTask = function (task) {
        this.store.dispatch(new actions_1.DeleteTask({ weddingId: this.activeWeddingId, taskId: task.id }));
    };
    TaskComponent.prototype.updateTaskStatus = function (task, update) {
        var status = update ? enum_1.TaskStatusEnum.Done : enum_1.TaskStatusEnum.Todo;
        this.store.dispatch(new actions_1.SetTaskStatus({ taskId: task.id, weddingId: this.activeWeddingId, status: status }));
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], TaskComponent.prototype, "activeWeddingId", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'task',
            templateUrl: 'task.component.html',
            styleUrls: ['../list/tasks-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBaUQ7QUFDakQscUNBQW9DO0FBQ3BDLHNEQUFtRDtBQUNuRCxpREFBeUQ7QUFHekQsMkRBQXNGO0FBQ3RGLDhDQUFpRDtBQUNqRCw0Q0FBcUQ7QUFRckQ7SUFRQyx1QkFDUyxZQUEwQixFQUMxQixLQUFtQjtRQURuQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBTHJCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBT25DLElBQUksQ0FBQyxjQUFjLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUVNLHFDQUFhLEdBQXBCLFVBQXFCLElBQVU7UUFBL0IsaUJBaUJDO1FBaEJBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHdCQUFlLEVBQUU7WUFDNUMsT0FBTyxFQUFFO2dCQUNSLElBQUksRUFBRSxJQUFJO2dCQUNWLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDL0IsU0FBUyxFQUFFLE1BQU07YUFDakI7U0FDRCxDQUFDLENBQUMsSUFBSSxDQUNOLFVBQUMsR0FBUztZQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQVEsQ0FDL0I7Z0JBQ0MsU0FBUyxFQUFFLEtBQUksQ0FBQyxlQUFlO2dCQUMvQixJQUFJLEVBQUUsR0FBRzthQUNULENBQ0QsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUNELENBQUE7SUFDRixDQUFDO0lBRU0sa0NBQVUsR0FBakIsVUFBa0IsSUFBVTtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLG9CQUFVLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRU0sd0NBQWdCLEdBQXZCLFVBQXdCLElBQVUsRUFBRSxNQUFlO1FBQ2xELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMscUJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFjLENBQUMsSUFBSSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksdUJBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sUUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUE1Q1E7UUFBUixZQUFLLEVBQUU7OzBEQUF5QjtJQUN4QjtRQUFSLFlBQUssRUFBRTs7K0NBQVk7SUFIUixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztTQUNoRCxDQUFDO2lEQVVzQix1QkFBWTtZQUNuQixhQUFLO09BVlQsYUFBYSxDQWdEekI7SUFBRCxvQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IENyZWF0ZVRhc2tNb2RhbCB9IGZyb20gJ34vbW9kdWxlcy90YXNrcy9tb2RhbHMnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGUsIFRhc2sgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBEZWxldGVUYXNrLCBFZGl0VGFzaywgU2V0VGFza1N0YXR1cyB9IGZyb20gJ34vcm9vdC1zdG9yZS90YXNrLXN0b3JlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFRhc2tTdGF0dXNFbnVtIH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAndGFzaycsXHJcblx0dGVtcGxhdGVVcmw6ICd0YXNrLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vbGlzdC90YXNrcy1saXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhc2tDb21wb25lbnQge1xyXG5cclxuXHRASW5wdXQoKSBhY3RpdmVXZWRkaW5nSWQ6IHN0cmluZztcclxuXHRASW5wdXQoKSB0YXNrOiBUYXNrO1xyXG5cclxuXHRwdWJsaWMgc2hvd0FjdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuXHRcdHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlPixcclxuXHQpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyV2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLXRhc2stLS1cIilcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVBY3Rpb25zKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93QWN0aW9ucyA9ICF0aGlzLnNob3dBY3Rpb25zO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9wZW5FZGl0TW9kYWwodGFzazogVGFzayk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKENyZWF0ZVRhc2tNb2RhbCwge1xyXG5cdFx0XHRjb250ZXh0OiB7XHJcblx0XHRcdFx0dGFzazogdGFzayxcclxuXHRcdFx0XHR3ZWRkaW5nSWQ6IHRoaXMuYWN0aXZlV2VkZGluZ0lkLFxyXG5cdFx0XHRcdG1vZGFsVHlwZTogJ2VkaXQnXHJcblx0XHRcdH1cclxuXHRcdH0pLnRoZW4oXHJcblx0XHRcdChyZXM6IFRhc2spID0+IHtcclxuXHRcdFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBFZGl0VGFzayhcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0d2VkZGluZ0lkOiB0aGlzLmFjdGl2ZVdlZGRpbmdJZCxcclxuXHRcdFx0XHRcdFx0dGFzazogcmVzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KSlcclxuXHRcdFx0fVxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0cHVibGljIGRlbGV0ZVRhc2sodGFzazogVGFzayk6IHZvaWQge1xyXG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGVsZXRlVGFzayh7d2VkZGluZ0lkOiB0aGlzLmFjdGl2ZVdlZGRpbmdJZCwgdGFza0lkOiB0YXNrLmlkfSkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZVRhc2tTdGF0dXModGFzazogVGFzaywgdXBkYXRlOiBib29sZWFuKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdGF0dXMgPSB1cGRhdGUgPyBUYXNrU3RhdHVzRW51bS5Eb25lIDogVGFza1N0YXR1c0VudW0uVG9kbztcclxuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNldFRhc2tTdGF0dXMoe3Rhc2tJZDogdGFzay5pZCwgd2VkZGluZ0lkOiB0aGlzLmFjdGl2ZVdlZGRpbmdJZCwgc3RhdHVzfSkpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19