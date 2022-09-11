import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions';

function SingleComment({data}) {
  //console.log(props )  --- {data: {text: "Valera", id: "hg35k"}}

  const [commentText, setCommentText] = useState('');
  const { text, id } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {setCommentText(text)}
  }, [text]);


  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  //1.обновление комментария по клику
  //2. доставить комментарий в редакс и там его обновить
       // -- создать новый тип
       // -- создать новый action
       // -- импортируем сюда action из action --- commentUpdate(text, id)
       //-- диспатч в reducer (через хук useDispatch)
  //3. в редюсере логика, которая потом приходит в компоненту

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id)); //наш хук с action c новым текстом и id
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id)); //диспатчим акшен в редюсер с id, который нужно удалить
  };

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
