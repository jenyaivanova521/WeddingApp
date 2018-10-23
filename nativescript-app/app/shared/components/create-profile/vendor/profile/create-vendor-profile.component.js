"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var CreateVendorProfileComponent = /** @class */ (function () {
    function CreateVendorProfileComponent() {
        this.nextStepEvent = new core_1.EventEmitter();
        this.categories = [
            'Test',
            'test2'
        ];
        this.rates = [
            'low',
            'moderate',
            'high',
        ];
        this.values = {
            avatar: '',
            name: '',
            description: '',
            category: '',
            rate: '',
            events: [
                {
                    type: 'address',
                    place_name: '',
                    date: '',
                    address: '',
                    lng: '',
                    lat: ''
                }
            ],
            phone_number: '',
            email_address: ''
        };
    }
    CreateVendorProfileComponent.prototype.nextStep = function () {
        this.nextStepEvent.next(this.values);
        console.log(this.values);
    };
    // public setValue(valueName: string, value: any): void {
    // 	this.values[valueName] = value;
    // }
    CreateVendorProfileComponent.prototype.setValue = function (valueName, element, useParam) {
        this.values[valueName] = useParam ? element[useParam] : element;
    };
    CreateVendorProfileComponent.prototype.setEventDate = function (eventIterator, element) {
        this.values.events[eventIterator].date = element;
    };
    CreateVendorProfileComponent.prototype.setEventLocation = function (eventIterator, location) {
        var event = this.values.events[eventIterator];
        event.place_name = location.name;
        event.address = location.formatted_address;
        event.lng = location.geometry.location.lng;
        event.lat = location.geometry.location.lat;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CreateVendorProfileComponent.prototype, "nextStepEvent", void 0);
    CreateVendorProfileComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'create-vendor-profile',
            templateUrl: 'create-vendor-profile.component.html',
            styleUrls: ['../../create-profile-base.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CreateVendorProfileComponent);
    return CreateVendorProfileComponent;
}());
exports.CreateVendorProfileComponent = CreateVendorProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXZlbmRvci1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS12ZW5kb3ItcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWdFO0FBUWhFO0lBb0NDO1FBbENVLGtCQUFhLEdBQXVCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRTFELGVBQVUsR0FBZTtZQUMvQixNQUFNO1lBQ04sT0FBTztTQUNQLENBQUM7UUFFSyxVQUFLLEdBQWU7WUFDMUIsS0FBSztZQUNMLFVBQVU7WUFDVixNQUFNO1NBQ04sQ0FBQztRQUVLLFdBQU0sR0FBUTtZQUNwQixNQUFNLEVBQUMsRUFBRTtZQUNULElBQUksRUFBQyxFQUFFO1lBQ1AsV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFO2dCQUNQO29CQUNDLElBQUksRUFBRSxTQUFTO29CQUNmLFVBQVUsRUFBRSxFQUFFO29CQUNkLElBQUksRUFBRSxFQUFFO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0Q7WUFDRCxZQUFZLEVBQUMsRUFBRTtZQUNmLGFBQWEsRUFBQyxFQUFFO1NBRWhCLENBQUM7SUFJRixDQUFDO0lBRU0sK0NBQVEsR0FBZjtRQUNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQseURBQXlEO0lBQ3pELG1DQUFtQztJQUNuQyxJQUFJO0lBRUcsK0NBQVEsR0FBZixVQUFnQixTQUFpQixFQUFFLE9BQVksRUFBRSxRQUFpQjtRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDakUsQ0FBQztJQUVNLG1EQUFZLEdBQW5CLFVBQW9CLGFBQXFCLEVBQUUsT0FBWTtRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ2xELENBQUM7SUFFTSx1REFBZ0IsR0FBdkIsVUFBd0IsYUFBcUIsRUFBRSxRQUFhO1FBQzNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMzQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBN0RTO1FBQVQsYUFBTSxFQUFFOzBDQUFnQixtQkFBWTt1RUFBNEI7SUFGckQsNEJBQTRCO1FBTnhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO1NBQ3ZELENBQUM7O09BQ1csNEJBQTRCLENBaUV4QztJQUFELG1DQUFDO0NBQUEsQUFqRUQsSUFpRUM7QUFqRVksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ2NyZWF0ZS12ZW5kb3ItcHJvZmlsZScsXHJcblx0dGVtcGxhdGVVcmw6ICdjcmVhdGUtdmVuZG9yLXByb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuLi8uLi9jcmVhdGUtcHJvZmlsZS1iYXNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVZlbmRvclByb2ZpbGVDb21wb25lbnQge1xyXG5cclxuXHRAT3V0cHV0KCkgbmV4dFN0ZXBFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSAgbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHRwdWJsaWMgY2F0ZWdvcmllczogQXJyYXk8YW55PiA9IFtcclxuXHRcdCdUZXN0JyxcclxuXHRcdCd0ZXN0MidcclxuXHRdO1xyXG5cclxuXHRwdWJsaWMgcmF0ZXM6IEFycmF5PGFueT4gPSBbXHJcblx0XHQnbG93JyxcclxuXHRcdCdtb2RlcmF0ZScsXHJcblx0XHQnaGlnaCcsXHJcblx0XTtcclxuXHJcblx0cHVibGljIHZhbHVlczogYW55ID0ge1xyXG5cdFx0YXZhdGFyOicnLFxyXG5cdFx0bmFtZTonJyxcclxuXHRcdGRlc2NyaXB0aW9uOicnLFxyXG5cdFx0Y2F0ZWdvcnk6ICcnLFxyXG5cdFx0cmF0ZTogJycsXHJcblx0XHRldmVudHM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHR5cGU6ICdhZGRyZXNzJyxcclxuXHRcdFx0XHRwbGFjZV9uYW1lOiAnJyxcclxuXHRcdFx0XHRkYXRlOiAnJyxcclxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcclxuXHRcdFx0XHRsbmc6ICcnLFxyXG5cdFx0XHRcdGxhdDogJydcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHRcdHBob25lX251bWJlcjonJyxcclxuXHRcdGVtYWlsX2FkZHJlc3M6JydcclxuXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0KSB7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmV4dFN0ZXAoKTogdm9pZCB7XHJcblx0XHR0aGlzLm5leHRTdGVwRXZlbnQubmV4dCh0aGlzLnZhbHVlcyk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnZhbHVlcyk7XHJcblx0fVxyXG5cclxuXHQvLyBwdWJsaWMgc2V0VmFsdWUodmFsdWVOYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHQvLyBcdHRoaXMudmFsdWVzW3ZhbHVlTmFtZV0gPSB2YWx1ZTtcclxuXHQvLyB9XHJcblxyXG5cdHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZU5hbWU6IHN0cmluZywgZWxlbWVudDogYW55LCB1c2VQYXJhbT86IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0dGhpcy52YWx1ZXNbdmFsdWVOYW1lXSA9IHVzZVBhcmFtID8gZWxlbWVudFt1c2VQYXJhbV0gOiBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEV2ZW50RGF0ZShldmVudEl0ZXJhdG9yOiBudW1iZXIsIGVsZW1lbnQ6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy52YWx1ZXMuZXZlbnRzW2V2ZW50SXRlcmF0b3JdLmRhdGUgPSBlbGVtZW50O1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEV2ZW50TG9jYXRpb24oZXZlbnRJdGVyYXRvcjogbnVtYmVyLCBsb2NhdGlvbjogYW55KTogdm9pZCB7XHJcblx0XHRjb25zdCBldmVudCA9IHRoaXMudmFsdWVzLmV2ZW50c1tldmVudEl0ZXJhdG9yXTtcclxuXHRcdGV2ZW50LnBsYWNlX25hbWUgPSBsb2NhdGlvbi5uYW1lO1xyXG5cdFx0ZXZlbnQuYWRkcmVzcyA9IGxvY2F0aW9uLmZvcm1hdHRlZF9hZGRyZXNzO1xyXG5cdFx0ZXZlbnQubG5nID0gbG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xyXG5cdFx0ZXZlbnQubGF0ID0gbG9jYXRpb24uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xyXG5cdH1cclxuXHJcbn1cclxuIl19