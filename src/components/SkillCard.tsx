"use client";
import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export default function SkillCard({ icon, title, text }: SkillCardProps) {
  return (
    <motion.div
      // Subtle "Float" effect on hover
      whileHover={{
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="group p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      <div className="mb-5 inline-flex p-3 bg-gray-50 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed text-sm">{text}</p>

      {/* Subtle indicator line that grows on hover */}
      <div className="mt-6 h-1 w-8 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
    </motion.div>
  );
}
