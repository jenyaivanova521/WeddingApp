import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { environment } from '../../../environments/environment';
import { Post, Photo } from '../common-models';
import { Store } from '@ngrx/store';

import { State } from '../root-store.state';

@Injectable()
export class PostService {
    private apiUrl: string = environment.apiUrl;

    constructor(
        private store: Store<State>,
        private http: HttpClient
    ) {
    }

    getAllPosts({ page, followed = false }): Observable<any> {
        return this.http.get<Post[]>(`${this.apiUrl}/posts?page=${(page || 1)}${followed ? '&followed=true' : ''}`);
    }

    getPosts({ page, weddingId }): Observable<any> {
        return this.http.get<Post[]>(this.apiUrl + '/weddings/' + weddingId + '/posts?page=' + (page || 1));
    }

    getPost({ postId, weddingId }): Observable<any> {
        return this.http.get<Post[]>(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId);
    }

    addPost({ weddingId, post }): Observable<any> {
        return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts', post);
    }

    getPostComments({ weddingId, postId, page }: { weddingId: string, postId: string, page?: number }): Observable<any> {
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments?page=' + (page || 1));
    }

    addPostComment({ weddingId, postId, comment }): Observable<any> {
        return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments', comment);
    }

    getPostComment({ weddingId, postId, commentId }): Observable<any> {
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/comments/' + commentId);
    }

    likePost({ weddingId, postId, like }): Observable<any> {
        return this.http.post(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes', like);
    }

    unlikePost({ weddingId, postId, likeId }): Observable<any> {
        return this.http.delete(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes/' + likeId);
    }

    getLikes({ weddingId, postId }): Observable<any> {
        return this.http.get(this.apiUrl + '/weddings/' + weddingId + '/posts/' + postId + '/likes');
    }

    getPhotos({ page, weddingId }): Observable<any> {
        return this.http.get<Photo[]>(this.apiUrl + '/weddings/' + weddingId + '/photos?page=' + (page || 1));
    }

    public deletePhoto({ weddingId, photoId }): Observable<any> {
        return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/photos/${photoId}`);
    }

    public deletePost({ weddingId, postId }): Observable<any> {
        return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}`);
    }

    public editPost({ weddingId, postId, params }): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/form-data');
        return this.http.patch(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}`, params, {
            headers
        });
    }

    public editComment({ weddingId, postId, commentId, text }): Observable<any> {
        return this.http.patch(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}/comments/${commentId}`,
            {
                text
            }
        );
    }

    public deleteComment({ weddingId, postId, commentId }): Observable<any> {
        return this.http.delete(`${this.apiUrl}/weddings/${weddingId}/posts/${postId}/comments/${commentId}`);
    }

}
