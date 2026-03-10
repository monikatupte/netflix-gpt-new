import React from 'react'
import LOGO from '../images/netflix-logo.svg';

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img src={LOGO} alt="Netflix Logo" className='w-40' />
    </div>
  )
}

export default Header