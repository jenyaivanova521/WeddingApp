import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { screen } from 'platform';

import { State } from '~/root-store';
import { ModalService, PostService } from '~/shared/services';
import { Config, CDN_URL } from '~/shared/configs';
import { PostFormComponent } from '~/modules/social-feed/components';
import { Wedding } from '~/root-store/wedding-store/models';
const PhotoViewer = require('nativescript-photoviewer');

@Component({
	moduleId: module.id,
	selector: 'couple-photos',
	templateUrl: 'couple-photos.component.html',
	styleUrls: ['./couple-photos.component.scss']
})
export class CouplePhotosComponent {

	private activeWedding: Wedding;
	public weddingId: string;
    public wedding: Wedding;
	public photoWidth: number;
	photos: any[];
    page: number;
	private photoViewer = new PhotoViewer();
	
    infiniteScrollDisabled: boolean;
    uploaderImages: any;
	cdnUrl:string;
	
	constructor(
		private modalService: ModalService,
		private store: Store<State>,
		private postService: PostService,
	) {
		this.photoWidth = (screen.mainScreen.widthDIPs - 60) / 2;
	}
	ngOnInit(): void {
		console.log("couple profile Information ngOnit");
		// console.log(Config.activeWedding);
		this.activeWedding = Config.activeWedding;
		this.page = 1;
		
		if( Config.activeWedding ) {
			this.weddingId = Config.activeWedding.id;
			this.cdnUrl = CDN_URL + '/wedding/' + this.weddingId + '/photos/';
			this.getPhotos();
		}
	}
	getPhotos() {
        this.postService.getPhotos({
            weddingId: this.weddingId,
            page: this.page
        }).toPromise().then(response => {
            if (response.result.length === 0) {
                this.infiniteScrollDisabled = true;
			}
			console.log(response);
            response.result.map(photo => {
                const baseUrl = CDN_URL + '/wedding/' + this.weddingId + '/photos/';
                photo.src = baseUrl + photo.filename;
				photo.thumb = baseUrl + photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
				// console.log(photo.filename+", "+photo.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1'));
                return photo;
			});
			this.photos = [];
            this.photos = this.photos.concat(response.result);
        });
    }
	public showGallery(iterator?: number): void {
    	const photos = this.photos.map((photo) => {
		    return this.cdnUrl + photo.filename;//.replace(/(\.[\w\d_-]+)$/i, '_lg$1')
	    });

    	this.photoViewer.startIndex = iterator || 0;

	    this.photoViewer.showViewer(photos);
    }
    uploaderImagesChange(event) {
        // this.modalRef = this.modalService.open(PostFormComponent);
        // this.modalRef.componentInstance.uploaderImages = event;
        // this.modalRef.componentInstance.activeProfile = this.activeProfile;
        // this.modalRef.componentInstance.textPlaceholder = 'Write something about this photo...';
        // this.modalRef.componentInstance.onSuccess.subscribe(event => {
        //     this.page = 1;
        //     this.getPhotos();
        //     this.modalRef.close();
        // });
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

    public deletePhoto(deletedPhoto, event): void {
        // event.preventDefault();
        // const modal = this.modalService.open(ConfirmDialogComponent, {backdrop: 'static'});
        // modal.componentInstance['data'] = {
        //     title: 'Delete photo',
        //     text: 'Are you sure?',
        //     confirm: this.sendDeletePhotoReq.bind(this),
        //     callbackParam: deletedPhoto
        // };
    }

    public sendDeletePhotoReq(deletedPhoto): void {
        this.postService.deletePhoto({weddingId: this.weddingId, photoId: deletedPhoto.id}).subscribe(
            () => {
                this.photos = this.photos.filter((photo) => {
                    return photo.id !== deletedPhoto.id;
                });
                // this._flashMessagesService.show('Photo deleted successfully', {cssClass: 'alert-success', timeout: 3000});
            },
            () => {
                // this._flashMessagesService.show('Photo deletion failed', {cssClass: 'alert-danger', timeout: 3000});
            }
        );
    }
}
