import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
import { Page } from "tns-core-modules/ui/page"; //for actionbar hidden

import { AuthService, ModalService } from '~/shared/services';
import { DialogsService } from '~/shared/services/dialogs.service';
import { DialogType } from '~/shared/types/enum';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

	private handlingRedirection: boolean = false; 

	constructor(
		private vcRef: ViewContainerRef,
		private routerExt: RouterExtensions,
		private modalService: ModalService,
		private authService: AuthService,
		private changeDetector: ChangeDetectorRef,
		private dialogsService: DialogsService,
		private page: Page,
	) {
		console.log("---AppComponent---")
		this.page.actionBarHidden = true; //hide ationbar
	}

	ngOnInit(): void {
		handleOpenURL((AppURL: string) => {
			this.handleRouting(AppURL);
		});

		this.modalService.setContainerRef(this.vcRef);
		console.log("---AppInit---")
	}

	public handleRouting(url: string) {
		console.log("handleRouting")
		
		if (!this.handlingRedirection) {
			this.handlingRedirection = true;
			let decodedUrl = decodeURIComponent(url);
			if (decodedUrl) {
				const indexOfActivate = decodedUrl.indexOf('activate/') + 9;
				decodedUrl = decodedUrl.slice(indexOfActivate);
				const params = decodedUrl.split('?');

				const hash = params.shift();

				// TODO fix redirecting to couple profile creation to only when these params after another routes are added redirect=%2Fwedding%3Flayout%3Dblank&app=true
				params.forEach((param: string) => {
					const arr = param.split('=');

					if (arr[0] === 'redirect') {
						if (arr[1] !== '/wedding') {
							this.routerExt.navigate([arr[1]]);
							this.handlingRedirection = false;
						} else {
							if (hash) {
								this.authService.activateAccount(hash).subscribe(
									(res) => {
										this.dialogsService.showDialog({
											type: DialogType.Info,
											message: 'Account activated successfully'
										});

										this.routerExt.navigateByUrl(`/app/couple`).then(() => {
											this.changeDetector.detectChanges();
										});
										this.handlingRedirection = false;
									},
									() => {
										this.handlingRedirection = false;
									}
								)
							} else {
								this.handlingRedirection = false;
							}
						}
					}

				});


			}
		}
		
	}
	
}
