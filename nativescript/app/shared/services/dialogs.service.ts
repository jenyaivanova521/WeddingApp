import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Dialog } from '~/shared/types/models/dialog.model';

@Injectable()
export class DialogsService {

	public dialog$: Subject<Dialog> = new Subject();

	constructor() {}

	public showDialog(dialog: Dialog): void {
		this.dialog$.next(new Dialog(dialog)); // making new Instance of class Dialog to generate id
	}

}