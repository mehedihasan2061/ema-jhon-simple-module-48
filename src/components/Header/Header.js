import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;