import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubscription } from "rxjs/Subscription";

import {
    RootStoreState,
    TaskModels,
} from '../../../../root-store';

@Component({
    selector: 'task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit {
    @Input() inputTaskDetails;
    details: TaskModels.TaskDetails;
    subTaskDetails: ISubscription;

    constructor() { }

    ngOnInit() {
        this.subTaskDetails = this.inputTaskDetails.subscribe((details) => {
            this.details = details;
        });
    }

    ngOnDestroy() {
        if(this.subTaskDetails) {
            this.subTaskDetails.unsubscribe();
        }
    }

}
