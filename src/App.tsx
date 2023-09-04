import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {FriendsDataType} from "./redux/friends-reduser";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export type DialogsDataType = {
    name: string
    id: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type DialogsPage = {
    dialogs: DialogsDataType[]
    message: MessagesDataType[]
    newMessage: string
}
export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type ProfileDataType = {
    posts: PostDataType[]
    newPostsText: string
}

export type StateType = {
    profile: ProfileDataType
    dialogsPage: DialogsPage
    friends: FriendsDataType[]
}


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
