import React from 'react';
import './App.css';


export const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <div>Header</div>
                <img src="https://img.freepik.com/free-icon/diamond_318-195445.jpg?size=626&ext=jpg" alt="logo"/>
            </header>
            <nav className={"nav"}>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
            </nav>
            <div className={"content"}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="content picture"/>
                <div>
                    ava + discription
                </div> <div>
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


        </div>

    )
}

