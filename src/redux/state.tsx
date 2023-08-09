import {v1} from "uuid";
import {PostDataType, StateType} from "../App";
import {renderTree} from "../render";

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
        {id: v1(), name: "Leonora",img:"https://9obzor.ru/wp-content/uploads/2023/02/obrabotka-foto-neyroseti11.jpg"},
        {id: v1(), name: "Meteora",img:"https://static-cdn4-2.vigbo.tech/u19297/22269/blog/4426958/5938479/78187796/1000-Ekaterina_Nasyrova-961e3efa6072f7f8083602f199712ff8.JPG"},
        {id: v1(), name: "Foress",img:"https://www.business2community.com/ru/wp-content/uploads/sites/12/2023/05/generator.png"},
        {id: v1(), name: "Tramp",img:"https://cs13.pikabu.ru/images/big_size_comm/2023-02_4/1676600230192459959.jpg"},
        {id: v1(), name: "Prince",img:"https://cs14.pikabu.ru/images/big_size_comm/2023-02_4/1676612896111680941.jpg"},
    ]

}

export const addPost = (postMessage:string)=>{
    const newMessage:PostDataType = {id: 5, message: postMessage, likesCount: 0};
    state.profile.posts.unshift(newMessage);
    renderTree(state)
}

