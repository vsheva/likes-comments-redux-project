import {INCREMENT, DECREMENT, INPUT, COMMENT} from './types'

export const incrementLikes =()=>{
    return {type: INCREMENT}
}

export const decrementLikes =()=>{
    return {type: DECREMENT}
}

export const inputText =(text)=>{
    return {type: INPUT, text}
}

export const commentCreate =(text, id)=>{
    return {type: COMMENT,
            data: {
                text: text,
                id: id}
    }
}