import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

import { Dialog } from '~/shared/types/models';
import { DialogsService } from '~/shared/services/dialogs.service';

@Component({
	moduleId: module.id,
	selector: 'dialogs-display',
	templateUrl: 'dialogs.component.html',
	styleUrls: ['./dialogs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogsComponent implements OnDestroy, OnInit {

	public dialogs: Array<Dialog> = [];

	private dialogsSubscription: Subscription;

	constructor(
		private dialogsService: DialogsService,
		private changeDetector: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this.dialogsSubscription = this.dialogsService.dialog$.subscribe((newDialog: Dialog) => {
			this.dialogs.push(newDialog);
			this.changeDetector.markForCheck();

			setTimeout(() => {
				this.dialogs = _.filter(this.dialogs, (dialog: Dialog) => {
					return dialog.id !== newDialog.id;
				});
				this.changeDetector.markForCheck();
			}, 5000);
		})
	}

	ngOnDestroy(): void {
		this.dialogsSubscription.unsubscribe();
	}

	public removeDialog(id: number): void {
		this.dialogs = _.filter(this.dialogs, (dialog: Dialog) => {
			return dialog.id !== id;
		});
		console.log(this.dialogs);
		this.changeDetector.markForCheck();
	}
}
