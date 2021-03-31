import React from 'react';
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://raw.githubusercontent.com/Nathan-Andrade/Devflix/master/src/assets/img/logo.png" alt="DevFlix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Profile" />
                </a>
            </div>
        </header>
    );
}