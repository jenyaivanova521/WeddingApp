import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'guest-stats',
    templateUrl: './guest-stats.component.html',
    styleUrls: ['./guest-stats.component.sass'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestStatsComponent implements OnInit {
    @Input() inputStats;
    stats: object[] = [];

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges(changes) {
        this.stats = Object.keys(this.inputStats).map(event => {
            let stats = <any>{
                name: event
            };
            this.inputStats[event].map(stat => {
                stats[stat.name] = stat.count;
            });
            stats.percentage = {
                invited: stats.invited ? stats.invited / stats.all * 100 : 0,
                attending: stats.attending ? stats.attending / stats.all * 100 : 0,
                not_attending: stats.not_attending ? stats.not_attending / stats.all * 100 : 0
            };
            return stats;
        })
    }


}
