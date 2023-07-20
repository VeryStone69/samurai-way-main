import React from "react"
import s from "./Dialogs.module.css"

type DialogsPropsType = {}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <div className={s.wrapperDialogs}>
            <div className={s.dialogs}>
                <div className={s.dialog + " " + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Alex1
                </div>
                <div className={s.dialog}>
                    Alex2
                </div>
                <div className={s.dialog}>
                    Alex2
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Message1</div>
                <div className={s.message}>Message2</div>
                <div className={s.message}>Message3</div>
            </div>
        </div>


    )
}