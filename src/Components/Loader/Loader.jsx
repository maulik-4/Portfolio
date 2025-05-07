import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Loader() {
  const loaderRef = useRef(null);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  function textSplitter(element) {
    const targetedElement = element;
    let content = targetedElement.textContent;
    targetedElement.innerHTML = "";

    const splittedTextcontent = content.split("");
    splittedTextcontent.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      targetedElement.appendChild(span);
    });
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      setResourcesLoaded(true);
      return;
    }

    const handleResourceLoad = () => {
      setResourcesLoaded(true);
    };

    window.addEventListener('load', handleResourceLoad);
    
    const timeoutId = setTimeout(() => {
      setResourcesLoaded(true);
    }, 10000); 

    return () => {
      window.removeEventListener('load', handleResourceLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  
  useEffect(() => {
    
    document.body.classList.add('loader-active');

    if (loaderRef.current) {
      textSplitter(loaderRef.current);

      // Create the GSAP animation timeline
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(".loader h1 span", {
        stagger: 0.1,
        fontWeight: "200",
        fontSize: "1vw",
        fontStretch: "100px",
        ease: "power1.out"
      }, 'yoyo');

      tl.to(".loader h1 span", {
        fontWeight: "800",
        fontSize: "5vw",
        stagger: 0.1,
        delay: 0.35,
      }, 'yoyo');

      // Only hide loader when resources are loaded
      if (resourcesLoaded) {
        gsap.to(".loader", {
          y: "-100%",
          duration: 2,
          delay: 1, // Small delay for transition after loading
          opacity: 0,
          display: "none",
          onComplete: () => {
            // Remove class from body to enable scrolling
            document.body.classList.remove('loader-active');
          }
        });
      }
    }

    return () => {
      // Remove class from body to enable scrolling
      document.body.classList.remove('loader-active');
    };
  }, [resourcesLoaded]); // Run this effect when resourcesLoaded changes

  return (
    <section className="loader z-20 absolute top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center">
      <h1 ref={loaderRef} className="text-[5vw] font-extrabold">Great Thing Coming</h1>
    </section>
  );
}

export default Loader;
