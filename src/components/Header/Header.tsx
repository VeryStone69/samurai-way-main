import React from "react";
import s from "./Header.module.css";

export const Header = () => {
    return (
        <header className={s.header}>
            <div>Header</div>
            <img src="https://img.freepik.com/free-icon/diamond_318-195445.jpg?size=626&ext=jpg" alt="logo"/>
        </header>
    )
}