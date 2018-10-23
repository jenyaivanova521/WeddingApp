"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var actions_1 = require("./actions");
var state_1 = require("./state");
function reducer(state, action) {
    if (state === void 0) { state = state_1.initialState; }
    var task;
    var updatedTasks;
    var updatedUITaskDetails;
    switch (action.type) {
        case actions_1.TaskActionTypes.GET_TASKS_SUCCESS:
            return Object.assign({}, state, {
                tasks: action.payload.tasks
            });
        case actions_1.TaskActionTypes.ADD_TASK:
        case actions_1.TaskActionTypes.EDIT_TASK:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    taskForm: Object.assign({}, state.ui.taskForm, {
                        submitted: true,
                        modalOpen: true
                    })
                })
            });
        case actions_1.TaskActionTypes.ADD_TASK_CANCEL:
        case actions_1.TaskActionTypes.EDIT_TASK_CANCEL:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    taskForm: Object.assign({}, state.ui.taskForm, {
                        submitted: false,
                        modalOpen: false,
                        error: null
                    })
                })
            });
        case actions_1.TaskActionTypes.ADD_TASK_SUCCESS:
            return Object.assign({}, state, {
                tasks: [
                    action.payload.task
                ].concat(state.tasks),
                ui: Object.assign({}, state.ui, {
                    taskForm: Object.assign({}, state.ui.taskForm, {
                        submitted: false,
                        modalOpen: false
                    })
                })
            });
        case actions_1.TaskActionTypes.ADD_TASK_FAILURE:
        case actions_1.TaskActionTypes.EDIT_TASK_FAILURE:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    taskForm: Object.assign({}, state.ui.taskForm, {
                        submitted: false,
                        modalOpen: true,
                        error: action.payload.error
                    })
                })
            });
        case actions_1.TaskActionTypes.GET_TASK_DETAILS_SUCCESS:
            var updatedTaskDetails = Object.assign({}, state.taskDetails);
            task = action.payload.task;
            updatedTaskDetails[task.id] = task;
            return Object.assign({}, state, {
                taskDetails: updatedTaskDetails
            });
        case actions_1.TaskActionTypes.TOGGLE_TASK_DETAILS:
            updatedUITaskDetails = Object.assign({}, state.ui.taskDetails);
            var taskId = action.payload.taskId;
            if (updatedUITaskDetails[taskId]) {
                updatedUITaskDetails[taskId] = !updatedUITaskDetails[taskId];
            }
            else {
                updatedUITaskDetails[taskId] = true;
            }
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    taskDetails: updatedUITaskDetails
                })
            });
        case actions_1.TaskActionTypes.DELETE_TASK_SUCCESS:
            updatedTasks = state.tasks.filter(function (task) {
                return task.id !== action.payload.taskId;
            });
            return Object.assign({}, state, {
                tasks: updatedTasks
            });
        case actions_1.TaskActionTypes.EDIT_TASK_SUCCESS:
            task = action.payload.task;
            updatedTasks = state.tasks.map(function (item, index) {
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
        case actions_1.TaskActionTypes.GET_TASK_STATS_SUCCESS:
            return Object.assign({}, state, {
                stats: action.payload.stats
            });
        case actions_1.TaskActionTypes.SET_TASK_STATUS_SUCCESS:
            updatedTasks = _.map(state.tasks, function (task) {
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
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUE0QjtBQUU1QixxQ0FBeUQ7QUFDekQsaUNBQXVDO0FBR3ZDLGlCQUF3QixLQUFvQixFQUFFLE1BQW1CO0lBQXpDLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUUzQyxJQUFJLElBQUksQ0FBQztJQUNULElBQUksWUFBWSxDQUFDO0lBQ2pCLElBQUksb0JBQW9CLENBQUM7SUFFekIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyx5QkFBZSxDQUFDLGlCQUFpQjtZQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUMvQixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLO2FBQzNCLENBQUMsQ0FBQztRQUVKLEtBQUsseUJBQWUsQ0FBQyxRQUFRLENBQUM7UUFDOUIsS0FBSyx5QkFBZSxDQUFDLFNBQVM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDL0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7b0JBQy9CLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTt3QkFDOUMsU0FBUyxFQUFFLElBQUk7d0JBQ2YsU0FBUyxFQUFFLElBQUk7cUJBQ2YsQ0FBQztpQkFDRixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBRUosS0FBSyx5QkFBZSxDQUFDLGVBQWUsQ0FBQztRQUNyQyxLQUFLLHlCQUFlLENBQUMsZ0JBQWdCO1lBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxL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Q0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDL0IsS0FBSyxFQUFFLFlBQVk7YUFDbkIsQ0FBQyxDQUFDO1FBRUo7WUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztBQUVGLENBQUM7QUFwSkQsMEJBb0pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgVGFza0FjdGlvbnMsIFRhc2tBY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogVGFza0FjdGlvbnMpIHtcclxuXHJcblx0bGV0IHRhc2s7XHJcblx0bGV0IHVwZGF0ZWRUYXNrcztcclxuXHRsZXQgdXBkYXRlZFVJVGFza0RldGFpbHM7XHJcblxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLkdFVF9UQVNLU19TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHR0YXNrczogYWN0aW9uLnBheWxvYWQudGFza3NcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y2FzZSBUYXNrQWN0aW9uVHlwZXMuQUREX1RBU0s6XHJcblx0XHRjYXNlIFRhc2tBY3Rpb25UeXBlcy5FRElUX1RBU0s6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdHVpOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aSwge1xyXG5cdFx0XHRcdFx0dGFza0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLnRhc2tGb3JtLCB7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdHRlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0bW9kYWxPcGVuOiB0cnVlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLkFERF9UQVNLX0NBTkNFTDpcclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLkVESVRfVEFTS19DQU5DRUw6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdHVpOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aSwge1xyXG5cdFx0XHRcdFx0dGFza0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLnRhc2tGb3JtLCB7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdHRlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdG1vZGFsT3BlbjogZmFsc2UsXHJcblx0XHRcdFx0XHRcdGVycm9yOiBudWxsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLkFERF9UQVNLX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdHRhc2tzOiBbXHJcblx0XHRcdFx0XHRhY3Rpb24ucGF5bG9hZC50YXNrLFxyXG5cdFx0XHRcdFx0Li4uc3RhdGUudGFza3NcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHVpOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aSwge1xyXG5cdFx0XHRcdFx0dGFza0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLnRhc2tGb3JtLCB7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdHRlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdG1vZGFsT3BlbjogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y2FzZSBUYXNrQWN0aW9uVHlwZXMuQUREX1RBU0tfRkFJTFVSRTpcclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLkVESVRfVEFTS19GQUlMVVJFOlxyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHR1aTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUudWksIHtcclxuXHRcdFx0XHRcdHRhc2tGb3JtOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aS50YXNrRm9ybSwge1xyXG5cdFx0XHRcdFx0XHRzdWJtaXR0ZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRtb2RhbE9wZW46IHRydWUsXHJcblx0XHRcdFx0XHRcdGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjYXNlIFRhc2tBY3Rpb25UeXBlcy5HRVRfVEFTS19ERVRBSUxTX1NVQ0NFU1M6XHJcblx0XHRcdGxldCB1cGRhdGVkVGFza0RldGFpbHMgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS50YXNrRGV0YWlscyk7XHJcblx0XHRcdHRhc2sgPSBhY3Rpb24ucGF5bG9hZC50YXNrO1xyXG5cdFx0XHR1cGRhdGVkVGFza0RldGFpbHNbdGFzay5pZF0gPSB0YXNrO1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHR0YXNrRGV0YWlsczogdXBkYXRlZFRhc2tEZXRhaWxzXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLlRPR0dMRV9UQVNLX0RFVEFJTFM6XHJcblx0XHRcdHVwZGF0ZWRVSVRhc2tEZXRhaWxzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUudWkudGFza0RldGFpbHMpO1xyXG5cdFx0XHRsZXQgdGFza0lkID0gYWN0aW9uLnBheWxvYWQudGFza0lkO1xyXG5cclxuXHRcdFx0aWYgKHVwZGF0ZWRVSVRhc2tEZXRhaWxzW3Rhc2tJZF0pIHtcclxuXHRcdFx0XHR1cGRhdGVkVUlUYXNrRGV0YWlsc1t0YXNrSWRdID0gIXVwZGF0ZWRVSVRhc2tEZXRhaWxzW3Rhc2tJZF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dXBkYXRlZFVJVGFza0RldGFpbHNbdGFza0lkXSA9IHRydWVcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcblx0XHRcdFx0dWk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLCB7XHJcblx0XHRcdFx0XHR0YXNrRGV0YWlsczogdXBkYXRlZFVJVGFza0RldGFpbHNcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjYXNlIFRhc2tBY3Rpb25UeXBlcy5ERUxFVEVfVEFTS19TVUNDRVNTOlxyXG5cdFx0XHR1cGRhdGVkVGFza3MgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGFzay5pZCAhPT0gYWN0aW9uLnBheWxvYWQudGFza0lkO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcblx0XHRcdFx0dGFza3M6IHVwZGF0ZWRUYXNrc1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjYXNlIFRhc2tBY3Rpb25UeXBlcy5FRElUX1RBU0tfU1VDQ0VTUzpcclxuXHRcdFx0dGFzayA9IGFjdGlvbi5wYXlsb2FkLnRhc2s7XHJcblx0XHRcdHVwZGF0ZWRUYXNrcyA9IHN0YXRlLnRhc2tzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQudGFzay5pZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XHJcblx0XHRcdFx0XHRuYW1lOiB0YXNrLm5hbWUsXHJcblx0XHRcdFx0XHRkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXHJcblx0XHRcdFx0XHRhc3NpZ25lZE1lbWJlcklkOiB0YXNrLmFzc2lnbmVkTWVtYmVySWQsXHJcblx0XHRcdFx0XHR1aTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUudWksIHtcclxuXHRcdFx0XHRcdFx0dGFza0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLnRhc2tGb3JtLCB7XHJcblx0XHRcdFx0XHRcdFx0c3VibWl0dGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRtb2RhbE9wZW46IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGVycm9yOiBudWxsXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHVwZGF0ZWRVSVRhc2tEZXRhaWxzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUudWkudGFza0RldGFpbHMpO1xyXG5cdFx0XHQvLyB1cGRhdGVkVUlUYXNrRGV0YWlsc1t0YXNrLmlkXSA9IGZhbHNlO1xyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHR0YXNrczogdXBkYXRlZFRhc2tzLFxyXG5cdFx0XHRcdHVpOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aSwge1xyXG5cdFx0XHRcdFx0dGFza0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLnRhc2tGb3JtLCB7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdHRlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdG1vZGFsT3BlbjogZmFsc2VcclxuXHRcdFx0XHRcdH0pLFxyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHRhc2tEZXRhaWxzOiB1cGRhdGVkVUlUYXNrRGV0YWlsc1xyXG5cclxuXHRcdGNhc2UgVGFza0FjdGlvblR5cGVzLkdFVF9UQVNLX1NUQVRTX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdHN0YXRzOiBhY3Rpb24ucGF5bG9hZC5zdGF0c1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjYXNlIFRhc2tBY3Rpb25UeXBlcy5TRVRfVEFTS19TVEFUVVNfU1VDQ0VTUzpcclxuXHRcdFx0dXBkYXRlZFRhc2tzID0gXy5tYXAoc3RhdGUudGFza3MsICh0YXNrOiBUYXNrKSA9PiB7XHJcblx0XHRcdFx0aWYgKHRhc2suaWQgPT09IGFjdGlvbi5wYXlsb2FkLnRhc2tJZCkge1xyXG5cdFx0XHRcdFx0dGFzay5zdGF0dXMgPSBhY3Rpb24ucGF5bG9hZC5zdGF0dXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0YXNrO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcblx0XHRcdFx0dGFza3M6IHVwZGF0ZWRUYXNrc1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=