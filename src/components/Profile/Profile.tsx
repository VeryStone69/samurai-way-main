import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";

export type ProfilePropsType = {
    postData: PostDataType[]
    addPost:(postMessage:string)=>void
}

export const Profile = (props: ProfilePropsType) => {
    const{postData, addPost}=props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData} addPost={addPost}/>
        </div>
    );
};
