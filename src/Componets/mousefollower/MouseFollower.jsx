import React, { useRef, useEffect } from "react";

const CircleMouseFollower = ({ xscale = 1, yscale = 1 }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xscale, yscale]);

  return (
    <div
      id="minicircle"
      ref={circleRef}
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        zIndex: 9999, 
        backgroundColor: "white",
        borderRadius: "50%",
        mixBlendMode: "difference",
        pointerEvents: "none", 
        
        transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
      }}
    ></div>
  );
};

export default CircleMouseFollower;
