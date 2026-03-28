"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Detail {
  text: string;
  skills: string[];
}

interface ProjectProps {
  company: string;
  role: string;
  duration: string;
  details: Detail[]; // Updated to handle the new object array
}

export default function ProjectCard({
  company,
  role,
  duration,
  details,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:border-blue-200 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            {company}
          </h3>
          <p className="text-blue-600 font-medium text-sm mt-1">
            {role} • {duration}
          </p>
        </div>
        <div className="p-2 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
          <ExternalLink
            size={18}
            className="text-gray-400 group-hover:text-blue-600"
          />
        </div>
      </div>

      {/* Loop through different phases/descriptions */}
      <div className="space-y-10">
        {details.map((phase, index) => (
          <div
            key={index}
            className="relative pl-6 border-l-2 border-gray-50 group-hover:border-blue-100 transition-colors"
          >
            <p className="text-gray-600 leading-relaxed mb-4">{phase.text}</p>
            <div className="flex flex-wrap gap-2">
              {phase.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-50/50 text-blue-700 text-[10px] uppercase tracking-wider font-bold rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
