import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

// type DialogsDataType = {
//     id: number,
//     name: string
// }
type DialogPropsType = {
    name: string
    id: number
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

export const Dialogs= () => {
    let dialogsData = [
        {id: 1, name:"Alex"},
        {id: 2, name:"Dima"},
        {id: 3, name:"Poma"},
        {id: 4, name:"Pasha"},
        {id: 5, name:"Igor"},
        {id: 6, name:"Andrey"},
    ]
    let messagesData = [
        {id: 1, message:"Hi"},
        {id: 2, message:"How are you?"},
        {id: 3, message:"Yo"},
        {id: 4, message:"Yo"},
        {id: 5, message:"Yo"},
        {id: 6, message:"Yo"},
    ]

    return (
        <div className={s.wrapperDialogs}>
            <div className={s.dialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[0].id}/>
            </div>
            <div className={s.messages}>
                <Message messageText={messagesData[0].message}/>
                <Message messageText={messagesData[1].message}/>
                <Message messageText={messagesData[2].message}/>
            </div>
        </div>


    )
}
