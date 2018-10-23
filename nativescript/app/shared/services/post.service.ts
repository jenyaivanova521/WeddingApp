import {URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '~/root-store';
import { API_URL } from '~/shared/configs';
import { Photo, Post } from '~/shared/types/models/social-feed';

@Injectable()
export class PostService {

	private apiUrl: string = API_URL;

	constructor(
		private store: Store<State>,
		private http: HttpClient
	) {
	}

	public getAllPosts({page, followed = false}): Observable<any> {
		return this.http.get<Post[]>(`${this.apiUrl }/posts?page=${ (page || 1)}${followed ? '&followed=true' : ''}`);
	}

	public getPosts({page, weddingId}): Observable<any> {
		return this.http.get<Post[]>(this.apiUrl + '/weddings/' + weddingId + '/posts?page=' + (page || 1));
	}

	public getPost({postId, weddingId}): Observable<any> {
		return this.http.get<Post[]>(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId);
	}

	public addPost({weddingId, post}): Observable<any> {
		console.log(this.apiUrl + '/weddings/' + weddingId + '/posts', post);
		// return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts', post);

		return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts', post);
	}
	
	public getPostComments({weddingId, postId, page}: { weddingId: string, postId: string, page?: number }): Observable<any> {
		return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments?page=' + (page || 1));
	}

	public addPostComment({weddingId, postId, comment}): Observable<any> {
		console.log(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments', comment);
		return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments', comment);
	}

	public getPostComment({weddingId, postId, commentId}): Observable<any> {
		return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments/' + commentId);
	}

	public likePost({weddingId, postId, like}): Observable<any> {
		return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes', like);
	}

	public unlikePost({weddingId, postId, likeId}): Observable<any> {
		return this.http.delete(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes/' + likeId);
	}

	public getLikes({weddingId, postId}): Observable<any> {
		return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes');
	}

	public getPhotos({page, weddingId}): Observable<any> {
		return this.http.get<Photo[]>(this.apiUrl + '/weddings/' + weddingId + '/photos?page=' + (page || 1));
	}

	public deletePhoto({weddingId, photoId}): Observable<any> {
		return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/photos/${photoId}`);
	}

	public deletePost({weddingId, postId}): Observable<any> {
		return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}`);
	}

	public editPost({weddingId, postId, params}): Observable<any> {
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'application/form-data');
		return this.http.patch(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}`, params, {
			headers
		});
	}

	public editComment({weddingId, postId, commentId, text}): Observable<any> {
		return this.http.patch(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}/comments/${commentId}`,
			{
				text
			}
		);
	}

	public deleteComment({weddingId, postId, commentId}): Observable<any> {
		return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}/comments/${commentId}`);
	}

}
