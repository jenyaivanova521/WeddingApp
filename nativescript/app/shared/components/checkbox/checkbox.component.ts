import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'checkbox-component',
	templateUrl: 'checkbox.component.html',
	styleUrls: ['./checkbox.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

	@Input() small: boolean = false;
	@Input() checked: boolean;
	@Output() valueChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(
		private changeDetector: ChangeDetectorRef
	) { }

	public toggle(): void {
		this.checked = !this.checked;
		this.valueChanged.next(this.checked);
		this.changeDetector.markForCheck();
	}

}
