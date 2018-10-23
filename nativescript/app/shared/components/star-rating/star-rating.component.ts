import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'custome-star',
	templateUrl: 'star-rating.component.html',
	styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

	@Input() value;
	@Input() size = "20%";
	@Input() bigstar = false;
	@Output() valueChanged: EventEmitter<any> = new EventEmitter();

	public radioOptions: Array<any>;
	private active: any;
	starList = [1,1,1,1,1];
	starFill = '~/resources/images/star_fill.png';
	starHalf = '~/resources/images/star_half.png';
	starEmpty = '~/resources/images/star_empty.png';

	constructor() {
	}

	ngOnInit(): void {
		// console.log("start rating ngOnit: ", this.value);
		if(this.bigstar) {
			this.starFill = '~/resources/images/star_big_fill.png';
			this.starHalf = '~/resources/images/star_big_half.png';
			this.starEmpty = '~/resources/images/star_big_empty.png';
		}
		// this.starList = [];
		// var i = 0;
		// for( var i = 1; i <= this.value; i++ ) {
		// 	this.starList.push('~/resources/images/star_fill.png');
		// }
		// if( this.value < i && i-1 < this.value) {
		// 	this.starList.push('~/resources/images/star_half.png');
		// }
		// for( ; i <= 5; i++ ) {
		// 	this.starList.push('~/resources/images/star_empty.png');
		// }
	}

	setRate(value): void {
		console.log("set Rate");		
		console.log(value);
		this.valueChanged.next(value+1);
	}
	getImage(index): String{
		if(index+1<=this.value) {
			return this.starFill;
		}
		if(index+1>this.value){
			return this.starEmpty;
		}
		return this.starHalf;
	}
}
