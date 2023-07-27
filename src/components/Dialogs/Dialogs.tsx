import React from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../index";

type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = props.messagesData.map(m => {
        return <Message messageText={m.message} key={m.id}/>
    })
    return (
        <div className={s.wrapperDialogs}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>


    )
}
