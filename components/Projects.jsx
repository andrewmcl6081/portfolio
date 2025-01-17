"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import projects from "@/data/projectsData";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const CurrentIcon = projects[currentIndex].icon

  const NavigationButton = ({ direction, onClick }) => (
    <div
      className={`absolute top-1/2 -translate-y-1/2 
        ${direction === "left" ? "-left-4 md:-left-16" : "-right-4 md:-right-16"} 
        w-12 h-12 flex items-center justify-center`}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="w-full h-full bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
        aria-label={`Navigate ${direction}`}
      >
        {direction === "left" ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </motion.button>
    </div>
  );  
  
  return (
    <div id="projects" className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="space-y-2 mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl tracking-widest uppercase text-[#9a4ce7] font-medium"
          >
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
          >
            My Recent Work
          </motion.h2>
        </div>

        {/* Projects Carousel Section */}
        <div className="max-w-5xl mx-auto px-4 md:px-20 py-4 relative">
          <NavigationButton 
            direction="left"
            onClick={() => navigate(-1)}
          />

          <NavigationButton 
            direction="right"
            onClick={() => navigate(1)}
          />

          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }}}
          >
            <div className={`bg-gradient-to-br ${projects[currentIndex].gradientFrom} ${projects[currentIndex].gradientTo} rounded-2xl shadow-xl overflow-hidden`}>
              {/* Project Icon Section */}
              <div className="relative h-48 flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <CurrentIcon className="w-24 h-24 text-white"/>
              </div>

              {/* Project Details Section */}
              <div className="bg-white p-6 sm:p-8 rounded-t-3xl -mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{projects[currentIndex].title}</h3>
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1} / {projects.length}
                  </span>
                </div>

                <p className="mt-2 text-base sm:text-lg text-gray-600 leading-relaxed">
                  {projects[currentIndex].description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {projects[currentIndex].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-5 h-5"/>
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={projects[currentIndex].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5"/>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;