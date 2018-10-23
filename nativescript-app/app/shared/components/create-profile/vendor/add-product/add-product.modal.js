"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var platform_1 = require("tns-core-modules/platform");
var AddProductModal = /** @class */ (function () {
    function AddProductModal(params) {
        this.params = params;
        this.currencies = [
            'USD',
            'PLN',
            'AUD',
            'GBP',
        ];
        this.units = [
            'aa',
            'bb'
        ];
        this.values = {
            name: '',
            price: '',
            currency: '',
            unit: '',
            description: '',
            photo: ''
        };
        this.width = platform_1.screen.mainScreen.widthDIPs;
    }
    AddProductModal.prototype.close = function (values) {
        this.params.closeCallback(values);
    };
    AddProductModal.prototype.setValue = function (fieldName, value) {
        this.values[fieldName] = value;
    };
    AddProductModal.prototype.setTextValue = function (fieldName, args) {
        var textField = args.object;
        this.values[fieldName] = textField.text;
    };
    AddProductModal.prototype.submit = function () {
        this.close(this.values);
    };
    AddProductModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'add-product',
            templateUrl: 'add-product.modal.html',
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams])
    ], AddProductModal);
    return AddProductModal;
}());
exports.AddProductModal = AddProductModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXByb2R1Y3QubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGQtcHJvZHVjdC5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMEM7QUFDMUMsbUVBQTRFO0FBQzVFLHNEQUFtRDtBQU9uRDtJQXdCQyx5QkFDUyxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQXJCM0IsZUFBVSxHQUFHO1lBQ25CLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7U0FDTCxDQUFDO1FBQ0ssVUFBSyxHQUFHO1lBQ2QsSUFBSTtZQUNKLElBQUk7U0FDSixDQUFDO1FBRU0sV0FBTSxHQUFRO1lBQ3JCLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsV0FBVyxFQUFFLEVBQUU7WUFDZixLQUFLLEVBQUUsRUFBRTtTQUNULENBQUM7UUFLRCxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sK0JBQUssR0FBWixVQUFhLE1BQVk7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLGtDQUFRLEdBQWYsVUFBZ0IsU0FBaUIsRUFBRSxLQUFVO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxzQ0FBWSxHQUFuQixVQUFvQixTQUFpQixFQUFFLElBQVM7UUFDL0MsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBN0NXLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7U0FDckMsQ0FBQztpREEwQmdCLDJCQUFpQjtPQXpCdEIsZUFBZSxDQStDM0I7SUFBRCxzQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcclxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FkZC1wcm9kdWN0JyxcclxuXHR0ZW1wbGF0ZVVybDogJ2FkZC1wcm9kdWN0Lm1vZGFsLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkUHJvZHVjdE1vZGFsIHtcclxuXHJcblx0cHVibGljIHdpZHRoOiBhbnk7XHJcblxyXG5cdHB1YmxpYyBjdXJyZW5jaWVzID0gW1xyXG5cdFx0J1VTRCcsXHJcblx0XHQnUExOJyxcclxuXHRcdCdBVUQnLFxyXG5cdFx0J0dCUCcsXHJcblx0XTtcclxuXHRwdWJsaWMgdW5pdHMgPSBbXHJcblx0XHQnYWEnLFxyXG5cdFx0J2JiJ1xyXG5cdF07XHJcblxyXG5cdHByaXZhdGUgdmFsdWVzOiBhbnkgPSB7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdHByaWNlOiAnJyxcclxuXHRcdGN1cnJlbmN5OiAnJyxcclxuXHRcdHVuaXQ6ICcnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICcnLFxyXG5cdFx0cGhvdG86ICcnXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcclxuXHQpIHtcclxuXHRcdHRoaXMud2lkdGggPSBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xvc2UodmFsdWVzPzogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHZhbHVlcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0VmFsdWUoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMudmFsdWVzW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRUZXh0VmFsdWUoZmllbGROYW1lOiBzdHJpbmcsIGFyZ3M6IGFueSk6IHZvaWQge1xyXG5cdFx0bGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3Q7XHJcblx0XHR0aGlzLnZhbHVlc1tmaWVsZE5hbWVdID0gdGV4dEZpZWxkLnRleHQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3VibWl0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jbG9zZSh0aGlzLnZhbHVlcyk7XHJcblx0fVxyXG5cclxufSJdfQ==