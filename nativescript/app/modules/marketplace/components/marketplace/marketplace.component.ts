import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { screen } from 'tns-core-modules/platform';

import { RouterExtensions } from 'nativescript-angular/router'; //2018.9.4
import { ModalService } from '~/shared/services';
import { CDN_URL, Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'marketplace',
	templateUrl: 'marketplace.component.html',
	styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit{

	@Input() marketplace: any;

	public showActions: boolean = false;
	private containerWidth: number;
	private imageSrc;
	private mrating;
	mratingList = ['any','$ - Inexpensive','$$ - Affordable','$$$ - Moderate','$$$$ - Expensive'];
	city = 'Moncton, NB';

	constructor(
		private modalService: ModalService,
		private routerExtensions: RouterExtensions
	) {
		this.containerWidth = screen.mainScreen.widthDIPs;
		// console.log("---marketplace---")		
	}

	ngOnInit() {
		// console.log(this.marketplace);
		if(this.marketplace.avatar==null) this.imageSrc = '';
		else {
			this.imageSrc = CDN_URL + '/vendor/' + this.marketplace.id+'/avatars/'+this.marketplace.avatar.replace(/(\.[\w\d_-]+)$/i, '_lg$1');
		}
	}
	public detail_info(): void {
		//this.passwordInputRef.nativeElement.dismissSoftInput();
		//this.authService.login(this.email, this.password);
		Config.marketplaceID = this.marketplace.id;
		this.routerExtensions.navigate(['/app', 'detail']); //2018.9.4 This is deleted after screen test
	}


}
