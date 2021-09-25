import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="navbar" >
                <a className="logo" href="/home">Logo</a>
                <div className="nav">
                    <a href="/home">Home</a>
                    <a href="/user">User</a>
                    <a href="/about">About</a>
                </div>
            </div>
            <div className="header-human-club">
                <h2>The Human Resources Club</h2>
                <p>Times can get tough and talking to someone who’s willing to listen can help . We are willing to listen.</p>
                <h4>Total Budget: 50000 Usd</h4>
            </div>
        </div>
    );
};

export default Header;