import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
declare var Photostack: any;

import { environment } from '../../../../../environments/environment';
import { Post } from '../../../../root-store/common-models';
import { PostService } from '../../../../root-store/services/post.service';
import {
    AuthModels,
    CommonModels
} from '../../../../root-store';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, OnDestroy {

    @ViewChild('photostack') photostack: ElementRef;
    @Input() post: any;
    @Input() index: number;
    @Output() postDeleted: EventEmitter<Post> = new EventEmitter();

    authInfo: AuthModels.AuthInfo;
    activeProfile: CommonModels.Profile;
    resolverSubscription: ISubscription;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    commentsLoading: boolean;
    commentsLoaded: boolean;
    commentsLoadMore: boolean;
    commentsPage: number;
    asWedding: boolean;
    likeId: string | boolean;
    loading: boolean = false;
    weddingPhotos: any[];
    song: any;

    public commentEditActive: boolean;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private _flashMessagesService: FlashMessagesService,
        private modalService: NgbModal,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    async ngOnInit() {
        this.resolverSubscription = this.route.data.subscribe(
            data => {
                this.authInfo = data.authInfo;
                this.activeProfile = data.activeProfile;
                this.asWedding = this.activeProfile && this.activeProfile.type == 'wedding' ? true : false;
                this.likeId = this.checkLikes();
            }
        );
        this.post.comments = [];
        this.commentsLoadMore = false;
        this.commentsPage = 1;
        this.galleryOptions = [
            {
                width: '100%',
                height: '480px',
                thumbnailsColumns: this.post.photos.length < 4 ? this.post.photos.length : 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                previewAnimation: false,
                arrowPrevIcon: 'mdi mdi-chevron-left',
                arrowNextIcon: 'mdi mdi-chevron-right',
                closeIcon: 'mdi mdi-close',
                fullscreenIcon: 'mdi mdi-fullscreen',
                previewFullscreen: false,
                imageArrows: false,
                thumbnailsRemainingCount: this.post.photos.length > 4,
                thumbnails: this.post.photos.length > 1,
                previewCloseOnClick: true
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '420px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 10,
                thumbnailMargin: 10
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.initGalleryImages();

    }

    ngAfterViewInit() {
        if (this.post.isWeddingDayPost) {
            this.song = new Audio(environment.cdnUrl + '/sounds/polaroid.mp3');
            this.loading = true;
            this.postService.getPhotos({
                weddingId: this.post.wedding.id,
                page: 1
            }).toPromise().then(response => {
                this.weddingPhotos = response.result.map(photo => {
                    const baseUrl = environment.cdnUrl + '/wedding/' + this.post.wedding.id + '/photos/';
                    return baseUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_md$1');
                });

                setTimeout(() => {
                    if (this.photostack) {
                        let timeout;
                        new Photostack(this.photostack.nativeElement, {
                            showNavigation: false,
                            afterOpen: ps => {
                                this.song.play();
                            },
                            afterClose: ps => {
                                this.song.pause();
                                this.song.currentTime = 0;
                                clearTimeout(timeout);
                            },
                            afterShowPhoto: ps => {
                                if (ps.allItemsCount > ps.current + 1) {
                                    timeout = setTimeout(function() {
                                        ps._navigate('next');
                                    }, 3000);
                                } else {
                                    ps._navigate('next');
                                    timeout = setTimeout(function() {
                                        ps._close();
                                    }, 3000);
                                }
                            }
                        });
                    }
                }, 100)

                this.loading = false;
            });
        }


    }


    ngOnDestroy() {
        this.resolverSubscription.unsubscribe();
        if(this.song) {
            this.song.pause();
            this.song.currentTime = 0;
        }
    }

    public initGalleryImages(): void {
        this.galleryImages = [];
        if (this.post.photos.length > 0) {
            const cdnUrl = environment.cdnUrl + '/wedding/' + this.post.wedding.id + '/photos/';
            for (let i = 0; i < this.post.photos.length; i++) {
                const photo = this.post.photos[i];
                this.galleryImages.push({
                    small: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sm$1'),
                    medium: cdnUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_lg$1'),
                    big: cdnUrl + photo.filename
                });
            }
        }
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

    async like() {
        await this.postService.likePost({
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

    async unlike() {
        await this.postService.unlikePost({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            likeId: this.likeId
        }).toPromise().then(response => {
            this.post.likesCount--;
            this.post.yourLikes = this.post.yourLikes.filter(like => {
                return like.id != this.likeId;
            });
            this.likeId = this.checkLikes();
        });
    }

    setAsWedding(value) {
        this.asWedding = value;
        this.likeId = this.checkLikes();
    }

    async getComments() {
        this.commentsLoading = true;
        let comments = await this.postService.getPostComments({
            weddingId: this.post.wedding.id,
            postId: this.post.id,
            page: this.commentsPage
        }).toPromise()
            .then(response => {
                return response.result;
            });
        this.post.comments = comments.reverse().concat(this.post.comments);
        if (this.post.comments.length < this.post.commentsCount) {
            this.commentsLoadMore = true;
            this.commentsPage++;
        } else {
            this.commentsLoadMore = false;
        }
        this.commentsLoading = false;
        this.commentsLoaded = true;
    }

    async onPostVisible({ target, visible }, postId) {
        if (this.post.commentsCount && !this.commentsLoading && !this.commentsLoaded && visible && this.post.id == postId) {
            await this.getComments();
        }
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
        const modalRef = this.modalService.open(PostFormComponent);
        modalRef.componentInstance.activeProfile = this.post.wedding;
        modalRef.componentInstance.post = this.post;

        modalRef.componentInstance.onSuccess.subscribe(
            (event) => {
                this.postService.getPost({ postId: this.post.id, weddingId: this.post.wedding.id }).subscribe(
                    (response: any) => {
                        this.post = response.result;
                        this.initGalleryImages();
                        this.changeDetector.markForCheck();
                    },
                    () => {
                        this._flashMessagesService.show('Getting post data failed', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                );
                modalRef.close();
            }
        );
        modalRef.componentInstance.onClose.subscribe(
            () => {
                modalRef.close();
            }
        );
    }

    public deletePost(): void {
        const modal = this.modalService.open(ConfirmDialogComponent, { backdrop: 'static' });
        modal.componentInstance['data'] = {
            title: 'Delete post',
            text: 'Are you sure?',
            confirm: this.sendDeleteReq.bind(this)
        };
    }

    private sendDeleteReq(): void {
        this.postService.deletePost({ weddingId: this.activeProfile.id, postId: this.post.id }).subscribe(
            () => {
                this.postDeleted.next(this.post);
                this._flashMessagesService.show('Post deleted', { cssClass: 'alert-success', timeout: 3000 });
            },
            () => {
                this._flashMessagesService.show('Post delete failed', { cssClass: 'alert-danger', timeout: 3000 });
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

}
