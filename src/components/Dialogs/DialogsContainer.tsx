import React, {ChangeEvent} from "react"
import {DialogsPage} from "../../App";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/diallogs-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = () => {

    const dialogs = useSelector<AppRootStateType, DialogsPage>(state => state.dialogs)
    const dispatch = useDispatch();

    function addNewMessage() {
        if (dialogs.newMessage) {
            dispatch(addNewMessageAC())
        }
    }

    const updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = updateNewMessageAC(e.currentTarget.value)
        dispatch(action)
    }

    return (
        <Dialogs
            dialogs={dialogs}
            addNewMessage={addNewMessage}
            updateNewMessage={updateNewMessage}/>
    )
}