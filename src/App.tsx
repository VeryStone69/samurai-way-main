import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {FriendsDataType} from "./components/Friends/model/friends-reducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {useDispatch} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {UsersLoader} from "./components/common/UsersLoader";
import {initializedSelector} from "./app-selectors";
import {DialogsPageType} from "./redux/diallogs-reducer";
import {News} from "./components/News/ui/News";


export type DialogsDataType = {
    name: string
    id: string
}
export type MessagesDataType = {
    id: string
    message: string
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
    DialogsPageType: DialogsPageType
    friends: FriendsDataType[]
}


export const App = () => {
    const initialized = initializedSelector
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])
    if (!initialized) return <UsersLoader/>
    else
    return (
        <div className="app-wrapper">
            {/*<Header/>*/}
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    {/*<Route path="/dialogs/*" element={<DialogsContainer/>}/>*/}
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/users/*" element={<UsersContainer/>}/>
                    <Route path="/login/*" element={<Login/>}/>
                    <Route path="/news" element={<News/>}/>
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
