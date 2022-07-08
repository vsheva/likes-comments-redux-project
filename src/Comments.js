import React, { useState } from 'react';
import SingleComment from './SingleComment';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate } from './redux/actions';

const Comments = props => {
  //console.log("comments props -->", props)

  const [textComment, setTextComment] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector(state => {
    return state.commentsReducer.comments;
  });

  const onChangeHandler = e => {
    setTextComment(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log('onSubmitHandler comments->', textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  console.log('comments-comments-->', comments);
  return (
    <div className="card-comments">
      <form onSubmit={onSubmitHandler} className="comments-item-create">
        <input onChange={onChangeHandler} value={textComment} type="text" />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map(res => {
          return <SingleComment key={res.id} data={res} />;
        })}

      <p></p>
    </div>
  );
};

export default Comments;
