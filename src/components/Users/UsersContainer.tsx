import React, {useEffect} from 'react';
import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersType} from "../../redux/users-reduser";
import {v1} from "uuid";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.users);
    const dispatch = useDispatch();

// useEffect(()=>{
//     dispatch(setUsersAC([
//
//     ]))
// },[])
    const followHandler = (id: string) => {
        dispatch(followAC(id))
    }
    const unFollowHandler = (id: string) => {
        dispatch(unFollowAC(id))
    }
    // const setUsersHandler = (user: UsersType[]) => {
    //
    // }

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