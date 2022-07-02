 import {combineReducers} from "redux";
import {likesReducer} from './likesReducer'
import {inputReducer} from './inputReducer'

 //state=initialState={likes:5}
 //state.likesReducer.likes

export const rootReducer=(combineReducers)({
    likesReducer:likesReducer,
    inputReducer:inputReducer,
})