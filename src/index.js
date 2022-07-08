import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

/*
import {createStore} from "redux";

//state=initialState={likes:5}
//STATE
const initialState = {likes: 5} //в компонте props.like

const reducer=(state=initialState, action) =>{
    console.log("reducer - action >>", action)
    switch(action.type){
        case "INCREMENT":
            return {
                ...state, // (скопировали наш стейт и записали скопированное в новый  обьект)
                likes: state.likes+1
            };
        case "DECREMENT":
            return {
                ...state, // (скопировали наш стейт и записали скопированное в новый  обьект)
                likes: state.likes-1
            }
        default: return state;
    }
}

const store = createStore(reducer)

export default store;*/
