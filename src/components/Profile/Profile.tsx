import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";

export type ProfilePropsType = {
    postData: PostDataType[]
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    );
};
