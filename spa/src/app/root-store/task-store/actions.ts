import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Task, TaskDetails } from './models';

export enum TaskActionTypes {
    GET_TASKS = '[TASK] Get tasks',
    GET_TASKS_SUCCESS = '[TASK] Get tasks success',
    GET_TASKS_FAILURE = '[TASK] Get tasks failure',
    ADD_TASK = '[TASK] Add task',
    ADD_TASK_CANCEL = '[TASK] Add task cancel',
    ADD_TASK_SUCCESS = '[TASK] Add task success',
    ADD_TASK_FAILURE = '[TASK] Add task failure',
    GET_TASK_DETAILS = '[TASK] Get task details',
    GET_TASK_DETAILS_SUCCESS = '[TASK] Get task details success',
    GET_TASK_DETAILS_FAILURE = '[TASK] Get task details failure',
    TOGGLE_TASK_DETAILS = '[TASK] Toggle task details',
    DELETE_TASK_CONFIRM = '[TASK] Confirm delete task',
    DELETE_TASK = '[TASK] Delete task',
    DELETE_TASK_SUCCESS = '[TASK] Delete task success',
    DELETE_TASK_FAILURE = '[TASK] Delete task failure',
    CHANGE_TASK_STATUS = '[TASK] Change status',
    CHANGE_TASK_STATUS_SUCCESS = '[TASK] Change status success',
    CHANGE_TASK_STATUS_FAILURE = '[TASK] Change status failure',
    EDIT_TASK = '[TASK] Edit task',
    EDIT_TASK_CANCEL = '[TASK] Edit task cancel',
    EDIT_TASK_SUCCESS = '[TASK] Edit task success',
    EDIT_TASK_FAILURE = '[TASK] Edit task failure',
    GET_TASK_STATS = '[TASK] Get task stats',
    GET_TASK_STATS_SUCCESS = '[TASK] Get task stats success',
    GET_TASK_STATS_FAILURE = '[TASK] Get task stats failure',
    OPEN_TASK_FORM_MODAL = '[TASK] Open task form modal'
}

export class GetTasks implements Action {
    readonly type = TaskActionTypes.GET_TASKS;

    constructor(public payload: {
        weddingId: string,
        assignedMemberId?: string,
        lat?: number,
        lng?: number
    }) { }
}

export class GetTasksSuccess implements Action {
    readonly type = TaskActionTypes.GET_TASKS_SUCCESS

    constructor(public payload: {
        tasks: Task[]
    }) { }
}

export class GetTasksFailure implements Action {
    readonly type = TaskActionTypes.GET_TASKS_FAILURE

    constructor(public payload: {
        error: any
    }) { }
}

export class AddTask implements Action {
    readonly type = TaskActionTypes.ADD_TASK;

    constructor(public payload: {
        weddingId: string,
        task: any
    }) { }
}

export class AddTaskCancel implements Action {
    readonly type = TaskActionTypes.ADD_TASK_CANCEL;
}

export class AddTaskSuccess implements Action {
    readonly type = TaskActionTypes.ADD_TASK_SUCCESS

    constructor(public payload: {
        weddingId: string,
        task: Task
    }) { }
}

export class AddTaskFailure implements Action {
    readonly type = TaskActionTypes.ADD_TASK_FAILURE

    constructor(public payload: {
        error: any
    }) { }
}

export class GetTaskDetails implements Action {
    readonly type = TaskActionTypes.GET_TASK_DETAILS;

    constructor(public payload: {
        weddingId: string,
        taskId: string
    }) { }
}

export class GetTaskDetailsSuccess implements Action {
    readonly type = TaskActionTypes.GET_TASK_DETAILS_SUCCESS

    constructor(public payload: {
        task: TaskDetails
    }) { }
}

export class GetTaskDetailsFailure implements Action {
    readonly type = TaskActionTypes.GET_TASK_DETAILS_FAILURE

    constructor(public payload: {
        error: any
    }) { }
}

export class ToggleTaskDetails implements Action {
    readonly type = TaskActionTypes.TOGGLE_TASK_DETAILS;

    constructor(public payload: {
        weddingId: string,
        taskId: string
    }) { }
}

export class DeleteTask implements Action {
    readonly type = TaskActionTypes.DELETE_TASK;
    constructor(public payload: {
        weddingId: string,
        taskId: string
    }) { }
}

export class DeleteTaskConfirm implements Action {
    readonly type = TaskActionTypes.DELETE_TASK_CONFIRM;
    constructor(public payload: {
        cancel?: Action,
        confirm: Action,
        text: string,
        title: string
    }) { }
}

export class DeleteTaskSuccess implements Action {
    readonly type = TaskActionTypes.DELETE_TASK_SUCCESS;
    constructor(public payload: {
        weddingId: string,
        taskId: string
    }) { }
}

export class DeleteTaskFailure implements Action {
    readonly type = TaskActionTypes.DELETE_TASK_FAILURE;
    constructor(public payload: {
        error: any
    }) { }
}

export class ChangeTaskStatus implements Action {
    readonly type = TaskActionTypes.CHANGE_TASK_STATUS;
    constructor(public payload: {
        weddingId: string,
        taskId: string,
        status: string
    }) { }
}

export class ChangeTaskStatusSuccess implements Action {
    readonly type = TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS;
    constructor(public payload: {
        weddingId: string,
        taskId: string,
        status: string
    }) { }
}

export class ChangeTaskStatusFailure implements Action {
    readonly type = TaskActionTypes.CHANGE_TASK_STATUS_FAILURE;
    constructor(public payload: {
        error: any
    }) { }
}

export class EditTask implements Action {
    readonly type = TaskActionTypes.EDIT_TASK;
    constructor(public payload: {
        weddingId: string,
        task: any
    }) { }
}

export class EditTaskCancel implements Action {
    readonly type = TaskActionTypes.EDIT_TASK_CANCEL;
}

export class EditTaskSuccess implements Action {
    readonly type = TaskActionTypes.EDIT_TASK_SUCCESS;
    constructor(public payload: {
        weddingId: string,
        task: any
    }) { }
}

export class EditTaskFailure implements Action {
    readonly type = TaskActionTypes.EDIT_TASK_FAILURE;
    constructor(public payload: {
        error: any
    }) { }
}

export class GetTaskStats implements Action {
    readonly type = TaskActionTypes.GET_TASK_STATS;

    constructor(public payload: {
        weddingId: string
    }) { }
}

export class GetTaskStatsSuccess implements Action {
    readonly type = TaskActionTypes.GET_TASK_STATS_SUCCESS

    constructor(public payload: {
        stats: any
    }) { }
}

export class GetTaskStatsFailure implements Action {
    readonly type = TaskActionTypes.GET_TASK_STATS_FAILURE

    constructor(public payload: {
        error: any
    }) { }
}

export class OpenTaskFormModal implements Action {
    readonly type = TaskActionTypes.OPEN_TASK_FORM_MODAL;
}

export type TaskActions =
    | GetTasks
    | GetTasksSuccess
    | GetTasksFailure
    | AddTask
    | AddTaskCancel
    | AddTaskSuccess
    | AddTaskFailure
    | GetTaskDetails
    | GetTaskDetailsSuccess
    | GetTaskDetailsFailure
    | ToggleTaskDetails
    | DeleteTask
    | DeleteTaskSuccess
    | DeleteTaskFailure
    | ChangeTaskStatus
    | ChangeTaskStatusSuccess
    | ChangeTaskStatusFailure
    | EditTask
    | EditTaskCancel
    | EditTaskSuccess
    | EditTaskFailure
    | GetTaskStats
    | GetTaskStatsSuccess
    | GetTaskStatsFailure
    | OpenTaskFormModal
