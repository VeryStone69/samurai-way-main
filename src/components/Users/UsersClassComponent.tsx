import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import {Paginator} from "./Paginator/ui/Paginator";
import {UserCard} from "./UserCard/UserCard";


type PropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

function Users(props: PropsType) {
    return <div className={s.main_container_users}>
        <Paginator totalItemCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}/>
        {props.users.map((el: UsersType) => {
            return <div key={el.id} className={s.userContainer}>
                <UserCard userInfo={el}/>
            </div>

        })}
    </div>
}

export default Users;