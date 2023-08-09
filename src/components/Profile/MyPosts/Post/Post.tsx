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
                    src="https://9obzor.ru/wp-content/uploads/2023/02/obrabotka-foto-neyroseti11.jpg"
                    alt=""/>
                {props.message}
            </div>
            <span>Like {props.feedback}</span>

        </>
    );
};

