import React, { useState } from 'react';
import SingleComment from './SingleComment';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate } from './redux/actions';


const Comments = props => {
  const [textComment, setTextComment] = useState('');

  const dispatch = useDispatch();

  const comments = useSelector(state => {
    //console.log(state) ---
    // {likesReducer:{likes:0}, inputReducer:{text:""}, commentsReducer:{comments:[{text: "Клево", id:"a564"}, {text: "Правильно", id:"nj34df"}, {text: "Вперед!", id:"ig24g"}]} }
    return state.commentsReducer.comments;
  });

  const onHandleChange = e => {
    setTextComment(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id)); //передаем в редюсер
  };

//4. комменты приходят из редакса [{text:"one", id: "123ef"}, {text:"two", id: "233ef"}, {text:"three", id: "ede"}]
//5. 2 коммент обновляем из UI [{text:"one", id: "123ef"}, {text:"Hello", id: "23"}, {text:"three", id: "ede"}]
  return (
    <div className="card-comments">
      <form onSubmit={onHandleSubmit} className="comments-item-create">
        <input onChange={onHandleChange} value={textComment} type="text" />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map(res => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
