import React from 'react'
import { useEffect } from 'react';
import Loader from '../../Componets/Loader/Loader'
import mine from '../../assets/mine.jpg'
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import home_video from "../../assets/homepage.mp4";
import './Home.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    gsap.to(".text", {
      y: 40,
      opacity: 1, // Add opacity to fade in
      delay: 7,
      duration: 1.5, // Duration for a smoother transition
      ease: "power2.out", // Add easing for a smoother effect,
      stagger: 0.2, // Add stagger for a smoother effect,
    });
    gsap.to(".pic", {
      y: 40,
      opacity: 1, // Add opacity to fade in
      delay: 7,
      duration: 1.5, // Duration for a smoother transition
      ease: "power2.out", // Add easing for a smoother effect
    });
    const applyScrollTrigger = () => {
      if (window.innerWidth >= 1024) {
        // Example: Apply only on screens wider than 1024px
        gsap.to(".show", {
          x: 40,
          duration: 5,
          
          scrollTrigger: {
            trigger: ".show",
            start: "top 50%",
            end: "bottom bottom",
            scrub : 0,
          },
        });
      }
    };

    // Run on page load
    applyScrollTrigger();

    // Optionally reapply on window resize
    window.addEventListener("resize", () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove existing ScrollTriggers
      applyScrollTrigger();
    });
  }, []);
  return (
    <div className='overflow-hidden'>
      <Loader/>
      <div className="div bg-black text-white">
      <div
          id="intro"
          className="intro w-full h-screen  py-8 flex flex-col lg:flex-row gap-8 justify-center items-center"
        >
          <div className="pic opacity-0">
            <img
              src={mine}
              className="h-[40vw] w-[80vw] lg:h-[35vw] lg:w-[25vw] object-contain"
              alt="mine"
            />
          </div>
          <div className="info w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text opacity-0 text-[8vw] lg:text-[5vw] leading-tight">
              Hi, I am <span>Maulik Vijay</span>, a Professional Front-end
              Developer
            </h1>
          </div>
        </div>

        <div
          id="quote"
          className="show mt-[10vw] lg:-translate-x-full h-screen items-center text-center overflow-hidden flex flex-col"
        >
          <div className="k_first  justify-center flex flex-row">
            <h1 className="flex items-center ">
              <span>
                <IoIosArrowForward />
              </span>{" "}
              <span>
                {" "}
                <IoIosArrowForward />
              </span>{" "}
              History
            </h1>
          </div>
          <div className="k_sec flex justify-center items-center">
            <h5 className="w-[25vw] text-[1.5vw]">
              Every day, we have the power to shape history through our choices,
              decisions, and projects.
            </h5>
            <h1>can't Wait</h1>
          </div>
          <div className="k_third justify-center flex flex-row">
            <h1 className="">Let's write it together.</h1>
          </div>
          <div className="k_four justify-center flex flex-row">
            <h1>Now.</h1>
          </div>
        </div>
        <div className="web flex flex-col md:flex-row  justify-center px-[10vw] min-h-screen w-full relative">
          <div className="web-background-layer"></div>{" "}
          {/* Nested div for background layer */}
          <div className="web_left w-full md:w-[50%] flex flex-col gap-[3vw]">
            <h1>Web design & development</h1>
            <div className="flex">
              <button className="web_btn">Creative Web design</button>
              <button className="web_btn">Webdevelopment</button>
              <button className="web_btn">E-commerce</button>
            </div>
            <div>
              <h3 className="w-full md:w-[50%]">
                Crafting digital experiences where beauty meets ROI, turning
                heads and unlocking revenue potential with every click.
              </h3>
            </div>
          </div>
          <div className="web_right w-full md:w-1/2">
            <video
              src={home_video}
              className="h-[70vh] w-full md:w-[70vh]"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home