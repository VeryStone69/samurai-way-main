import {v1} from "uuid";
import {PostDataType, StateType} from "../App";
import {renderTree} from "../render";

export const state:StateType = {
    profile: {
        posts:[{id: v1(), message: "Hi, how are you", likesCount: 12},
            {id: v1(), message: "It's my second post", likesCount: 15},
            {id: v1(), message: "Number three", likesCount: 99},
            {id: v1(), message: "Yo4", likesCount: 1},
            {id: v1(), message: "Yo5", likesCount: 2},
            {id: v1(), message: "Yo6", likesCount: 3},],
        newPostsText: "it-kamasutra"

    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Alex"},
            {id: v1(), name: "Dima"},
            {id: v1(), name: "Poma"},
            {id: v1(), name: "Pasha"},
            {id: v1(), name: "Igor"},
            {id: v1(), name: "Andrey"},],
        message: [
            {id: v1(), message: "How are you?"},
            {id: v1(), message: "Hi"},
            {id: v1(), message: "I am fine and you?"},
            {id: v1(), message: "Fine!"},
            {id: v1(), message: "Maybe drink vodka?"},
            {id: v1(), message: "Good idea!"},
        ],
        newMessage: "",
    },
    friends:[
        {id: v1(), name: "Leonora",img:"https://9obzor.ru/wp-content/uploads/2023/02/obrabotka-foto-neyroseti11.jpg"},
        {id: v1(), name: "Meteora",img:"https://static-cdn4-2.vigbo.tech/u19297/22269/blog/4426958/5938479/78187796/1000-Ekaterina_Nasyrova-961e3efa6072f7f8083602f199712ff8.JPG"},
        {id: v1(), name: "Foress",img:"https://www.business2community.com/ru/wp-content/uploads/sites/12/2023/05/generator.png"},
        {id: v1(), name: "Tramp",img:"https://cs13.pikabu.ru/images/big_size_comm/2023-02_4/1676600230192459959.jpg"},
        {id: v1(), name: "Prince",img:"https://cs14.pikabu.ru/images/big_size_comm/2023-02_4/1676612896111680941.jpg"},
    ]

}
export const addPost = ()=>{
    const newMessage:PostDataType = {id: v1(), message: state.profile.newPostsText, likesCount: 0};
    state.profile.posts.unshift(newMessage);
    state.profile.newPostsText = "";
    renderTree(state)
}
export const updateNewPostText = (newText:string) =>{
    state.profile.newPostsText = newText;
    renderTree(state)
}

export const addNewMessage = ()=>{
    const newMessage = {id: v1(), message: state.dialogsPage.newMessage};
    state.dialogsPage.message.push(newMessage)
    state.dialogsPage.newMessage="";
    renderTree(state)
}

export const updateNewMessage = (newMessageText:string)=>{

    // state.dialogsPage.message.push(newMessage);
    state.dialogsPage.newMessage =newMessageText;
    renderTree(state)
}
