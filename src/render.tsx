
import {addNewMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";
import {App, StateType} from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";

export const renderTree = (state:StateType)=>{
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