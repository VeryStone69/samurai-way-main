import React from "react";
import {addPostAC, TasksStateType} from "../../../redux/profile-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = () => {

    const profile = useSelector<AppRootStateType, TasksStateType>(state => state.profile)
    const dispatch = useDispatch();

    const addPost = (newPost: string) => {
        dispatch(addPostAC(newPost))
    }


    return (<MyPosts profile={profile} addPost={addPost}/>)
}