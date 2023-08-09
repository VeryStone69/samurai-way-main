import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";



export type FriendsDataType = {
    id:string
    name: string
    img:string
 }
export type DialogsDataType = {
    name: string
    id:string
}
export type MessagesDataType = {
    id:string
    message: string
}
export type DialogsPage = {
    dialogs: DialogsDataType[]
    message: MessagesDataType[]
    newMessage:string
}
export type PostDataType = {
    id:string
    message: string
    likesCount: number
}
export type ProfileDataType = {
    posts:PostDataType[]
    newPostsText:string
}

export type StateType = {
    profile: ProfileDataType
    dialogsPage: DialogsPage
    friends: FriendsDataType[]
}
export type AppPropsType ={
    state: StateType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
    updateNewMessage:(newMessageText:string)=>void
    addNewMessage:()=>void
}

export const App = (props: AppPropsType) => {
    const {state,addPost,updateNewPostText,updateNewMessage,addNewMessage}=props
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile
                        postData={state.profile.posts}
                        newPostTextProps={state.profile.newPostsText}
                        updateNewPostText={updateNewPostText}
                        addPost={addPost}
                    />}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs
                               newMessage={state.dialogsPage.newMessage}
                               dialogsData={state.dialogsPage.dialogs}
                               messagesData={props.state.dialogsPage.message}
                               updateNewMessage={updateNewMessage}
                               addNewMessage={addNewMessage}
                           />}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
