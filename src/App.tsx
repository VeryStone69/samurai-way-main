import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {DialogsDataType, MessagesDataType, PostDataType} from "./index";

type AppPropsType = {
    postData: PostDataType[]
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}


export const App = (props: AppPropsType) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile postData={props.postData}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    {/*<Route path="/news" element={<News/>}/>*/}
                    {/*<Route path="/music" element={<Music/>}/>*/}
                    {/*<Route path="/settings" element={<Settings/>}/>*/}
                </Routes>
            </div>
        </div>


    )
}
