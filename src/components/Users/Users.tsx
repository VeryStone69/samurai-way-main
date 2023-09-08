import React, {FC} from 'react';
import {UsersType} from "../../redux/users-reduser";
import s from "./Users.module.css"

type UsersPropsType = {
    users: UsersType[]
    followHandler: (userId: string) => void
    unFollowHandler: (userId: string) => void
}

export const Users: FC<UsersPropsType> = (props) => {
    return (
        <div className={s.main_container_users}>
            {props.users.map(el => {
                return (<div key={el.id} className={s.userContainer}>
                        <span className={s.container_img}>
                            <div >
                                <img src={el.photoURL} alt={"photo user"} className={s.userPhoto}/>
                            </div>
                        <div>
                            {el.followed
                                ?<button onClick={()=>{props.unFollowHandler(el.id)}}>Unfollow</button>
                                :<button onClick={()=>{props.followHandler(el.id)}}>Follow</button>
                            }
                        </div>
                            </span>
                        <span className={s.nameLocation_Container}>
                            <span className={s.userContainer_name}>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                            </span>
                            <span className={s.userContainer_location}>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </span>
                        </span>
                    </div>


                )
            })}
        </div>
    );
};