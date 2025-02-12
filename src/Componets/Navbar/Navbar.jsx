import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-[#212121] py-4 text-white ">
    <ul className="flex  w-full font-mono px-[20vw] justify-between text-[1.2vw] gap-[5vw]">
      <li className='nav_item px-1 '>
        <Link to="/">Home</Link>
        <div className="hr"></div>
      </li>
      
      <li  className='nav_item'>
        <Link to="/Projects">Projects</Link>
        <div className="hr"></div>
      </li >
      <li  className='nav_item' >
        <Link to="/contact">Contact</Link>
        <div className="hr"></div>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar