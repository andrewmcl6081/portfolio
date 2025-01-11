"use client";

import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineDocument } from "react-icons/hi"
import ParticlesBackground from "./ParticlesBackground";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 relative overflow-hidden">
      <ParticlesBackground/>
      <div className="z-10 max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-white">
            <ReactTyped
              strings={[
                "Hi, I'm <span class='text-[#9a4ce7]'>Andrew</span>."
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
              showCursor={false}
            />
          </h1>
          <h2 className="py-2 text-white text-4xl">Computer Science Student Specializing in Software Development</h2>
          <p className="py-4 text-white text-lg max-w-[70%] m-auto">
            I&apos;m a senior computer science
            student at The University of Texas at Arlington.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-[330px] m-auto py-12 gap-3 text-lg font-normal">
            <a href="https://www.linkedin.com/in/andrew-mcl/" target="_blank" className="flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer">
              Linkedin
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/andrewmcl6081" target="_blank" className="flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer">
              Github
              <FaGithub className="text-2xl" />
            </a>
            <a href="mailto:andrewmcl6081@gmail.com" className="flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer">
              Email
              <AiOutlineMail className="text-2xl" />
            </a>
            <a href="/Andrew_McLaughlin_Resume.pdf" target="_blank" className="flex items-center bg-white px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer">
              Resume
              <HiOutlineDocument className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
