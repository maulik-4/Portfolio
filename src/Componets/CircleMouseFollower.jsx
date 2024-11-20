import React, { useEffect, useRef } from 'react';

const CircleMouseFollower = ({ xscale = 1, yscale = 1 }) => {
  const miniCircleRef = useRef(null); // Create a ref for the circle element

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (miniCircleRef.current) {
        miniCircleRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [xscale, yscale]);

  return (
    <div
      ref={miniCircleRef}
      style={{
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
        pointerEvents: 'none', // Ensures the circle doesn't block mouse interactions
        transform: 'translate(-50%, -50%)', // Center aligns the circle
      }}
    ></div>
  );
};

export default CircleMouseFollower;
