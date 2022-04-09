import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bgc-blur flex justify-center py-5 shadow-md bg-white bg-clip-padding bg-opacity-5'>
            <Link className='mx-6 font-semibold text-xl text-white' to="/">Home</Link>
            <Link className='mx-6 font-semibold text-xl text-white' to="/pro-features">Pro Features</Link>
            <Link className='mx-6 font-semibold text-xl text-white' to="/register">Register</Link>
            <Link className='mx-6 font-semibold text-xl text-white' to="/login">Login</Link>
        </nav>
    );
};

export default Header;