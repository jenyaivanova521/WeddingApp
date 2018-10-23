import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

@Injectable()
export class VendorService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {}

    getOwnedVendors(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendors?isOwner=true');
    }

    getVendors(options): Observable<any> {
        let params = '';
        Object.keys(options).map((key, i) => {
            let value = options[key];
            if(value) {
                params += `${params.length == 0 ? '/?' : '&'}${key}=${value}`;
            }
        });
        return this.http.get<any[]>(this.apiUrl + '/vendors' + params);
    }

    getVendor({ vendorId }): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendors/' + vendorId);
    }

    getVendorCategories(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendor-categories');
    }

    createVendor(formData): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl + '/vendors', formData, {
            headers
        });
    }

    updateVendor({ formData, vendorId }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrl + '/vendors/' + vendorId, formData, {
            headers
        });
    }

    getVendorPhotos({ vendorId }): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendors/' + vendorId + '/photos');
    }

    addVendorPhotos({ formData, vendorId }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/photos', formData, {
            headers
        });
    }

    getVendorProducts({ vendorId }): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendors/' + vendorId + '/products');
    }

    getVendorProduct({ vendorId, vendorProductId }): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendors/' + vendorId + '/products/' + vendorProductId);
    }

    addVendorProduct({ formData, vendorId }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/products', formData, {
            headers
        });
    }

    updateVendorProduct({ formData, vendorId, vendorProductId }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(this.apiUrl + '/vendors/' + vendorId + '/products/' + vendorProductId, formData, {
            headers
        });
    }

    getVendorInvoiceInfo(vendorId): Observable<any> {
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/invoice-info');
    }

    setVendorInvoiceInfo({ vendorId, vendorInvoiceInfo }): Observable<any> {
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/invoice-info', vendorInvoiceInfo);
    }

    deleteVendorProduct({ vendorId, vendorProductId }): Observable<any> {
        return this.http.delete(this.apiUrl + '/vendors/' + vendorId + '/products/' + vendorProductId);
    }

    getVendorReviews({ vendorId, page }): Observable<any> {
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/reviews?page=' + (page || 1));
    }

    getVendorReview({ vendorId, vendorReviewId }): Observable<any> {
        return this.http.get(this.apiUrl + '/vendors/' + vendorId + '/reviews/' + vendorReviewId);
    }

    addVendorReview({ vendorId, vendorReview }): Observable<any> {
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/reviews', vendorReview);
    }

    deleteVendorReview({ vendorId, vendorReviewId }): Observable<any> {
        return this.http.delete(this.apiUrl + '/vendors/' + vendorId + '/reviews/' + vendorReviewId);
    }

    getVendorProductUnits(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/vendor-product-units');
    }

    getCurrencies(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/currencies');
    }

    getCountries(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/countries');
    }

}
