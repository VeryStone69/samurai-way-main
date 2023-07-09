import React from 'react';
import './App.css';

export const App =() => {
    return (
        <div>
           <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Messages</a>
        </div>
    )
}

const Technologies = () => {
    return (
        <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>JS</li>
            <li>REACT</li>
            <li>GIT</li>
        </ul>
    )
}
