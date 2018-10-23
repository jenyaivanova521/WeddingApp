import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profiling-test',
    templateUrl: './profiling-test.component.html',
    styleUrls: ['./profiling-test.component.sass']
})
export class ProfilingTestComponent implements OnInit {
    categoryFilterQuestions: object[];
    onSubmitEvent: EventEmitter<any> = new EventEmitter();
    model: any;
    filters: {
        categoryId: number[],
        lat: number,
        lng: number,
        rad: number
    }

    constructor(
        public activeModal: NgbActiveModal,
        private route: ActivatedRoute
    ) { }

    async ngOnInit() {
        this.model = {};
        this.filters = {
            categoryId: [],
            lat: null,
            lng: null,
            rad: 10000
        };
        this.categoryFilterQuestions = [{
            text: 'Have you chosen a Reception Venue?',
            categoryId: [4]
        }, {
            text: 'Have you chosen Music?',
            categoryId: [5, 6]
        }, {
            text: 'Have you chosen a Catering Provider?',
            categoryId: [3]
        }, {
            text: 'Do you have an Outfit?',
            categoryId: [7, 20]
        }, {
            text: 'Do you have Wedding Rings?',
            categoryId: [13]
        }, {
            text: 'Do you have a Photographer?',
            categoryId: [16]
        }, {
            text: 'Do you have an Invitations?',
            categoryId: [12]
        }];

    }

    cancel() {
        this.activeModal.close();
    }

    skip() {
        this.activeModal.close();
        localStorage.setItem('skipProfilingTest', JSON.stringify(true));
    }

    addCategoryId(ids) {
        for(let i = 0; i < ids.length; i++) {
            this.filters.categoryId.push(ids[i]);
        }
    }

    removeCategoryId(ids) {
        for(let i = 0; i < ids.length; i++) {
            let index = this.filters.categoryId.indexOf(ids[i]);
            if(index > -1) {
                this.filters.categoryId.splice(index, 1);
            }
        };
    }

    setCoordinates(event) {
        this.filters.lat = event.geometry.location.lat();
        this.filters.lng = event.geometry.location.lng();
    }

    onSubmit() {
        this.onSubmitEvent.emit(this.filters);
        localStorage.setItem('profilingTest', JSON.stringify(this.filters));
        this.activeModal.close();
    }

}
