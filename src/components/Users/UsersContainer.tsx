import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followTC, getUsersTC, nextPageTC,
    unFollowTC, UsersDataType, UsersType
} from "../../redux/users-reduser";
import UsersClassComponent from "./UsersClassComponent";
import {UsersLoader} from "../common/UsersLoader";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.usersPage.items);
    const pageSize = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage);
    const fetch = useSelector<AppRootStateType, UsersDataType>(state => state.usersPage)
    const toggleFollowing = useSelector<AppRootStateType, Array<any>>(state => state.usersPage.followingInProgress)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersTC(pageSize))
    }, [])
    const followHandler = (userId: number) => {
        dispatch(followTC(userId))
    }
    const unFollowHandler = (userId: number) => {
        dispatch(unFollowTC(userId))
    }
    const clickNextPage = (numberPage: number) => {
        dispatch(nextPageTC(numberPage, pageSize.pageSize))
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
                    toggleFollowing={toggleFollowing}
                    // setUsersHandler={setUsersHandler}
                />
            }

        </>

    );
};