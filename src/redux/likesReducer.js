import { INCREMENT, DECREMENT } from './types';

//state=initialState={likes:5}
//STATE
const initialState = { likes: 0 }; ////в компонте props.like

export const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // (скопировали наш стейт и записали скопированное в новый  обьект)
        likes: state.likes + 1,
      };
    case DECREMENT:
      return {
        ...state, // (скопировали наш стейт и записали скопированное в новый  обьект)
        likes: state.likes - 1,
      };
    default:
      return state;
  }
};
