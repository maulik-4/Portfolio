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
                <img src={fire} alt="Fire Background" className="w-full h-full object-fill" />
            </div>
            <div className="fire_text absolute top-0 left-[25%] mt-[5vh] text-center text-white">
                <h1>Feeling stuck and need</h1>
                <h1>to <span className="spice">spice</span> it up?</h1>
                <h4>You need someone that can give the creative superpowers and</h4>
                <h4>reimagine your brand (try us).</h4>
                <button 
                    ref={buttonRef}
                    className="relative w-64 px-16 py-6 bg-transparent text-white font-bold text-2xl rounded-lg overflow-hidden"
                >
                  
                    <span 
                        ref={defaultTextRef} 
                        className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out opacity-100"
                    >
                        Book a Call
                    </span>
                    
                    {/* Hover Text */}
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
