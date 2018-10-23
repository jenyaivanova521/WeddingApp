import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output
} from '@angular/core';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Wedding } from '~/root-store/wedding-store/models';
import { ListSelectModal } from '~/shared/modals';

import { DialogsService, ModalService } from '~/shared/services';
import { PostService } from '~/shared/services/post.service';
import { DialogType } from '~/shared/types/enum';
import { AuthModels } from '../../../../root-store';

@Component({
    selector: 'comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    @Input() comment: any;
    @Input() authInfo: AuthModels.AuthInfo;
    @Input() postId: string;
    @Input() weddingId: string;
    @Input() asWedding: boolean;
    @Output() commentDeleted: EventEmitter<any> = new EventEmitter();
    @Output() commentEditToggled: EventEmitter<boolean> = new EventEmitter();

    public editActive = false;

    constructor(
        private postService: PostService,
        private dialogsService: DialogsService,
        private modalService: ModalService
    ) {
    }

    ngOnInit() {
        console.log("comment ngOnInit");
    }

    public toggleEdit(): void {
        this.editActive = !this.editActive;
        this.commentEditToggled.next(this.editActive);
    }

    public deleteComment(): void {
	    dialogs.confirm({
		    title: 'Delete comment',
		    message: 'Are you sure ?',
		    okButtonText: 'Yes',
		    cancelButtonText: 'No, cancel',
	    }).then( (result) => {
		    if (result) {
			    this.sendDeleteReq();
		    }
	    });
    }

    public onCommentEditSuccess(editedText: string): void {
        this.comment.text = editedText;
    }

    private sendDeleteReq(): void {
        this.postService.deleteComment({weddingId: this.weddingId, postId: this.postId, commentId: this.comment.id}).subscribe(
            () => {
                this.commentDeleted.next(this.comment);
                this.dialogsService.showDialog({
                        message: 'Comment deleted',
                        type: DialogType.Success,
                });
            },
            () => {
                this.dialogsService.showDialog({
                    message: 'Comment delete failed',
                    type: DialogType.Alert
                });
            }
        );
    }

	public openSelectActionModal(): void {
		this.modalService.showModal(ListSelectModal,
			{context: {
					items: ['Edit comment', 'Delete comment'],
				}, fullscreen: true
			})
			.then(
				(result) => {
					if (result === 'Edit comment') {
						this.toggleEdit();
					} else {
						this.deleteComment();
					}
				}
			)
	}


}
