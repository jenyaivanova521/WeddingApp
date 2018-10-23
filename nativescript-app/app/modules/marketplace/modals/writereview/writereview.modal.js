"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("tns-core-modules/platform");
var WritereviewModal = /** @class */ (function () {
    function WritereviewModal(params) {
        this.params = params;
        this.values = {
            firstName: '',
            lastName: '',
            side: '',
            role: '',
            email: '',
            sendRSVP: ''
        };
        this.width = platform_1.screen.mainScreen.widthDIPs;
    }
    WritereviewModal.prototype.close = function (values) {
        this.params.closeCallback(values);
    };
    WritereviewModal.prototype.submit = function () {
        this.close(this.values);
    };
    WritereviewModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'writereview',
            templateUrl: 'writereview.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], WritereviewModal);
    return WritereviewModal;
}());
exports.WritereviewModal = WritereviewModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JpdGVyZXZpZXcubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3cml0ZXJldmlldy5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQTRFO0FBQzVFLHNEQUFtRDtBQU1uRDtJQWNDLDBCQUNTLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBVjFCLFdBQU0sR0FBUTtZQUNyQixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDWixDQUFDO1FBS0QsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVNLGdDQUFLLEdBQVosVUFBYSxNQUFZO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFJTSxpQ0FBTSxHQUFiO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTVCVyxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQztpREFnQmdCLDJCQUFpQjtPQWZ0QixnQkFBZ0IsQ0E4QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnd3JpdGVyZXZpZXcnLFxyXG5cdHRlbXBsYXRlVXJsOiAnd3JpdGVyZXZpZXcubW9kYWwuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXcml0ZXJldmlld01vZGFsIHtcclxuXHJcblx0cHVibGljIHdpZHRoOiBhbnk7XHJcblx0XHJcblxyXG5cdHByaXZhdGUgdmFsdWVzOiBhbnkgPSB7XHJcblx0XHRmaXJzdE5hbWU6ICcnLFxyXG5cdFx0bGFzdE5hbWU6ICcnLFxyXG5cdFx0c2lkZTogJycsXHJcblx0XHRyb2xlOiAnJyxcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdHNlbmRSU1ZQOiAnJ1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zXHJcblx0KSB7XHJcblx0XHR0aGlzLndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlKHZhbHVlcz86IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh2YWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cdHB1YmxpYyBzdWJtaXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNsb3NlKHRoaXMudmFsdWVzKTtcclxuXHR9XHJcblxyXG59Il19