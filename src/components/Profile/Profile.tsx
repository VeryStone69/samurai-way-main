import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useAppSelector} from "../../redux/redux-store";
import {profileDataSelector} from "./selectors/profile-selector";


export const Profile = () => {
    const profileData=useAppSelector(profileDataSelector)
    return (
        <div>
            <ProfileInfo profile={profileData}/>
            <MyPostsContainer/>
        </div>
    );
};
