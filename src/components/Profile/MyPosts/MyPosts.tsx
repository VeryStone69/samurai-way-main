import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {Message} from "../../Dialogs/Dialogs";

export const MyPosts = () => {
    let postData = [
        {id: 1, message:"Hi, how are you", likesCount:12},
        {id: 2, message:"It's my second post",likesCount:15},
        {id: 3, message:"Number three",likesCount:99},
        {id: 4, message:"Yo4",likesCount:1},
        {id: 5, message:"Yo5",likesCount:2},
        {id: 6, message:"Yo6",likesCount:3},
    ]
    let postsElement = postData.map(p =>{
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