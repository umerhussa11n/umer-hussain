"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Intro() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8">
          Umer Hussain
        </h1>
        <p className="text-xl lg:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-10">
          I’m a
          <span className="text-black font-semibold"> Software Engineer </span>
          and specialize in{" "}
          <span className="text-black font-semibold">
            Technical Architecture
          </span>{" "}
          and{" "}
          <span className="text-black font-semibold">
            Scalable Software Systems
          </span>
          . Currently helping founders bridge the gap between `Idea` and
          `Market-Ready Product.`
        </p>

        <div className="flex gap-4">
          <a
            href="mailto:umerhussa11n@gmail.com"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/umerhussa11n/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-200 bg-white rounded-full text-sm font-medium hover:border-black transition-all flex items-center gap-2 group"
          >
            LinkedIn
            <ExternalLink
              size={14}
              className="text-gray-400 group-hover:text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </motion.div>
    </>
  );
}
