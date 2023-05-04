import React from 'react';
import './Header.css'
import logo from '../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/order">order</a>
                <a href="/contact">contact</a>
            </div>
        </nav>
    );
};

export default Header;