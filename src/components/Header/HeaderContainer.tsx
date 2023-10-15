import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reduser";
import {AppRootStateType} from "../../redux/redux-store";

export const HeaderContainer = () => {
    const login = useSelector<AppRootStateType,string|null>(state => state.auth.data.login)
    const isAuth = useSelector<AppRootStateType,boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserDataAC(res.data))
                }


            })
    }, [])

    return <Header login = {login} isAuth={isAuth}/>

};
