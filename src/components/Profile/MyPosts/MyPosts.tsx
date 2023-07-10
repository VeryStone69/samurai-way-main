import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you"} feedback={10}/>
                <Post message={"It's my second post"} feedback={20}/>
                <Post message={"Number three"} feedback={30}/>
            </div>
        </div>
    )
}