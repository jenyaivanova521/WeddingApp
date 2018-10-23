"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var configs_1 = require("~/shared/configs");
var VendorService = /** @class */ (function () {
    function VendorService(http) {
        this.http = http;
        this.apiUrl = configs_1.API_URL;
    }
    VendorService.prototype.getOwnedVendors = function () {
        return this.http.get(this.apiUrl + '/vendors?isOwner=true');
    };
    VendorService.prototype.getVendors = function (options) {
        var params = '';
        Object.keys(options).map(function (key, i) {
            var value = options[key];
            if (value) {
                params += "" + (params.length == 0 ? '/?' : '&') + key + "=" + value;
            }
        });
        return this.http.get(this.apiUrl + '/vendors' + params);
    };
    VendorService.prototype.getVendor = function (_a) {
        var vendorId = _a.vendorId;
        return this.http.get(this.apiUrl + '/vendors/' + vendorId);
    };
    VendorService.prototype.getVendorCategories = function () {
        return this.http.get(this.apiUrl + '/vendor-categories');
    };
    VendorService.prototype.createVendor = function (formData) {
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl + '/vendors', formData, {
            headers: headers
        });
    };
    VendorService.prototype.updateVendor = function (_a) {
        var formData = _a.formData, vendorId = _a.vendorId;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrl + '/vendors/' + vendorId, formData, {
            headers: headers
        });
    };
    VendorService.prototype.getVendorPhotos = function (_a) {
        var vendorId = _a.vendorId;
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/photos');
    };
    VendorService.prototype.addVendorPhotos = function (_a) {
        var formData = _a.formData, vendorId = _a.vendorId;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/photos', formData, {
            headers: headers
        });
    };
    VendorService.prototype.getVendorProducts = function (_a) {
        var vendorId = _a.vendorId;
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/products');
    };
    VendorService.prototype.getVendorProduct = function (_a) {
        var vendorId = _a.vendorId, vendorProductId = _a.vendorProductId;
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/products/' + vendorProductId);
    };
    VendorService.prototype.addVendorProduct = function (_a) {
        var formData = _a.formData, vendorId = _a.vendorId;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/products', formData, {
            headers: headers
        });
    };
    VendorService.prototype.updateVendorProduct = function (_a) {
        var formData = _a.formData, vendorId = _a.vendorId, vendorProductId = _a.vendorProductId;
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrl + '/vendors/' + vendorId + '/products/' + vendorProductId, formData, {
            headers: headers
        });
    };
    VendorService.prototype.getVendorInvoiceInfo = function (vendorId) {
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/invoice-info');
    };
    VendorService.prototype.setVendorInvoiceInfo = function (_a) {
        var vendorId = _a.vendorId, vendorInvoiceInfo = _a.vendorInvoiceInfo;
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/invoice-info', vendorInvoiceInfo);
    };
    VendorService.prototype.deleteVendorProduct = function (_a) {
        var vendorId = _a.vendorId, vendorProductId = _a.vendorProductId;
        return this.http.delete(this.apiUrl + '/vendors/' + vendorId + '/products/' + vendorProductId);
    };
    VendorService.prototype.getVendorReviews = function (_a) {
        var vendorId = _a.vendorId, page = _a.page;
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/reviews?page=' + (page || 1));
    };
    VendorService.prototype.getVendorReview = function (_a) {
        var vendorId = _a.vendorId, vendorReviewId = _a.vendorReviewId;
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/reviews/' + vendorReviewId);
    };
    VendorService.prototype.addVendorReview = function (_a) {
        var vendorId = _a.vendorId, vendorReview = _a.vendorReview;
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/reviews', vendorReview);
    };
    VendorService.prototype.deleteVendorReview = function (_a) {
        var vendorId = _a.vendorId, vendorReviewId = _a.vendorReviewId;
        return this.http.delete(this.apiUrl + '/vendors/' + vendorId + '/reviews/' + vendorReviewId);
    };
    VendorService.prototype.getVendorProductUnits = function () {
        return this.http.get(this.apiUrl + '/vendor-product-units');
    };
    VendorService.prototype.getCurrencies = function () {
        return this.http.get(this.apiUrl + '/currencies');
    };
    VendorService.prototype.getCountries = function () {
        return this.http.get(this.apiUrl + '/countries');
    };
    VendorService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], VendorService);
    return VendorService;
}());
exports.VendorService = VendorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBRS9ELDRDQUEyQztBQUkzQztJQUdJLHVCQUNZLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFIcEIsV0FBTSxHQUFXLGlCQUFPLENBQUM7SUFJOUIsQ0FBQztJQUVKLHVDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE1BQU0sSUFBSSxNQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBRyxHQUFHLFNBQUksS0FBTyxDQUFDO1lBQ2xFLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUSxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEVBQVk7WUFBVixzQkFBUTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVEsSUFBSSxDQUFDLE1B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QztJQXhIUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7aURBS1MsaUJBQVU7T0FKbkIsYUFBYSxDQTBIekI7SUFBRCxvQkFBQztDQUFBLEFBMUhELElBMEhDO0FBMUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICd+L3NoYXJlZC9jb25maWdzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgYXBpVXJsOiBzdHJpbmcgPSBBUElfVVJMO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7fVxyXG5cclxuICAgIGdldE93bmVkVmVuZG9ycygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPih0aGlzLmFwaVVybCArICcvdmVuZG9ycz9pc093bmVyPXRydWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JzKG9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSAnJztcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoKGtleSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgICAgIGlmKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgKz0gYCR7cGFyYW1zLmxlbmd0aCA9PSAwID8gJy8/JyA6ICcmJ30ke2tleX09JHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KHRoaXMuYXBpVXJsICsgJy92ZW5kb3JzJyArIHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVuZG9yKHsgdmVuZG9ySWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KHRoaXMuYXBpVXJsICsgJy92ZW5kb3JzLycgKyB2ZW5kb3JJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmVuZG9yQ2F0ZWdvcmllcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPih0aGlzLmFwaVVybCArICcvdmVuZG9yLWNhdGVnb3JpZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWZW5kb3IoZm9ybURhdGEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2Zvcm0tZGF0YScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArICcvdmVuZG9ycycsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWZW5kb3IoeyBmb3JtRGF0YSwgdmVuZG9ySWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JQaG90b3MoeyB2ZW5kb3JJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL3ZlbmRvcnMvJyArIHZlbmRvcklkICsgJy9waG90b3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWZW5kb3JQaG90b3MoeyBmb3JtRGF0YSwgdmVuZG9ySWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vZm9ybS1kYXRhJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYXBpVXJsICsgJy92ZW5kb3JzLycgKyB2ZW5kb3JJZCArICcvcGhvdG9zJywgZm9ybURhdGEsIHtcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvclByb2R1Y3RzKHsgdmVuZG9ySWQgfSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55W10+KHRoaXMuYXBpVXJsICsgJy92ZW5kb3JzLycgKyB2ZW5kb3JJZCArICcvcHJvZHVjdHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JQcm9kdWN0KHsgdmVuZG9ySWQsIHZlbmRvclByb2R1Y3RJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL3ZlbmRvcnMvJyArIHZlbmRvcklkICsgJy9wcm9kdWN0cy8nICsgdmVuZG9yUHJvZHVjdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWZW5kb3JQcm9kdWN0KHsgZm9ybURhdGEsIHZlbmRvcklkIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2Zvcm0tZGF0YScpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL3Byb2R1Y3RzJywgZm9ybURhdGEsIHtcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVZlbmRvclByb2R1Y3QoeyBmb3JtRGF0YSwgdmVuZG9ySWQsIHZlbmRvclByb2R1Y3RJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9mb3JtLWRhdGEnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHRoaXMuYXBpVXJsICsgJy92ZW5kb3JzLycgKyB2ZW5kb3JJZCArICcvcHJvZHVjdHMvJyArIHZlbmRvclByb2R1Y3RJZCwgZm9ybURhdGEsIHtcclxuICAgICAgICAgICAgaGVhZGVyc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvckludm9pY2VJbmZvKHZlbmRvcklkKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL2ludm9pY2UtaW5mbycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZlbmRvckludm9pY2VJbmZvKHsgdmVuZG9ySWQsIHZlbmRvckludm9pY2VJbmZvIH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL2ludm9pY2UtaW5mbycsIHZlbmRvckludm9pY2VJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVWZW5kb3JQcm9kdWN0KHsgdmVuZG9ySWQsIHZlbmRvclByb2R1Y3RJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL3Byb2R1Y3RzLycgKyB2ZW5kb3JQcm9kdWN0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvclJldmlld3MoeyB2ZW5kb3JJZCwgcGFnZSB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL3Jldmlld3M/cGFnZT0nICsgKHBhZ2UgfHwgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZlbmRvclJldmlldyh7IHZlbmRvcklkLCB2ZW5kb3JSZXZpZXdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL3Jldmlld3MvJyArIHZlbmRvclJldmlld0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWZW5kb3JSZXZpZXcoeyB2ZW5kb3JJZCwgdmVuZG9yUmV2aWV3IH0pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL3Jldmlld3MnLCB2ZW5kb3JSZXZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVZlbmRvclJldmlldyh7IHZlbmRvcklkLCB2ZW5kb3JSZXZpZXdJZCB9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmFwaVVybCArICcvdmVuZG9ycy8nICsgdmVuZG9ySWQgKyAnL3Jldmlld3MvJyArIHZlbmRvclJldmlld0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWZW5kb3JQcm9kdWN0VW5pdHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnlbXT4odGhpcy5hcGlVcmwgKyAnL3ZlbmRvci1wcm9kdWN0LXVuaXRzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVuY2llcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPih0aGlzLmFwaVVybCArICcvY3VycmVuY2llcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvdW50cmllcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueVtdPih0aGlzLmFwaVVybCArICcvY291bnRyaWVzJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==