"use client";

import ParticlesBackground from "./ParticlesBackground";
import { ReactTyped } from "react-typed";
import links from "@/data/linksData";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-16 md:py-0">
      <ParticlesBackground/>
      <div className="z-10 max-w-7xl w-full mx-auto">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
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
          <h2
            className="text-2xl md:text-4xl text-white font-semibold leading-tight"
          >
            Computer Science Student Specializing in Software Development
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            I&apos;m a senior computer science
            student at The University of Texas at Arlington.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center bg-white px-6 sm:px-8 py-3 gap-2 rounded-full outline-none text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 focus:scale-110 active:scale-105 hover:bg-gray-50"
              >
                {link.label}
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
