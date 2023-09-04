import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {TasksStateType} from "../../../redux/profile-reduser";


type MyPostsPropsType = {
    profile: TasksStateType
    addPost: ()=>void
    updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>)=>void
}

export const MyPosts = (props:MyPostsPropsType) => {
    const {profile,addPost,updateNewPost}=props


    let postsElement = profile.posts.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })

    const onClickHandler = () => {
        if (profile.newPostsText) {
            addPost()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPost(e)
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