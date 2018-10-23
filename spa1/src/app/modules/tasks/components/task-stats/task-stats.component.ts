import { Component, OnInit, OnDestroy, TemplateRef, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ISubscription } from "rxjs/Subscription";

@Component({
    selector: 'task-stats',
    templateUrl: './task-stats.component.html',
    styleUrls: ['./task-stats.component.sass']
})
export class TaskStatsComponent implements OnInit, OnDestroy {
    @Input() inputStats;
    stats: any;
    subStats: ISubscription;

    constructor() { }

    ngOnInit() {
        this.subStats = this.inputStats.subscribe((stats) => {
            if (stats) {
                this.stats = {
                    all: stats.all | 0,
                    done: stats.done | 0,
                    in_progress: stats.in_progress | 0,
                    overdue: stats.overdue | 0,
                    percentage: {
                        done: stats.done ? stats.done / stats.all * 100 : 0,
                        in_progress: stats.in_progress ? stats.in_progress / stats.all * 100 : 0,
                        overdue: stats.overdue ? stats.overdue / stats.all * 100 : 0
                    }
                }
            }
        });
    }

    ngOnDestroy() {
        if(this.subStats) {
            this.subStats.unsubscribe();
        }
    }

}
