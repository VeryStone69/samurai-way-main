import React, {useRef} from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../App";
//
type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    updateNewMessage:(newMessageText:string)=>void
    newMessage:string
    addNewMessage:()=>void
}


export const Dialogs = (props: DialogsPropsType) => {
    const { dialogsData,
            messagesData,
            updateNewMessage,newMessage,addNewMessage} =props
    let dialogsElement = dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = messagesData.map(m => {
        return <Message messageText={m.message} key={m.id}/>
    })
    let newMessageEl = useRef<HTMLTextAreaElement>(null)

    function onClickHandler() {
        addNewMessage()
    }
    const onChangeHandler = ()=>{
        if(newMessageEl.current) {
            updateNewMessage(newMessageEl.current.value)
        }
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
                    <textarea ref={newMessageEl} onChange={onChangeHandler} value={newMessage} className={s.dialog_textarea} />
                </div>
                <button className={s.dialog_addMessage_buttonAdd} onClick={onClickHandler} >Add post</button>
            </div>
        </>

    )
}
