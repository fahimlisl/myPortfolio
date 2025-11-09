import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
    >
      {/* Background gradient glow (✅ fixed with pointer-events-none) */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight"
      >
        Hey, I’m Fahim.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
      >
        A JavaScript Backend Developer passionate about crafting{" "}
        <span className="font-semibold text-blue-500">clean</span>,{" "}
        <span className="font-semibold text-cyan-500">scalable</span> web apps — blending logic and design.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-5 mt-10 relative z-10"
      >
        {/* View Work button (routes to Projects page) */}
        <motion.div
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/projects"
            className="px-7 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/30 transition-all duration-300"
          >
            View Work
          </Link>
        </motion.div>

        {/* Contact Me button (routes to Contact page) */}
        <motion.div
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/contact"
            className="px-7 py-3 rounded-lg font-medium border border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
