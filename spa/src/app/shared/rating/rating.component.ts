import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {
    @Input() rating: number;
    @Input() reviewsCount?: number;
    @Input() showReviewsCount?: boolean = true;

    constructor() {

    }

    ngOnInit() {

    }

}
