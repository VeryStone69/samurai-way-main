import React, {FC, useRef} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../App";

type MyPostsPropsType = {
    postData: PostDataType[]
    addPost:()=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {postData,addPost,newPostText,updateNewPostText} = props;

    let postsElement = postData.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })

    // let newPostElement:LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const onClickHandler=()=>{
        if (newPostEl.current) {
            addPost()
        }
    }
    const onChangeHandler=()=>{
        if (newPostEl.current) {
            updateNewPostText(newPostEl.current.value)
        }
    }


    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div className={s.myPostTextareaButton}>
                <div className={s.myPostTextarea}>
                    <textarea ref={newPostEl} value={newPostText} onChange={onChangeHandler}/>
                </div>
                <button className={s.myPostButton} onClick={onClickHandler}  >Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}