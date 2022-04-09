import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
            console.log('sign out successful');
        })
    }
    return (
        <nav className='bgc-blur flex justify-center py-5 shadow-md bg-white bg-clip-padding bg-opacity-5'>
            <Link className='mx-6 font-semibold text-xl text-white' to="/">Home</Link>
            <Link className='mx-6 font-semibold text-xl text-white' to="/pro-features">Pro Features</Link>
            <Link className='mx-6 font-semibold text-xl text-white' to="/register">Register</Link>
            {
                user ? <button onClick={handleSignOut} className='mx-6 font-semibold text-xl text-white'>Sign Out</button> :
                <Link className='mx-6 font-semibold text-xl text-white' to="/login">Login</Link>
            }
        </nav>
    );
};

export default Header;