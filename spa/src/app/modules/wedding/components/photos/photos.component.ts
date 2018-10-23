import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

import { PostService } from '../../../../root-store/services/post.service';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';
import { PostFormComponent } from '../../../social-feed/components/post-form/post-form.component';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-wedding-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.sass']
})
export class WeddingPhotosComponent implements OnInit, OnDestroy {
    @ViewChild('modalContent') private modalContent: TemplateRef<any>;
    objectValues: any;
    photos: any[];
    page: number;
    routeSubscription: ISubscription;
    resolverSubscription: ISubscription;
    weddingId: string;
    activeProfile: any;
    infiniteScrollDisabled: boolean;
    uploaderImages: any;
    modalRef: NgbModalRef;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private modalService: NgbModal,
        private lightbox: Lightbox,
        private _flashMessagesService: FlashMessagesService,
    ) {
    }

    async ngOnInit() {
        this.photos = [];
        this.objectValues = Object.values;
        this.page = 1;
        this.routeSubscription = await this.route.parent.params.subscribe(async (params) => {
            this.weddingId = params.weddingId;
        });
        this.resolverSubscription = this.route.data.subscribe(
            data => {
                this.activeProfile = data.activeProfile;
            }
        );
        this.infiniteScrollDisabled = false;
        this.getPhotos();
    }

    async ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.resolverSubscription.unsubscribe();
    }

    async getPhotos() {
        await this.postService.getPhotos({
            weddingId: this.weddingId,
            page: this.page
        }).toPromise().then(response => {
            if (response.result.length === 0) {
                this.infiniteScrollDisabled = true;
            }
            response.result.map(photo => {
                const baseUrl = environment.cdnUrl + '/wedding/' + this.weddingId + '/photos/';
                photo.src = baseUrl + photo.filename;
                photo.thumb = baseUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
                return photo;
            });
            this.photos = this.photos.concat(response.result);
        });
    }

    uploaderImagesChange(event) {
        this.modalRef = this.modalService.open(PostFormComponent);
        this.modalRef.componentInstance.uploaderImages = event;
        this.modalRef.componentInstance.activeProfile = this.activeProfile;
        this.modalRef.componentInstance.textPlaceholder = 'Write something about this photo...';
        this.modalRef.componentInstance.onSuccess.subscribe(event => {
            this.page = 1;
            this.getPhotos();
            this.modalRef.close();
        });
    }

    onScroll(direction) {
        const currentPage = this.page;
        if (direction == 'down') {
            this.page++;
        } else if (this.page > 1) {
            this.page--;
        }
        if (currentPage != this.page) {
            this.getPhotos();
        }
    }

    open(index) {
        this.lightbox.open(this.photos, index, {resizeDuration: 0.1, fadeDuration: 0.4, disableScrolling: true});
    }

    close() {
        this.lightbox.close();
    }

    public deletePhoto(deletedPhoto, event): void {
        event.preventDefault();
        const modal = this.modalService.open(ConfirmDialogComponent, {backdrop: 'static'});
        modal.componentInstance['data'] = {
            title: 'Delete photo',
            text: 'Are you sure?',
            confirm: this.sendDeletePhotoReq.bind(this),
            callbackParam: deletedPhoto
        };
    }

    public sendDeletePhotoReq(deletedPhoto): void {
        this.postService.deletePhoto({weddingId: this.activeProfile.id, photoId: deletedPhoto.id}).subscribe(
            () => {
                this.photos = this.photos.filter((photo) => {
                    return photo.id !== deletedPhoto.id;
                });
                this._flashMessagesService.show('Photo deleted successfully', {cssClass: 'alert-success', timeout: 3000});
            },
            () => {
                this._flashMessagesService.show('Photo deletion failed', {cssClass: 'alert-danger', timeout: 3000});
            }
        );
    }

}
