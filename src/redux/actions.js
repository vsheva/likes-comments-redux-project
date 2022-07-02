import {INCREMENT, DECREMENT, INPUT} from './types'

export const incrementLikes =()=>{
    return {type: INCREMENT}
}

export const decrementLikes =()=>{
    return {type: DECREMENT}
}

export const inputText =(text)=>{
    return {type: INPUT, text}
}