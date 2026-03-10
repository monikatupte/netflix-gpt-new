import React from 'react'
import { useState } from 'react';
import Header from './Header'
import Hero_BG from "../images/hero_bg.jpg";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={Hero_BG} alt="Netflix Hero Background" className='' />
        </div>
        <form className='w-3/12 absolute p-12 text-left bg-black my-36 mx-auto right-0 left-0 text-white rounded- bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            {!isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700' /> }
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
            <button type="button" className="p-4 my-4 bg-red-700 w-full cursor-pointer">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to NetFlix ? Sign Up Now' : 'Already registerd ! Sign In Now'}</p>
        </form>
    </div>
  )
}

export default Login