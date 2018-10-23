import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { WeddingService } from '../../../../../root-store/services/wedding.service';
import { WeddingEditBase } from '../wedding-edit.base';

@Component({
    selector: 'app-settings-wedding-events',
    templateUrl: './wedding-events.component.html',
    styleUrls: ['./wedding-events.component.sass']
})
export class SettingsWeddingEventsComponent extends WeddingEditBase implements OnInit {

    public minDate: Date;
    public loading = true;
    public events: Array<any>;
    public form: Array<any> = [
        {
            type: null
        },
        {
            type: null
        },
    ];
    public addEvent = [false, false];

    constructor(
        private weddingService: WeddingService,
        private changeDetector: ChangeDetectorRef,
    ) {
        super();
    }

    ngOnInit(): void {
        this.getEvents();
    }

    private getEvents(): void {
        this.weddingService.getWeddingEvents({weddingId: this.wedding.id}).subscribe(
            (res: any) => {
                this.loading = false;

                const result = res.result;
                this.events = result;
                this.form = result.map((event: any) => {
                    return {
                        address: event.address,
                        date: event.date,
                        placeName: event.placeName,
                        type: event.type,
                    };
                });
                if (!result.length || result.length < 2) {
                    if (result.length === 1) {
                        this.form[1] = {
                            type: null
                        };
                        this.events[1] = this.form[1];
                        this.addEvent = [false, true];
                    } else {
                        this.events = [{type: null}, {type: null}];
                        this.form = this.events;
                        this.addEvent = [true, true];
                    }
                }

                this.changeDetector.markForCheck();
            }
        );
    }

    public handleAddressChange(address: any, i: number): void {
        const event = this.form[i];
        event.placeName = address.name;
        event.website = address.website;
        event.lat = address.geometry.location.lat();
        event.lng = address.geometry.location.lng();
        event.address = address.formatted_address;
    }

    public submit(i: number): void {
        if (this.addEvent[i]) {
            const event = this.form[i];
            this.weddingService.addEvent({weddingId: this.wedding.id, event}).subscribe(
                () => {
                    this.getEvents();
                    this.addEvent[i] = false;
                    this.editActive[i] = false;
                    this.changeDetector.markForCheck();
                },
                (e) => {
                    // TODO handle err
                }
            );
        } else {
            const event = this.events[i];
            const editedEvent = this.form[i];
            this.weddingService.editEvent({weddingId: this.wedding.id, eventId: event.id, eventEdited: editedEvent}).subscribe(
                () => {
                    this.getEvents();
                    this.editActive[i] = false;
                    this.changeDetector.markForCheck();
                }, (e) => {
                    // TODO handle err
                }
            );
        }
    }

    public showCreateEvent(): void {
        if (this.editActive[0]) {
            this.editActive[1] = true;
        } else {
            this.editActive[0] = true;
        }
        this.changeDetector.markForCheck();
    }


}
