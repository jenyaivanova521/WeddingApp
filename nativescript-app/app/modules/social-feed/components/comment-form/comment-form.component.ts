import {
	Component,
	EventEmitter,
	OnInit,
	Input,
	Output,
	ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthInfo } from '~/root-store/auth-store/models';
import { Wedding } from '~/root-store/wedding-store/models';
import { DialogsService } from '~/shared/services';
import { PostService } from '~/shared/services/post.service';
import { DialogType } from '~/shared/types/enum';
import { CommonModels } from '~/root-store';
import { Config } from '~/shared/configs';

@Component({
    selector: 'comment-form',
    templateUrl: 'comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

    @Input() asWedding: boolean;
    @Input() postId: string;
    @Input() postWeddingId: string;
    @Input() authInfo: AuthInfo;    
    @Input() comment: any;
    @Input() editForm = false;
    @Output() onSuccess = new EventEmitter<any>();
    @Output() cancelEditEvent = new EventEmitter();

    public commentFormData: any;
    activeProfile: CommonModels.Profile;
    active: boolean;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private dialogsService: DialogsService,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        if (!this.editForm) {
            this.commentFormData = {
                text: ''
            };
        } else {
            this.commentFormData = Object.assign({}, this.comment);
            this.changeDetector.markForCheck();
        }
        this.activeProfile = Config.activeProfile;
        // console.log("comment-form ngOnInit");
        // console.log(this.activeWedding);
    }

    public onSubmit() {
        if (this.editForm) {
            this.postService.editComment({
                weddingId: this.postWeddingId,
                postId: this.postId,
                commentId: this.comment.id,
                text: this.commentFormData.text
            }).toPromise().then(() => {
                this.onSuccess.emit(this.commentFormData.text);
                this.cancelEdit();
            }).catch(() => {
                this.dialogsService.showDialog({
	                message: 'Comment edit failed',
                    type: DialogType.Alert
                });
            });
        } else {
            this.commentFormData = Object.assign(this.commentFormData, {
	            authorWeddingId: this.activeProfile ? this.activeProfile.id : undefined,
	            asWedding: this.asWedding
            });

            console.log(this.commentFormData);

            this.postService.addPostComment({
                weddingId: this.postWeddingId,
                postId: this.postId,
                comment: this.commentFormData
                /*{
                    authorWeddingId: this.activeWedding ? this.activeWedding.id : undefined,
                    asWedding: this.asWedding,
                    text: this.commentFormData.text
                }*/
            }).subscribe(response => {
	            const commentId = response.result;
	            this.resetForm();

	            this.postService.getPostComment({
		            weddingId: this.postWeddingId,
		            postId: this.postId,
		            commentId: commentId
	            }).toPromise().then(response => {
		            this.onSuccess.emit(response.result);
	            });

            }, (error) => {                
	            console.log(error);
            });
        }
    }

    resetForm() {
        this.commentFormData.text = null;
    }

    public cancelEdit(): void {
        this.cancelEditEvent.next();
    }

	public setValue(valueName: string, element: any, useParam?: string): void {
		const value = useParam ? element[useParam] : element;
		this.commentFormData[valueName] = value;
	}

	public onTextViewLoaded(args): void {
    	args.object.focus();
    }

}
