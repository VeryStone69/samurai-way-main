import React from 'react';
import s from "./Profile.module.css";
export const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt="content picture"/>
            <div>
                ava + discription
            </div>
            <div>
                my posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                    <div className={s.item}>post3</div>
                </div>
            </div>
        </div>
    );
};
