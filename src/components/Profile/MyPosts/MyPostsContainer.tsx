import React from "react";
import {addPostAC} from "../../../redux/profile-reduser";
import {useDispatch} from "react-redux";
import { useAppSelector} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";
import {profileSelector} from "./selectors/myPostContainer-selectors";


export const MyPostsContainer = () => {

    const profile = useAppSelector(profileSelector)
    const dispatch = useDispatch();

    const addPost = (newPost: string) => {
        dispatch(addPostAC(newPost))
    }


    return (<MyPosts profile={profile} addPost={addPost}/>)
}