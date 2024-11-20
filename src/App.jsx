import { useEffect, useState } from "react";
import "./App.css";
import mine from "./assets/mine.jpg";
import home_video from "./assets/homepage.mp4";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.png";
import project4 from "./assets/projects/project4.png";
import project5 from "./assets/projects/project5.png";
import Fire from "./Componets/Fire/Fire";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Loader from "./Componets/Loader/Loader";


function App() {
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
          x: 50,
          duration: 5,
          
          scrollTrigger: {
            trigger: ".show",
            start: "top 50%",
            end: "bottom bottom",
            
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
    <>
     
      <main className="min-h-full w-full text-white overflow-hidden">
      
        <Loader />
        <nav className="h-[5vh] fixed w-full">
          <div className="nav_left z-[10] px-6 text-[2vw] flex justify-between items-center py-[.6vw]">
          <a href="#intro">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div
          id="intro"
          className="intro w-full h-screen py-8 flex flex-col lg:flex-row gap-8 justify-center items-center"
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
          className="show mt-[10vw] lg:-translate-x-full h-screen text-center overflow-hidden flex flex-col"
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
        <div className="web flex flex-col md:flex-row justify-center px-[10vw] min-h-screen w-full relative">
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

        <div
          id="work"
          className="work min-h-screen flex items-center justify-center flex-col"
        >
          <h1 className="text-[5vw] text-center">Projects</h1>
          <div className="container w-full flex flex-col justify-center items-center">
            <a
              href="https://amazon-two-beta.vercel.app/"
              target="_blank"
              className="w-full flex flex-col sm:flex-row px-[5vw] py-[5vw] justify-between gap-[5vw]"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={project1}
                  className="project_pic object-fit"
                  alt="Project 1"
                />
              </div>
              <div className="info w-full sm:w-1/2 flex flex-col gap-[2vw] justify-center items-center">
                <h3 className="text-[4.5vw]">Amazon</h3>
                <h4 className="text-[2vw]  sm:text-[1.2vw] w-3/4 text-center">
                  It is a functional app with the capability of adding or
                  removing elements from the cart with the help of React.js
                </h4>
              </div>
            </a>
            <a
              href="https://maulik-4.github.io/significo/"
              target="_blank"
              className="w-full flex flex-col sm:flex-row px-[5vw] py-[5vw] justify-between gap-[5vw]"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={project2}
                  className="project_pic object-fit"
                  alt="Project 1"
                />
              </div>
              <div className="info w-full sm:w-1/2 flex flex-col gap-[2vw] justify-center items-center">
                <h3 className="text-[4.5vw]">Significo</h3>
                <h4 className="text-[2vw]  sm:text-[1.2vw] w-3/4 text-center">
                  It is Award Winning website that is focused on animation and
                  how can they improve user exprience.
                </h4>
              </div>
            </a>
            <a
              href="https://maulik-4.github.io/Magma/"
              target="_blank"
              className="w-full flex flex-col sm:flex-row px-[5vw] py-[5vw] justify-between gap-[5vw]"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={project3}
                  className="project_pic object-fit"
                  alt="Project 1"
                />
              </div>
              <div className="info w-full sm:w-1/2 flex flex-col gap-[2vw] justify-center items-center">
                <h3 className="text-[4.5vw]">Magma</h3>
                <h4 className="text-[2vw]  sm:text-[1.2vw] w-3/4 text-center">
                  It is an website that are made for the purpose of Real State
                  agency for based on user exprience .
                </h4>
              </div>
            </a>
            <a
              href="https://oby-s-agency.vercel.app/"
              target="_blank"
              className="w-full flex flex-col sm:flex-row px-[5vw] py-[5vw] justify-between gap-[5vw]"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={project4}
                  className="project_pic object-fit"
                  alt="Project 1"
                />
              </div>
              <div className="info w-full sm:w-1/2 flex flex-col gap-[2vw] justify-center items-center">
                <h3 className="text-[4.5vw]">Oby's Agency</h3>
                <h4 className="text-[2vw]  sm:text-[1.2vw] w-3/4 text-center">
                  It is website that was awarded many times in awwawarad agency
                  .
                </h4>
              </div>
            </a>
            <a
              href="https://oneandzero-reimagine-round2.vercel.app/"
              target="_blank"
              className="w-full flex flex-col sm:flex-row px-[5vw] py-[5vw] justify-between gap-[5vw]"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={project5}
                  className="project_pic object-fit"
                  alt="Project 1"
                />
              </div>
              <div className="info w-full sm:w-1/2 flex flex-col gap-[2vw] justify-center items-center">
                <h3 className="text-[4.5vw]">Skinny Dipped</h3>
                <h4 className="text-[2vw]  sm:text-[1.2vw] w-3/4 text-center">
                  It is website that was made for the purpose of Hackathon in
                  this Skinny dipped website was reimagined .{" "}
                </h4>
              </div>
            </a>
          </div>
        </div>
        <Fire />
        <div id="contact" className="h-screen w-full">
          <h1 className="text-[15vw] text-center  ">Contact Me</h1>
          <div className="slider_container flex flex-col overflow-hidden">
            <a href="" className="marquee_a relative h-[15vh]">
              <div className="slider flex justify-between text-[4vw]  h-[15vh] items-center px-[4vw] ">
                <h3>Instagram</h3>
                <FaInstagram />
              </div>
              <div className="marquee_v">
                <div className="marquee hidden  absolute top-0 left-0 z-10 overflow-hidden flex flex-row items-center w-[100%] text-[3vw] h-[15vh] bg-black ">
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] flex-row  gap-[2vw] items-center ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw]  gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Instagram</h3>
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </a>
            <hr />
            <a
              href="https://www.linkedin.com/in/maulik-vijay-681707283
"
              target="blank"
              className="marquee_a relative h-[15vh] "
            >
              <div className="slider flex justify-between text-[4vw]  h-[15vh] items-center px-[4vw] ">
                <h3>LinkedIn</h3>
                <CiLinkedin />
              </div>
              <div className="marquee_v">
                <div className="marquee hidden  absolute top-0 left-0 z-10 overflow-hidden flex flex-row items-center w-[100%] text-[3vw] h-[15vh] bg-black ">
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] flex-row  gap-[2vw] items-center ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw]  gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>LinkedIn</h3>
                    <CiLinkedin />
                  </div>
                </div>
              </div>
            </a>
            <hr />

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maulikvijay4@gmail.com&su=Hello+Maulik&body=This+is+a+pre-filled+message"
              target="blank"
              className="marquee_a relative  h-[15vh] "
            >
              <div className="slider flex justify-between text-[4vw]  h-[15vh] items-center px-[4vw] ">
                <h3>Gmail</h3>
                <SiGmail />
              </div>
              <div className="marquee_v">
                <div className="marquee hidden  absolute top-0 left-0 z-10 overflow-hidden flex flex-row items-center w-[100%] text-[3vw] h-[15vh] bg-black ">
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] flex-row  gap-[2vw] items-center ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw]  gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                  <div className="marquee_container flex text-[2vw] gap-[2vw] items-center  ">
                    <h3>Gmail</h3>
                    <SiGmail />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
