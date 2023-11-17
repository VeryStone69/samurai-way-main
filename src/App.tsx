import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {FriendsDataType} from "./redux/friends-reduser";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import {UsersLoader} from "./components/common/UsersLoader";


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
    // newMessage: string
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
    const initialized = useSelector<AppRootStateType,boolean>(state => state.app.initialized)
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
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
