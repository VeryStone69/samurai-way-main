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
    id: number
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsPage = {
    dialogs: DialogsDataType[]
    message: MessagesDataType[]
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileDataType = {
    posts:PostDataType[]
}

export type StateType = {
    profile: ProfileDataType
    dialogsPage: DialogsPage
    friends: FriendsDataType[]
}
export type AppPropsType ={
    state: StateType
    addPost:(postMessage:string)=>void
}

export const App = (props: AppPropsType) => {
    const {state,addPost}=props
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile
                        postData={state.profile.posts}
                        addPost={addPost}
                    />}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogsData={state.dialogsPage.dialogs} messagesData={props.state.dialogsPage.message}/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
