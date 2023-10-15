import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {TasksStateType} from "../../redux/profile-reduser";


export const Profile = () => {
    const profileData=useSelector<AppRootStateType,TasksStateType >(state=>state.profile)
    return (
        <div>
            <ProfileInfo profile={profileData}/>
            <MyPostsContainer/>
        </div>
    );
};
