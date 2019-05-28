//Core
import {fromJS, List} from 'immutable';

//Types
import {types} from './types';

const { FILL_TASKS, FETCH_TASKS_ASYNC } = types;

const initialState = List();

export const tasksReducer = ( state = initialState, action ) => {
    const { type, payload } = action;

    switch (type){
        case FILL_TASKS:
            return fromJS(payload)

        default:
            return state;
    }
};