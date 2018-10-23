"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var _ = require("lodash");
var dialogs_service_1 = require("~/shared/services/dialogs.service");
var DialogsComponent = /** @class */ (function () {
    function DialogsComponent(dialogsService, changeDetector) {
        this.dialogsService = dialogsService;
        this.changeDetector = changeDetector;
        this.dialogs = [];
    }
    DialogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogsSubscription = this.dialogsService.dialog$.subscribe(function (newDialog) {
            _this.dialogs.push(newDialog);
            _this.changeDetector.markForCheck();
            setTimeout(function () {
                _this.dialogs = _.filter(_this.dialogs, function (dialog) {
                    return dialog.id !== newDialog.id;
                });
                _this.changeDetector.markForCheck();
            }, 5000);
        });
    };
    DialogsComponent.prototype.ngOnDestroy = function () {
        this.dialogsSubscription.unsubscribe();
    };
    DialogsComponent.prototype.removeDialog = function (id) {
        this.dialogs = _.filter(this.dialogs, function (dialog) {
            return dialog.id !== id;
        });
        console.log(this.dialogs);
        this.changeDetector.markForCheck();
    };
    DialogsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialogs-display',
            templateUrl: 'dialogs.component.html',
            styleUrls: ['./dialogs.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_service_1.DialogsService,
            core_1.ChangeDetectorRef])
    ], DialogsComponent);
    return DialogsComponent;
}());
exports.DialogsComponent = DialogsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FNdUI7QUFFdkIsMEJBQTRCO0FBRzVCLHFFQUFtRTtBQVNuRTtJQU1DLDBCQUNTLGNBQThCLEVBQzlCLGNBQWlDO1FBRGpDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFObkMsWUFBTyxHQUFrQixFQUFFLENBQUM7SUFPL0IsQ0FBQztJQUVMLG1DQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhBLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxTQUFpQjtZQUNsRixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRW5DLFVBQVUsQ0FBQztnQkFDVixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWM7b0JBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sdUNBQVksR0FBbkIsVUFBb0IsRUFBVTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQWM7WUFDcEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBbkNXLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUMvQyxDQUFDO2lEQVF3QixnQ0FBYztZQUNkLHdCQUFpQjtPQVI5QixnQkFBZ0IsQ0FvQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG5cdENoYW5nZURldGVjdG9yUmVmLFxyXG5cdENvbXBvbmVudCxcclxuXHRPbkRlc3Ryb3ksXHJcblx0T25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvbW9kZWxzJztcclxuaW1wb3J0IHsgRGlhbG9nc1NlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9kaWFsb2dzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2RpYWxvZ3MtZGlzcGxheScsXHJcblx0dGVtcGxhdGVVcmw6ICdkaWFsb2dzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9kaWFsb2dzLmNvbXBvbmVudC5zY3NzJ10sXHJcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIERpYWxvZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblxyXG5cdHB1YmxpYyBkaWFsb2dzOiBBcnJheTxEaWFsb2c+ID0gW107XHJcblxyXG5cdHByaXZhdGUgZGlhbG9nc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZGlhbG9nc1NlcnZpY2U6IERpYWxvZ3NTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuXHQpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZGlhbG9nc1N1YnNjcmlwdGlvbiA9IHRoaXMuZGlhbG9nc1NlcnZpY2UuZGlhbG9nJC5zdWJzY3JpYmUoKG5ld0RpYWxvZzogRGlhbG9nKSA9PiB7XHJcblx0XHRcdHRoaXMuZGlhbG9ncy5wdXNoKG5ld0RpYWxvZyk7XHJcblx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ3MgPSBfLmZpbHRlcih0aGlzLmRpYWxvZ3MsIChkaWFsb2c6IERpYWxvZykgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGRpYWxvZy5pZCAhPT0gbmV3RGlhbG9nLmlkO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5kaWFsb2dzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlRGlhbG9nKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdHRoaXMuZGlhbG9ncyA9IF8uZmlsdGVyKHRoaXMuZGlhbG9ncywgKGRpYWxvZzogRGlhbG9nKSA9PiB7XHJcblx0XHRcdHJldHVybiBkaWFsb2cuaWQgIT09IGlkO1xyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLmRpYWxvZ3MpO1xyXG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuXHR9XHJcbn1cclxuIl19