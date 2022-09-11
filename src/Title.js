import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { inputText } from './redux/actions';


function Title(props) {


  const dispatch = useDispatch();

  const text = useSelector(state => {
    //console.log(state)  ___   {inputReducer:{text:  "Surf.."}, likesReducer:{likes:0}}
    return state.inputReducer.text;   //state, который приходит из redux
  });


  const onChangeHandler = e => {
    dispatch(inputText(e.target.value)); //отправляем в UI ф-ю actionCreator, т.е. наш action c текстом - inputText(text)
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input onChange={onChangeHandler} type="text" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Title;
