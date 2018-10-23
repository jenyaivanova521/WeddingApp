import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

@Injectable()
export class PaymentService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {}

    checkout({ nonce, chargeAmount, invoiceInfo, vendorId }): Observable<any> {
        return this.http.post(this.apiUrl + '/vendors/' + vendorId + '/checkout', {
            nonce, chargeAmount, invoiceInfo
        });
    }

}
