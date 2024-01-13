import React, {useEffect, useState} from "react";
import s from "./Friends.module.css"
import {useAppSelector} from "../../../redux/redux-store";
import {friendsSelector} from "../selectors/friends-selectors";
import {getFriendsTC} from "../../../redux/friends-reducer";
import {useDispatch} from "react-redux";
import {pageSizeSelector} from "../../Users/selectors/usersContainer-selector";
import {NavLink} from "react-router-dom";
import noAvatarImg from "../../../assets/images/noImg.webp"


export const Friends = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const pageSize = useAppSelector(pageSizeSelector);
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
                                <img className={s.friendAvatar}
                                     src={friend.photos.small !== null ? friend.photos.small : noAvatarImg}
                                     alt={"friend photo"}/>
                                <div>{friend.name}</div>
                            </NavLink>
                        </li>
                    )
                })}
            </ul> : ""}
        </div>
    )
}