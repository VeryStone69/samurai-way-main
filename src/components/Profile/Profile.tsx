import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";
import {DispatchACType} from "../../redux/state";

export type ProfilePropsType = {
    postData: PostDataType[]
    newPostTextProps:string
    dispatch: (action: DispatchACType) => void
}

export const Profile = (props: ProfilePropsType) => {
    const{postData, newPostTextProps,dispatch}=props
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={postData}
                     newPostText={newPostTextProps}
                     dispatch={dispatch}
            />
        </div>
    );
};
