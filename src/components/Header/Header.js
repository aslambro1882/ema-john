import React from 'react';
import './Header.css';
import img from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className='img-logo'>
                <img src={img} alt="" />
            </div>
            <nav>
                <ul>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/manage">Manage Inventory here</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;