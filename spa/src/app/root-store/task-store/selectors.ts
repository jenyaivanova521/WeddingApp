import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Task } from './models';
import { State } from './state';

const getTasks = (state: State): any => state.tasks;
const getTaskStats = (state: State): any => state.stats;
const getUITaskForm = (state: State): any => state.ui.taskForm;
const getUITaskDetails = (state: State): any => state.ui.taskDetails;

export const selectTaskState: MemoizedSelector<object, State> = createFeatureSelector<State>('task');
export const selectTasks: MemoizedSelector<object, Task[] | null> = createSelector(selectTaskState, getTasks);
export const selectTaskStats: MemoizedSelector<object, Task[] | null> = createSelector(selectTaskState, getTaskStats);
export const selectUITaskForm: MemoizedSelector<object, any> = createSelector(selectTaskState, getUITaskForm);
export const selectUITaskDetails: MemoizedSelector<object, any> = createSelector(selectTaskState, getUITaskDetails);
export const selectTaskDetails = (taskId: string) => {
  return createSelector(
      selectTaskState,
      (state: State) => state.taskDetails[taskId]
  );
}
