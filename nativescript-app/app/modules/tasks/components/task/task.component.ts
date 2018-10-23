import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { screen } from 'tns-core-modules/platform';
import { CreateTaskModal } from '~/modules/tasks/modals';

import { State, Task } from '~/root-store';
import { DeleteTask, EditTask, SetTaskStatus } from '~/root-store/task-store/actions';
import { ModalService } from '~/shared/services';
import { TaskStatusEnum } from '~/shared/types/enum';

@Component({
	moduleId: module.id,
	selector: 'task',
	templateUrl: 'task.component.html',
	styleUrls: ['../list/tasks-list.component.scss']
})
export class TaskComponent {

	@Input() activeWeddingId: string;
	@Input() task: Task;

	public showActions: boolean = false;
	private containerWidth: number;

	constructor(
		private modalService: ModalService,
		private store: Store<State>,
	) {
		this.containerWidth = screen.mainScreen.widthDIPs;
		console.log("---task---")
	}

	public toggleActions(): void {
		this.showActions = !this.showActions;
	}

	public openEditModal(task: Task): void {
		this.modalService.showModal(CreateTaskModal, {
			context: {
				task: task,
				weddingId: this.activeWeddingId,
				modalType: 'edit'
			}
		}).then(
			(res: Task) => {
				this.store.dispatch(new EditTask(
					{
						weddingId: this.activeWeddingId,
						task: res
					}
				))
			}
		)
	}

	public deleteTask(task: Task): void {
		this.store.dispatch(new DeleteTask({weddingId: this.activeWeddingId, taskId: task.id}));
	}

	public updateTaskStatus(task: Task, update: boolean): void {
		const status = update ? TaskStatusEnum.Done : TaskStatusEnum.Todo;
		this.store.dispatch(new SetTaskStatus({taskId: task.id, weddingId: this.activeWeddingId, status}));
	}

}
