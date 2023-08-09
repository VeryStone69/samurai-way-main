import {v1} from "uuid";
import {PostDataType, StateType} from "../App";
import {renderTree} from "../index";

export const state:StateType = {
    profile: {
        posts:[{id: 1, message: "Hi, how are you", likesCount: 12},
            {id: 2, message: "It's my second post", likesCount: 15},
            {id: 3, message: "Number three", likesCount: 99},
            {id: 4, message: "Yo4", likesCount: 1},
            {id: 5, message: "Yo5", likesCount: 2},
            {id: 6, message: "Yo6", likesCount: 3},],

    },
    dialogsPage: {
        dialogs: [{id: 1, name: "Alex"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Poma"},
            {id: 4, name: "Pasha"},
            {id: 5, name: "Igor"},
            {id: 6, name: "Andrey"},],
        message: [{id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo3"},
            {id: 4, message: "Yo4"},
            {id: 5, message: "Yo5"},
            {id: 6, message: "Yo6"}],
    },
    friends:[
        {id: 1, name: "Ivan1"},
        {id: 2, name: "Ivan2"},
        {id: 2, name: "Ivan2"},
    ]

}

export const addPost = (postMessage:string)=>{
    const newMessage:PostDataType = {id: 5, message: postMessage, likesCount: 0};
    state.profile.posts.unshift(newMessage);
    renderTree(state)
}

