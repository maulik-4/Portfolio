import React, { useRef, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

// Robust Navbar navigation: track the latest navigation request (id + path).
// A single global listener will navigate to the latest requested path when the loader signals
// or when a short fallback timeout elapses. This avoids blocking clicks or requiring many attempts.
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // current request state: { id: number, path: string, timeoutId }
  const currentReq = useRef(null);

  useEffect(() => {
    const onLoaderReady = () => {
      const req = currentReq.current;
      if (!req) return;
      // clear fallback
      if (req.timeoutId) clearTimeout(req.timeoutId);
      // perform navigation to latest requested path
      navigate(req.path);
      window.dispatchEvent(new CustomEvent('app:navigated', { detail: { path: req.path } }));
      // clear request
      currentReq.current = null;
    };

    window.addEventListener('app:loader-ready', onLoaderReady);
    return () => window.removeEventListener('app:loader-ready', onLoaderReady);
  }, [navigate]);

  const handleNav = (e, path) => {
    e.preventDefault();
    // If it's the same path, still trigger loader flow (user might want to refresh animations)
    // Create a new request id and store the latest path
    const id = Date.now();
    // clear any previous fallback
    if (currentReq.current && currentReq.current.timeoutId) {
      clearTimeout(currentReq.current.timeoutId);
    }
    currentReq.current = { id, path, timeoutId: null };

    // inform loader about navigation request
    window.dispatchEvent(new CustomEvent('app:navigate-request', { detail: { path } }));

    // fallback: if loader doesn't respond within 2200ms, navigate anyway to the latest request
    const timeoutId = setTimeout(() => {
      const req = currentReq.current;
      if (!req || req.id !== id) return; // if superseded by newer request ignore
      navigate(req.path);
      window.dispatchEvent(new CustomEvent('app:navigated', { detail: { path: req.path } }));
      currentReq.current = null;
    }, 2200);

    currentReq.current.timeoutId = timeoutId;
  };

  return (
    <nav className="bg-[#212121] py-4 text-white fixed inset-x-0 top-0 backdrop-blur-md bg-black/40 z-40">
      <ul className="flex  w-full font-mono px-[6vw] justify-between text-[1.2vw] gap-[5vw]">
        <li className='nav_item px-1 '>
          <Link to="/" onClick={(e) => handleNav(e, '/')}>Home</Link>
          <div className="hr"></div>
        </li>
        <li  className='nav_item'>
          <Link to="/Projects" onClick={(e) => handleNav(e, '/Projects')}>Projects</Link>
          <div className="hr"></div>
        </li >
        <li  className='nav_item' >
          <Link to="/contact" onClick={(e) => handleNav(e, '/contact')}>Contact</Link>
          <div className="hr"></div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar