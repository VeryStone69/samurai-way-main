import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams,} from "react-router-dom";
import {getProfileDataTC} from "../../redux/users-reduser";
import {AppRootStateType} from "../../redux/redux-store";
import {getProfileStatusTC} from "../../redux/profile-reduser";


export const ProfileContainer = () => {
    let params = useParams();
    let userId = params.userId;
    const authorizedUserId = useSelector<AppRootStateType,any>(state => state.profile.profile?.userId)
console.log(params)
    const dispatch = useDispatch()
    const isAuth = useSelector<AppRootStateType,boolean>(state => state.auth.isAuth)

    useEffect(() => {
        if (!params.userId) {
            if (!authorizedUserId !== undefined) {
                userId = authorizedUserId
            }
        }
        dispatch(getProfileDataTC(userId))
        dispatch(getProfileStatusTC(userId))
    }, [])

    return  isAuth? <Profile/>:<Navigate to={"/login"}/>
}

