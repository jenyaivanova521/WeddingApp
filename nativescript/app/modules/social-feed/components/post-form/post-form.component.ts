import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';

import { State, CommonModels } from '~/root-store';
import { Wedding } from '~/root-store/wedding-store/models';
import { PostService } from '~/shared/services/post.service';
import { Post } from '~/shared/types/models/social-feed';
import { Config, API_URL } from '~/shared/configs';
import { ModalService, AuthService } from '~/shared/services';
import { UploadModal } from '~/shared/modals';
import { ImageAsset } from 'tns-core-modules/image-asset';
// import {ImageAsset} from 'tns-core-modules/tns-core-modules';
import * as platformModule from 'tns-core-modules/platform';
import { ImageSource, fromFile } from 'tns-core-modules/image-source/image-source';
import * as Toast from 'nativescript-toast';
import * as bghttp from 'nativescript-background-http';
var fs = require("tns-core-modules/file-system");

@Component({
    selector: 'post-form',
    templateUrl: 'post-form.component.html',
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

    public postFormData: any;
    public images = [];
    public error: any;
    public submitted: boolean;
    public editForm = false;
    public imagesToRemove: Array<string> = [];
    public imageParams = [];

    text:string;
    shownPhotosLength = 6;
    
    constructor(
        private store: Store<State>,
        private route: ActivatedRoute,
        private postService: PostService,
        private modalService: ModalService,
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
        console.log("post-form ngOnInit");
        this.resetForm();
        if (!this.textPlaceholder) {
            this.textPlaceholder = 'What\'s on your mind?';
        }

        if (this.post) {
            this.editForm = true;
            this.postFormData = Object.assign({}, this.post);
        }
    }

    public onSubmit() {
        this.getImageParams();        
    }
    getImageParams(){         
        let session = bghttp.session('post');
		let params = [];
   
        if (this.images && this.images.length > 0 ) {
            for (let i = 0; i < this.images.length; i++) {
                const image = this.images[i];
                console.log(image);
                
                // var originPathSplited = image.split("/");
                // var origFilename = originPathSplited[originPathSplited.length-1];
                // var filePath = fs.path.join(fs.knownFolders.documents().path, origFilename);
                // var imageSource = fromFile(image);
                // var saved = imageSource.saveToFile(filePath, "jpeg");
                // console.log("new path: " + filePath);
                // console.log(`item saved:${saved}`);

                const param = {
                    name: "photos[]",
                    mimeType: 'image/jpeg',
                    fileName: image,
                };
                params.push(param);
            }
        }
        if(this.postFormData.text){
            let param = {
                value: this.postFormData.text,
                name: "text"
            };
            params.push(param);
        }
        
        var url = API_URL + '/weddings/' + this.activeProfile.id + '/posts';
        if (this.editForm) {
            url = url + `/${this.post.id}`;
        }
		let request = {
			url: url,
			method: 'POST',
			headers: {
                'Content-Type': 'application/form-data',
				'Authorization': 'Bearer ' + this.authService.getToken(),
            },
            description:"Post Upload"
		};
		let task: bghttp.Task;
		console.log(params);
		task = session.multipartUpload(params, request);
		task.on('responded', (response) => this.onCompleteUpload(response));
        task.on('error', this.onUploadError)
    }
    
    public onCompleteUpload(response): void {
        // TODO redirect to app and get weddings
        console.log("post completed")
        Toast.makeText("Your post uploaded", "long").show();
        this.submitted = false;
        const postId = JSON.parse(response.data).result;
        console.log(postId);

        this.text = "";
        this.images = [];
        this.error = null;

        // this.refreshPost();
        this.postService.getPost({
            weddingId: this.activeProfile.id,
            postId: postId
        }).toPromise().then(response => {
            console.log("Post refresh");
            this.onSuccess.emit(response.result);
            }
        );
	}

	public onUploadError(error): void {
        console.log(error);
		Toast.makeText("Your post upload failed", "long").show();
	}
    // submitForm(){
    //     if (this.editForm) {
    //         this.submitted = true;
    //         let params: any = {
    //             text: this.postFormData.text,
    //         };

    //         if (this.imagesToRemove.length) {
    //             params.deletedPhotos = this.imagesToRemove;
    //         }

    //         const photos = [];
    //         if (this.images) {
    //             for (let i = 0; i < this.images.length; i++) {
    //                 const image = this.images[i];
    //                 // photos.push(image.file);//TODO: should be implemented with nativescript-http-formdata
    //             }
    //         }

    //         if (photos.length) {
    //             params = Object.assign(params, {photos});
    //         }
    //         const formData = objectToFormData(params);

    //         this.postService.editPost({
    //             weddingId: this.activeProfile.id,
    //             postId: this.post.id,
    //             params: formData
    //         }).subscribe(() => {
    //             this.submitted = false;
    //             this.onSuccess.emit();
    //         }, (error) => {
    //             this.error = error.error;
    //             this.submitted = false;
    //         });
    //     } else {
    //         // let post = this.postFormData;
    //         // let photos = [];
    //         // if (this.images) {
    //         //     for (let i = 0; i < this.images.length; i++) {
    //         //         let image = this.images[i];
    //         //         // photos.push(image.file);//TODO: should be implemented with nativescript-http-formdata
    //         //     }
    //         // }
    //         // let formData = objectToFormData(
    //         //     Object.assign(post, {photos})
    //         // );
            
    //         // console.log(formData);            
    //         this.submitted = true;
    //         this.postService.addPost({
    //             weddingId: this.activeProfile.id,
    //             post:
    //             {
    //                 text:this.postFormData.text,
    //                 photos:this.imageParams
    //             }
    //         }).subscribe((response) => {
    //             console.log("Post Success");
	//             // this.postForm.reset();
	//             // this.uploader.reset();
	//             this.submitted = false;

    //             const postId = response.result;
    //             console.log(postId);

    //             this.text = "";
    //             this.images = [];
    //             this.error = null;

	//             // this.refreshPost();
    //             this.postService.getPost({
	// 	            weddingId: this.activeProfile.id,
	// 	            postId: postId
    //             }).toPromise().then(response => {
    //                 console.log("Post refresh");
    //                 this.onSuccess.emit(response.result);
    //                 }
    //             );
                
    //         }, (error) => {                
	//             this.error = error.error;
	//             this.submitted = false;
    //         });
    //     }
    //     /// open after test
    //     console.log("Post submit")
    // }

    camera_image(){
        this.modalService.showModal(UploadModal, {}).then(
			(url: string) => {
				// this.selectedUrl = url;
                // this.photoSelected.next(url);
                console.log("image selected");                
                this.images.push(url)
			}
		)
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

	public setValue(valueName: string, element: any, useParam?: string): void {
		const value = useParam ? element[useParam] : element;
		this.postFormData[valueName] = value;
	}

}
