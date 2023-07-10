import React from 'react';
import s from "./Post.module.css";

export const Post = () => {
    return (
        <>
            <div className={s.item}>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
                Something
            </div>
            <span>Like</span>
            <span>Dislike</span>
        </>
    );
};

