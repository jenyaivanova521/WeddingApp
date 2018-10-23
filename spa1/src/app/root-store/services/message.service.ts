import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class MessageService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    countUnreadMessages(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/messages/count');
    }

    getConversations(page): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/conversations?page=' + page);
    }

    getConversation(conversationId): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/conversations/' + conversationId);
    }

    getUnreadMessagesCount(): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/messages/count');
    }

    getMessages({ conversationId, page }): Observable<any> {
        return this.http.get<any[]>(this.apiUrl + '/conversations/' + conversationId + '/messages?page=' + page);
    }

    markAsRead(conversationId): Observable<any> {
        return this.http.patch<any[]>(this.apiUrl + '/conversations/' + conversationId, {});
    }

    sendMessage(data): Observable<any> {
        return this.http.post(this.apiUrl + '/messages', data);
    }

}
