import React from 'react';
import './index.css';
import {addNewMessage, addPost, updateNewMessage, updateNewPostText, state, subscribe} from "./redux/state";
import {App, StateType} from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

const renderTree = (state:StateType)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                updateNewMessage={updateNewMessage}
                addNewMessage={addNewMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(state);
subscribe(renderTree);
