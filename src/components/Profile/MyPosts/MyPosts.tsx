import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postData = [
        {id: 1, message:"Hi, how are you", likesCount:12},
        {id: 2, message:"It's my second post",likesCount:15},
        {id: 3, message:"Number three",likesCount:99},
        {id: 4, message:"Yo",likesCount:1},
        {id: 5, message:"Yo",likesCount:2},
        {id: 6, message:"Yo",likesCount:3},
    ]
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
                <Post message={postData[0].message} feedback={postData[0].likesCount}/>
                <Post message={postData[1].message} feedback={postData[1].likesCount}/>
                <Post message={postData[2].message} feedback={postData[2].likesCount}/>
            </div>
        </div>
    )
}