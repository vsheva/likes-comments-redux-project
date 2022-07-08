import { COMMENT, COMMENT_UPDATE, COMMENT_DELETE } from './types';

//STATE=initialState={comment:[]}

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log('action', action);

  switch (action.type) {
    case COMMENT:
      return {
        ...state, // (скопировали  записали скопированные массивы в новый  обьект)
        comments: [...state.comments, action.data], //data приходит из action, state.comment из state        //state={comments:[id..., text...]}   //все предущие элементы конкретного в новый и добавили action.data
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      // как у Макса academind #147,148
      //индексное значение элемента,  id которого равен id, которое мы получаем в экшене ~т.е.
      //мы знаем индексное значение коммента, который хотим поменять
      const itemIndex = comments.findIndex(res => res.id === data.id);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];

      return {
        ...state, // (скопировали  записали скопированные массивы в новый  обьект)
        comments: nextComments,
      };

    //DELETE
    //трюк с областью видимости, так как похоже в UPDATE выше

    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const itemIndex = comments.findIndex(res => res.id === id);
        const nextComments = [...comments.slice(0, itemIndex), ...comments.slice(itemIndex + 1)];

        return {
          ...state,
          comments: nextComments,
        };
      })();

    default:
      return state;
  }
};

//STATE

/**
 * {
 * likesReducer:{},
   inputReducer:{},
   commentsReducer:{comments:[{text:"comment-1", id:"154tdt"},{text:"текст какой-то", id:"2154hj9"}]}
 * } */
