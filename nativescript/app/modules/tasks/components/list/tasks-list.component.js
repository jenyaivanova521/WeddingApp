"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("tns-core-modules/platform");
var modals_1 = require("~/modules/tasks/modals");
var actions_1 = require("~/root-store/task-store/actions");
var selectors_1 = require("~/root-store/task-store/selectors");
var selectors_2 = require("~/root-store/wedding-store/selectors");
var modal_service_1 = require("~/shared/services/modal.service");
var TasksListComponent = /** @class */ (function () {
    function TasksListComponent(modalService, store, changeDetector) {
        this.modalService = modalService;
        this.store = store;
        this.changeDetector = changeDetector;
        this.tasks = [];
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
        console.log("---tasklist---");
    }
    TasksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Task List ngOnInit");
        this.tasksSubscription = this.store.select(selectors_1.selectTasks).subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.changeDetector.markForCheck();
        });
        this.activeWeddingSubscription = this.store.select(selectors_2.selectActiveWedding)
            .subscribe(function (activeWedding) {
            if (activeWedding) {
                _this.activeWeddingId = activeWedding.id;
                console.log(_this.activeWeddingId);
            }
        });
    };
    TasksListComponent.prototype.ngOnDestroy = function () {
        this.tasksSubscription.unsubscribe();
        // this.activeWeddingSubscription.unsubscribe();
    };
    TasksListComponent.prototype.openCreateModal = function () {
        var _this = this;
        this.modalService.showModal(modals_1.CreateTaskModal, {
            context: {
                modalType: 'create',
                weddingId: this.activeWeddingId
            }
        })
            .then(function (values) {
            _this.store.dispatch(new actions_1.AddTask({
                weddingId: _this.activeWeddingId,
                task: values
            }));
        });
    };
    TasksListComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks-list',
            templateUrl: 'tasks-list.component.html',
            styleUrls: ['./tasks-list.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [modal_service_1.ModalService,
            store_1.Store,
            core_1.ChangeDetectorRef])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrcy1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0Y7QUFDaEYscUNBQW9DO0FBRXBDLHNEQUFtRDtBQUVuRCxpREFBeUQ7QUFFekQsMkRBQW9FO0FBQ3BFLCtEQUFnRTtBQUVoRSxrRUFBMkU7QUFDM0UsaUVBQStEO0FBUS9EO0lBVUMsNEJBQ1MsWUFBMEIsRUFDMUIsS0FBbUIsRUFDbkIsY0FBaUM7UUFGakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFUbkMsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQVc3QixJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyw4QkFBOEI7UUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFHRCxxQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHVCQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFrQjtZQUNwRixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLCtCQUFtQixDQUFDO2FBQ3JFLFNBQVMsQ0FBQyxVQUFDLGFBQXNCO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsZ0RBQWdEO0lBQ2pELENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsd0JBQWUsRUFBRTtZQUMzQyxPQUFPLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZTthQUMvQjtTQUNELENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQU8sQ0FBQztnQkFDL0IsU0FBUyxFQUFFLEtBQUksQ0FBQyxlQUFlO2dCQUMvQixJQUFJLEVBQUUsTUFBTTthQUNaLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBdERXLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDMUMsQ0FBQztpREFZc0IsNEJBQVk7WUFDbkIsYUFBSztZQUNJLHdCQUFpQjtPQWI5QixrQkFBa0IsQ0F3RDlCO0lBQUQseUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuXHJcbmltcG9ydCB7IENyZWF0ZVRhc2tNb2RhbCB9IGZyb20gJ34vbW9kdWxlcy90YXNrcy9tb2RhbHMnO1xyXG5pbXBvcnQgeyBTdGF0ZSwgVGFzayB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IEFkZFRhc2ssIEVkaXRUYXNrIH0gZnJvbSAnfi9yb290LXN0b3JlL3Rhc2stc3RvcmUvYWN0aW9ucyc7XHJcbmltcG9ydCB7IHNlbGVjdFRhc2tzIH0gZnJvbSAnfi9yb290LXN0b3JlL3Rhc2stc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcbmltcG9ydCB7IHNlbGVjdEFjdGl2ZVdlZGRpbmcgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9tb2RhbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICd0YXNrcy1saXN0JyxcclxuXHR0ZW1wbGF0ZVVybDogJ3Rhc2tzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3Rhc2tzLWxpc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFza3NMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRwdWJsaWMgY29udGFpbmVySGVpZ2h0O1xyXG5cclxuXHRwdWJsaWMgdGFza3M6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcblx0cHJpdmF0ZSBhY3RpdmVXZWRkaW5nSWQ6IHN0cmluZztcclxuXHRwcml2YXRlIHRhc2tzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblx0cHVibGljIGFjdGl2ZVdlZGRpbmdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0KSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lckhlaWdodCA9IHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgLSAxNDA7IC8vIFRvcGJhciBoZWlnaHQgKyBzb21lIG1hcmdpblxyXG5cdFx0Y29uc29sZS5sb2coXCItLS10YXNrbGlzdC0tLVwiKVxyXG5cdH1cclxuXHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJUYXNrIExpc3QgbmdPbkluaXRcIik7XHJcblx0XHR0aGlzLnRhc2tzU3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0VGFza3MpLnN1YnNjcmliZSgodGFza3M6IEFycmF5PFRhc2s+KSA9PiB7XHJcblx0XHRcdHRoaXMudGFza3MgPSB0YXNrcztcclxuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZlV2VkZGluZ1N1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdEFjdGl2ZVdlZGRpbmcpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmcpID0+IHtcclxuXHRcdFx0XHRpZiAoYWN0aXZlV2VkZGluZykge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXZWRkaW5nSWQgPSBhY3RpdmVXZWRkaW5nLmlkO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5hY3RpdmVXZWRkaW5nSWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0dGhpcy50YXNrc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5hY3RpdmVXZWRkaW5nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb3BlbkNyZWF0ZU1vZGFsKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKENyZWF0ZVRhc2tNb2RhbCwge1xyXG5cdFx0XHRcdGNvbnRleHQ6IHtcclxuXHRcdFx0XHRcdG1vZGFsVHlwZTogJ2NyZWF0ZScsXHJcblx0XHRcdFx0XHR3ZWRkaW5nSWQ6IHRoaXMuYWN0aXZlV2VkZGluZ0lkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbigodmFsdWVzOiBhbnkpID0+IHtcclxuXHRcdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQWRkVGFzayh7XHJcblx0XHRcdFx0d2VkZGluZ0lkOiB0aGlzLmFjdGl2ZVdlZGRpbmdJZCxcclxuXHRcdFx0XHR0YXNrOiB2YWx1ZXNcclxuXHRcdFx0fSkpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==