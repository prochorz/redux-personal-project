// Core
import { takeEvery, all, call } from "redux-saga/effects";

// Types
import { types } from "../types";

// Workers
import { fetchTasks} from "./workers";

function* watchFetchTasks () {
    yield takeEvery(types.FETCH_TASKS_ASYNC, fetchTasks);
}

export function* watchTasks () {
    yield all([
        all(watchFetchTasks),
    ]);
}