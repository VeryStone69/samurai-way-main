import React from "react"
import s from "../Dialogs.module.css"

export type MessagePropsType = {
    messageText: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    const {messageText} = props
    return (
        <div className={s.message}>{messageText}</div>
    )
}