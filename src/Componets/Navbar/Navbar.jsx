import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-[#212121] -mt-3 text-white ">
    <ul className="flex w-full justify-center text-[1.2vw] gap-[5vw]">
      <li className='btn'>
        <Link to="/">Home</Link>
      </li>
      
      <li  className='btn'>
        <Link to="/Projects">Projects</Link>
      </li>
      <li  className='btn'>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar