import React, {useState} from "react";
import s from "./Friends.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {FriendsDataType} from "../../redux/friends-reduser";


export const Friends = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const friends = useSelector<AppRootStateType, FriendsDataType[]>(state => state.friends)

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
                            <img src={friend.img} className={s.friendAvatar}/>
                            <a href="#">{friend.name}</a>
                        </li>
                    )
                })}
            </ul> : ""}
        </div>


    )
}