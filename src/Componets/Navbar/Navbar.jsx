import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="bg-[#212121] py-4 text-white ">
    <ul className="flex  w-full font-mono px-[20vw] justify-between text-[1.2vw] gap-[5vw]">
      <li>
        <Link to="/">Home</Link>
      </li>
      
      <li  >
        <Link to="/Projects">Projects</Link>
      </li>
      <li  >
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar