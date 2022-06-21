import {combineReducers, createStore} from "@reduxjs/toolkit";
import {SET_TICKERS} from "./action-types";

export * from './action-types';
export * from './action-creators';

const initialState = {
    tickers: []
}

const reducer = (state= initialState, action) => {
    switch (action.type){
        case SET_TICKERS: {
            return {...state, tickers: action.payload}
        }
        default: {
            return state
        }
    }
}

const store = createStore(reducer)

export default store;
