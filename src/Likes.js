import { connect } from 'react-redux';
import { decrementLikes, incrementLikes } from './redux/actions';

function Likes(props) {
  console.log('render props', props);

  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤{props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}

//с помошью функции ниже мы имеем доступ к состоянию-притянули лайки из reducer
function mapStateToProps(state) {
  console.log('likes-state==>', state);
  return {
    likes: state.likesReducer.likes, //  //общий->rootreducer( state ={likesReducer})->likesReducer (state={likes:0}) --> доступно свойство лайки из стейта, которое мы передаем через переменную like в пропсы
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //наш метод, передаваемые наверх через пропсы на клик
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);

// по клику отправляем action в reducer (store)
