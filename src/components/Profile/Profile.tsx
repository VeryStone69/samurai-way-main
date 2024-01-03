import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useAppSelector} from "../../redux/redux-store";
import {profileDataSelector} from "./selectors/profile-selector";

type PropsType = {
    isOwner:boolean
}

export const Profile = (props: PropsType) => {
    const profileData=useAppSelector(profileDataSelector)
    return (
        <div>
            <ProfileInfo profile={profileData} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    );
};
