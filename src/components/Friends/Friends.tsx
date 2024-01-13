import React, {useEffect, useState} from "react";
import s from "./Friends.module.css"
import {AppRootStateType, useAppSelector} from "../../redux/redux-store";
import {friendsSelector} from "./selectors/friends-selectors";
import {getUsersTC} from "../../redux/users-reducer";
import {getFriendsTC} from "../../redux/friends-reducer";
import {useDispatch} from "react-redux";
import {pageSizeSelector} from "../Users/selectors/usersContainer-selector";
import {noAvatarLink} from "./img/noAvatar";
import {NavLink} from "react-router-dom";


export const Friends = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    // const friends = useAppSelector(friendsSelector)
    const pageSize = useAppSelector(pageSizeSelector);
    const friendsSelector = ((state:AppRootStateType) => state.friends.items);
    const friends = useAppSelector(friendsSelector)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFriendsTC(pageSize))
    }, [])
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div className={s.friendsContainer}>
            <a onClick={onClickHandler} href="#">Friends</a>
            {collapsed ? <ul className={s.ulContainer}>
                {friends.map(friend => {
                    return (
                        <li key={friend.id}>
                            <NavLink to={`/profile/${friend.id}`}>
                            <img className={s.friendAvatar} src={friend.photos.small !== null ? friend.photos.small : noAvatarLink} alt={"friend photo"}/>
                            <div>{friend.name}</div>
                            </NavLink>
                        </li>
                    )
                })}
            </ul> : ""}
        </div>
    )
}