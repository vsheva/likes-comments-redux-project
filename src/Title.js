import { useSelector, useDispatch } from 'react-redux';
import { inputText } from './redux/actions';

function Title(props) {
  console.log('title-props -->', props);
  const dispatch = useDispatch();
  const text = useSelector(state => {
    console.log('title-state-->', state);
    const { inputReducer } = state; //state.inputReducer.text
    return inputReducer.text;
  });

  const onChangeHandler = e => {
    console.log('handle text', e.target.value);
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
