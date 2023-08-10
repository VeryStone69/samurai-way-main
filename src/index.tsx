import React from 'react';
import './index.css';
import {store} from "./redux/state";
import {App} from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

const renderTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
                addNewMessage={store.addNewMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree();
store.subscribe(renderTree);
