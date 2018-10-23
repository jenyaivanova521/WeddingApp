"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CreateCoupleProfileComponent = /** @class */ (function () {
    function CreateCoupleProfileComponent() {
        this.nextStepEvent = new core_1.EventEmitter();
        this.values = {
            avatar: '',
            name: '',
            description: '',
            events: [
                {
                    type: 'reception',
                    place_name: '',
                    date: '',
                    address: '',
                    lng: '',
                    lat: ''
                },
                {
                    type: 'ceremony',
                    place_name: '',
                    date: '',
                    address: '',
                    lng: '',
                    lat: ''
                }
            ]
        };
        console.log("---create-couple-profile---");
    }
    CreateCoupleProfileComponent.prototype.nextStep = function () {
        this.nextStepEvent.next(this.values);
        console.log(this.values);
    };
    CreateCoupleProfileComponent.prototype.setValue = function (valueName, element, useParam) {
        this.values[valueName] = useParam ? element[useParam] : element;
    };
    CreateCoupleProfileComponent.prototype.setEventDate = function (eventIterator, element) {
        this.values.events[eventIterator].date = element;
    };
    CreateCoupleProfileComponent.prototype.setEventLocation = function (eventIterator, location) {
        var event = this.values.events[eventIterator];
        event.place_name = location.name;
        event.address = location.formatted_address;
        event.lng = location.geometry.location.lng;
        event.lat = location.geometry.location.lat;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateCoupleProfileComponent.prototype, "nextStepEvent", void 0);
    CreateCoupleProfileComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-couple-profile',
            templateUrl: 'create-couple-profile.component.html',
            styleUrls: ['../../create-profile-base.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CreateCoupleProfileComponent);
    return CreateCoupleProfileComponent;
}());
exports.CreateCoupleProfileComponent = CreateCoupleProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvdXBsZS1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1jb3VwbGUtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWdFO0FBUWhFO0lBNEJDO1FBMUJVLGtCQUFhLEdBQXVCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXpELFdBQU0sR0FBUTtZQUNyQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsV0FBVyxFQUFFLEVBQUU7WUFDZixNQUFNLEVBQUU7Z0JBQ1A7b0JBQ0MsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFVBQVUsRUFBRSxFQUFFO29CQUNkLElBQUksRUFBRSxFQUFFO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2dCQUNEO29CQUNDLElBQUksRUFBRSxVQUFVO29CQUNoQixVQUFVLEVBQUUsRUFBRTtvQkFDZCxJQUFJLEVBQUUsRUFBRTtvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNEO1NBQ0QsQ0FBQztRQUlELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRU0sK0NBQVEsR0FBZjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0NBQVEsR0FBZixVQUFnQixTQUFpQixFQUFFLE9BQVksRUFBRSxRQUFpQjtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDakUsQ0FBQztJQUVNLG1EQUFZLEdBQW5CLFVBQW9CLGFBQXFCLEVBQUUsT0FBWTtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2xELENBQUM7SUFFTSx1REFBZ0IsR0FBdkIsVUFBd0IsYUFBcUIsRUFBRSxRQUFhO1FBQzNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBbERTO1FBQVQsYUFBTSxFQUFFOzBDQUFnQixtQkFBWTt1RUFBNEI7SUFGckQsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1NBQ3ZELENBQUM7O09BQ1csNEJBQTRCLENBc0R4QztJQUFELG1DQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2NyZWF0ZS1jb3VwbGUtcHJvZmlsZScsXHJcblx0dGVtcGxhdGVVcmw6ICdjcmVhdGUtY291cGxlLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuLi8uLi9jcmVhdGUtcHJvZmlsZS1iYXNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvdXBsZVByb2ZpbGVDb21wb25lbnQge1xyXG5cclxuXHRAT3V0cHV0KCkgbmV4dFN0ZXBFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSAgbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRwcml2YXRlIHZhbHVlczogYW55ID0ge1xyXG5cdFx0YXZhdGFyOiAnJyxcclxuXHRcdG5hbWU6ICcnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICcnLFxyXG5cdFx0ZXZlbnRzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0eXBlOiAncmVjZXB0aW9uJyxcclxuXHRcdFx0XHRwbGFjZV9uYW1lOiAnJyxcclxuXHRcdFx0XHRkYXRlOiAnJyxcclxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcclxuXHRcdFx0XHRsbmc6ICcnLFxyXG5cdFx0XHRcdGxhdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdjZXJlbW9ueScsXHJcblx0XHRcdFx0cGxhY2VfbmFtZTogJycsXHJcblx0XHRcdFx0ZGF0ZTogJycsXHJcblx0XHRcdFx0YWRkcmVzczogJycsXHJcblx0XHRcdFx0bG5nOiAnJyxcclxuXHRcdFx0XHRsYXQ6ICcnXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHQpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiLS0tY3JlYXRlLWNvdXBsZS1wcm9maWxlLS0tXCIpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dFN0ZXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLm5leHRTdGVwRXZlbnQubmV4dCh0aGlzLnZhbHVlcyk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnZhbHVlcyk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0VmFsdWUodmFsdWVOYW1lOiBzdHJpbmcsIGVsZW1lbnQ6IGFueSwgdXNlUGFyYW0/OiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdHRoaXMudmFsdWVzW3ZhbHVlTmFtZV0gPSB1c2VQYXJhbSA/IGVsZW1lbnRbdXNlUGFyYW1dIDogZWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRFdmVudERhdGUoZXZlbnRJdGVyYXRvcjogbnVtYmVyLCBlbGVtZW50OiBhbnkpOiB2b2lkIHtcclxuXHRcdHRoaXMudmFsdWVzLmV2ZW50c1tldmVudEl0ZXJhdG9yXS5kYXRlID0gZWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRFdmVudExvY2F0aW9uKGV2ZW50SXRlcmF0b3I6IG51bWJlciwgbG9jYXRpb246IGFueSk6IHZvaWQge1xyXG5cdFx0Y29uc3QgZXZlbnQgPSB0aGlzLnZhbHVlcy5ldmVudHNbZXZlbnRJdGVyYXRvcl07XHJcblx0XHRldmVudC5wbGFjZV9uYW1lID0gbG9jYXRpb24ubmFtZTtcclxuXHRcdGV2ZW50LmFkZHJlc3MgPSBsb2NhdGlvbi5mb3JtYXR0ZWRfYWRkcmVzcztcclxuXHRcdGV2ZW50LmxuZyA9IGxvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuXHRcdGV2ZW50LmxhdCA9IGxvY2F0aW9uLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==