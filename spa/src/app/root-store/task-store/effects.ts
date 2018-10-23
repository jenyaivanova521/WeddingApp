import { FlashMessagesService } from 'angular2-flash-messages';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { RootStoreState } from '../../root-store';
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";

import {
    TaskActionTypes,

    GetTasks,
    GetTasksSuccess,
    GetTasksFailure,

    AddTask,
    AddTaskSuccess,
    AddTaskFailure,

    GetTaskDetails,
    GetTaskDetailsSuccess,
    GetTaskDetailsFailure,

    ToggleTaskDetails,

    DeleteTask,
    DeleteTaskConfirm,
    DeleteTaskSuccess,
    DeleteTaskFailure,

    ChangeTaskStatus,
    ChangeTaskStatusSuccess,
    ChangeTaskStatusFailure,

    EditTask,
    EditTaskSuccess,
    EditTaskFailure,

    GetTaskStats,
    GetTaskStatsSuccess,
    GetTaskStatsFailure
} from './actions';
import { TaskService } from '../services/task.service';

@Injectable()
export class TaskEffects {

    constructor(
        private actions$: Actions,
        private taskService: TaskService,
        private store: Store<RootStoreState.State>,
        private _flashMessagesService: FlashMessagesService,
        private modalService: NgbModal
    ) { }

    truncate = (text) => {
        if (text.length > 40) {
            let limit = text.name.substr(0, 40).lastIndexOf(' ');
            text = text.name.substr(0, limit) + ' ...';
        }
        return text;
    }

    @Effect()
    getTasks$ = this.actions$.pipe(
        ofType<GetTasks>(TaskActionTypes.GET_TASKS),
        exhaustMap(action =>
            this.taskService
                .getTasks({
                    weddingId: action.payload.weddingId, options: {
                        lat: action.payload.lat, lng: action.payload.lng
                    }
                })
                .pipe(
                    map(response => new GetTasksSuccess({
                        tasks: response.result
                    }))
                )
        )
    );

    @Effect()
    addTask$ = this.actions$.pipe(
        ofType<AddTask>(TaskActionTypes.ADD_TASK),
        exhaustMap(action => {
            let task = action.payload.task;
            return this.taskService
                .addTask({
                    weddingId: action.payload.weddingId,
                    task: task
                })
                .pipe(
                    map(response => {
                        this._flashMessagesService.show('Task added successfully', { cssClass: 'alert-success', timeout: 3000 });
                        task.name = this.truncate(task.name);
                        return new AddTaskSuccess({
                            weddingId: action.payload.weddingId,
                            task: Object.assign({}, task, { id: response.result })
                        })
                    }),
                    catchError(error => of(new AddTaskFailure({ error: error.error })))
                )
        })
    );

    @Effect()
    getTaskDetails$ = this.actions$.pipe(
        ofType<GetTaskDetails>(TaskActionTypes.GET_TASK_DETAILS),
        exhaustMap(action =>
            this.taskService
                .getTask({ weddingId: action.payload.weddingId, taskId: action.payload.taskId })
                .pipe(
                    map(response => new GetTaskDetailsSuccess({
                        task: response.result
                    })),
                    catchError(error => of(new GetTaskDetailsFailure({ error: error.error })))
                )
        )
    );

    @Effect({ dispatch: false })
    deleteTaskConfirm$ = this.actions$.pipe(
        ofType<DeleteTaskConfirm>(TaskActionTypes.DELETE_TASK_CONFIRM),
        tap(action => {
            let modal = this.modalService.open(ConfirmDialogComponent, { backdrop: 'static' });
            modal.componentInstance['data'] = {
                title: action.payload.title,
                text: action.payload.text,
                confirm: action.payload.confirm
            };
        })
    );

    @Effect()
    deleteTask$ = this.actions$.pipe(
        ofType<DeleteTask>(TaskActionTypes.DELETE_TASK),
        exhaustMap(action => {
            return this.taskService
                .deleteTask({
                    weddingId: action.payload.weddingId,
                    taskId: action.payload.taskId
                })
                .pipe(
                    map(response => {
                        this._flashMessagesService.show('Task deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
                        return new DeleteTaskSuccess({
                            weddingId: action.payload.weddingId,
                            taskId: action.payload.taskId
                        })
                    }),
                    catchError(error => of(new DeleteTaskFailure({ error: error.error })))
                )
        })
    );

    @Effect()
    changeTaskStatus$ = this.actions$.pipe(
        ofType<ChangeTaskStatus>(TaskActionTypes.CHANGE_TASK_STATUS),
        exhaustMap(action => {
            let taskId = action.payload.taskId;
            let status = action.payload.status;
            return this.taskService
                .changeTaskStatus({
                    weddingId: action.payload.weddingId,
                    taskId: taskId,
                    status: status
                })
                .pipe(
                    map(response => {
                        this._flashMessagesService.show('Updated', { cssClass: 'alert-success', timeout: 3000 });
                        return new ChangeTaskStatusSuccess({
                            weddingId: action.payload.weddingId,
                            taskId: taskId,
                            status: status
                        })
                    }),
                    catchError(error => of(new ChangeTaskStatusFailure({ error: error.error })))
                )
        })
    );

    @Effect()
    changeTaskStatusSuccess$ = this.actions$.pipe(
        ofType<any>(TaskActionTypes.TOGGLE_TASK_DETAILS, TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS),
        withLatestFrom(this.store),
        map(([action, store]) => {
            let taskId = action.payload.taskId;
            return new GetTaskDetails({
                weddingId: action.payload.weddingId,
                taskId: taskId
            });
        })
    );

    @Effect()
    editTask$ = this.actions$.pipe(
        ofType<EditTask>(TaskActionTypes.EDIT_TASK),
        exhaustMap(action => {
            let task = action.payload.task;
            return this.taskService
                .editTask({
                    weddingId: action.payload.weddingId,
                    task: task
                })
                .pipe(
                    map(response => {
                        this._flashMessagesService.show('Updated', { cssClass: 'alert-success', timeout: 3000 });
                        task.name = this.truncate(task.name);
                        return new EditTaskSuccess({
                            weddingId: action.payload.weddingId,
                            task: task
                        })
                    }),
                    catchError(error => of(new EditTaskFailure({ error: error.error })))
                )
        })
    );

    @Effect()
    getTaskStats$ = this.actions$.pipe(
        ofType<any>(
            TaskActionTypes.GET_TASK_STATS,
            TaskActionTypes.ADD_TASK_SUCCESS,
            TaskActionTypes.DELETE_TASK_SUCCESS,
            TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS,
            TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS
        ),
        exhaustMap(action =>
            this.taskService
                .getTaskStats({ weddingId: action.payload.weddingId })
                .pipe(
                    map(response => new GetTaskStatsSuccess({
                        stats: response.result
                    }))
                )
        )
    );

}
