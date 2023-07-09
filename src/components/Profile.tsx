import React from 'react';

export const Profile = () => {
    return (
        <div className={"content"}>
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
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>
            </div>
        </div>
    );
};
