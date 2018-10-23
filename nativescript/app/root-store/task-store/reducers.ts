import * as _ from 'lodash';

import { TaskActions, TaskActionTypes } from './actions';
import { initialState } from './state';
import { Task } from './models';

export function reducer(state = initialState, action: TaskActions) {

	let task;
	let updatedTasks;
	let updatedUITaskDetails;

	switch (action.type) {
		case TaskActionTypes.GET_TASKS_SUCCESS:
			return Object.assign({}, state, {
				tasks: action.payload.tasks
			});

		case TaskActionTypes.ADD_TASK:
		case TaskActionTypes.EDIT_TASK:
			return Object.assign({}, state, {
				ui: Object.assign({}, state.ui, {
					taskForm: Object.assign({}, state.ui.taskForm, {
						submitted: true,
						modalOpen: true
					})
				})
			});

		case TaskActionTypes.ADD_TASK_CANCEL:
		case TaskActionTypes.EDIT_TASK_CANCEL:
			return Object.assign({}, state, {
				ui: Object.assign({}, state.ui, {
					taskForm: Object.assign({}, state.ui.taskForm, {
						submitted: false,
						modalOpen: false,
						error: null
					})
				})
			});

		case TaskActionTypes.ADD_TASK_SUCCESS:
			return Object.assign({}, state, {
				tasks: [
					action.payload.task,
					...state.tasks
				],
				ui: Object.assign({}, state.ui, {
					taskForm: Object.assign({}, state.ui.taskForm, {
						submitted: false,
						modalOpen: false
					})
				})
			});

		case TaskActionTypes.ADD_TASK_FAILURE:
		case TaskActionTypes.EDIT_TASK_FAILURE:
			return Object.assign({}, state, {
				ui: Object.assign({}, state.ui, {
					taskForm: Object.assign({}, state.ui.taskForm, {
						submitted: false,
						modalOpen: true,
						error: action.payload.error
					})
				})
			});

		case TaskActionTypes.GET_TASK_DETAILS_SUCCESS:
			let updatedTaskDetails = Object.assign({}, state.taskDetails);
			task = action.payload.task;
			updatedTaskDetails[task.id] = task;
			return Object.assign({}, state, {
				taskDetails: updatedTaskDetails
			});

		case TaskActionTypes.TOGGLE_TASK_DETAILS:
			updatedUITaskDetails = Object.assign({}, state.ui.taskDetails);
			let taskId = action.payload.taskId;

			if (updatedUITaskDetails[taskId]) {
				updatedUITaskDetails[taskId] = !updatedUITaskDetails[taskId];
			} else {
				updatedUITaskDetails[taskId] = true
			}

			return Object.assign({}, state, {
				ui: Object.assign({}, state.ui, {
					taskDetails: updatedUITaskDetails
				})
			});

		case TaskActionTypes.DELETE_TASK_SUCCESS:
			updatedTasks = state.tasks.filter((task) => {
				return task.id !== action.payload.taskId;
			});
			return Object.assign({}, state, {
				tasks: updatedTasks
			});

		case TaskActionTypes.EDIT_TASK_SUCCESS:
			task = action.payload.task;
			updatedTasks = state.tasks.map((item, index) => {
				if (item.id !== action.payload.task.id) {
					return item;
				}
				return Object.assign({}, item, {
					name: task.name,
					dueDate: task.dueDate,
					assignedMemberId: task.assignedMemberId,
					ui: Object.assign({}, state.ui, {
						taskForm: Object.assign({}, state.ui.taskForm, {
							submitted: false,
							modalOpen: false,
							error: null
						})
					})
				});
			});

			// updatedUITaskDetails = Object.assign({}, state.ui.taskDetails);
			// updatedUITaskDetails[task.id] = false;
			return Object.assign({}, state, {
				tasks: updatedTasks,
				ui: Object.assign({}, state.ui, {
					taskForm: Object.assign({}, state.ui.taskForm, {
						submitted: false,
						modalOpen: false
					}),

				})
			});

			// taskDetails: updatedUITaskDetails

		case TaskActionTypes.GET_TASK_STATS_SUCCESS:
			return Object.assign({}, state, {
				stats: action.payload.stats
			});

		case TaskActionTypes.SET_TASK_STATUS_SUCCESS:
			updatedTasks = _.map(state.tasks, (task: Task) => {
				if (task.id === action.payload.taskId) {
					task.status = action.payload.status;
				}
				return task;
			});
			return Object.assign({}, state, {
				tasks: updatedTasks
			});

		default:
			return state;
	}

}
