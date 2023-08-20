import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {DispatchACType} from "./redux/state";

export type FriendsDataType = {
    id: string
    name: string
    img: string
}
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


export type AppPropsType = {
    state: StateType
    dispatch: (action: DispatchACType) => void
}

export const App = (props: AppPropsType) => {
    const {state, dispatch} = props
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar friends={state.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile
                        postData={state.profile.posts}
                        newPostTextProps={state.profile.newPostsText}
                        dispatch={dispatch}
                    />}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs
                               newMessage={state.dialogsPage.newMessage}
                               dialogsData={state.dialogsPage.dialogs}
                               messagesData={props.state.dialogsPage.message}
                               dispatch={dispatch}
                           />}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
