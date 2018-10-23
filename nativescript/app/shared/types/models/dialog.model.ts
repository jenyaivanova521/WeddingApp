import { DialogType } from '../enum/dialog-type.enum';

export class Dialog {
	type: DialogType;
	message: string;
	id?: number;

	constructor(dialog: any) {
		this.type = dialog.type;
		this.message = dialog.message;
		this.id = Date.now();
	}
}