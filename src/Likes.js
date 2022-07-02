import {connect} from 'react-redux';


function Likes(props){
    console.log("render props",props)
    return(
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤{props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

//притянули лайки из reducer
function mapStateToProps (state) {
    console.log("mapStateToProps state =>", state)
    return {
        likes: state.likesReducer.likes, //доступно свойство лайки из стейта, которое мы передаем через переменную like в пропсы
    }
};

function mapDispatchToProps(dispatch) {
 return {
     //наш метод, передаваемые наверх через пропсы на клик
     onIncrementLikes:()=> {
         console.log("Click")
         const action={type: "INCREMENT"}
         dispatch(action);
     },
     onDecrementLikes:()=> {
         console.log("Click")
         const action={type: "DECREMENT"}
         dispatch(action);
     }
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(Likes)


// по клику отправляем action в reducer (store)