import React from "react"
import {addNewMessageAC} from "../../redux/diallogs-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {Navigate} from "react-router-dom";
import {dialogsSelector, isAuthDialogsContainerSelector} from "./selectors/dialogsContainer-selectors";


export const DialogsContainer = () => {
    const isAuth = useAppSelector(isAuthDialogsContainerSelector)
    const dialogs = useAppSelector(dialogsSelector)
    const dispatch = useDispatch();

    function addNewMessage(newMessage:string) {dispatch(addNewMessageAC(newMessage))}
    return (
        isAuth ? <Dialogs dialogs={dialogs} addNewMessage={addNewMessage}/>
                : <Navigate to={"/login"}/>
    )
}
