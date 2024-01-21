import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/redux-store";
import {getUsersTC} from "../../redux/users-reducer";
import {UsersLoader} from "../common/UsersLoader";
import {
    fetchSelector,
    pageSizeSelector,
    usersSelector
} from "./selectors/usersContainer-selector";
import Users from "./UsersClassComponent";

export const UsersContainer = () => {
    const users = useAppSelector(usersSelector);
    const pageSize = useAppSelector(pageSizeSelector);
    const isFetching = useAppSelector(fetchSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersTC(pageSize))
    }, [])

    return (
        <>
            {isFetching ?
                <UsersLoader/> :
                <Users
                    users={users}
                    totalUsersCount={pageSize.totalUsersCount}
                    pageSize={pageSize.pageSize}
                    currentPage={pageSize.currentPage}
                />
            }

        </>

    );
};