import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {useDispatch} from "react-redux";
import {useParams,} from "react-router-dom";
import {getProfileDataTC} from "../../redux/users-reduser";


export const ProfileContainer = () => {
    let params = useParams();
    let userId = params.userId;

    const dispatch = useDispatch()
    useEffect(() => {
        if (!params.userId) {
            userId = "2"
        }
        dispatch(getProfileDataTC(userId))
    }, [])

    return <Profile/>
}
