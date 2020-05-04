import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from "./containers/App-container";
import {createStore} from "redux";
import comments from "./reducers/comments-reducer";
import {saveToLocalStorage, loadToLocalStorage} from "./actions/actions";


const persistedState = loadToLocalStorage()

const store = createStore(comments,persistedState)

store.subscribe(() => saveToLocalStorage(store.getState()));
window.store = store;


ReactDOM.render(
    <React.StrictMode>
        <AppContainer date={new Date()} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
);
