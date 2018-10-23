import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class InspirationService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    getTags(term = ''): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/tags?term=${term}`);
    }

    getInspirations({ page, tags, pinnedToWeddingId, onlyPinned = false, authorWeddingId }): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/inspirations?page=${page}&tags=${tags}&pinnedToWeddingId=${pinnedToWeddingId}${onlyPinned ? '&onlyPinned=true' : ''}${authorWeddingId ? '&authorWeddingId=' + authorWeddingId : ''}`);
    }

    getInspiration({ inspirationId, pinnedToWeddingId }): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/inspirations/${inspirationId}?pinnedToWeddingId=${pinnedToWeddingId}`);
    }

    addInspiration(inspiration): Observable<any> {
        return this.http.post(`${this.apiUrl}/inspirations`, inspiration);
    }

    deleteInspiration(inspirationId): Observable<any> {
        return this.http.delete(`${this.apiUrl}/inspirations/${inspirationId}`);
    }

    pinInspiration({ inspirationId, weddingId }): Observable<any> {
        return this.http.post(`${this.apiUrl}/inspirations/${inspirationId}/pin`, {
            weddingId
        });
    }

    unpinInspiration({ inspirationId, weddingId }): Observable<any> {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                weddingId
            }
        };
        return this.http.delete(`${this.apiUrl}/inspirations/${inspirationId}/pin`, options);
    }

}
