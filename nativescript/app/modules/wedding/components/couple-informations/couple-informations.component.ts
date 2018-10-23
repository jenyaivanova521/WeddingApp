import { Component, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '~/root-store';
import { Config } from '~/shared/configs';
import { Wedding } from '~/root-store/wedding-store/models';
import { WeddingService } from '~/shared/services';
import { MomentModule } from 'angular2-moment';

@Component({
	moduleId: module.id,
	selector: 'couple-informations',
	templateUrl: 'couple-informations.component.html',
	styleUrls: ['./couple-informations.component.scss']
})
export class CoupleInformationsComponent {
	private activeWedding: Wedding;
	public weddingId: string;
    public wedding: Wedding;

    public partners: Array<any>;
	public events: Array<any>;
	
	constructor(
		private store: Store<State>,
		private weddingService: WeddingService,
		private changeDetector: ChangeDetectorRef,
	) {
	}
	ngOnInit(): void {
		console.log("couple profile Information ngOnit");
		// console.log(Config.activeWedding);
		this.activeWedding = Config.activeWedding;
		if( Config.activeWedding ) {
			this.weddingId = Config.activeWedding.id;
			this.getWeddingDetails(this.weddingId);
		}
	}
	getWeddingDetails(weddingId) {		
        this.weddingService.getWedding({
            weddingId: weddingId
        }).subscribe(response => {
			console.log(response);
            this.wedding = response.result;

            this.weddingService.getWeddingPartners({weddingId}).subscribe(
                (res) => {
                    this.partners = res.result;
                    this.changeDetector.markForCheck();
                }
            );

            this.weddingService.getWeddingEvents({weddingId}).subscribe(
                (res) => {
					console.log(res);
                    this.events = res.result;
                    this.changeDetector.markForCheck();
                }
            );
        }, error => {
			console.log(error);
		});
    }
}
