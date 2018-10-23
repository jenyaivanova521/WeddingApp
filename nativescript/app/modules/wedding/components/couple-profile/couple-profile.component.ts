import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { screen } from 'platform';
import { Store } from '@ngrx/store';

import { State } from '~/root-store';
import { ModalService } from '~/shared/services';
import { Subscription, ISubscription } from 'rxjs/Subscription';
import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'couple-profile',
	templateUrl: 'couple-profile.component.html',
	styleUrls: ['./couple-profile.component.scss']
})
export class CoupleProfileComponent{

	@ViewChild('topElements') topElements;
	public activeTab: string = 'timeline';
	public scrollHeight: number;
	// TODO get from user data
	public privateProfile: boolean = false;

	private activeWedding: Wedding;
	private subActiveWedding: ISubscription;
	
	constructor(
		private modalService: ModalService,
		private store: Store<State>,
	) {
		const screenHeight = screen.mainScreen.heightDIPs;
		this.scrollHeight = screenHeight - 140;
	}
	ngOnInit(): void {
		Config.previousUrl = "couple-profile";
		console.log("couple profile ngOnit");
		this.subActiveWedding = this.store.select(
			selectActiveWedding
		).subscribe(activeWedding => {						
			if (activeWedding) {				
				this.activeWedding = activeWedding;	
				Config.activeWedding = activeWedding;
				console.log(activeWedding);		
			}
			else {
				console.log("active Wedding is null");
			}
		});

	}
	ngOnDestroy() {
		// this.subActiveWedding.unsubscribe();
	}
	public selectTab(selectedTab: string): void {
		this.activeTab = selectedTab;
	}

}
