import React from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./DialogItem/DialogItem";



export const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Poma"},
        {id: 4, name: "Pasha"},
        {id: 5, name: "Igor"},
        {id: 6, name: "Andrey"},
    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo3"},
        {id: 4, message: "Yo4"},
        {id: 5, message: "Yo5"},
        {id: 6, message: "Yo6"},
    ]
    let dialogsElement = dialogsData.map(d => {
        return <Dialog name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = messagesData.map(m => {
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
