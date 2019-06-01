//Core
import {fromJS, List} from 'immutable';

//Types
import {types} from './types';

const initialState = List();

export const tasksReducer = ( state = initialState, action ) => {
    const { type, payload } = action;

    switch (type){
        case types.FILL_TASKS:
            return fromJS( payload );

        default:
            return state;
    }
};