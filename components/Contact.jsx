"use client";

import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";

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
    <div id="contact" className="w-full px-4 py-8 mb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#9a4ce7]">
          Contact
        </p>
        <h2 className="py-4 mb-8">How To Reach Me</h2>
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-[600px] mx-auto w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-600 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 flex items-center justify-center gap-2 bg-[#9a4ce7] text-white py-3 px-6 rounded-lg hover:bg-[#8a3cd7] transition-all ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <SendHorizonal className="w-5 h-5"/>
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;