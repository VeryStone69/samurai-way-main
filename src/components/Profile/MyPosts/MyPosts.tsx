import React, { FC, useRef} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../App";

type MyPostsPropsType = {
    postData: PostDataType[]
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    let postsElement = props.postData.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })

    // let newPostElement:LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    const onClickHandler=()=>{
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }
    // const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    //
    // }


    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div className={s.myPostTextareaButton}>
                <div className={s.myPostTextarea}>
                    <textarea ref={newPostEl}/>
                </div>
                <button className={s.myPostButton} onClick={onClickHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}