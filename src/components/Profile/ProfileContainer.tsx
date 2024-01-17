import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {getProfileDataTC} from "../../redux/users-reducer";
import {useAppSelector} from "../../redux/redux-store";
import {getProfileStatusTC} from "../../redux/profile-reducer";
import {isAuthSelector} from "./selectors/profileContainer-selector";


export const ProfileContainer = () => {
    let params = useParams();
    let userId = Number(params.userId)
    let userIdFromLocal = Number(localStorage.getItem('userId'));

    const isAuth = useAppSelector(isAuthSelector)
    const dispatch = useDispatch()
 console.log(!userId)
    useEffect(() => {
        if (!userId) {
            userId = userIdFromLocal
        }
        dispatch(getProfileDataTC(userId));
        dispatch(getProfileStatusTC(userId));

    }, [isAuth, userId, userIdFromLocal])
    return isAuth ? <Profile isOwner={!userId}/> : <Navigate to={"/login"}/>
}

