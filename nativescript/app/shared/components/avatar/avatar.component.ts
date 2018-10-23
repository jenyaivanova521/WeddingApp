import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CDN_URL } from '~/shared/configs';

@Component({
	selector: 'avatar',
	templateUrl: 'avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, OnChanges {
	@Input() filename;
	@Input() size;
	@Input() src;
	@Input() dir;
	@Input() square = false;
	imageSrc: string;

	constructor() { }

	getUrl() {
		if (this.src) {
			this.imageSrc = this.src;
			return;
		}
		if (this.filename) { // TODO use env for cdn link
			this.imageSrc = CDN_URL + '/' + (this.dir ? this.dir + '/' : '') + this.filename.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
		} else {
			this.imageSrc = '~/resources/images/avatar.png';
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
