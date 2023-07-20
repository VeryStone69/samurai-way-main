import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}
type DialogPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    messageText:string
}


export const Dialog: React.FC<DialogPropsType> = (props) => {
    const {name, id} = props;
    const path = `/dialogs/${id}`;
    const onClickHandler = (isActive: boolean) => {
        // function changes styles of NavLink
        return isActive ? s.active : s.dialog
    }
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink className={({isActive}) => onClickHandler(isActive)} to={path}>{name}</NavLink>
        </div>
    )

}

export const Message: React.FC<MessagePropsType> =(props) =>{
    const {messageText}=props
    return(
        <div className={s.message}>{messageText}</div>
    )
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={s.wrapperDialogs}>
            <div className={s.dialogs}>
                <Dialog name={"Alex1"} id={"1"}/>
                <Dialog name={"Alex2"} id={"2"}/>
                <Dialog name={"Alex3"} id={"3"}/>
                <Dialog name={"Alex4"} id={"4"}/>
            </div>
            <div className={s.messages}>
                <Message messageText={"Hello guys"}/>
                <Message messageText={"Hello girls"}/>
                <Message messageText={"How are you"}/>
            </div>
        </div>


    )
}
// Style for NavLink
// <NavLink className={({isActive}) => onClickHandler(isActive)} to={"/dialogs/2"}>Alex2</NavLink>