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
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree();
store.subscribe(renderTree);
