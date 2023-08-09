import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, StateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state} from "./redux/state";



export const renderTree = (state:StateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(state);
