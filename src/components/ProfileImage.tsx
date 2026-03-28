"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex justify-center md:justify-end"
    >
      <div className="relative group">
        {/* Animated Outer Ring */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-gray-200 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

        {/* Main Image Container */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl">
          <Image
            src="/pic.jpg"
            alt="Umer Hussain"
            width={192}
            height={192}
            priority
            // CHANGE: Add object-top
            className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Availability Status Indicator (The Green Dot) */}
        <span className="absolute bottom-2 right-4 block w-4 h-4 md:w-5 md:h-5 bg-emerald-500 border-2 border-white rounded-full shadow-sm">
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
        </span>
      </div>
    </motion.div>
  );
}
