//Types
import { types } from "./types";

const { FILL_TASKS, FETCH_TASKS_ASYNC } = types;

export const tasksActions = {
    //sync
    fillTasks: ( tasks ) => {
        return {
            type: FILL_TASKS,
            payload: tasks
        };
    },

    //Async
    fetchTasks: () => {
        return {
            type: FETCH_TASKS_ASYNC
        };
    }
};