import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import * as _ from 'lodash';

@Component({
	moduleId: module.id,
	selector: 'radio-buttons',
	templateUrl: 'radio-buttons.component.html',
	styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {

	@Input() options: Array<String>;
	@Input() selected: Number = 0;
	@Output() valueChanged: EventEmitter<any> = new EventEmitter();

	public radioOptions: Array<any>;
	private active: any;

	constructor() {
	}

	ngOnInit(): void {
		this.radioOptions = _.map(this.options, (val: string, i: number) => {
			const selected = i === this.selected;
			return {
				selected: selected,
				label: val
			}
		});
	}

	public setActive(changedOption: any): void {
		this.radioOptions = _.map(this.radioOptions, (option) => {
			if (changedOption.label === option.label) {
				this.active = option;
			}
			return {
				selected: changedOption.label === option.label,
				label: option.label
			}
		});

		this.valueChanged.next(this.active);
	}

}
