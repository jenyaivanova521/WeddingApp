import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

@Injectable()
export class NotificationService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {}

    countUnreadNotifications(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/notifications/count');
    }

    getNotifications(page): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/notifications?page=' + page);
    }

    markAsRead(): Observable<any> {
        return this.http.patch<any[]>(this.apiUrl + '/notifications', {});
    }

}
