"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var platform_1 = require("tns-core-modules/platform");
var selectors_1 = require("~/root-store/task-store/selectors");
var selectors_2 = require("~/root-store/wedding-store/selectors");
var modal_service_1 = require("~/shared/services/modal.service");
var router_1 = require("nativescript-angular/router");
var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(modalService, store, changeDetector, routerExtensions) {
        this.modalService = modalService;
        this.store = store;
        this.changeDetector = changeDetector;
        this.routerExtensions = routerExtensions;
        this.tasks = [];
        this.DistanceOption = [
            'Any                        ',
            '25 kilimeters',
            '5 kilometers    ',
            '50 kilometers',
            '10 kilometers ',
            '100 kilometers'
        ];
        this.Rating_starOption = [
            'Any                  ',
            '3 stars              ',
            '1 stars             ',
            '4 stars              ',
            '2 stars              ',
            '5 stars               '
        ];
        this.RatingOption = [
            'Any                   ',
            '$$$ - Moderate',
            '$ - Inexpensive   ',
            '$$$$ - Expensive',
            '$$ - Affordabe',
        ];
        this.containerHeight = platform_1.screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasksSubscription = this.store.select(selectors_1.selectTasks).subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.changeDetector.markForCheck();
        });
        this.activeWeddingSubscription = this.store.select(selectors_2.selectActiveWedding)
            .subscribe(function (activeWedding) {
            if (activeWedding) {
                _this.activeWeddingId = activeWedding.id;
            }
        });
    };
    FiltersComponent.prototype.ngOnDestroy = function () {
        //this.tasksSubscription.unsubscribe();
        this.activeWeddingSubscription.unsubscribe();
    };
    // public openCreateModal(): void {
    // 	this.modalService.showModal(CreateTaskModal, {
    // 			context: {
    // 				modalType: 'create',
    // 				weddingId: this.activeWeddingId
    // 			}
    // 		})
    // 		.then((values: any) => {
    // 		this.store.dispatch(new AddTask({
    // 			weddingId: this.activeWeddingId,
    // 			task: values
    // 		}))
    // 	});
    // }
    FiltersComponent.prototype.close = function () {
        this.routerExtensions.back();
    };
    FiltersComponent.prototype.nextStep = function () {
        this.routerExtensions.back();
    };
    FiltersComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'filters',
            templateUrl: 'filters.component.html',
            styleUrls: ['./filters.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [modal_service_1.ModalService,
            store_1.Store,
            core_1.ChangeDetectorRef,
            router_1.RouterExtensions])
    ], FiltersComponent);
    return FiltersComponent;
}());
exports.FiltersComponent = FiltersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0Y7QUFDaEYscUNBQW9DO0FBRXBDLHNEQUFtRDtBQUtuRCwrREFBZ0U7QUFFaEUsa0VBQTJFO0FBQzNFLGlFQUErRDtBQUMvRCxzREFBOEQ7QUFROUQ7SUFtQ0MsMEJBQ1MsWUFBMEIsRUFDMUIsS0FBbUIsRUFDbkIsY0FBaUMsRUFDakMsZ0JBQWtDO1FBSGxDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFuQ3BDLFVBQUssR0FBZSxFQUFFLENBQUM7UUFLdkIsbUJBQWMsR0FBa0I7WUFDdEMsNkJBQTZCO1lBQzdCLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixnQkFBZ0I7U0FDaEIsQ0FBQztRQUVLLHNCQUFpQixHQUFrQjtZQUN6Qyx1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtTQUN4QixDQUFDO1FBRUssaUJBQVksR0FBa0I7WUFDcEMsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjtTQUVoQixDQUFDO1FBT0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsOEJBQThCO0lBQzFGLENBQUM7SUFHRCxtQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsdUJBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWtCO1lBQ3BGLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsK0JBQW1CLENBQUM7YUFDckUsU0FBUyxDQUFDLFVBQUMsYUFBc0I7WUFDakMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1lBQ3pDLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0MsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLGtEQUFrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0QyxPQUFPO0lBQ1AsT0FBTztJQUNQLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLElBQUk7SUFDSixnQ0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQzdCLENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFBO0lBRTdCLENBQUM7SUFwRlcsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO2lEQXFDc0IsNEJBQVk7WUFDbkIsYUFBSztZQUNJLHdCQUFpQjtZQUNmLHlCQUFnQjtPQXZDL0IsZ0JBQWdCLENBc0Y1QjtJQUFELHVCQUFDO0NBQUEsQUF0RkQsSUFzRkM7QUF0RlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcblxyXG5pbXBvcnQgeyBDcmVhdGVUYXNrTW9kYWwgfSBmcm9tICd+L21vZHVsZXMvdGFza3MvbW9kYWxzJztcclxuaW1wb3J0IHsgU3RhdGUsIFRhc2sgfSBmcm9tICd+L3Jvb3Qtc3RvcmUnO1xyXG5pbXBvcnQgeyBBZGRUYXNrLCBFZGl0VGFzayB9IGZyb20gJ34vcm9vdC1zdG9yZS90YXNrLXN0b3JlL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBzZWxlY3RUYXNrcyB9IGZyb20gJ34vcm9vdC1zdG9yZS90YXNrLXN0b3JlL3NlbGVjdG9ycyc7XHJcbmltcG9ydCB7IFdlZGRpbmcgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzZWxlY3RBY3RpdmVXZWRkaW5nIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvc2VsZWN0b3JzJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnZmlsdGVycycsXHJcblx0dGVtcGxhdGVVcmw6ICdmaWx0ZXJzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9maWx0ZXJzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdHB1YmxpYyBjb250YWluZXJIZWlnaHQ7XHJcblxyXG5cdHB1YmxpYyB0YXNrczogQXJyYXk8YW55PiA9IFtdO1xyXG5cclxuXHRwcml2YXRlIGFjdGl2ZVdlZGRpbmdJZDogc3RyaW5nO1xyXG5cdHByaXZhdGUgdGFza3NTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHRwdWJsaWMgYWN0aXZlV2VkZGluZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cdHB1YmxpYyBEaXN0YW5jZU9wdGlvbjogQXJyYXk8c3RyaW5nPiA9IFtcclxuXHRcdCdBbnkgICAgICAgICAgICAgICAgICAgICAgICAnLFxyXG5cdFx0JzI1IGtpbGltZXRlcnMnLFxyXG5cdFx0JzUga2lsb21ldGVycyAgICAnLFxyXG5cdFx0JzUwIGtpbG9tZXRlcnMnLFxyXG5cdFx0JzEwIGtpbG9tZXRlcnMgJyxcclxuXHRcdCcxMDAga2lsb21ldGVycydcclxuXHRdO1xyXG5cclxuXHRwdWJsaWMgUmF0aW5nX3N0YXJPcHRpb246IEFycmF5PHN0cmluZz4gPSBbXHJcblx0XHQnQW55ICAgICAgICAgICAgICAgICAgJyxcclxuXHRcdCczIHN0YXJzICAgICAgICAgICAgICAnLFxyXG5cdFx0JzEgc3RhcnMgICAgICAgICAgICAgJyxcclxuXHRcdCc0IHN0YXJzICAgICAgICAgICAgICAnLFxyXG5cdFx0JzIgc3RhcnMgICAgICAgICAgICAgICcsXHJcblx0XHQnNSBzdGFycyAgICAgICAgICAgICAgICdcclxuXHRdO1xyXG5cclxuXHRwdWJsaWMgUmF0aW5nT3B0aW9uOiBBcnJheTxzdHJpbmc+ID0gW1xyXG5cdFx0J0FueSAgICAgICAgICAgICAgICAgICAnLFxyXG5cdFx0JyQkJCAtIE1vZGVyYXRlJyxcclxuXHRcdCckIC0gSW5leHBlbnNpdmUgICAnLFxyXG5cdFx0JyQkJCQgLSBFeHBlbnNpdmUnLFxyXG5cdFx0JyQkIC0gQWZmb3JkYWJlJyxcclxuXHRcdFxyXG5cdF07XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+LFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuXHQpIHtcclxuXHRcdHRoaXMuY29udGFpbmVySGVpZ2h0ID0gc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcyAtIDE0MDsgLy8gVG9wYmFyIGhlaWdodCArIHNvbWUgbWFyZ2luXHJcblx0fVxyXG5cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnRhc2tzU3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0VGFza3MpLnN1YnNjcmliZSgodGFza3M6IEFycmF5PFRhc2s+KSA9PiB7XHJcblx0XHRcdHRoaXMudGFza3MgPSB0YXNrcztcclxuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZlV2VkZGluZ1N1YnNjcmlwdGlvbiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdEFjdGl2ZVdlZGRpbmcpXHJcblx0XHRcdC5zdWJzY3JpYmUoKGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmcpID0+IHtcclxuXHRcdFx0XHRpZiAoYWN0aXZlV2VkZGluZykge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmVXZWRkaW5nSWQgPSBhY3RpdmVXZWRkaW5nLmlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0Ly90aGlzLnRhc2tzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLmFjdGl2ZVdlZGRpbmdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdC8vIHB1YmxpYyBvcGVuQ3JlYXRlTW9kYWwoKTogdm9pZCB7XHJcblx0Ly8gXHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQ3JlYXRlVGFza01vZGFsLCB7XHJcblx0Ly8gXHRcdFx0Y29udGV4dDoge1xyXG5cdC8vIFx0XHRcdFx0bW9kYWxUeXBlOiAnY3JlYXRlJyxcclxuXHQvLyBcdFx0XHRcdHdlZGRpbmdJZDogdGhpcy5hY3RpdmVXZWRkaW5nSWRcclxuXHQvLyBcdFx0XHR9XHJcblx0Ly8gXHRcdH0pXHJcblx0Ly8gXHRcdC50aGVuKCh2YWx1ZXM6IGFueSkgPT4ge1xyXG5cdC8vIFx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBBZGRUYXNrKHtcclxuXHQvLyBcdFx0XHR3ZWRkaW5nSWQ6IHRoaXMuYWN0aXZlV2VkZGluZ0lkLFxyXG5cdC8vIFx0XHRcdHRhc2s6IHZhbHVlc1xyXG5cdC8vIFx0XHR9KSlcclxuXHQvLyBcdH0pO1xyXG5cdC8vIH1cclxuXHRjbG9zZSgpIHtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKClcclxuXHR9XHJcblx0bmV4dFN0ZXAoKSB7XHJcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpXHJcblxyXG5cdH1cclxuXHJcbn1cclxuIl19