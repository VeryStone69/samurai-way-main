import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logoutCallback: () => void
}

export const Header: React.FC<HeaderPropsType> = ({...props}) => {
    console.log(props.isAuth)
    const onclickHandler = () => {
        props.logoutCallback()
    }
    return (
        <>
            <header className={s.header}>

                <img src="https://img.freepik.com/free-icon/diamond_318-195445.jpg?size=626&ext=jpg" alt="logo"/>
                <span className={s.headerTitle}>Social Network</span>
                <div className={s.loginBlock}>
                    <NavLink to={"/login"}>{props.isAuth ?
                        <div>{props.login}
                            <button onClick={onclickHandler}>Logout</button>
                        </div> :
                        <div>Login</div>
                    }</NavLink>
                </div>

            </header>

        </>

    )
}