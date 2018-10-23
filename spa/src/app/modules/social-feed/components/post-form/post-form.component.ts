import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';

import { environment } from '../../../../../environments/environment';
import { Post } from '../../../../root-store/common-models';
import { PostService } from '../../../../root-store/services/post.service';
import {
    RootStoreState,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {
    @ViewChild('postForm') private postForm: any;
    @ViewChild('uploader') private uploader: any;
    @Input() activeProfile: CommonModels.Profile;
    @Input() uploaderImages?: any;
    @Input() textPlaceholder?: string;
    @Input() post?: Post;
    @Output() onSuccess = new EventEmitter<any>();
    @Output() onClose = new EventEmitter();

    postFormData: any;
    images: any;
    error: any;
    submitted: boolean;

    public editForm = false;
    public imagesToRemove: Array<string> = [];

    constructor(
        private store: Store<RootStoreState.State>,
        private route: ActivatedRoute,
        private postService: PostService,
    ) {
    }

    ngOnInit() {
        this.resetForm();
        if (!this.textPlaceholder) {
            this.textPlaceholder = 'What\'s on your mind?';
        }

        if (this.post) {
            this.editForm = true;
            this.postFormData = Object.assign({}, this.post);
        }
    }

    async onSubmit() {
        if (this.editForm) {
            this.submitted = true;
            let params: any = {
                text: this.postFormData.text,
            };

            if (this.imagesToRemove.length) {
                params.deletedPhotos = this.imagesToRemove;
            }

            const photos = [];
            if (this.images) {
                for (let i = 0; i < this.images.length; i++) {
                    const image = this.images[i];
                    photos.push(image.file);
                }
            }

            if (photos.length) {
                params = Object.assign(params, {photos});
            }
            const formData = objectToFormData(params);

            this.postService.editPost({
                weddingId: this.activeProfile.id,
                postId: this.post.id,
                params: formData
            }).subscribe(() => {
                this.submitted = false;
                this.onSuccess.emit();
            }, (error) => {
                this.error = error;
                this.submitted = false;
            });
        } else {
            let post = {...this.postFormData};
            let photos = [];
            if (this.images) {
                for (let i = 0; i < this.images.length; i++) {
                    let image = this.images[i];
                    photos.push(image.file);
                }
            }
            let formData = objectToFormData(
                Object.assign(post, {photos})
            );
            this.submitted = true;
            const postId = await this.postService.addPost({
                weddingId: this.activeProfile.id,
                post: formData
            }).toPromise().then(response => {
                this.postForm.reset();
                this.uploader.reset();
                this.submitted = false;
                return response.result;
            }).catch(error => {
                this.error = error;
                this.submitted = false;
            });
            const addedPost = await this.postService.getPost({
                weddingId: this.activeProfile.id,
                postId: postId
            }).toPromise().then(response => {
                return {
                    [postId]: response.result
                };
            });
            this.onSuccess.emit(addedPost);
        }
    }

    resetForm() {
        this.postFormData = {
            text: null
        };
    }

    public removeImage(removedPhoto: any): void {
        this.imagesToRemove.push(removedPhoto.id);
    }

    public cancel(): void {
        this.onClose.next();
    }

}
