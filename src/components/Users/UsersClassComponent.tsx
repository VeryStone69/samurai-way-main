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

class UsersClassComponent extends React.Component<PropsType> {

    render() {
        return <div className={s.main_container_users}>
            <Paginator totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}/>
            {this.props.users.map((el: UsersType) => {
                return <div key={el.id} className={s.userContainer}>
                    <UserCard userInfo={el}/>
                </div>

            })}
        </div>
    }
}

export default UsersClassComponent;