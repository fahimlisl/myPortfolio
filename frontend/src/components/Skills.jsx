import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-10 lg:px-20 text-center overflow-hidden"
    >
      {/* soft background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-gray-900/50"></div>

      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
      >
        My Toolbox
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14"
      >
        Technologies I work with every day to build fast, modern, and scalable
        applications.
      </motion.p>

      {/* skills grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="group relative flex flex-col items-center justify-center gap-3 rounded-xl p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-md hover:shadow-blue-500/20 transition-all"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
              {skill.name}
            </p>

            {/* glow accent on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-lg -z-10"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
