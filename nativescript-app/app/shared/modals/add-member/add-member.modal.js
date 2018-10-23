"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("tns-core-modules/platform");
var AddMemberModal = /** @class */ (function () {
    function AddMemberModal(params) {
        this.params = params;
        this.radioOptions = [
            'Not invited',
            'Not attending',
            'Invited',
            'Attending'
        ];
        this.roles = [
            'Groomsman',
            'Bridesmaid'
        ];
        this.sides = [
            'Groom\'s',
            'Bride\'s'
        ];
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
    AddMemberModal.prototype.close = function (values) {
        this.params.closeCallback(values);
    };
    AddMemberModal.prototype.setValue = function (valueName, element) {
        this.values[valueName] = element.value;
    };
    AddMemberModal.prototype.setChecked = function (valueName, value) {
        this.values[valueName] = value;
    };
    AddMemberModal.prototype.submit = function () {
        this.close(this.values);
    };
    AddMemberModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'add-member',
            templateUrl: 'add-member.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], AddMemberModal);
    return AddMemberModal;
}());
exports.AddMemberModal = AddMemberModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLW1lbWJlci5tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZC1tZW1iZXIubW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBDO0FBQzFDLG1FQUE0RTtBQUM1RSxzREFBbUQ7QUFNbkQ7SUEyQkMsd0JBQ1MsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUF6QjNCLGlCQUFZLEdBQWtCO1lBQ3BDLGFBQWE7WUFDYixlQUFlO1lBQ2YsU0FBUztZQUNULFdBQVc7U0FDWCxDQUFDO1FBQ0ssVUFBSyxHQUFrQjtZQUM3QixXQUFXO1lBQ1gsWUFBWTtTQUNaLENBQUM7UUFDSyxVQUFLLEdBQWtCO1lBQzdCLFVBQVU7WUFDVixVQUFVO1NBQ1YsQ0FBQztRQUVNLFdBQU0sR0FBUTtZQUNyQixTQUFTLEVBQUUsRUFBRTtZQUNiLFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDWixDQUFDO1FBS0QsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxNQUFZO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsT0FBWTtRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUVNLG1DQUFVLEdBQWpCLFVBQWtCLFNBQWlCLEVBQUUsS0FBYztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUEvQ1csY0FBYztRQUoxQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHVCQUF1QjtTQUNwQyxDQUFDO2lEQTZCZ0IsMkJBQWlCO09BNUJ0QixjQUFjLENBaUQxQjtJQUFELHFCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYWRkLW1lbWJlcicsXHJcblx0dGVtcGxhdGVVcmw6ICdhZGQtbWVtYmVyLm1vZGFsLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkTWVtYmVyTW9kYWwge1xyXG5cclxuXHRwdWJsaWMgd2lkdGg6IGFueTtcclxuXHRwdWJsaWMgcmFkaW9PcHRpb25zOiBBcnJheTxzdHJpbmc+ID0gW1xyXG5cdFx0J05vdCBpbnZpdGVkJyxcclxuXHRcdCdOb3QgYXR0ZW5kaW5nJyxcclxuXHRcdCdJbnZpdGVkJyxcclxuXHRcdCdBdHRlbmRpbmcnXHJcblx0XTtcclxuXHRwdWJsaWMgcm9sZXM6IEFycmF5PHN0cmluZz4gPSBbXHJcblx0XHQnR3Jvb21zbWFuJyxcclxuXHRcdCdCcmlkZXNtYWlkJ1xyXG5cdF07XHJcblx0cHVibGljIHNpZGVzOiBBcnJheTxzdHJpbmc+ID0gW1xyXG5cdFx0J0dyb29tXFwncycsXHJcblx0XHQnQnJpZGVcXCdzJ1xyXG5cdF07XHJcblxyXG5cdHByaXZhdGUgdmFsdWVzOiBhbnkgPSB7XHJcblx0XHRmaXJzdE5hbWU6ICcnLFxyXG5cdFx0bGFzdE5hbWU6ICcnLFxyXG5cdFx0c2lkZTogJycsXHJcblx0XHRyb2xlOiAnJyxcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdHNlbmRSU1ZQOiAnJ1xyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zXHJcblx0KSB7XHJcblx0XHR0aGlzLndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsb3NlKHZhbHVlcz86IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayh2YWx1ZXMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldFZhbHVlKHZhbHVlTmFtZTogc3RyaW5nLCBlbGVtZW50OiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMudmFsdWVzW3ZhbHVlTmFtZV0gPSBlbGVtZW50LnZhbHVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldENoZWNrZWQodmFsdWVOYW1lOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcblx0XHR0aGlzLnZhbHVlc1t2YWx1ZU5hbWVdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3VibWl0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jbG9zZSh0aGlzLnZhbHVlcyk7XHJcblx0fVxyXG5cclxufSJdfQ==