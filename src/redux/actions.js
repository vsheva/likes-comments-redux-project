import { INCREMENT, DECREMENT, INPUT, COMMENT, COMMENT_UPDATE, COMMENT_DELETE } from './types';

export const incrementLikes = () => {
  return { type: INCREMENT };
};

export const decrementLikes = () => {
  return { type: DECREMENT };
};

export const inputText = text => {
  return { type: INPUT, text };
};

export const commentCreate = (text, id) => {
  return {
    type: COMMENT,
    data: {
      text: text,
      id: id,
    },
  };
};

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { text: text, id: id },
  };
};

export const commentDelete = id => {
  return {
    type: COMMENT_DELETE,
    id: id,
  };
};
