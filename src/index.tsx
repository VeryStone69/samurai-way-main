import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import {App} from "./App";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const renderTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}
renderTree();
// store.subscribe(renderTree);
store.subscribe(() => {
    renderTree()
});


