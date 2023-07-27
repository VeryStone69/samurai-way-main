import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
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