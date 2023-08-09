import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, StateType} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state} from "./redux/state";
import {renderTree} from "./render";



renderTree(state);

