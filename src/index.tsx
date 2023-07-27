import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    name: string
    id: number
}
export type MessagesDataType = {
    id: number
    message: string
}


let postData = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 2, message: "It's my second post", likesCount: 15},
    {id: 3, message: "Number three", likesCount: 99},
    {id: 4, message: "Yo4", likesCount: 1},
    {id: 5, message: "Yo5", likesCount: 2},
    {id: 6, message: "Yo6", likesCount: 3},
]
let dialogsData = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Poma"},
    {id: 4, name: "Pasha"},
    {id: 5, name: "Igor"},
    {id: 6, name: "Andrey"},
]
let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo3"},
    {id: 4, message: "Yo4"},
    {id: 5, message: "Yo5"},
    {id: 6, message: "Yo6"},
]

ReactDOM.render(
    <BrowserRouter>
        <App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>
    </BrowserRouter>,
    document.getElementById('root')
);