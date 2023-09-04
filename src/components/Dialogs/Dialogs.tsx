import React, {ChangeEvent} from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPage} from "../../App";

type DialogsPropsType = {
    dialogs: DialogsPage
    addNewMessage: () => void
    updateNewMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    const {dialogs, addNewMessage, updateNewMessage} = props

    let dialogsElement = dialogs.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = dialogs.message.map(m => {
        return <Message messageText={m.message} key={m.id}/>
    })

    function onClickHandler() {
        if (dialogs.newMessage) {
            addNewMessage()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessage(e)
    }

    return (
        <>
            <div className={s.wrapperDialogs}>
                <div className={s.dialogs}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messagesElement}
                </div>

            </div>
            <div className={s.dialog_addMessage_container}>
                <div className={s.dialog_addMessage_textarea}>
                    <textarea
                        onChange={onChangeHandler}
                        value={dialogs.newMessage}
                        className={s.dialog_textarea}/>
                </div>
                <button className={s.dialog_addMessage_buttonAdd} onClick={onClickHandler}>Add post</button>
            </div>
        </>

    )
}
