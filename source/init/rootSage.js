//Core
import { call, all } from 'redux-saga/effects';

// Watchers
import { watchTasks } from "../bus/tasks/saga/watchers";

export function* rootSage () {
    yield all([
        call(watchTasks)
    ]);
};