import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    const {name, id} = props;
    const path = `/dialogs/${id}`;
    const onClickHandler = (isActive: boolean) => {
        return isActive ? s.active : s.dialog
    }
    return (
        <div className={s.dialog + " " + s.active}>
            <img
                className={s.dialogItem_avatar}
                src="https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png"
             alt={"avatar user"}/>
            <NavLink className={({isActive}) => onClickHandler(isActive)} to={path}>{name}</NavLink>
        </div>
    )

}