import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit, OnChanges {
    @Input() filename;
    @Input() size;
    @Input() src;
    @Input() dir;
    @Input() square;
    imageSrc: string;

    constructor() { }

    getUrl() {
        if (this.src) {
            this.imageSrc = this.src;
            return;
        }
        if (this.filename) {
            this.imageSrc = environment.cdnUrl + '/' + (this.dir ? this.dir + '/' : '') + this.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
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
