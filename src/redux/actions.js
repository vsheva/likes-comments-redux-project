import { INCREMENT, DECREMENT, INPUT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE } from './types';

export const incrementLikes = () => {
  return { type: INCREMENT };
};

export const decrementLikes = () => {
  return { type: DECREMENT };
};

export const inputText = text => {
  return { type: INPUT, text:text };
};

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: {text: text, id: id},
  };
};

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { text: text, id: id },
  };
};

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    id: id,
  };
};
