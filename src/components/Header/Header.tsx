import React from "react";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>

            <img src="https://img.freepik.com/free-icon/diamond_318-195445.jpg?size=626&ext=jpg" alt="logo"/>
            <span className={s.headerTitle}>Social Network</span>
        </header>
    )
}