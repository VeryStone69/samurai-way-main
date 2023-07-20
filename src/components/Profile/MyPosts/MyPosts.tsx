import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message={"Hi, how are you"} feedback={10}/>
                <Post message={"It's my second post"} feedback={20}/>
                <Post message={"Number three"} feedback={30}/>
            </div>
        </div>
    )
}