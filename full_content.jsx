import { useEffect, useState } from "react";
import "./App.css";
import mine from "./assets/mine.jpg";
import home_video from "./assets/homepage.mp4";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";

import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import project3 from "./assets/projects/project3.png";
import project4 from "./assets/projects/project4.png";
import project5 from "./assets/projects/project5.png";
import Fire from "./Componets/Fire/Fire";



import Loader from "./Componets/Loader/Loader";


function App() {
  

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
       
      </main>
    </>
  );
}

export default App;
