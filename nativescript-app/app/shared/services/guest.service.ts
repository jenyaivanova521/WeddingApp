import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '~/shared/configs';

@Injectable()
export class GuestService {
    private apiUrl: string = API_URL;

    constructor(
        private http: HttpClient
    ) {
    }

    getGuests({ weddingId, options }): Observable<any> {
        let params = '';
        Object.keys(options).map((key, i) => {
            let value = options[key];
            if(value) {
                params += `${params.length == 0 ? '/?' : '&'}${key}=${value}`;
            }
        });
        return this.http.get<any[]>(`${this.apiUrl}/weddings/${weddingId}/guests${params}`);
    }

    getGuest({ guestId, weddingId }): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/weddings/${weddingId}/guests/${guestId}`);
    }

    addGuest({ guest, weddingId }): Observable<any> {
        return this.http.post(`${this.apiUrl}/weddings/${weddingId}/guests`, guest);
    }

    editGuest({ guest, guestId, weddingId }): Observable<any> {
        return this.http.patch(`${this.apiUrl}/weddings/${weddingId}/guests/${guestId}`, guest);
    }

    deleteGuest({ guestId, weddingId }): Observable<any> {
        return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/guests/${guestId}`);
    }

    getStats(weddingId): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/weddings/${weddingId}/guests/stats`);
    }

}
