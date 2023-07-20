import React from 'react';
import s from  './ProfileInfo.module.css'
export const ProfileInfo = () => {
    return (
        <div>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt="content picture"/>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>
    );
};
