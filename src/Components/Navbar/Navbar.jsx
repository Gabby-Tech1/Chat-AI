import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/NoBackgroumdLogo.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-2 md:p-4 z-[100] absolute w-full'>
      <Link to='/'>
        <div className='flex items-center'>
          <img className='w-16' src={logo} alt="" />
          <h1 className='font-bold text-4xl cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text '>Chat AI</h1>
        </div>
      </Link>
          <div className='flex item-center gap-2'>
          <Link to='/login'>
            <button className='px-2 py-2 rounded font-semibold cursor-pointer text-white bg-gradient-to-r from-blue-500 to-red-500 md:text-xl'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='px-2 py-2 rounded font-semibold cursor-pointer text-white bg-gradient-to-l from-blue-500 to-red-500 md:text-xl'>Create Account</button>
          </Link>
        </div>

    </div>
  )
}

export default Navbar