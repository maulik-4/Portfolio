import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Loader() {
  const loaderRef = useRef(null);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const timelineRef = useRef(null);
  const minimumLoaderTime = 3; // Minimum time in seconds to show loader

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

  // Setup resource loading detection
  useEffect(() => {
    const startTime = new Date().getTime();
    
    // Function to check if minimum time has passed
    const checkTimeAndResources = () => {
      const elapsedTime = (new Date().getTime() - startTime) / 1000;
      if (elapsedTime >= minimumLoaderTime && document.readyState === 'complete') {
        setResourcesLoaded(true);
      }
    };

    // Check immediately if already complete
    checkTimeAndResources();
    
    // Set up interval to check elapsed time and resources
    const intervalId = setInterval(checkTimeAndResources, 100);
    
    // Set up load event listener
    const handleResourceLoad = () => {
      checkTimeAndResources();
    };

    window.addEventListener('load', handleResourceLoad);
    
    // Optional: add a timeout fallback
    const timeoutId = setTimeout(() => {
      setResourcesLoaded(true);
    }, 10000); // 10 seconds max wait time

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('load', handleResourceLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  // Load and track specific resources like images and videos
  useEffect(() => {
    // Preload important assets (optional enhancement)
    const imagesToPreload = document.querySelectorAll('img[src]');
    const videosToPreload = document.querySelectorAll('video[src]');
    
    let loadedCount = 0;
    const totalAssets = imagesToPreload.length + videosToPreload.length;
    
    const assetLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalAssets) {
        // All specific assets are loaded
        checkTimeAndComplete();
      }
    };
    
    const checkTimeAndComplete = () => {
      const startTime = window.loaderStartTime || new Date().getTime();
      const elapsedTime = (new Date().getTime() - startTime) / 1000;
      
      if (elapsedTime >= minimumLoaderTime) {
        setResourcesLoaded(true);
      }
    };
    
    // Track image loading
    imagesToPreload.forEach(img => {
      if (img.complete) {
        assetLoaded();
      } else {
        img.addEventListener('load', assetLoaded);
        img.addEventListener('error', assetLoaded); // Count errors as "loaded" to avoid hanging
      }
    });
    
    // Track video loading
    videosToPreload.forEach(video => {
      if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
        assetLoaded();
      } else {
        video.addEventListener('canplay', assetLoaded);
        video.addEventListener('error', assetLoaded);
      }
    });
    
    // If no assets to track, rely on document.readyState
    if (totalAssets === 0) {
      checkTimeAndComplete();
    }
    
    // Save start time globally for other components to reference
    window.loaderStartTime = window.loaderStartTime || new Date().getTime();
    
  }, []);

  // Setup animations and manage loader visibility
  useEffect(() => {
    // Add class to body to disable scrolling
    document.body.classList.add('loader-active');

    if (loaderRef.current) {
      textSplitter(loaderRef.current);

      // Create the GSAP animation timeline
      timelineRef.current = gsap.timeline({ repeat: -1 });

      timelineRef.current.to(".loader h1 span", {
        stagger: 0.1,
        fontWeight: "200",
        fontSize: "1vw",
        fontStretch: "100px",
        ease: "power1.out"
      }, 'yoyo');

      timelineRef.current.to(".loader h1 span", {
        fontWeight: "800",
        fontSize: "5vw",
        stagger: 0.1,
        delay: 0.35,
      }, 'yoyo');

      // Only hide loader when resources are loaded
      if (resourcesLoaded) {
        // Kill the repeating animation
        timelineRef.current.kill();

        // Create exit animation
        gsap.to(".loader", {
          y: "-100%",
          duration: 2,
          delay: 1, // Small delay for transition after loading
          opacity: 0,
          onComplete: () => {
            // Signal animation is complete
            setAnimationComplete(true);
            
            // Store completion time for Home component to reference
            window.loaderCompleteTime = new Date().getTime();
            
            // Remove class from body to enable scrolling
            document.body.classList.remove('loader-active');
            
            // Dispatch custom event that Home can listen for
            window.dispatchEvent(new CustomEvent('loaderComplete'));
          }
        });
      }
    }

    return () => {
      // Remove class from body to enable scrolling
      document.body.classList.remove('loader-active');
      
      // Kill any ongoing animations
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [resourcesLoaded]); // Run this effect when resourcesLoaded changes

  return (
    <section 
      className={`loader z-20 absolute top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center ${animationComplete ? 'hidden' : ''}`}
    >
      <h1 ref={loaderRef} className="text-[5vw] font-extrabold">Great Thing Coming</h1>
    </section>
  );
}

export default Loader;
