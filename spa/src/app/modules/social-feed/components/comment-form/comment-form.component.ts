import { Component, EventEmitter, OnInit, OnDestroy, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../../../../root-store/services/post.service';
import {
    AuthModels,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.sass']
})
export class CommentFormComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('commentForm') private commentForm: any;
    @ViewChild('text') private text: any;
    @Input() asWedding: boolean;
    @Input() postId: string;
    @Input() weddingId: string;
    @Input() comment: any;
    @Input() editForm = false;
    @Output() onSuccess = new EventEmitter<any>();
    @Output() cancelEditEvent = new EventEmitter();

    public commentFormData: any;
    authInfo: AuthModels.AuthInfo;
    activeProfile: CommonModels.Profile;
    resolverSubscription: ISubscription;
    active: boolean;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private _flashMessagesService: FlashMessagesService
    ) {
    }

    ngOnInit() {
        this.resolverSubscription = this.route.data.subscribe(
            data => {
                this.authInfo = data.authInfo;
                this.activeProfile = data.activeProfile;
            }
        );
        if (!this.editForm) {
            this.commentFormData = {
                text: ''
            };
        } else {
            this.commentFormData = Object.assign({}, this.comment);
        }
    }

    ngAfterViewInit() {
        if (this.editForm) {
            this.text.nativeElement.focus();
        }

    }

    ngOnDestroy() {
        this.resolverSubscription.unsubscribe();
    }

    async onSubmit() {
        if (this.editForm) {
            this.postService.editComment({
                weddingId: this.weddingId,
                postId: this.postId,
                commentId: this.comment.id,
                text: this.commentFormData.text
            }).toPromise().then(() => {
                this.onSuccess.emit(this.commentFormData.text);
                this.cancelEdit();
            }).catch(() => {
                this._flashMessagesService.show('Comment edit failed',  { cssClass: 'alert-danger', timeout: 3000 });
            });
        } else {
            this.commentFormData = {
                ...this.commentFormData,
                authorWeddingId: this.activeProfile && this.activeProfile.type == 'wedding' ? this.activeProfile.id : undefined,
                asWedding: this.asWedding
            };
            const commentId = await this.postService.addPostComment({
                weddingId: this.weddingId,
                postId: this.postId,
                comment: this.commentFormData
            }).toPromise().then(response => {
                return response.result;
            });
            this.resetForm();
            const comment = await this.postService.getPostComment({
                weddingId: this.weddingId,
                postId: this.postId,
                commentId: commentId
            }).toPromise().then(response => {
                return response.result;
            });
            this.onSuccess.emit(comment);
        }
    }

    resetForm() {
        this.commentFormData.text = null;
    }

    public cancelEdit(): void {
        this.cancelEditEvent.next();
    }

}
