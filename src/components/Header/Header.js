import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/orders" >Orders</NavLink>
            <NavLink to="" >a</NavLink>
            <NavLink to="" >me</NavLink>

            <div>
                <h2>this is header</h2>
            </div>
        </nav>
    );
};

export default Header;