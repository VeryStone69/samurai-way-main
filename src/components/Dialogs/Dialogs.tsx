import React, {ChangeEvent} from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPage} from "../../App";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/diallogs-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";



export const Dialogs = () => {

const dialogs = useSelector<AppRootStateType,DialogsPage>(state=>state.dialogs)
const dispatch = useDispatch();



    let dialogsElement = dialogs.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = dialogs.message.map(m => {
        return <Message messageText={m.message} key={m.id}/>
    })

    function onClickHandler() {
        if(dialogs.newMessage){
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
                        value={dialogs.newMessage}
                        className={s.dialog_textarea} />
                </div>
                <button className={s.dialog_addMessage_buttonAdd} onClick={onClickHandler} >Add post</button>
            </div>
        </>

    )
}
