"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("tns-core-modules/platform");
var DeleteeditModal = /** @class */ (function () {
    function DeleteeditModal(params) {
        this.params = params;
        this.width = platform_1.screen.mainScreen.widthDIPs;
    }
    DeleteeditModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'delete-edit',
            templateUrl: 'delete-edit.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], DeleteeditModal);
    return DeleteeditModal;
}());
exports.DeleteeditModal = DeleteeditModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWVkaXQubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWxldGUtZWRpdC5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQTRFO0FBQzVFLHNEQUFtRDtBQU1uRDtJQUlDLHlCQUNTLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRWpDLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFSVyxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsd0JBQXdCO1NBQ3JDLENBQUM7aURBTWdCLDJCQUFpQjtPQUx0QixlQUFlLENBWTNCO0lBQUQsc0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XHJcbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdkZWxldGUtZWRpdCcsXHJcblx0dGVtcGxhdGVVcmw6ICdkZWxldGUtZWRpdC5tb2RhbC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbGV0ZWVkaXRNb2RhbCB7XHJcblxyXG5cdHB1YmxpYyB3aWR0aDogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtc1xyXG5cdCkge1xyXG5cdFx0dGhpcy53aWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcztcclxuXHR9XHJcblxyXG5cdFxyXG5cclxufSJdfQ==