import React, {ChangeEvent, FC} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../App";
import {DispatchACType} from "../../../redux/state";

type MyPostsPropsType = {
    postData: PostDataType[]
    newPostText:string
    dispatch: (action:DispatchACType)=>void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {postData,newPostText,dispatch} = props;

    let postsElement = postData.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })

    const onClickHandler=()=>{
        if (newPostText) {
            dispatch({type:"ADD-POST"})
        }
    }
    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        dispatch({type:"UPDATE-NEW-TEXT",newText:e.currentTarget.value})
    }


    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div className={s.myPostTextareaButton}>
                <div className={s.myPostTextarea}>
                    <textarea
                        value={newPostText}
                        onChange={onChangeHandler}/>
                </div>
                <button className={s.myPostButton} onClick={onClickHandler}  >Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}