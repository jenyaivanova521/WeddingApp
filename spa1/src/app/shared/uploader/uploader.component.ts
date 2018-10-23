import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.sass']
})
export class UploaderComponent implements OnInit {
    @Input() limit?: number;
    @Input() initImages?: any;
    @Input() cdnFolder?: string;
    @Input() dropzone?: boolean;
    @Input() uploadedImages?: Array<any>;
    @Output() getImages = new EventEmitter<object[]>();
    @Output() uploadedImageRemoved = new EventEmitter<Object>();
    containerClass: string;
    images: {
        file: any,
        url: string
    }[];

    constructor(
        public sanitizer: DomSanitizer
    ) {
    }

    ngOnInit() {
        this.images = [];
        this.uploadedImages = this.uploadedImages ? this.uploadedImages : [];
        if (!this.limit) {
            this.limit = 6;
        }
        if (this.initImages) {
            this.imageInputChange(this.initImages);
        }
    }

    removeImage(index) {
        this.images.splice(index, 1);
    }

    reset() {
        this.images = [];
    }

    isDuplicate(file) {
        let isDuplicate = false;
        for (let i = 0; i < this.images.length; i++) {
            let image = this.images[i];
            if (image.file.name == file.name) {
                isDuplicate = true;
                break;
            }
        }
        return isDuplicate;
    }

    imageInputChange(event) {

        let fileList: FileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;

        if (fileList.length > 0) {
            for (let i = 0; i < fileList.length; i++) {
                let file = fileList[i];
                if (!this.isDuplicate(file) && this.images.length < this.limit) {
                    this.images.push({
                        file: file,
                        url: (window.URL) ? window.URL.createObjectURL(file) : (window as any).webkitURL.createObjectURL(file)
                    });
                }
            }
        }
        this.getImages.emit(this.images);
    }

    public removeUploadedImage(imageToRemove: any): void {
        this.uploadedImageRemoved.next(imageToRemove);
        this.uploadedImages = this.uploadedImages.filter((image) => {
            return image.id !== imageToRemove.id;
        });
    }

    public handleUploadedImageUrl(filename: string): string {
        const cdnUrl = environment.cdnUrl + this.cdnFolder;
        return cdnUrl + filename.replace(/(\.[\w\d_-]+)$/i, '_sm$1');
    }
}
