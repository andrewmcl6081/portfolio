"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Book } from "lucide-react";
import educationData from "@/data/educationData";

const Education = () => {
  return (
    <div id="education" className="min-h-screen flex felx-col justify-center py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="space-y-2 mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl tracking-widest uppercase text-[#9a4ce7] font-medium"
          >
            Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
          >
            Academic Background
          </motion.h2>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* University Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header with Purple Gradient */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-white"/>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{educationData.university}</h3>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="w-5 h-5"/>
                  <span>{educationData.duration}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col md:flex-row md:items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5"/>
                  <span>{educationData.degree}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5"/>
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              {/* GPA Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-purple-600"/>
                  <h4 className="text-lg font-semibold text-gray-800">Academic Performance</h4>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-purple-700 font-semibold">GPA: {educationData.gpa}</p>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-purple-600"/>
                  <h4 className="text-lg font-semibold text-gray-800">Achievements & Activities</h4>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {educationData.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full"/>
                      <span className="text-gray-700">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Relevant Courses Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Book className="w-6 h-6 text-purple-600"/>
                  <h4 className="text-lg font-semibold text-gray-800">Relevant Coursework</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {educationData.relevantCourses.map((course, index) =>(
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gray-50 rounded-lg p-3 text-center"
                    >
                      <span className="text-gray-700">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;