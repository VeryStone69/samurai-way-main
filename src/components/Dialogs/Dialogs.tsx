import React, {ChangeEvent} from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsDataType, MessagesDataType} from "../../App";
import {DispatchACType} from "../../redux/state";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/diallogs-reduser";
//
type DialogsPropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessage:string
    dispatch: (action: DispatchACType) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    const { dialogsData,
            messagesData,newMessage,dispatch} =props
    let dialogsElement = dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = messagesData.map(m => {
        return <Message messageText={m.message} key={m.id}/>
    })

    function onClickHandler() {
        if(newMessage){
            dispatch(addNewMessageAC())
        }
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        const action = updateNewMessageAC(e.currentTarget.value)
        dispatch(action)
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
                        value={newMessage}
                        className={s.dialog_textarea} />
                </div>
                <button className={s.dialog_addMessage_buttonAdd} onClick={onClickHandler} >Add post</button>
            </div>
        </>

    )
}
