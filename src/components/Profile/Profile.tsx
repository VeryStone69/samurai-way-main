import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt="content picture"/>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    );
};
