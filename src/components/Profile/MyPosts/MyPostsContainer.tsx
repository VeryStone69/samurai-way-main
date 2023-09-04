import React, {ChangeEvent} from "react";
import {addPostAC, TasksStateType, updateNewPostAC} from "../../../redux/profile-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = () => {

    const profile = useSelector<AppRootStateType, TasksStateType>(state => state.profile)
    const dispatch = useDispatch();

    const addPost = () => {
        if (profile.newPostsText) {
            dispatch(addPostAC())
        }
    }
    const updateNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = updateNewPostAC(e.currentTarget.value);
        dispatch(action)
    }


    return (<MyPosts profile={profile} addPost={addPost} updateNewPost={updateNewPost}/>)
}