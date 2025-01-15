"use client";

import ShineImage from "./ShineImage";
import certsData from "@/data/certsData";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <div id="certs" className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="space-y-2 mb-12 md:mb-16">  
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl tracking-widest uppercase text-[#9a4ce7] font-medium"
          >
            Certifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
          >
            Professional Achievements
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {certsData.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.credlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-lg p-8 shadow-xl rounded-xl hover:scale-105 hover:shadow-purple-400 ease-in duration-300 cursor-pointer bg-white"
                whileHover="hover"
              >
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-32 sm:w-40">
                    <ShineImage 
                      src={cert.imagePath}
                      alt={cert.alt}
                      width={160}
                      height={160}
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
                      {cert.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600">
                      {cert.issuer}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      Issued {cert.issueDate}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-base sm:text-lg text-gray-600 mt-8">
          Click on any certification to verify on Credly
        </p>
      </div>
    </div>
  );
};

export default Certifications;