import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { DialogsService } from '~/shared/services';
import { DialogType } from '~/shared/types/enum';

@Component({
	selector: 'location-modal',
	templateUrl: 'location.modal.html',
	styleUrls: ['./location.modal.scss']
})
export class LocationModal {

	@ViewChild('searchInput') searchInputRef: ElementRef;

	public searchQuery: string;
	public selectedLocation: string = '';
	public locations: Array<any>;

	private googleAPIUrl: String = 'https://maps.googleapis.com/maps/api/place';
	private autocompleteUrl: string = `${this.googleAPIUrl}/autocomplete/json?inputtype=textquery`;
	private placeDetailsUrl: string = `${this.googleAPIUrl}/details/json?`;
	private GOOGLE_API_KEY: string = 'AIzaSyCt_6qA00Wvpw4TzY8OrO_P68yl30hA8a8';
	private loadedDetails: boolean = false;

	constructor(
		private params: ModalDialogParams,
		private http: HttpClient,
		private changeDetector: ChangeDetectorRef,
		private dialogService: DialogsService,
	) {
	}

	public setQuery(event: any): void {
		this.searchQuery = event.value;
	}

	public search(): void {
		const url = this.autocompleteUrl + `&key=${this.GOOGLE_API_KEY}&input=${this.searchQuery}&fields=name,formatted_address`;
		this.http.get(url).subscribe((response: any) => {
			this.searchInputRef.nativeElement.dismissSoftInput();
			this.locations = response.predictions;
			this.selectLocation(this.locations[0]);
			this.changeDetector.markForCheck();
		})
	}

	public selectLocation(location): void {
		this.selectedLocation = location;
		this.loadedDetails = false;

		const url = this.placeDetailsUrl + `key=${this.GOOGLE_API_KEY}&placeid=${location.place_id}&fields=name,formatted_address,geometry`;
		// TODO show loader
		this.http.get(url).subscribe((response: any) => {
			// TODO hide loader
			this.selectedLocation = response.result;
			this.loadedDetails = true;
			this.changeDetector.markForCheck();
		})
	}

	public close(): void {
		this.params.closeCallback(this.selectedLocation);
	}

}