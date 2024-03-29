import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/ui/Friends";

export const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' className={({ isActive }) => (isActive ? s.active : s.item)}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' className={({ isActive }) => (isActive ? s.active : s.item)}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/users' className={({ isActive }) => (isActive ? s.active : s.item)}>Users</NavLink></div>
            <div className={s.item}><NavLink to='/news' className={({ isActive }) => (isActive ? s.active : s.item)}>News</NavLink></div>
            <div className={s.item}><NavLink to='/friends' className={({ isActive }) => (isActive ? s.active : s.item)}>Friends</NavLink></div>
        </nav>
    );
};

