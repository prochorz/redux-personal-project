//Types
import { types } from "./types";

export const tasksActions = {
    //sync
    fillTasks: ( tasks ) => {
        return {
            type: types.FILL_TASKS,
            payload: tasks
        };
    },

    //Async
    fetchTasksAsync: () => {
        return {
            type: types.FETCH_TASKS_ASYNC
        };
    }
};