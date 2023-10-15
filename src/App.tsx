import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {FriendsDataType} from "./redux/friends-reduser";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";


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
            {/*<Header/>*/}
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
