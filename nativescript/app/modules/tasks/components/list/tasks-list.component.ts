import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { screen } from 'tns-core-modules/platform';

import { CreateTaskModal } from '~/modules/tasks/modals';
import { State, Task } from '~/root-store';
import { AddTask, EditTask } from '~/root-store/task-store/actions';
import { selectTasks } from '~/root-store/task-store/selectors';
import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { ModalService } from '~/shared/services/modal.service';
import { Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'tasks-list',
	templateUrl: 'tasks-list.component.html',
	styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, OnDestroy {

	public containerHeight;

	public tasks: Array<any> = [];

	private activeWeddingId: string;
	private tasksSubscription: Subscription;
	public activeWeddingSubscription: Subscription;

	constructor(
		private modalService: ModalService,
		private store: Store<State>,
		private changeDetector: ChangeDetectorRef,
	) {
		this.containerHeight = screen.mainScreen.heightDIPs - 140; // Topbar height + some margin
		console.log("---tasklist---")
	}


	ngOnInit(): void {
		Config.previousUrl = "tasks-list";
		console.log("Task List ngOnInit");
		this.tasksSubscription = this.store.select(selectTasks).subscribe((tasks: Array<Task>) => {
			this.tasks = tasks;
			this.changeDetector.markForCheck();
		});

		this.activeWeddingSubscription = this.store.select(selectActiveWedding)
			.subscribe((activeWedding: Wedding) => {
				if (activeWedding) {
					this.activeWeddingId = activeWedding.id;
					console.log(this.activeWeddingId);
				}
			})
	}

	ngOnDestroy(): void {
		this.tasksSubscription.unsubscribe();
		// this.activeWeddingSubscription.unsubscribe();
	}

	public openCreateModal(): void {
		this.modalService.showModal(CreateTaskModal, {
				context: {
					modalType: 'create',
					weddingId: this.activeWeddingId
				}
			})
			.then((values: any) => {
			this.store.dispatch(new AddTask({
				weddingId: this.activeWeddingId,
				task: values
			}))
		});
	}

}
