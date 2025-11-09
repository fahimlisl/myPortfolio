import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socials = [
    { icon: <Github size={22} />, href: "https://github.com/fahimlisl" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/fahim-abdullah-ba1441215/" },
    { icon: <Mail size={22} />, href: "mailto:developerfahim134@gmail.com" },
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 py-10 text-center mt-20">
      {/* decorative gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
      
      {/* social icons */}
      <div className="flex justify-center gap-8 mb-5">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-500 hover:text-blue-500 dark:hover:text-cyan-400 transition-all"
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      {/* ☕ Buy Me a Coffee button */}
      <motion.a
        href="https://www.buymeacoffee.com/yourusername" // ← replace with your BuyMeACoffee link
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="inline-flex items-center gap-2 px-5 py-2 mt-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium shadow-md hover:shadow-lg hover:opacity-90 transition-all"
      >
        ☕ Buy Me a Coffee
      </motion.a>

      {/* copyright */}
      <p className="text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Fahim Abdullah — developed and maintained by Fahim Abdullah
      </p>
    </footer>
  );
};

export default Footer;
