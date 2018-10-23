import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

// import { Observable } from 'rxjs/add/operator/map'
// import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";


import { State } from '~/root-store';
import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { API_URL, Config } from '~/shared/configs';

@Injectable()
export class WeddingService {

	private activeWedding: any;
	private apiUrl: string = API_URL + '/weddings';

	constructor(
		private store: Store<State>,
		private http: HttpClient
	) {
		console.log("wedding service");
		this.store.select(
			selectActiveWedding
		).subscribe(activeWedding => {
			console.log(activeWedding);
			this.activeWedding = activeWedding;
		});
	}

	public getWeddings(): Observable<any> {
		console.log("get weddings");
		return this.http.get<Wedding[]>(`${this.apiUrl}?isMember=true`);
	}
	
	public getWedding({ weddingId }): Observable<any> {
		return this.http.get<Wedding>(`${this.apiUrl}/${weddingId}`);
	}

	public getWeddingMembers(): Observable<any> {
		return this.http.get<Wedding[]>(`${this.apiUrl}/${this.activeWedding.id}/members?isActive=true`);
	}

	public getWeddingPartners({weddingId}): Observable<any> {
		return this.http.get<Wedding[]>(`${this.apiUrl}/${weddingId}/partners`);
	}

	public getWeddingEvents({weddingId}): Observable<any> {
		return this.http.get<Wedding[]>(`${this.apiUrl}/${weddingId}/events`);
	}

	public createWedding(params: Wedding): Observable<any> {
		return this.http.post(this.apiUrl, params);
	}

	public changeWeddingName({ name }): Observable<any> {
		return this.http.patch(`${this.apiUrl}/${this.activeWedding.id}`, { name });
	}

}
