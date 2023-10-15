import React, {useEffect} from 'react';
// import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersDataType,
    UsersType
} from "../../redux/users-reduser";
import axios from "axios";
import UsersClassComponent from "./UsersClassComponent";
import {UsersLoader} from "../common/UsersLoader";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.items);
    const pageSize = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage);
    const fetch = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageSize.totalUsersCount}&count=${pageSize.pageSize}`)
            .then((res) => {
                // dispatch(setUsersAC(res.data)) // эти диспатчи отключены, пока отрабатывает clickNextPage
                clickNextPage(pageSize.currentPage)
                dispatch(setTotalUsersCountAC(res.data.totalCount))
                // dispatch(setFetchingAC(false))
            })
    },[])
    const followHandler = (id: number) => {
        dispatch(followAC(id))
    }
    const unFollowHandler = (id: number) => {
        dispatch(unFollowAC(id))
    }
    const clickNextPage = (numberPage: number) => {
        dispatch(setFetchingAC(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${pageSize.pageSize}`)
            .then((res) => {
                dispatch(setUsersAC(res.data))
                dispatch(setFetchingAC(false))
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
            {fetch.isFetching ?
                <UsersLoader/> :
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
            }

        </>

    );
};