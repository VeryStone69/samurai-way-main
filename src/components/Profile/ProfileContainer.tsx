import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {getProfileDataTC} from "../../redux/users-reducer";
import {useAppSelector} from "../../redux/redux-store";
import {getProfileStatusTC} from "../../redux/profile-reducer";
import {authorizedUserIdSelector, isAuthSelector} from "./selectors/profileContainer-selector";


export const ProfileContainer = () => {
    let params = useParams();
    let userId = Number(params.userId);
    const authorizedUserId: any = useAppSelector(authorizedUserIdSelector)
    const isAuth = useAppSelector(isAuthSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!params.userId) {
            if (!authorizedUserId !== undefined) {
                userId = authorizedUserId
            }
        }
        dispatch(getProfileDataTC(userId))
        dispatch(getProfileStatusTC(userId))
    }, [isAuth,params,authorizedUserId])
    return isAuth ? <Profile isOwner = {!userId}/> : <Navigate to={"/login"}/>
}


