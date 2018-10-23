"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var _ = require("lodash");
var ListSelectModal = /** @class */ (function () {
    function ListSelectModal(params, changeDetector) {
        var _this = this;
        this.params = params;
        this.changeDetector = changeDetector;
        this.propertyToShow = this.params.context.propertyToShow;
        var items = this.params.context.items;
        if (this.propertyToShow) {
            this.items = _.map(items, function (item) {
                return item[_this.propertyToShow];
            });
        }
        else {
            this.items = items;
        }
        this.changeDetector.markForCheck();
    }
    ListSelectModal.prototype.selectedIndexChanged = function (event) {
        if (this.propertyToShow) {
            this.selectedItem = this.params.context.items[event.value];
        }
        else {
            this.selectedItem = this.items[event.value];
        }
    };
    ListSelectModal.prototype.close = function () {
        this.params.closeCallback(this.selectedItem);
    };
    ListSelectModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'list-select-modal',
            templateUrl: 'list-select.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams,
            core_1.ChangeDetectorRef])
    ], ListSelectModal);
    return ListSelectModal;
}());
exports.ListSelectModal = ListSelectModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3QubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LXNlbGVjdC5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkQ7QUFDN0QsbUVBQTRFO0FBQzVFLDBCQUE0QjtBQU01QjtJQU1DLHlCQUNTLE1BQXlCLEVBQ3pCLGNBQWlDO1FBRjFDLGlCQWdCQztRQWZRLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUV6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUN6RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxVQUFDLElBQVM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixLQUFVO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDRixDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBbENXLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLHdCQUF3QjtTQUNyQyxDQUFDO2lEQVFnQiwyQkFBaUI7WUFDVCx3QkFBaUI7T0FSOUIsZUFBZSxDQW9DM0I7SUFBRCxzQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbGlzdC1zZWxlY3QtbW9kYWwnLFxyXG5cdHRlbXBsYXRlVXJsOiAnbGlzdC1zZWxlY3QubW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0U2VsZWN0TW9kYWwge1xyXG5cclxuXHRwdWJsaWMgaXRlbXM6IEFycmF5PGFueT47XHJcblx0cHVibGljIHByb3BlcnR5VG9TaG93OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBzZWxlY3RlZEl0ZW06IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcblx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuXHQpIHtcclxuXHRcdHRoaXMucHJvcGVydHlUb1Nob3cgPSB0aGlzLnBhcmFtcy5jb250ZXh0LnByb3BlcnR5VG9TaG93O1xyXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLnBhcmFtcy5jb250ZXh0Lml0ZW1zO1xyXG5cclxuXHRcdGlmICh0aGlzLnByb3BlcnR5VG9TaG93KSB7XHJcblx0XHRcdHRoaXMuaXRlbXMgPSBfLm1hcChpdGVtcywgKGl0ZW06IGFueSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpdGVtW3RoaXMucHJvcGVydHlUb1Nob3ddO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuaXRlbXMgPSBpdGVtcztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnByb3BlcnR5VG9TaG93KSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5wYXJhbXMuY29udGV4dC5pdGVtc1tldmVudC52YWx1ZV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXNbZXZlbnQudmFsdWVdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh0aGlzLnNlbGVjdGVkSXRlbSk7XHJcblx0fVxyXG5cclxufSJdfQ==