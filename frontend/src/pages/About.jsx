import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-10 py-20 overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-gray-900/60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 blur-3xl opacity-30 rounded-full"></div>


      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
      >
        About Me
      </motion.h1>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full max-w-4xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-10 text-left border border-gray-200/40 dark:border-gray-700/40"
      >

        <div className="flex items-center gap-3 mb-6">
          <Code2 className="text-blue-500 dark:text-cyan-400" size={24} />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Hey, I’m Fahim 👋
          </h2>
        </div>


        <div className="space-y-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I’m a <span className="font-medium text-blue-600 dark:text-cyan-400">
              Javascript Backend Developer
            </span>{" "}
            who loves building solid server-side logic, secure APIs, and efficient data handling systems.  
            I mainly work with <span className="font-medium text-blue-600 dark:text-cyan-400">Node.js, Express, and MongoDB</span> — 
            to design reliable backends that can scale.
          </p>

          <p>
            While backend is my main focus, I also enjoy creating smooth, responsive UIs with 
            <span className="font-medium text-blue-600 dark:text-cyan-400"> React </span> 
            and <span className="font-medium text-blue-600 dark:text-cyan-400">TailwindCSS</span>.  
            I like understanding how both sides of a project connect — from database design to the final user interface.
          </p>

          <p>
            Currently, I’m pursuing my{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              B.Tech in Electronics and Communication Engineering
            </span>{" "}
            at <span className="font-medium text-blue-600 dark:text-cyan-400">
              Jamia Millia Islamia
            </span>{" "}, where I’m combining my academic foundation with real-world software projects.
            I’m passionate about creating products that solve problems and make an impact.
          </p>
        </div>


        <div className="mt-10 bg-gray-900/90 text-gray-100 font-mono text-xs sm:text-sm rounded-xl overflow-hidden border border-gray-700">
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 text-gray-400 text-xs">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-2">about.js</span>
          </div>
          <pre className="p-5 whitespace-pre-wrap break-words">
            <code>
{`const fahim = {
  role: "Backend Developer",
  skills: ["Node.js", "Express", "MongoDB", "React", "TailwindCSS"],
  focus: "Building scalable APIs & server logic",
  loves: ["problem-solving", "architecture design", "clean code"],
  learning: "Cloud deployment & system optimization"
};`}
            </code>
          </pre>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-500 transition-all shadow-md shadow-blue-500/20"
          >
            Let’s Connect 🚀
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
