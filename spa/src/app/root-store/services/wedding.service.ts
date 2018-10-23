import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { Wedding } from '../common-models';

@Injectable()
export class WeddingService {
    private apiUrl: string = environment.apiUrl + '/weddings';

    constructor(
        private http: HttpClient
    ) { }

    getWeddings(): Observable<any> {
        return this.http.get<Wedding[]>(this.apiUrl + '?isMember=true');
    }

    getWedding({ weddingId }): Observable<any> {
        return this.http.get<Wedding>(this.apiUrl + '/' + weddingId);
    }

    getWeddingMembers({ weddingId }): Observable<any> {
        return this.http.get(this.apiUrl + '/' + weddingId + '/members?isActive=true');
    }

    getWeddingPartners({ weddingId }): Observable<any> {
        return this.http.get<Wedding[]>(this.apiUrl + '/' + weddingId + '/partners');
    }

    getWeddingEvents({ weddingId }): Observable<any> {
        return this.http.get<Wedding[]>(this.apiUrl + '/' + weddingId + '/events');
    }

    createWedding({ formData }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.post(this.apiUrl, formData, {
            headers
        });
    }

    public editWedding({ weddingId, weddingEdited }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(`${this.apiUrl}/${weddingId}`, weddingEdited, {
            headers
        });
    }

    public editEvent({ weddingId, eventId, eventEdited }): Observable<any> {
        return this.http.patch(`${this.apiUrl}/${weddingId}/events/${eventId}`, eventEdited);
    }

    public addEvent({ weddingId, event }): Observable<any> {
        return this.http.post(`${this.apiUrl}/${weddingId}/events`, event);
    }

    public editPartner({ weddingId, partnerId, partnerEdited }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(`${this.apiUrl}/${weddingId}/partners/${partnerId}`, partnerEdited, {
            headers
        });
    }

    public follow({ weddingId }): Observable<any> {
        return this.http.post(`${this.apiUrl}/${weddingId}/follow`, {});
    }

    public unfollow({ weddingId }): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${weddingId}/follow`);
    }

}
