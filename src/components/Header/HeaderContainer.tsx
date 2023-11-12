import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/users-reduser";
import {logoutUserTC} from "../../redux/auth-reducer";

export const HeaderContainer = () => {
    const login = useSelector<AppRootStateType, string | null>(state => state.auth.data.login)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    const logoutCallback = () => {
        dispatch(logoutUserTC())
    }
    return <Header login={login} isAuth={isAuth} logoutCallback={logoutCallback}/>

};
