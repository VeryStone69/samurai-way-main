import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import {App} from "./App";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree();
// store.subscribe(renderTree);
store.subscribe(() => {
    renderTree()
});


