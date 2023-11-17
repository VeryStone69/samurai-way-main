import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/redux-store";
import {
    followTC, getUsersTC, nextPageTC,
    unFollowTC
} from "../../redux/users-reduser";
import UsersClassComponent from "./UsersClassComponent";
import {UsersLoader} from "../common/UsersLoader";
import {
    fetchSelector,
    pageSizeSelector,
    toggleFollowingSelector,
    usersSelector
} from "./selectors/usersContainer-selector";

export const UsersContainer = () => {
    const users = useAppSelector(usersSelector);
    const pageSize = useAppSelector(pageSizeSelector);
    const fetch = useAppSelector(fetchSelector);
    const toggleFollowing = useAppSelector(toggleFollowingSelector);
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
                />
            }

        </>

    );
};