import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'form-progress',
    templateUrl: './form-progress.component.html',
    styleUrls: ['./form-progress.component.sass']
})
export class FormProgressComponent implements OnInit {
    @Input() activeStep: number;
    @Input() steps: string[];

    constructor() {

    }

    ngOnInit() {

    }

}
