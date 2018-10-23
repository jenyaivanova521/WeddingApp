"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var components_1 = require("~/shared/components");
var services_1 = require("~/shared/services");
var CreateVendorProductsComponent = /** @class */ (function () {
    function CreateVendorProductsComponent(modalService) {
        this.modalService = modalService;
        this.previousStepEvent = new core_1.EventEmitter();
        this.nextStepEvent = new core_1.EventEmitter();
        this.products = [
            {
                photo: '',
                name: 'Product name',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: '$80'
            },
            {
                photo: '',
                name: 'Product name',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                price: '$120',
            }
        ];
    }
    CreateVendorProductsComponent.prototype.previousStep = function () {
        this.previousStepEvent.next();
    };
    CreateVendorProductsComponent.prototype.nextStep = function () {
        this.nextStepEvent.next();
    };
    CreateVendorProductsComponent.prototype.openCreateModal = function () {
        var _this = this;
        this.modalService.showModal(components_1.AddProductModal, {}).then(function (product) {
            _this.addProduct(product);
        });
    };
    CreateVendorProductsComponent.prototype.addProduct = function (product) {
        // TODO
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorProductsComponent.prototype, "previousStepEvent", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorProductsComponent.prototype, "nextStepEvent", void 0);
    CreateVendorProductsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-vendor-products',
            templateUrl: 'create-vendor-products.component.html',
            styleUrls: ['../../create-profile-base.component.scss', './create-vendor-products.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService])
    ], CreateVendorProductsComponent);
    return CreateVendorProductsComponent;
}());
exports.CreateVendorProductsComponent = CreateVendorProductsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1wcm9kdWN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtdmVuZG9yLXByb2R1Y3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBZ0U7QUFDaEUsa0RBQXNEO0FBQ3RELDhDQUFpRDtBQVFqRDtJQW9CQyx1Q0FDUyxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQW5CekIsc0JBQWlCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQXVCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTFELGFBQVEsR0FBZTtZQUM3QjtnQkFDQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsV0FBVyxFQUFFLDRLQUE0SztnQkFDekwsS0FBSyxFQUFFLEtBQUs7YUFDWjtZQUNEO2dCQUNDLEtBQUssRUFBRSxFQUFFO2dCQUNULElBQUksRUFBRSxjQUFjO2dCQUNwQixXQUFXLEVBQUUsMERBQTBEO2dCQUN2RSxLQUFLLEVBQUUsTUFBTTthQUNiO1NBQ0QsQ0FBQztJQUtGLENBQUM7SUFFTSxvREFBWSxHQUFuQjtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sZ0RBQVEsR0FBZjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHVEQUFlLEdBQXRCO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyw0QkFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDcEQsVUFBQyxPQUFZO1lBQ1osS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFTSxrREFBVSxHQUFqQixVQUFrQixPQUFZO1FBQzdCLE9BQU87SUFDUixDQUFDO0lBekNTO1FBQVQsYUFBTSxFQUFFOzBDQUFvQixtQkFBWTs0RUFBMkI7SUFDMUQ7UUFBVCxhQUFNLEVBQUU7MENBQWdCLG1CQUFZO3dFQUE0QjtJQUhyRCw2QkFBNkI7UUFOekMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSx1Q0FBdUM7WUFDcEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLEVBQUUseUNBQXlDLENBQUM7U0FDbEcsQ0FBQztpREFzQnNCLHVCQUFZO09BckJ2Qiw2QkFBNkIsQ0E2Q3pDO0lBQUQsb0NBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFkZFByb2R1Y3RNb2RhbCB9IGZyb20gJ34vc2hhcmVkL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnY3JlYXRlLXZlbmRvci1wcm9kdWN0cycsXHJcblx0dGVtcGxhdGVVcmw6ICdjcmVhdGUtdmVuZG9yLXByb2R1Y3RzLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi4vLi4vY3JlYXRlLXByb2ZpbGUtYmFzZS5jb21wb25lbnQuc2NzcycsICcuL2NyZWF0ZS12ZW5kb3ItcHJvZHVjdHMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlVmVuZG9yUHJvZHVjdHNDb21wb25lbnQge1xyXG5cclxuXHRAT3V0cHV0KCkgcHJldmlvdXNTdGVwRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBPdXRwdXQoKSBuZXh0U3RlcEV2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9ICBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHB1YmxpYyBwcm9kdWN0czogQXJyYXk8YW55PiA9IFtcclxuXHRcdHtcclxuXHRcdFx0cGhvdG86ICcnLFxyXG5cdFx0XHRuYW1lOiAnUHJvZHVjdCBuYW1lJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdHByaWNlOiAnJDgwJ1xyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0cGhvdG86ICcnLFxyXG5cdFx0XHRuYW1lOiAnUHJvZHVjdCBuYW1lJyxcclxuXHRcdFx0ZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXHJcblx0XHRcdHByaWNlOiAnJDEyMCcsXHJcblx0XHR9XHJcblx0XTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcHJldmlvdXNTdGVwKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wcmV2aW91c1N0ZXBFdmVudC5uZXh0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dFN0ZXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLm5leHRTdGVwRXZlbnQubmV4dCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG9wZW5DcmVhdGVNb2RhbCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChBZGRQcm9kdWN0TW9kYWwsIHt9KS50aGVuKFxyXG5cdFx0XHQocHJvZHVjdDogYW55KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hZGRQcm9kdWN0KHByb2R1Y3QpO1xyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZFByb2R1Y3QocHJvZHVjdDogYW55KTogdm9pZCB7XHJcblx0XHQvLyBUT0RPXHJcblx0fVxyXG5cclxufVxyXG4iXX0=