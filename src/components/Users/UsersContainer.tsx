import React, {useEffect} from 'react';
import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reduser";
import axios from "axios";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.items);
    const dispatch = useDispatch();

useEffect(()=>{
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res)=>{
            dispatch(setUsersAC(res.data))
        })
},[])
    const followHandler = (id: number) => {
        dispatch(followAC(id))
    }
    const unFollowHandler = (id: number) => {
        dispatch(unFollowAC(id))
    }

    return (
        <>
            <Users
                users={users}
                followHandler={followHandler}
                unFollowHandler={unFollowHandler}
                // setUsersHandler={setUsersHandler}
            />
        </>

    );
};