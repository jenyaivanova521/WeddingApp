import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { DatepickerOptions, NgDatepickerComponent } from 'ng2-datepicker';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import {
    RootStoreState,
    TaskActions,
    TaskModels,
    TaskSelectors,
    MemberActions,
    MemberSelectors,
    MemberModels,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'task-form-modal',
    templateUrl: './task-form-modal.component.html',
    styleUrls: ['./task-form-modal.component.sass']
})
export class TaskFormModalComponent implements OnInit {
    @ViewChild('datepicker') private datepicker: NgDatepickerComponent;
    @Input() data: {
        action: string,
        activeProfile: CommonModels.Profile,
        task?: any
    };
    submitted: boolean;
    error: any;
    modalRef: NgbModalRef;
    task: Pick<TaskModels.Task, 'id' | 'name' | 'dueDate' | 'assignedMemberId'>;
    initTask: Pick<TaskModels.Task, 'id' | 'name' | 'dueDate' | 'assignedMemberId'>;
    subTaskForm: ISubscription;
    subTask: ISubscription;
    members: Observable<MemberModels.Member[]>

    constructor(
        private modalService: NgbModal,
        private store: Store<RootStoreState.State>,
        public activeModal: NgbActiveModal,
        private route: ActivatedRoute,
        private translate: TranslateService
    ) { }

    dpOptions: DatepickerOptions = {
        minDate: new Date(Date.now()),
        barTitleFormat: 'MMMM YYYY',
        placeholder: 'Click to select a date',
        addClass: 'ngx-datepicker-input-custom',
        useEmptyBarTitle: false
    };



    ngOnInit() {
        this.initTask = {
            id: null,
            name: null,
            dueDate: null,
            assignedMemberId: null
        }
        this.task = { ...this.initTask };
        this.subTaskForm = this.store.select(
            TaskSelectors.selectUITaskForm
        ).subscribe(taskForm => {
            this.submitted = taskForm.submitted;
            this.error = taskForm.error;
            if (taskForm.modalOpen === false && this.activeModal) {
                this.activeModal.close();
            }
        });

        if (this.data.activeProfile) {
            this.members = this.store.select(
                MemberSelectors.selectMembers
            );
            if (this.data.task) {
                this.store.dispatch(new TaskActions.GetTaskDetails({
                    weddingId: this.data.activeProfile.id,
                    taskId: this.data.task.id
                }));
                this.store.select(
                    TaskSelectors.selectTaskDetails(this.data.task.id)
                ).subscribe(task => {
                    this.task = task;
                });
            }
        }
        this.translate.get('Click to select a date').subscribe(res => {
            this.dpOptions.placeholder = res;
        })
    }

    ngOnDestroy() {
        if (this.subTaskForm) {
            this.subTaskForm.unsubscribe();
        }
        if (this.subTask) {
            this.subTask.unsubscribe();
        }
    }

    onSubmit() {
        if (this.data.action == 'edit') {
            this.store.dispatch(new TaskActions.EditTask({
                weddingId: this.data.activeProfile.id,
                task: this.task
            }));
        } else if (this.data.action == 'add') {
            this.store.dispatch(new TaskActions.AddTask({
                weddingId: this.data.activeProfile.id,
                task: this.task
            }));
        }
    }

    cancel() {
        if (this.data.action == 'edit') {
            this.store.dispatch(new TaskActions.EditTaskCancel());
        } else if (this.data.action == 'add') {
            this.store.dispatch(new TaskActions.AddTaskCancel());
        }
        this.activeModal.close();
    }

    memberSearchFn(term: string, member: MemberModels.Member) {
        term = term.toLocaleLowerCase();
        return (member.account && (member.account.firstName.toLocaleLowerCase() + ' ' + member.account.lastName.toLocaleLowerCase()).indexOf(term) > -1)
            || member.email.toLocaleLowerCase().indexOf(term) > -1;
    }

    clearDueDate(task) {
        task.dueDate = null;
        this.datepicker.innerValue = null;
        this.datepicker.date = null;
        this.datepicker.init();
    }

}
