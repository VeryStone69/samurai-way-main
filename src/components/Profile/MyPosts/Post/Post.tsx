import React from 'react';
import s from "./Post.module.css";

type PropsPostType = {
    message?: string
    feedback: number
}
export const Post = (props: PropsPostType) => {
    return (
        <>
            <div className={s.item}>
                <img
                    src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png"
                    alt=""/>
                {props.message}
            </div>
            <span>Like {props.feedback}</span>

        </>
    );
};

