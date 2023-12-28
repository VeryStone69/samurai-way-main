import React, {useState} from "react";
import s from "./Friends.module.css"
import {useAppSelector} from "../../redux/redux-store";
import {friendsSelector} from "./selectors/friends-selectors";


export const Friends = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const friends = useAppSelector(friendsSelector)

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
                            <img src={friend.img} className={s.friendAvatar} alt={"user avatar"}/>
                            <a href="#">{friend.name}</a>
                        </li>
                    )
                })}
            </ul> : ""}
        </div>
    )
}