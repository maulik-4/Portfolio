import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Project.css";
import MouseFollower from '../../Components/MouseFollower/MouseFollower';

import project1 from "../../assets/projects/project1.png"
import project2 from "../../assets/projects/project2.png"
import project3 from "../../assets/projects/project3.png"
import project4 from "../../assets/projects/project4.png"
import project5 from "../../assets/projects/project5.png"
import project6 from "../../assets/projects/project6.png"
import project7 from "../../assets/projects/project7.png"
import project8 from "../../assets/projects/project8.png"
import project9 from "../../assets/projects/project9.png"
import project10 from "../../assets/projects/project10.png"
import project11 from "../../assets/projects/project11.png"
import project12 from "../../assets/projects/project12.png"
import project13 from "../../assets/projects/project13.png"
import project14 from "../../assets/projects/project14.png"
import project15 from "../../assets/projects/project15.png"
import project16 from "../../assets/projects/project16.png"
import Loader from '../../Components/Loader/Loader'
import Fire from '../../Components/Fire/Fire'

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(".elem");
    elements.forEach((elem) => {
      const image = elem.querySelector("img");
      const xTransform = gsap.utils.random(-100, 100);
      const tl = gsap.timeline();

      tl.set(image, {
        transformOrigin: xTransform < 0 ? "0%" : "100%",
      })
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        )
        .to(elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="proj w-full h-[200vh] bg-[#212121] overflow-hidden">
        <MouseFollower xscale={.2} yscale={.2} />
        <div className="grid grid-cols-3 grid-rows-16 w-full h-screen">
          
          {/* Project 2 */}
          <a href="https://significo-flax.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 1, "--c": 7 }}>
            <img src={project2} className="w-full h-full object-cover" alt="Project 2" />
          </a>
          
          {/* Project 3 */}
          <a href="https://magma-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 2, "--c": 2 }}>
            <img src={project3} className="w-full h-full object-cover" alt="Project 3" />
          </a>
          
          {/* Project 4 */}
          <a href="https://oby-s-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 2, "--c": 6 }}>
            <img src={project4} className="w-full h-full object-cover" alt="Project 4" />
          </a>
          
          {/* Project 5 */}
          <a href="https://oneandzero-reimagine-round2.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 3, "--c": 4 }}>
            <img src={project5} className="w-full h-full object-cover" alt="Project 5" />
          </a>
          
          {/* Project 1 */}
          <a href="https://amazon-two-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 3, "--c": 8 }}>
            <img src={project1} className="w-full h-full object-cover" alt="Project 1" />
          </a>
          
          {/* Project 6 */}
          <a href="https://magma-fawn.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 4, "--c": 1 }}>
            <img src={project6} className="w-full h-full object-cover" alt="Project 6" />
          </a>
          
          {/* Project 7 */}
          <a href="https://alexy-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 4, "--c": 4 }}>
            <img src={project7} className="w-full h-full object-cover" alt="Project 7" />
          </a>
          
          {/* Project 16 */}
          <a href="https://h2-r.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 9, "--c": 2 }}>
            <img src={project16} className="w-full h-full object-cover" alt="Project 16" />
          </a>
          
          {/* Project 8 */}
          <a href="https://music-ivory-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 5, "--c": 2 }}>
            <img src={project8} className="w-full h-full object-cover" alt="Project 8" />
          </a>
          
          {/* Project 9 */}
          <a href="https://restraunent.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 5, "--c": 6 }}>
            <img src={project9} className="w-full h-full object-cover" alt="Project 9" />
          </a>
          
          {/* Project 10 */}
          <a href="https://golf-lyart.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 6, "--c": 3 }}>
            <img src={project10} className="w-full h-full object-cover" alt="Project 10" />
          </a>
          
          {/* Project 11 */}
          <a href="https://cynthia-ugwu-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 6, "--c": 7 }}>
            <img src={project11} className="w-full h-full object-cover" alt="Project 11" />
          </a>
          
          {/* Project 12 */}
          <a href="https://yotube-full-stack.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 7, "--c": 5 }}>
            <img src={project12} className="w-full h-full object-cover" alt="Project 12" />
          </a>
          
          {/* Project 13 */}
          <a href="https://oneandzero-reimagine-round1.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 7, "--c": 8 }}>
            <img src={project13} className="w-full h-full object-cover" alt="Project 13" />
          </a>
          
          {/* Project 14 */}
          <a href="https://netflixclone-alpha-kohl.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 8, "--c": 1 }}>
            <img src={project14} className="w-full h-full object-cover" alt="Project 14" />
          </a>
          
          {/* Project 15 */}
          <a href="https://blogwebsite-pi.vercel.app/" target="_blank" rel="noopener noreferrer" className="elem" style={{ "--r": 8, "--c": 4 }}>
            <img src={project15} className="w-full h-full object-cover" alt="Project 15" />
          </a>
        </div>
        
        <div className="fixed top-[10vh] left-0 w-screen text-center h-screen flex flex-col items-center justify-center bg-opacity-90 text-white pointer-events-none">
          <h1 className="Project_text relative text-[8vw] font-bold mb-6">Welcome to My World</h1>
          <p className="text-[3vw]">Explore the Beauty of Front End</p>
        </div>
      </div>
      <Fire />
    </div>
  );
}

export default Projects;
