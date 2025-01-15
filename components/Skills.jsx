"use client";

import Image from "next/image"
import toolsData from "@/data/toolsData";
import { motion } from "framer-motion";

const Skills = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  // Individual card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="space-y-2 mb-12 md:mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl tracking-widest uppercase text-[#9a4ce7] font-medium"
          >
            Skills
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
          >
            What I Can Do
          </motion.h2>
        </div>
        
        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {toolsData.map((tool, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg relative overflow-hidden group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <div className="relative flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-300">
                  <Image 
                    src={tool.src}
                    alt={tool.alt}
                    height={40}
                    width={40}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    priority
                  />
                </div>
                <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium text-center sm:text-left group-hover:text-purple-800 transition-colors duration-300">
                  {tool.displayName}
                </span>
              </div>

              <motion.div 
                className="absolute inset-0 border-2 border-transparent rounded-xl"
                whileHover={{
                  border: "2px solid rgba(154, 76, 231, 0.2)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
