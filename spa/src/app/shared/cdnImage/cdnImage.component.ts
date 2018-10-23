import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'cdn-image',
    templateUrl: './cdnImage.component.html',
    styleUrls: ['./cdnImage.component.sass']
})
export class CdnImageComponent implements OnInit, OnChanges {
    @Input() filename;
    @Input() width;
    @Input() height;
    @Input() src;
    @Input() dir;
    @Input() format;
    @Input() rounded;
    imageSrc: string;
    cdnUrl: string;

    constructor() { }

    getUrl() {
        if (this.src) {
            this.imageSrc = this.src
            return;
        }
        if (this.filename) {
            this.imageSrc = environment.cdnUrl + '/' + (this.dir ? this.dir + '/' : '') + this.filename.replace(/(\.[\w\d_-]+)$/i, '_'+(this.format || 'sq')+'$1');
        } else {
            this.imageSrc = '/assets/images/avatar-placeholder.png';
        }
    }

    ngOnInit() {
        this.getUrl();
    }

    ngOnChanges(changes: SimpleChanges) {
        for(let key in changes) {
            this[key] = changes[key].currentValue;
        }
        this.getUrl();
    }

}
