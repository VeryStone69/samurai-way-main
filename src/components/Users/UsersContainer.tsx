import React, {useEffect} from 'react';
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
import UsersClassComponent from "./UsersClassComponent";
import {UsersLoader} from "../common/UsersLoader";
import {usersAPI} from "../../api/api";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.items);
    const pageSize = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage);
    const fetch = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFetchingAC(true))
        usersAPI.getUsers(pageSize.totalUsersCount,pageSize.pageSize)
            .then((data) => {
                // dispatch(setUsersAC(res.data)) // эти диспатчи отключены, пока отрабатывает clickNextPage
                clickNextPage(pageSize.currentPage)
                dispatch(setTotalUsersCountAC(data.totalCount))
                // dispatch(setFetchingAC(false))
            })
    },[])
    const followHandler = (userId: number) => {
        usersAPI.followUser(userId)
            .then(res=>{
                if(res.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
            })
    }
    const unFollowHandler = (userId: number) => {
        usersAPI.unFollowUser(userId)
            .then(res=>{
                if (res.data.resultCode === 0) {
                    dispatch(unFollowAC(userId))
                }
            })

    }
    const clickNextPage = (numberPage: number) => {
        dispatch(setFetchingAC(true))
            usersAPI.getUsers(numberPage,pageSize.pageSize)
            .then((data) => {
                dispatch(setUsersAC(data))
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