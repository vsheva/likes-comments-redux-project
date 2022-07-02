import {COMMENT} from './types'


//STATE=initialState={comment:[]}

const initialState = {comment:[]}

export const commentsReducer=(state=initialState, action)=> {
    switch(action.type){
        case COMMENT:
            return {
                ...state, // (скопировали  записали скопированные массивы в новый  обьект)
                comment: [...state.comment, action.data]    //data приходит из action, state.comment из state        //state={comments:[id..., text...]}   //все предущие элементы конкретного в новый и добавили action.data
            };

        default: return state;
    }
}

//STATE

/**
 * {
 * likesReducer:{},
   inputReducer:{},
   commentsReducer:{comments:[{text:"comment-1", id:"154tdt"},{text:"текст какой-то", id:"2154hj9"}]}
 * } */
