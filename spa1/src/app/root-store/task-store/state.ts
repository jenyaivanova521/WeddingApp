import { Task, TaskDetails } from './models';

export interface State {
    tasks: Task[];
    taskDetails: TaskDetails[];
    stats: any;
    ui: {
        taskForm: {
            submitted: boolean,
            modalOpen: boolean,
            error: any | null
        },
        taskDetails: object[]
    }
}

export const initialState: State = {
    tasks: [],
    taskDetails: [],
    stats: null,
    ui: {
        taskForm: {
            submitted: false,
            modalOpen: null,
            error: null
        },
        taskDetails: []
    }
};
