import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ChangeDetectorRef
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import * as dialogs from 'ui/dialogs';
const PhotoViewer = require('nativescript-photoviewer');

import { State, CommonModels } from '~/root-store';
import { AuthInfo } from '~/root-store/auth-store/models';
import { selectAuthInfo } from '~/root-store/auth-store/selectors';
import { Wedding, PrivacySettingEnum } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { CDN_URL, Config } from '~/shared/configs';
import { ListSelectModal } from '~/shared/modals';
import { DialogsService, ModalService } from '~/shared/services';
import { PostService } from '~/shared/services/post.service';
import { DialogType } from '~/shared/types/enum';
import { Post } from '~/shared/types/models/social-feed';
import * as Toast from 'nativescript-toast';
import { LoadingIndicator } from 'nativescript-loading-indicator';

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, OnDestroy {

    @Input() post: any;
    @Input() index: number;
    // @Input() activeProfile: CommonModels.Profile;
    @Output() postDeleted: EventEmitter<Post> = new EventEmitter();

    authInfo: AuthInfo;
    // activeWedding: Wedding;
    commentsLoading: boolean;
    commentsLoaded: boolean;
    commentsLoadMore: boolean;
    commentsPage: number;
    asWedding: boolean;
    likeId: string | boolean;    

    private indicator: LoadingIndicator;
	private photoViewer = new PhotoViewer();
	public cdnUrl: string;
    public showComments: boolean;
    public addCommentActive: boolean = false;
	public shownPhotosLength: number = 3;

	// private activeWeddingSubscription: ISubscription;
	private authInfoSubscription: ISubscription;
    resolverSubscription: ISubscription;
    activeProfile: CommonModels.Profile;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private dialogsService: DialogsService,
        private changeDetector: ChangeDetectorRef,
        private store: Store<State>,
        private modalService: ModalService
    ) {
        this.indicator = new LoadingIndicator();
    }

    ngOnInit() {
        this.authInfoSubscription = this.store.select(selectAuthInfo).subscribe((authInfo) => {
            this.authInfo = authInfo; 
        });
        
        this.post.comments = [];
        this.cdnUrl = CDN_URL + '/wedding/' + this.post.wedding.id + '/photos/';
        this.commentsLoadMore = false;
        this.commentsPage = 1;

        this.activeProfile = Config.activeProfile;        
        // console.log("active profile:" + this.activeProfile);
        this.asWedding = this.activeProfile && this.activeProfile.type == 'wedding' ? true : false;
        this.likeId = this.checkLikes();
        
    }

    ngOnDestroy() {
        // this.activeWeddingSubscription.unsubscribe();
	    // this.authInfoSubscription.unsubscribe();
    }

    public showGallery(iterator?: number): void {
    	const photos = this.post.photos.map((photo) => {
		    return this.cdnUrl + photo.filename;//.replace(/(\.[\w\d_-]+)$/i, '_lg$1')
	    });

    	this.photoViewer.startIndex = iterator || 0;

	    this.photoViewer.showViewer(photos);
    }

    checkLikes() {
        if (this.post.yourLikes.length > 0) {
            for (let i = 0; i < this.post.yourLikes.length; i++) {
                let like = this.post.yourLikes[i];
                if ((this.asWedding && like.asWedding && like.authorWeddingId == this.activeProfile.id)
                    || !this.asWedding && !like.asWedding) {
                    return like.id;
                }
            }
        } else {
            return false;
        }
    }

    public like() {
        this.postService.likePost({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            like: {
                authorWeddingId: this.activeProfile.type == 'wedding' ? this.activeProfile.id : null,
                asWedding: this.asWedding
            }
        }).toPromise().then(response => {
            this.post.likesCount++;
            this.post.yourLikes.push({
                id: response.result,
                authorWeddingId: this.activeProfile.id,
                asWedding: this.asWedding
            });
            this.likeId = this.checkLikes();
        });
    }

    public unlike() {
        this.postService.unlikePost({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            likeId: this.likeId
        }).subscribe((response) => {
	        this.post.likesCount--;
	        this.post.yourLikes = this.post.yourLikes.filter(like => {
		        return like.id != this.likeId;
	        });
	        this.likeId = this.checkLikes();
        });
    }

    public getComments() {
        console.log("get comments");
        this.indicator.show({
			message: 'Loading...'
		  });
        this.commentsLoading = true;
        this.postService.getPostComments({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            page: this.commentsPage
        }).subscribe((response) => {
	        const comments = response.result;
	        this.post.comments = comments.reverse().concat(this.post.comments);
	        if (this.post.comments.length < this.post.commentsCount) {
		        this.commentsLoadMore = true;
		        this.commentsPage++;
	        } else {
		        this.commentsLoadMore = false;
	        }
	        this.commentsLoading = false;
	        this.commentsLoaded = true;

            this.changeDetector.markForCheck();
            this.indicator.hide();
        },(error) => {
            console.log(error);
            this.indicator.hide();
        });
    }

    onCommentAdded(comment) {
        if (this.post.commentsCount == 0) {
            this.commentsLoaded = true;
        }
        this.post.commentsCount++;
        if (!this.post.comments) {
            this.post.comments = [];
        }
        this.post.comments.push(comment);
    }

    public editPost(): void {
        // TODO
        // const modalRef = this.modalService.open(PostFormComponent);
        // modalRef.componentInstance.activeWedding = this.post.wedding;
        // modalRef.componentInstance.post = this.post;
        //
        // modalRef.componentInstance.onSuccess.subscribe(
        //     (event) => {
        //         this.postService.getPost({postId: this.post.id, weddingId: this.post.wedding.id}).subscribe(
        //             (response: any) => {
        //                 this.post = response.result;
        //                 this.changeDetector.markForCheck();
        //             },
        //             () => {
        //                 // TODO delete
        //                 // this._flashMessagesService.show('Getting post data failed', {cssClass: 'alert-danger', timeout: 3000});
        //             }
        //         );
        //         modalRef.close();
        //     }
        // );
        // modalRef.componentInstance.onClose.subscribe(
        //     () => {
        //         modalRef.close();
        //     }
        // );
    }

    public deletePost(): void {
	    dialogs.confirm({
		    title: 'Delete post',
		    message: 'Are you sure ?',
		    okButtonText: 'Yes',
		    cancelButtonText: 'No, cancel',
	    }).then( (result) => {
		    if (result) {
		    	this.sendDeleteReq();
		    }
	    });
    }

    private sendDeleteReq(): void {
        this.postService.deletePost({ weddingId: this.activeProfile.id, postId: this.post.id }).subscribe(
            () => {
                this.postDeleted.next(this.post);
                Toast.makeText("Post deleted", "long").show();                
            },
            () => {
                Toast.makeText("Post delete failed", "long").show();                
            }
        );
    }

    public removeComment(removedComment: any): void {
        this.post.comments = this.post.comments.filter((comment) => {
            return removedComment.id !== comment.id;
        });
        this.post.commentsCount--;

        this.changeDetector.markForCheck();
    }
    public cancelEditEvent(event){
        this.addCommentActive = false;
    }

    public toggleAddComment(): void {
        console.log("toggle add comment");
        this.addCommentActive = !this.addCommentActive;
        this.commentsPage = 1;
        this.changeDetector.markForCheck();
        if(this.addCommentActive && !this.showComments) {
            this.toggleShowComments()
        }
    }

    public toggleShowComments(): void {
        console.log("toggle show comments");
        this.showComments = !this.showComments;
        if (this.showComments && !this.post.comments.length) {
	        this.getComments();
        }
    }

    public openSelectActionModal(): void {
	    this.modalService.showModal(ListSelectModal,
		    {context: {
				    items: ['Edit post', 'Delete post'],
			    }, fullscreen: true
		    })
		    .then(
			    (result) => {
			    	if (result === 'Edit post') {
                        // TODO open edit post
                        this.editPost();
				    } else {
			    		this.deletePost();
				    }
			    }
		    )
    }

    public showMorePhotos(): void {
    	this.shownPhotosLength += 5;
    }
    showMoreComments(){
        this.commentsPage++;
        this.getComments();
    }

}
