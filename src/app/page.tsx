"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Zap,
  Sparkles,
  ShieldCheck,
  Layers,
} from "lucide-react";

// Components
import SkillCard from "../components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import Intro from "@/components/Intro";
import ProfileImage from "@/components/ProfileImage";

// Data
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";

export default function Home() {
  const iconMap = {
    Zap: <Zap size={20} className="text-orange-500" />,
    Code2: <Code2 size={20} className="text-blue-500" />,
    Sparkles: <Sparkles size={20} className="text-blue-500" />,
    ShieldCheck: <ShieldCheck size={20} className="text-blue-500" />,
    Layers: <Layers size={20} className="text-blue-500" />,
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] selection:bg-blue-100 selection:text-blue-900">
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        {/* HERO SECTION */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Intro />
          <ProfileImage />
        </section>

        {/* BENTO GRID - Skills Loop */}
        <section className="overflow-hidden mb-24 max-w-4xl mx-auto py-10">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }} // Moves halfway (since we duplicate the list for a seamless loop)
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 100 } }} // Slows down significantly on hover
          >
            {/* First set of cards */}
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div
                key={`${skill.id}-${index}`}
                className="min-w-[300px] md:min-w-[400px]"
              >
                <SkillCard
                  icon={iconMap[skill.icon as keyof typeof iconMap]}
                  title={skill.title}
                  text={skill.text}
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* ENGAGEMENTS SECTION - Projects Loop */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-black rounded-lg">
              <Briefcase size={20} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured Engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Mapping through JSON data ensures we don't repeat 
               the ProjectCard component manually. 
            */}
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                company={project.company}
                role={project.role}
                duration={project.duration}
                details={project.details}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
