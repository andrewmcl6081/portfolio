"use client";

import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="space-y-2 mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl tracking-widest uppercase text-[#9a4ce7] font-medium"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700"
          >
            How To Reach Me
          </motion.h2>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm sm:text-base text-gray-600 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm sm:text-base text-gray-600 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm sm:text-base text-gray-600 font-medium">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 bg-[#9a4ce7] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-medium hover:bg-[#8a3cd7] transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "" }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <SendHorizonal className="w-5 h-5"/>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: submitStatus ? 1 : 0, y: submitStatus ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center text-base sm:text-lg">
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border-red-200 text-red-700 rounded-lg text-center text-base sm:text-lg">
                    Failed to send message. Please try again.
                  </div>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;