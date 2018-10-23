import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { TaskFormModalComponent } from './components/task-form-modal/task-form-modal.component';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';

import {
    RootStoreState,
    TaskActions,
    TaskSelectors,
    TaskModels,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
    activeProfile: CommonModels.Profile;
    tasks: Observable<TaskModels.Task[]>;
    stats: any;
    taskDetails: Observable<TaskModels.TaskDetails[]>[];
    taskDetailsToggle: Observable<object[]>;
    modalRef: NgbModalRef;
    profilingTest: any;

    constructor(
        private modalService: NgbModal,
        private store: Store<RootStoreState.State>,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.taskDetails = [];
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.profilingTest = localStorage.getItem('profilingTest') ? JSON.parse(localStorage.getItem('profilingTest')) : false;
        this.store.dispatch(new TaskActions.GetTasks({
            weddingId: this.activeProfile.id,
            lat: this.profilingTest ? this.profilingTest.lat : null,
            lng: this.profilingTest ? this.profilingTest.lng : null
        }));
        this.store.dispatch(new TaskActions.GetTaskStats({
            weddingId: this.activeProfile.id
        }));
        this.tasks = this.store.select(
            TaskSelectors.selectTasks
        );
        this.taskDetailsToggle = this.store.select(
            TaskSelectors.selectUITaskDetails
        );
        this.stats = this.store.select(
            TaskSelectors.selectTaskStats
        );

    }

    ngOnDestroy() {
    }

    toggleDetails(taskId) {
        this.store.dispatch(new TaskActions.ToggleTaskDetails({
            weddingId: this.activeProfile.id,
            taskId: taskId
        }));
        this.taskDetails[taskId] = this.store.select(
            TaskSelectors.selectTaskDetails(taskId)
        );
    }

    deleteTask(task) {
        this.store.dispatch(new TaskActions.DeleteTaskConfirm({
            confirm: new TaskActions.DeleteTask({
                weddingId: this.activeProfile.id,
                taskId: task.id
            }),
            text: 'Are you sure?',
            title: 'Delete task'
        }));
    }

    toggleDone(task) {
        let status = 'done';
        if (task.status == 'done') {
            status = 'to_do';
        }
        this.changeTaskStatus(task, status);
    }

    changeTaskStatus(task, status) {
        this.store.dispatch(new TaskActions.ChangeTaskStatus({
            weddingId: this.activeProfile.id,
            taskId: task.id,
            status: status
        }));
    }

    openTaskFormModal(action, task?: any) {
        this.modalRef = this.modalService.open(TaskFormModalComponent);
        this.modalRef.componentInstance['data'] = { action, activeProfile: this.activeProfile, task };
        this.store.dispatch(new TaskActions.OpenTaskFormModal());
    }

}
