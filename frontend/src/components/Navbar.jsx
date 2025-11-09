import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight hover:opacity-80 transition-all"
        >
          {/* 👇 Custom </> code logo */}
          <motion.span
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="font-mono text-lg sm:text-xl text-blue-600 dark:text-cyan-400 select-none"
          >
            &lt;/&gt;
          </motion.span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            fahim.in
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <motion.div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`hover:text-blue-500 transition-colors ${
                  location.pathname === link.path
                    ? "text-blue-500 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden flex flex-col items-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 space-y-4 border-t border-gray-200 dark:border-gray-700"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-all ${
                location.pathname === link.path
                  ? "text-blue-500 font-semibold"
                  : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
