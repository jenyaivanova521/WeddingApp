import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'image-input',
    templateUrl: './image-input.component.html',
    styleUrls: ['./image-input.component.sass']
})
export class ImageInputComponent implements OnInit {
    @ViewChild('imageInput') imageInput: ElementRef;
    @Input() formData: FormData;
    @Input() fieldName: string;
    @Input() validate: boolean;
    @Output() isValid = new EventEmitter<boolean>();
    @Output() previewUrl = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    getImageUrl(object) {
        return (window.URL) ? window.URL.createObjectURL(object) : (window as any).webkitURL.createObjectURL(object);
    }

    imageInputChange(event, fieldName) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let image = new Image;
            let imageUrl = this.getImageUrl(file);
            image.src = imageUrl;
            image.onload = () => {
                if (this.validate && (image.width < environment.imageMinWidth || image.height < environment.imageMinHeight)) {
                    this.isValid.emit(false);
                    this.imageInput.nativeElement.value = '';
                    this.formData.delete(fieldName);
                    this.previewUrl.emit(null);
                    return;
                } else {
                    this.formData.set(fieldName, file, file.name);
                    this.previewUrl.emit(imageUrl);
                    this.isValid.emit(true);
                }
            };
        }
    }

}
