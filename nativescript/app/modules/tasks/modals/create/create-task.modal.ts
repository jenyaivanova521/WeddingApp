import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { Subscription } from 'rxjs/Subscription';
import { screen } from 'tns-core-modules/platform';
import * as _ from 'lodash';

import { State } from '~/root-store';
import { Member } from '~/root-store/wedding-store/models';
import { selectActiveWeddingMembers } from '~/root-store/wedding-store/selectors';

@Component({
	selector: 'create-task',
	templateUrl: 'create-task.modal.html',
})
export class CreateTaskModal implements OnInit, OnDestroy {

	public modalType: string;
	public width: any;
	public members: Array<Member> = [];

	private membersSubscription: Subscription;

	public values: any = {
		name: '',
		assignedMemberId: '',
		dueDate: ''
	};
	public selectedMember: string;

	constructor(
		private params: ModalDialogParams,
		private store: Store<State>,
		private changeDetector: ChangeDetectorRef,
	) {
		this.modalType = this.params.context.modalType;

		if (this.modalType === 'edit') {
			const task = this.params.context.task;
			this.values.name = task.name;
			this.values.assignedMemberId = task.assignedMemberId;
			this.values.dueDate = task.dueDate;
		}

		this.width = screen.mainScreen.widthDIPs;
	}

	ngOnInit(): void {
		this.membersSubscription = this.store.select(selectActiveWeddingMembers).subscribe(
			(members: Array<Member>) => {
				this.members = _.map(members,
					(member: Member) => {
						return {
							name: `${member.account.firstName} ${member.account.lastName}`,
							id: member.id,
						}
					}
				);
				this.selectedMember = _.find(this.members, (member) => {
					return member.id === this.values.assignedMemberId;
				});
				this.changeDetector.markForCheck();
			}
		)
	}

	ngOnDestroy(): void {
		this.membersSubscription.unsubscribe();
	}

	public close(values?: any): void {
		this.params.closeCallback(values);
	}

	public setValue(valueName: string, element: any, useParam?: string): void {
		const value = useParam ? element[useParam] : element;
		this.values[valueName] = value;
	}

	public submit(): void {
		if (this.modalType === 'create') {
			this.close(this.values);
		} else {
			const res = Object.assign({}, this.params.context.task, this.values);
			this.close(res)
		}
	}

}