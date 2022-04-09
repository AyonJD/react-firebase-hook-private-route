import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../Hooks/useInput';

const Login = () => {
    const {getEmail, getPassword} = useInput()
    return (
        <div className='w-1/3 mx-auto mt-16 bg-white p-10 bg-opacity-10 bgc-blur bg-clip-padding rounded-lg'>
            <h1 className='text-white text-center font-semibold text-2xl mb-10'>Please Log In to continue...</h1>
            <form>
                <div className="relative z-0 mb-6 w-full group">
                    <input onBlur={getEmail} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-600 focus:outline-none focus:ring-0 focus:border-pink-500 peer" placeholder=" " required="" />
                    <label htmlFor="floating_email" className="absolute text-sm text-gray-100 dark:text-pink-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onBlur={getPassword} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-600 focus:outline-none focus:ring-0 focus:border-pink-500 peer" placeholder=" " required="" />
                    <label htmlFor="floating_password" className="absolute text-sm text-gray-100 dark:text-pink-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-300 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                   <p className='text-white'>Don't have an account? <span className='underline ml-5'><Link to="/register">Join Now</Link></span></p>
                </div>
                <div className="text-center">
                    <button type="submit" className="text-white bg-[#F700CC] hover:bg-[#FF0087] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
                </div>
            </form>

        </div>
    );
};

export default Login;