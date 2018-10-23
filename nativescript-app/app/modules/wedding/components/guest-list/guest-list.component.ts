import { Component } from '@angular/core';
import { screen } from 'tns-core-modules/platform';
import { AddGuestModal } from '~/modules/wedding/modals';
import { ModalService } from '~/shared/services';
import { Wedding } from '~/root-store/wedding-store/models';
import { ISubscription } from 'rxjs/Subscription';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { Store } from '@ngrx/store';
import { State } from '~/root-store';
import { GuestService } from '~/shared/services/guest.service';
import { Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'guest-list',
	templateUrl: 'guest-list.component.html'
})
export class GuestListComponent {

	public containerHeight;
	//---using in test----------------------
	public guests: Array<any> = [];
	/*
		{
			firstName: 'Norman',
			lastName: 'Lane',
			role: 'groomsman',
			side: 'groom\'s',
			ceremony: false,
			reception: true,
		},
	];
*/
    page: number = 1;
    stats: any;
    infiniteScrollDisabled: boolean = false;
	term: string = '';
	
	private activeWedding: Wedding;
	private subActiveWedding: ISubscription;
	//---------------------------------------
	constructor(
		private modalService: ModalService,
		private store: Store<State>,
		private guestService: GuestService,
	) {
		this.containerHeight = screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
	}
	ngOnInit() {
		console.log("---Guest List ngOnInit---");
		Config.previousUrl = "guest-list";
		this.subActiveWedding = this.store.select(
			selectActiveWedding
		).subscribe(activeWedding => {						
			if (activeWedding) {
				// console.log("--Guest List ActiveWedding: "+activeWedding);
				this.activeWedding = activeWedding;
				this.getGuests();
                this.getStats();
			}
			else {				
				console.log("active wedding is null");
			}
		});	
		
	}
	getGuests() {
        this.guestService.getGuests({
            weddingId: this.activeWedding.id,
            options: {
                page: this.page,
                term: this.term
            }
        }).toPromise().then(response => {
            this.guests.push(...response.result);
            if (response.result.length < 30) {
                this.infiniteScrollDisabled = true;
            }
        });
    }

    getStats() {
        this.guestService.getStats(this.activeWedding.id)
            .toPromise().then(response => {
                this.stats = response.result;
            });
    }

    loadMoreGuests() {
        this.page++;
        this.getGuests();
    }

    resetGuests() {
        this.page = 1;
        this.guests = [];
        this.getGuests();
	}
	
	ngOnDestroy() {
		// this.subActiveWedding.unsubscribe();
	}

	public openAddGuestModal(): void {
		this.modalService.showModal(AddGuestModal, {})
			.then((response: any) => {
				// TODO add guest
				console.log(response);
			});
	}

}
