import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reduser";
import {useDispatch} from "react-redux";

export const ProfileContainer = ()=>{
const dispatch = useDispatch()
    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/0`)
            .then((res) => {
                dispatch(setUserProfile(res.data))
            })
    },[])

        return <Profile/>
}