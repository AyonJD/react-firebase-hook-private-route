import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-center main-nav h-[100vh]'>
            <Link className='mx-6 font-semibold text-xl' to="/register">Register</Link>
            <Link className='mx-6 font-semibold text-xl' to="/">Home</Link>
            <Link className='mx-6 font-semibold text-xl' to="/login">Login</Link>
        </nav>
    );
};

export default Header;