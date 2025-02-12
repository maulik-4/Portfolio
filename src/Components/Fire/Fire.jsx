import React, { useEffect, useRef } from 'react';
import fire from '../../assets/Fire.png';
import './Fire.css';

function Fire() {
    // Create refs for the button, default text, and hover text
    const buttonRef = useRef(null);
    const defaultTextRef = useRef(null);
    const hoverTextRef = useRef(null);
    useEffect(() => {
        const button = buttonRef.current;
        const defaultText = defaultTextRef.current;
        const hoverText = hoverTextRef.current;

        // Define hover event handlers
        const handleMouseOver = () => {
            defaultText.classList.add('-translate-y-full', 'opacity-0'); // Move "Book a Call" up and fade out
            hoverText.classList.remove('translate-y-full', 'opacity-0'); // Bring "Good Choice" up and fade in
        };

        const handleMouseOut = () => {
            defaultText.classList.remove('-translate-y-full', 'opacity-0'); // Reset "Book a Call" position and opacity
            hoverText.classList.add('translate-y-full', 'opacity-0');       // Move "Good Choice" back down and fade out
        };

        // Attach event listeners
        if (button) {
            button.addEventListener('mouseover', handleMouseOver);
            button.addEventListener('mouseout', handleMouseOut);
        }

        // Cleanup event listeners on component unmount
        return () => {
            if (button) {
                button.removeEventListener('mouseover', handleMouseOver);
                button.removeEventListener('mouseout', handleMouseOut);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className="fire relative h-[120vh] w-full">
        <div className="fire_img w-full h-full">
          <img src={fire} alt="Fire Background" className="w-full h-full object-cover" />
        </div>
        <div className="fire_text absolute top-0 left-1/2 transform -translate-x-1/2 mt-[5vh] px-4 md:px-8 lg:mt-[10vh] lg:flex lg:flex-col lg:items-center lg:gap-6  text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold lg:w-[60vw]">Feeling stuck and need</h1>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            to <span className="spice">spice</span> it up?
          </h1>
          <h4 className="text-sm md:text-base lg:text-lg mt-4">
            You need someone that can give the creative superpowers and
          </h4>
          <h4 className="text-sm md:text-base lg:text-lg">
            reimagine your brand (try us).
          </h4>
          <button 
            ref={buttonRef} 
            className="relative mt-8 w-48 md:w-56 lg:w-64 px-8 md:px-12 py-4 md:py-5 bg-transparent text-white font-bold text-lg md:text-xl lg:text-2xl rounded-lg overflow-hidden"
          >
            <span 
              ref={defaultTextRef} 
              className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out opacity-100"
            >
              Book a Call
            </span>
            <span 
              ref={hoverTextRef} 
              className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 ease-in-out"
            >
              Good Choice
            </span>
          </button>
        </div>
      </div>
      
    );
}

export default Fire;
