import React, {useEffect} from 'react';
// import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersDataType,
    UsersType
} from "../../redux/users-reduser";
import axios from "axios";
import UsersClassComponent from "./UsersClassComponent";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.items);
    const pageSize = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageSize.totalUsersCount}&count=${pageSize.pageSize}`)
            .then((res) => {
                dispatch(setUsersAC(res.data))
                dispatch(setTotalUsersCountAC(res.data.totalCount))
            })
    }, [])
    const followHandler = (id: number) => {
        dispatch(followAC(id))
    }
    const unFollowHandler = (id: number) => {
        dispatch(unFollowAC(id))
    }
    const clickNextPage = (numberPage: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${pageSize.pageSize}`)
            .then((res) => {
                dispatch(setUsersAC(res.data))
            })
        dispatch(setCurrentPageAC(numberPage))
    }


    return (
        <>
            {/*<Users*/}
            {/*    users={users}*/}
            {/*    followHandler={followHandler}*/}
            {/*    unFollowHandler={unFollowHandler}*/}
            {/*    // setUsersHandler={setUsersHandler}*/}
            {/*/>*/}
            <UsersClassComponent
                users={users}
                totalUsersCount={pageSize.totalUsersCount}
                pageSize={pageSize.pageSize}
                currentPage={pageSize.currentPage}
                followHandler={followHandler}
                unFollowHandler={unFollowHandler}
                clickNextPage={clickNextPage}
                // setUsersHandler={setUsersHandler}
            />
        </>

    );
};