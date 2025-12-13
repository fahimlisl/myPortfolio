import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    title: "School",
    description:
      "A school website built with React, for showcasing the school in the upper level.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762506417/project%20school.jpg",
    demo: "https://rhacademy.in",
    github: "https://github.com/fahimlisl/rhacademy",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio — built with React, Tailwind, Express, Framer Motion, and MongoDB. Features animations, dark mode, and backend integration.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762710961/myport.jpg",
    demo: "https://fahim.in",
    github: "https://github.com/fahimlisl/myPortfolio",
  },
  {
    title: "Role-Based School Management System",
    description:
      "A full-stack school management system powered by secure role-based authentication, enabling Admin, Teacher, and Student dashboards.",
    tech: ["React","MongoDB","Express", "Razorpay", "Node.js"],
    image: "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1765650152/school.fahim.in.png",
    demo: "https://school.fahim.in",
    github: "https://github.com/fahimlisl/school",
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">



      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-gray-900/60 pointer-events-none"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl rounded-full opacity-50 pointer-events-none"></div>


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
      >
        Projects
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg"
      >
        A selection of projects that showcase my skills in building modern,
        scalable, and visually appealing full-stack applications.
      </motion.p>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-blue-500/20 transition-all"
          >

            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>


            <div className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-cyan-400 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>


              <div className="flex gap-4">

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-cyan-400 hover:underline hover:scale-105 transition-transform duration-300"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                ) : (
                  <p className="text-gray-500 text-xs italic">Demo coming soon</p>
                )}


                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:scale-105 transition-all duration-300"
                  >
                    <Github size={16} /> Code
                  </a>
                ) : (
                  <p className="text-gray-500 text-xs italic">Private</p>
                )}
              </div>
            </div>


            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 blur-xl"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
