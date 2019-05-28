//Core
import { all, call } from 'redux-saga/effects';

//Watcher


export function* rootSage () {
    yield console.log('init sage');
}