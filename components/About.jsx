"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const containerRef = useRef(null);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  //Track scroll progress and update state when scrolled down
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine scroll direction
    setIsScrollingUp(latest < previousScroll);
    setPreviousScroll(latest);

    // If scrolling down past threshold, mark as scrolled down
    if (latest > 0.1 && !hasScrolledDown && !isScrollingUp) {
      setHasScrolledDown(false);
    }

    // Only reset when scrolling down from very top
    if (latest <= 0 && !isScrollingUp) {
      setHasScrolledDown(false);
    }
  });

  const scale = useTransform(scrollYProgress,
    latest => {
      if (hasScrolledDown || isScrollingUp) return 1;

      // Cap the maximum scale at 1
      return Math.min(1, Math.max(0.7, 0.7 + (latest * 0.6)));
    }
  );

  const opacity = useTransform(scrollYProgress,
    latest => {
      if (hasScrolledDown || isScrollingUp) return 1;
      return Math.min(1, Math.max(0, latest * 3));
    }
  );

  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-6 lg:px-8">
      <motion.div 
        ref={containerRef}
        style={{
          scale,
          opacity,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <p className="text-lg sm:text-xl tracking-widest uppercase text-[#9a4ce7] font-medium">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700">
                Who I Am
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed">
                I&apos;m a passionate developer that enjoys building front-end and
                back-end solutions. I thrive on tackling challenging problems and
                enjoy the intrcacy of turning complex issues into streamlined,
                accessible solutions. My journey in development is driven by an
                interest in creating secure and robust applications. I&apos;m
                currently working on new applications with a security focused
                approach and learning how to mitigate and prevent common
                vulnerabilities.
              </p>

              <p className="text-base sm:text-lg leading-relaxed">
                In my free time I enjoy hobbies such as hiking, fishing, playing
                pool, and seeing friends. My goal is to continue enjoying life while
                learning to become a proficient developer through collaborating with
                others and picking up new technologies and skills along the way.
              </p>

              <a
                href="https://github.com/andrewmcl6081"
                target="_blank"
                className="inline-block text-base sm:text-lg text-[#9a4ce7] hover:text-[#8a3cd7] underline decoration-2 underline-offset-4 transition-colors duration-300"
              >
                Check out some of my latest projects
              </a>
            </div>
          </div>

          {/* Image Container */}
          <div className="md:col-span-1 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full max-w-sm rounded-xl overfolow-hidden shadow-lg"
            >
              <Image
                src="/body_shot.jpg"
                alt="Profile Picture"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
