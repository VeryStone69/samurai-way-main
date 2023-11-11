import React from "react"
import {DialogsPage} from "../../App";
import {addNewMessageAC} from "../../redux/diallogs-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {Navigate} from "react-router-dom";


export const DialogsContainer = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dialogs = useSelector<AppRootStateType, DialogsPage>(state => state.dialogs)
    const dispatch = useDispatch();

    function addNewMessage(newMessage:string) {dispatch(addNewMessageAC(newMessage))}
    return (
        isAuth ? <Dialogs dialogs={dialogs} addNewMessage={addNewMessage}/>
                : <Navigate to={"/login"}/>
    )
}
