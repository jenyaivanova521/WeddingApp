import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthModels } from '../../../../root-store';
import { PostService } from '../../../../root-store/services/post.service';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.sass']
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
        private _flashMessagesService: FlashMessagesService,
        private modalService: NgbModal,
    ) {
    }

    ngOnInit() {
    }

    public toggleEdit(): void {
        this.editActive = !this.editActive;
        this.commentEditToggled.next(this.editActive);
    }

    public deleteComment(): void {
        const modal = this.modalService.open(ConfirmDialogComponent, {backdrop: 'static'});
        modal.componentInstance['data'] = {
            title: 'Delete comment',
            text: 'Are you sure?',
            confirm: this.sendDeleteReq.bind(this)
        };
    }

    public onCommentEditSuccess(editedText: string): void {
        this.comment.text = editedText;
    }

    private sendDeleteReq(): void {
        this.postService.deleteComment({weddingId: this.weddingId, postId: this.postId, commentId: this.comment.id}).subscribe(
            () => {
                this.commentDeleted.next(this.comment);
                this._flashMessagesService.show('Comment deleted', {cssClass: 'alert-success', timeout: 3000});
            },
            () => {
                this._flashMessagesService.show('Comment delete failed', {cssClass: 'alert-danger', timeout: 3000});
            }
        );
    }

}
