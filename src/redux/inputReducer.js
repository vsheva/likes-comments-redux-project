import { INPUT } from './types';

const initialState = { text: '' };

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT:
      return {
        ...state, // (скопировали наш стейт и записали скопированное в новый  обьект)
        text: action.text,
      };

    default:
      return state;
  }
};
