import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const Profile = () => {
    let postData = [
        {id: 1, message:"Hi, how are you", likesCount:12},
        {id: 2, message:"It's my second post",likesCount:15},
        {id: 3, message:"Number three",likesCount:99},
        {id: 4, message:"Yo4",likesCount:1},
        {id: 5, message:"Yo5",likesCount:2},
        {id: 6, message:"Yo6",likesCount:3},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    );
};
