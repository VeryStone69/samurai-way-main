import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
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