import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { API_URL } from '../configs/app.config';


@Injectable()
export class NotificationService {
    private apiUrl: string = API_URL;

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
