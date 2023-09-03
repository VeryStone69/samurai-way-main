import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, TasksStateType, updateNewPostAC} from "../../../redux/profile-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";


export const MyPosts = () => {

    const profile = useSelector<AppRootStateType, TasksStateType>(state => state.profile)
    const dispatch = useDispatch();

    let postsElement = profile.posts.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })

    const onClickHandler = () => {
        if (profile.newPostsText) {
            dispatch(addPostAC())
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const action = updateNewPostAC(e.currentTarget.value);
        dispatch(action)
    }


    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div className={s.myPostTextareaButton}>
                <div className={s.myPostTextarea}>
                    <textarea
                        value={profile.newPostsText}
                        onChange={onChangeHandler}/>
                </div>
                <button className={s.myPostButton} onClick={onClickHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}