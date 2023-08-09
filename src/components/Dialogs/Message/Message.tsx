import React, {FC} from "react"
import s from "../Dialogs.module.css"

export type MessagePropsType = {
    messageText: string
}

export const Message: FC<MessagePropsType> = (props) => {
    const {messageText} = props
    return (
        <div className={s.message}>{messageText}</div>
    )
}