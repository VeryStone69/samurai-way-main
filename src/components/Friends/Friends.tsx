import React, {useState} from "react";
import {FriendsDataType} from "../../App";
import s from "./Friends.module.css"


type FriendsPropsType = {
friends:FriendsDataType[]
}

export const Friends = (props:FriendsPropsType) =>{
    const [collapsed,setCollapsed]=useState<boolean>(false)
    const onClickHandler = ()=>{
        setCollapsed(!collapsed)
    }
    return(
        <div className={s.friendsContainer}>
            <a  onClick={onClickHandler} href="#">Friends</a>
            {collapsed ? <ul className={s.ulContainer}>
                {props.friends.map(friend => {
                    return(
                        <li key={friend.id} >
                            <img src={friend.img} className={s.friendAvatar}/>
                            <a href="#">{friend.name}</a>
                        </li>
                    )
                })}
            </ul> : ""}
        </div>


    )
}