import { Action } from '@ngrx/store';
import { TaskActions, TaskActionTypes } from './actions';
import { initialState, State } from './state';

export function reducer(state = initialState, action: TaskActions) {

    let task;
    let updatedTasks;
    let updatedUITaskDetails;
    switch (action.type) {
        case TaskActionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks
            };
        case TaskActionTypes.ADD_TASK:
        case TaskActionTypes.EDIT_TASK:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    taskForm: {
                        ...state.ui.taskForm,
                        submitted: true,
                        modalOpen: true
                    }
                }
            };
        case TaskActionTypes.ADD_TASK_CANCEL:
        case TaskActionTypes.EDIT_TASK_CANCEL:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    taskForm: {
                        ...state.ui.taskForm,
                        submitted: false,
                        modalOpen: false,
                        error: null
                    }
                }
            };
        case TaskActionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [
                    action.payload.task,
                    ...state.tasks
                ],
                ui: {
                    ...state.ui,
                    taskForm: {
                        ...state.ui.taskForm,
                        submitted: false,
                        modalOpen: false
                    }
                }
            };
        case TaskActionTypes.ADD_TASK_FAILURE:
        case TaskActionTypes.EDIT_TASK_FAILURE:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    taskForm: {
                        ...state.ui.taskForm,
                        submitted: false,
                        modalOpen: true,
                        error: action.payload.error
                    }
                }
            };
        case TaskActionTypes.OPEN_TASK_FORM_MODAL:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    taskForm: {
                        ...state.ui.taskForm,
                        modalOpen: true
                    }
                }
            };
        case TaskActionTypes.GET_TASK_DETAILS_SUCCESS:
            let updatedTaskDetails = Object.assign({}, state.taskDetails);
            task = action.payload.task;
            updatedTaskDetails[task.id] = task;
            return {
                ...state,
                taskDetails: updatedTaskDetails
            };
        case TaskActionTypes.TOGGLE_TASK_DETAILS:
            updatedUITaskDetails = Object.assign({}, state.ui.taskDetails);
            let taskId = action.payload.taskId
            if (updatedUITaskDetails[taskId]) {
                updatedUITaskDetails[taskId] = !updatedUITaskDetails[taskId];
            } else {
                updatedUITaskDetails[taskId] = true
            }
            return {
                ...state,
                ui: {
                    ...state.ui,
                    taskDetails: updatedUITaskDetails
                }
            };
        case TaskActionTypes.DELETE_TASK_SUCCESS:
            updatedTasks = state.tasks.filter((task) => {
                return task.id !== action.payload.taskId;
            })
            return {
                ...state,
                tasks: updatedTasks
            };
        case TaskActionTypes.CHANGE_TASK_STATUS_SUCCESS:
            updatedTasks = state.tasks.map((item, index) => {
                if (item.id !== action.payload.taskId) {
                    return item;
                }
                return {
                    ...item,
                    status: action.payload.status
                };
            });
            return {
                ...state,
                tasks: updatedTasks
            };
        case TaskActionTypes.EDIT_TASK_SUCCESS:
            task = action.payload.task;
            updatedTasks = state.tasks.map((item, index) => {
                if (item.id !== action.payload.task.id) {
                    return item;
                }
                return {
                    ...item,
                    name: task.name,
                    dueDate: task.dueDate,
                    assignedMemberId: task.assignedMemberId,
                    ui: {
                        ...state.ui,
                        taskForm: {
                            ...state.ui.taskForm,
                            submitted: false,
                            modalOpen: false,
                            error: null
                        }
                    }
                };
            });
            updatedUITaskDetails = Object.assign({}, state.ui.taskDetails);
            updatedUITaskDetails[task.id] = false;
            return {
                ...state,
                tasks: updatedTasks,
                ui: {
                    ...state.ui,
                    taskForm: {
                        ...state.ui.taskForm,
                        submitted: false,
                        modalOpen: false
                    },
                    taskDetails: updatedUITaskDetails
                }
            };
        case TaskActionTypes.GET_TASK_STATS_SUCCESS:
            return {
                ...state,
                stats: action.payload.stats
            };
        default:
            return state;
    }

}
