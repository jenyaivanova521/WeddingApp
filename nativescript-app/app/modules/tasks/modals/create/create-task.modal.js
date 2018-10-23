"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("tns-core-modules/platform");
var _ = require("lodash");
var selectors_1 = require("~/root-store/wedding-store/selectors");
var CreateTaskModal = /** @class */ (function () {
    function CreateTaskModal(params, store, changeDetector) {
        this.params = params;
        this.store = store;
        this.changeDetector = changeDetector;
        this.members = [];
        this.values = {
            name: '',
            assignedMemberId: '',
            dueDate: ''
        };
        this.modalType = this.params.context.modalType;
        if (this.modalType === 'edit') {
            var task = this.params.context.task;
            this.values.name = task.name;
            this.values.assignedMemberId = task.assignedMemberId;
            this.values.dueDate = task.dueDate;
        }
        this.width = platform_1.screen.mainScreen.widthDIPs;
    }
    CreateTaskModal.prototype.ngOnInit = function () {
        var _this = this;
        this.membersSubscription = this.store.select(selectors_1.selectActiveWeddingMembers).subscribe(function (members) {
            _this.members = _.map(members, function (member) {
                return {
                    name: member.account.firstName + " " + member.account.lastName,
                    id: member.id,
                };
            });
            _this.selectedMember = _.find(_this.members, function (member) {
                return member.id === _this.values.assignedMemberId;
            });
            _this.changeDetector.markForCheck();
        });
    };
    CreateTaskModal.prototype.ngOnDestroy = function () {
        this.membersSubscription.unsubscribe();
    };
    CreateTaskModal.prototype.close = function (values) {
        this.params.closeCallback(values);
    };
    CreateTaskModal.prototype.setValue = function (valueName, element, useParam) {
        var value = useParam ? element[useParam] : element;
        this.values[valueName] = value;
    };
    CreateTaskModal.prototype.submit = function () {
        if (this.modalType === 'create') {
            this.close(this.values);
        }
        else {
            var res = Object.assign({}, this.params.context.task, this.values);
            this.close(res);
        }
    };
    CreateTaskModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'create-task',
            templateUrl: 'create-task.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams,
            store_1.Store,
            core_1.ChangeDetectorRef])
    ], CreateTaskModal);
    return CreateTaskModal;
}());
exports.CreateTaskModal = CreateTaskModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXRhc2subW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtdGFzay5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0Y7QUFDaEYscUNBQW9DO0FBQ3BDLG1FQUE0RTtBQUU1RSxzREFBbUQ7QUFDbkQsMEJBQTRCO0FBSTVCLGtFQUFrRjtBQU1sRjtJQWVDLHlCQUNTLE1BQXlCLEVBQ3pCLEtBQW1CLEVBQ25CLGNBQWlDO1FBRmpDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBZG5DLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBSTVCLFdBQU0sR0FBUTtZQUNwQixJQUFJLEVBQUUsRUFBRTtZQUNSLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsT0FBTyxFQUFFLEVBQUU7U0FDWCxDQUFDO1FBUUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJBLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQ0FBMEIsQ0FBQyxDQUFDLFNBQVMsQ0FDakYsVUFBQyxPQUFzQjtZQUN0QixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUMzQixVQUFDLE1BQWM7Z0JBQ2QsTUFBTSxDQUFDO29CQUNOLElBQUksRUFBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsU0FBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVU7b0JBQzlELEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtpQkFDYixDQUFBO1lBQ0YsQ0FBQyxDQUNELENBQUM7WUFDRixLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU07Z0JBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FDRCxDQUFBO0lBQ0YsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLCtCQUFLLEdBQVosVUFBYSxNQUFZO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxrQ0FBUSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsT0FBWSxFQUFFLFFBQWlCO1FBQ2pFLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLENBQUM7SUFDRixDQUFDO0lBdkVXLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQztpREFpQmdCLDJCQUFpQjtZQUNsQixhQUFLO1lBQ0ksd0JBQWlCO09BbEI5QixlQUFlLENBeUUzQjtJQUFELHNCQUFDO0NBQUEsQUF6RUQsSUF5RUM7QUF6RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1lbWJlciB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcbmltcG9ydCB7IHNlbGVjdEFjdGl2ZVdlZGRpbmdNZW1iZXJzIH0gZnJvbSAnfi9yb290LXN0b3JlL3dlZGRpbmctc3RvcmUvc2VsZWN0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY3JlYXRlLXRhc2snLFxyXG5cdHRlbXBsYXRlVXJsOiAnY3JlYXRlLXRhc2subW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVUYXNrTW9kYWwgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG5cdHB1YmxpYyBtb2RhbFR5cGU6IHN0cmluZztcclxuXHRwdWJsaWMgd2lkdGg6IGFueTtcclxuXHRwdWJsaWMgbWVtYmVyczogQXJyYXk8TWVtYmVyPiA9IFtdO1xyXG5cclxuXHRwcml2YXRlIG1lbWJlcnNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcblx0cHVibGljIHZhbHVlczogYW55ID0ge1xyXG5cdFx0bmFtZTogJycsXHJcblx0XHRhc3NpZ25lZE1lbWJlcklkOiAnJyxcclxuXHRcdGR1ZURhdGU6ICcnXHJcblx0fTtcclxuXHRwdWJsaWMgc2VsZWN0ZWRNZW1iZXI6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcblx0XHRwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4sXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHQpIHtcclxuXHRcdHRoaXMubW9kYWxUeXBlID0gdGhpcy5wYXJhbXMuY29udGV4dC5tb2RhbFR5cGU7XHJcblxyXG5cdFx0aWYgKHRoaXMubW9kYWxUeXBlID09PSAnZWRpdCcpIHtcclxuXHRcdFx0Y29uc3QgdGFzayA9IHRoaXMucGFyYW1zLmNvbnRleHQudGFzaztcclxuXHRcdFx0dGhpcy52YWx1ZXMubmFtZSA9IHRhc2submFtZTtcclxuXHRcdFx0dGhpcy52YWx1ZXMuYXNzaWduZWRNZW1iZXJJZCA9IHRhc2suYXNzaWduZWRNZW1iZXJJZDtcclxuXHRcdFx0dGhpcy52YWx1ZXMuZHVlRGF0ZSA9IHRhc2suZHVlRGF0ZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1lbWJlcnNTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3RBY3RpdmVXZWRkaW5nTWVtYmVycykuc3Vic2NyaWJlKFxyXG5cdFx0XHQobWVtYmVyczogQXJyYXk8TWVtYmVyPikgPT4ge1xyXG5cdFx0XHRcdHRoaXMubWVtYmVycyA9IF8ubWFwKG1lbWJlcnMsXHJcblx0XHRcdFx0XHQobWVtYmVyOiBNZW1iZXIpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBgJHttZW1iZXIuYWNjb3VudC5maXJzdE5hbWV9ICR7bWVtYmVyLmFjY291bnQubGFzdE5hbWV9YCxcclxuXHRcdFx0XHRcdFx0XHRpZDogbWVtYmVyLmlkLFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkTWVtYmVyID0gXy5maW5kKHRoaXMubWVtYmVycywgKG1lbWJlcikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1lbWJlci5pZCA9PT0gdGhpcy52YWx1ZXMuYXNzaWduZWRNZW1iZXJJZDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG5cdFx0XHR9XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMubWVtYmVyc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlKHZhbHVlcz86IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh2YWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFZhbHVlKHZhbHVlTmFtZTogc3RyaW5nLCBlbGVtZW50OiBhbnksIHVzZVBhcmFtPzogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IHVzZVBhcmFtID8gZWxlbWVudFt1c2VQYXJhbV0gOiBlbGVtZW50O1xyXG5cdFx0dGhpcy52YWx1ZXNbdmFsdWVOYW1lXSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN1Ym1pdCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm1vZGFsVHlwZSA9PT0gJ2NyZWF0ZScpIHtcclxuXHRcdFx0dGhpcy5jbG9zZSh0aGlzLnZhbHVlcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBhcmFtcy5jb250ZXh0LnRhc2ssIHRoaXMudmFsdWVzKTtcclxuXHRcdFx0dGhpcy5jbG9zZShyZXMpXHJcblx0XHR9XHJcblx0fVxyXG5cclxufSJdfQ==