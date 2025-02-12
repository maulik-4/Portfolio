import React from 'react'
import MouseFollower from '../../Components/Mousefollower/MouseFollower'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import "./Contact.css"

function Contact() {
  return (
    <div id="contact" className="h-screen w-full bg-[#212121] text-white">
       <MouseFollower xscale={.2} yscale={.2} />
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
  )
}

export default Contact