import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams,} from "react-router-dom";
import {getProfileDataTC} from "../../redux/users-reduser";
import {AppRootStateType} from "../../redux/redux-store";


export const ProfileContainer = () => {
    let params = useParams();
    let userId = params.userId;
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType,boolean>(state => state.auth.isAuth)
    useEffect(() => {
        if (!params.userId) {
            userId = "2"
        }
        dispatch(getProfileDataTC(userId))
    }, [])
    return  isAuth? <Profile/>:<Navigate to={"/login"}/>
}

