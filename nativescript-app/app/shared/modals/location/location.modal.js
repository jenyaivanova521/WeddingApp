"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var services_1 = require("~/shared/services");
var LocationModal = /** @class */ (function () {
    function LocationModal(params, http, changeDetector, dialogService) {
        this.params = params;
        this.http = http;
        this.changeDetector = changeDetector;
        this.dialogService = dialogService;
        this.selectedLocation = '';
        this.googleAPIUrl = 'https://maps.googleapis.com/maps/api/place';
        this.autocompleteUrl = this.googleAPIUrl + "/autocomplete/json?inputtype=textquery";
        this.placeDetailsUrl = this.googleAPIUrl + "/details/json?";
        this.GOOGLE_API_KEY = 'AIzaSyCt_6qA00Wvpw4TzY8OrO_P68yl30hA8a8';
        this.loadedDetails = false;
    }
    LocationModal.prototype.setQuery = function (event) {
        this.searchQuery = event.value;
    };
    LocationModal.prototype.search = function () {
        var _this = this;
        var url = this.autocompleteUrl + ("&key=" + this.GOOGLE_API_KEY + "&input=" + this.searchQuery + "&fields=name,formatted_address");
        this.http.get(url).subscribe(function (response) {
            _this.searchInputRef.nativeElement.dismissSoftInput();
            _this.locations = response.predictions;
            _this.selectLocation(_this.locations[0]);
            _this.changeDetector.markForCheck();
        });
    };
    LocationModal.prototype.selectLocation = function (location) {
        var _this = this;
        this.selectedLocation = location;
        this.loadedDetails = false;
        var url = this.placeDetailsUrl + ("key=" + this.GOOGLE_API_KEY + "&placeid=" + location.place_id + "&fields=name,formatted_address,geometry");
        // TODO show loader
        this.http.get(url).subscribe(function (response) {
            // TODO hide loader
            _this.selectedLocation = response.result;
            _this.loadedDetails = true;
            _this.changeDetector.markForCheck();
        });
    };
    LocationModal.prototype.close = function () {
        this.params.closeCallback(this.selectedLocation);
    };
    tslib_1.__decorate([
        core_1.ViewChild('searchInput'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LocationModal.prototype, "searchInputRef", void 0);
    LocationModal = tslib_1.__decorate([
        core_1.Component({
            selector: 'location-modal',
            templateUrl: 'location.modal.html',
            styleUrls: ['./location.modal.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [dialogs_1.ModalDialogParams,
            http_1.HttpClient,
            core_1.ChangeDetectorRef,
            services_1.DialogsService])
    ], LocationModal);
    return LocationModal;
}());
exports.LocationModal = LocationModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24ubW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhdGlvbi5tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBa0Q7QUFDbEQsc0NBQW9GO0FBQ3BGLG1FQUE0RTtBQUM1RSw4Q0FBbUQ7QUFRbkQ7SUFjQyx1QkFDUyxNQUF5QixFQUN6QixJQUFnQixFQUNoQixjQUFpQyxFQUNqQyxhQUE2QjtRQUg3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFiL0IscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBRzdCLGlCQUFZLEdBQVcsNENBQTRDLENBQUM7UUFDcEUsb0JBQWUsR0FBYyxJQUFJLENBQUMsWUFBWSwyQ0FBd0MsQ0FBQztRQUN2RixvQkFBZSxHQUFjLElBQUksQ0FBQyxZQUFZLG1CQUFnQixDQUFDO1FBQy9ELG1CQUFjLEdBQVcseUNBQXlDLENBQUM7UUFDbkUsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFRdkMsQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsS0FBVTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFBQSxpQkFRQztRQVBBLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUcsVUFBUSxJQUFJLENBQUMsY0FBYyxlQUFVLElBQUksQ0FBQyxXQUFXLG1DQUFnQyxDQUFBLENBQUM7UUFDekgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBYTtZQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JELEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVNLHNDQUFjLEdBQXJCLFVBQXNCLFFBQVE7UUFBOUIsaUJBWUM7UUFYQSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUcsU0FBTyxJQUFJLENBQUMsY0FBYyxpQkFBWSxRQUFRLENBQUMsUUFBUSw0Q0FBeUMsQ0FBQSxDQUFDO1FBQ3BJLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFhO1lBQzFDLG1CQUFtQjtZQUNuQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBbER5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzswQ0FBaUIsaUJBQVU7eURBQUM7SUFGekMsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7aURBZ0JnQiwyQkFBaUI7WUFDbkIsaUJBQVU7WUFDQSx3QkFBaUI7WUFDbEIseUJBQWM7T0FsQjFCLGFBQWEsQ0FzRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9ncyc7XHJcbmltcG9ydCB7IERpYWxvZ3NTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBEaWFsb2dUeXBlIH0gZnJvbSAnfi9zaGFyZWQvdHlwZXMvZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2xvY2F0aW9uLW1vZGFsJyxcclxuXHR0ZW1wbGF0ZVVybDogJ2xvY2F0aW9uLm1vZGFsLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2xvY2F0aW9uLm1vZGFsLnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Nb2RhbCB7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0Jykgc2VhcmNoSW5wdXRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG5cdHB1YmxpYyBzZWFyY2hRdWVyeTogc3RyaW5nO1xyXG5cdHB1YmxpYyBzZWxlY3RlZExvY2F0aW9uOiBzdHJpbmcgPSAnJztcclxuXHRwdWJsaWMgbG9jYXRpb25zOiBBcnJheTxhbnk+O1xyXG5cclxuXHRwcml2YXRlIGdvb2dsZUFQSVVybDogU3RyaW5nID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZSc7XHJcblx0cHJpdmF0ZSBhdXRvY29tcGxldGVVcmw6IHN0cmluZyA9IGAke3RoaXMuZ29vZ2xlQVBJVXJsfS9hdXRvY29tcGxldGUvanNvbj9pbnB1dHR5cGU9dGV4dHF1ZXJ5YDtcclxuXHRwcml2YXRlIHBsYWNlRGV0YWlsc1VybDogc3RyaW5nID0gYCR7dGhpcy5nb29nbGVBUElVcmx9L2RldGFpbHMvanNvbj9gO1xyXG5cdHByaXZhdGUgR09PR0xFX0FQSV9LRVk6IHN0cmluZyA9ICdBSXphU3lDdF82cUEwMFd2cHc0VHpZOE9yT19QNjh5bDMwaEE4YTgnO1xyXG5cdHByaXZhdGUgbG9hZGVkRGV0YWlsczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcclxuXHRcdHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuXHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG5cdFx0cHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBEaWFsb2dzU2VydmljZSxcclxuXHQpIHtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRRdWVyeShldmVudDogYW55KTogdm9pZCB7XHJcblx0XHR0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudmFsdWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VhcmNoKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgdXJsID0gdGhpcy5hdXRvY29tcGxldGVVcmwgKyBgJmtleT0ke3RoaXMuR09PR0xFX0FQSV9LRVl9JmlucHV0PSR7dGhpcy5zZWFyY2hRdWVyeX0mZmllbGRzPW5hbWUsZm9ybWF0dGVkX2FkZHJlc3NgO1xyXG5cdFx0dGhpcy5odHRwLmdldCh1cmwpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHR0aGlzLnNlYXJjaElucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cdFx0XHR0aGlzLmxvY2F0aW9ucyA9IHJlc3BvbnNlLnByZWRpY3Rpb25zO1xyXG5cdFx0XHR0aGlzLnNlbGVjdExvY2F0aW9uKHRoaXMubG9jYXRpb25zWzBdKTtcclxuXHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0TG9jYXRpb24obG9jYXRpb24pOiB2b2lkIHtcclxuXHRcdHRoaXMuc2VsZWN0ZWRMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG5cdFx0dGhpcy5sb2FkZWREZXRhaWxzID0gZmFsc2U7XHJcblxyXG5cdFx0Y29uc3QgdXJsID0gdGhpcy5wbGFjZURldGFpbHNVcmwgKyBga2V5PSR7dGhpcy5HT09HTEVfQVBJX0tFWX0mcGxhY2VpZD0ke2xvY2F0aW9uLnBsYWNlX2lkfSZmaWVsZHM9bmFtZSxmb3JtYXR0ZWRfYWRkcmVzcyxnZW9tZXRyeWA7XHJcblx0XHQvLyBUT0RPIHNob3cgbG9hZGVyXHJcblx0XHR0aGlzLmh0dHAuZ2V0KHVybCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XHJcblx0XHRcdC8vIFRPRE8gaGlkZSBsb2FkZXJcclxuXHRcdFx0dGhpcy5zZWxlY3RlZExvY2F0aW9uID0gcmVzcG9uc2UucmVzdWx0O1xyXG5cdFx0XHR0aGlzLmxvYWRlZERldGFpbHMgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZExvY2F0aW9uKTtcclxuXHR9XHJcblxyXG59Il19