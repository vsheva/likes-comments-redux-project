 import {combineReducers} from "redux";
import {likesReducer} from './likesReducer'
import {inputReducer} from './inputReducer'
import {commentsReducer} from './commentsReducer'

 //state=initialState={likes:5}
 //state.likesReducer.likes

export const rootReducer=(combineReducers)({
    likesReducer:likesReducer,
    inputReducer:inputReducer,
    commentsReducer:commentsReducer,
})