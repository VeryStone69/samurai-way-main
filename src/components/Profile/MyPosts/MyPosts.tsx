import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../index";

type MyPostsPropsType = {
    postData: PostDataType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.postData.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })
    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div className={s.myPostTextareaButton}>
                <div className={s.myPostTextarea}>
                    <textarea></textarea>
                </div>
                <button className={s.myPostButton}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}