import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string|null
    isAuth:boolean
}

export const Header:React.FC<HeaderPropsType> = ({...props}) => {

    return (
        <>
            <header className={s.header}>

                <img src="https://img.freepik.com/free-icon/diamond_318-195445.jpg?size=626&ext=jpg" alt="logo"/>
                <span className={s.headerTitle}>Social Network</span>
                <div className={s.loginBlock}>
                    <NavLink to={"/login"}>{props.isAuth?props.login:<div>ZALUPA</div>}</NavLink>
                </div>

            </header>

        </>

    )
}