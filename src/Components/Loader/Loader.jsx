import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Loader() {
  const loaderRef = useRef(null);

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
    // Add class to body to disable scrolling
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

      gsap.to(".loader", {
        y: "-100%",
        duration: 2,
        delay: 5,
        opacity: 0,
        display: "none",
        onComplete: () => {
          // Remove class from body to enable scrolling
          document.body.classList.remove('loader-active');
        }
      });
    }

    return () => {
      // Remove class from body to enable scrolling
      document.body.classList.remove('loader-active');
    };
  }, []);

  return (
    <section className="loader z-20 absolute top-0 left-0 w-full h-screen bg-black text-white flex items-center justify-center">
      <h1 ref={loaderRef} className="text-[5vw] font-extrabold">Great Thing Coming</h1>
    </section>
  );
}

export default Loader;
