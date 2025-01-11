"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ShineImage = ({ src, alt, width, height }) => {
  return (
    <div className="relative overflow-hidden rounded-md">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-md"
      />

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ x: "-100%" }}
        variants={{
          hover: {
            x: ["-100%", "150%"],
          },
        }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 70%)",
        }}
      />
    </div>
  );
};

export default ShineImage;
