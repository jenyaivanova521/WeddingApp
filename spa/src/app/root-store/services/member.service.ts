import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { Member } from '../member-store/models';
import { State } from '../root-store.state';

@Injectable()
export class MemberService {
    private apiUrl: string = environment.apiUrl + '/weddings';

    constructor(
        private store: Store<State>,
        private http: HttpClient
    ) { }

    getMembers({ weddingId, isActive }: { weddingId: string, isActive?: boolean }): Observable<any> {
        return this.http.get<Member[]>(this.apiUrl + '/' + weddingId + '/members' + (isActive ? '?isActive=true' : ''));
    }

    addMember({ weddingId, member }): Observable<any> {
        return this.http.post(this.apiUrl + '/' + weddingId + '/members', {
            email: member.email,
            role: member.role
        });
    }

    changeMemberRole({ weddingId, memberId, role }): Observable<any> {
        return this.http.patch(this.apiUrl + '/' + weddingId + '/members/' + memberId, {
            role: role
        });
    }

    deleteMember({ weddingId, memberId }): Observable<any> {
        return this.http.delete(this.apiUrl + '/' + weddingId + '/members/' + memberId);
    }

    public getInvitations(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/members/invitations`);
    }

    public acceptInvite({ weddingId, memberId, invitationId }): Observable<any> {
        return this.http.post(`${this.apiUrl}/${weddingId}/members/${memberId}/invitations/${invitationId}`, { isActive: true });
    }

    public rejectInvite({ invitationId }): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/members/invitations/${invitationId}`);
    }

}
