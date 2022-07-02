 import {combineReducers} from "redux";
import {likesReducer} from './likesReducer'



export const rootReducer=(combineReducers)({
    likesReducer:likesReducer,
})