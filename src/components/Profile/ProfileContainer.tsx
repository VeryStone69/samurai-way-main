import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reduser";
import {useDispatch} from "react-redux";
import {useParams,} from "react-router-dom";


export const ProfileContainer = () => {
    let params = useParams();
    let userId = params.userId;
    const dispatch = useDispatch()
    useEffect(() => {
        if (!params.userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                dispatch(setUserProfile(res.data))
            })
    }, [])

    return <Profile/>
}
