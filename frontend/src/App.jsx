import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const location = useLocation();

  // Smooth scroll to top on every page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Page transition animation
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  // Hide Navbar & Footer on 404 pages
  const validPaths = ["/", "/projects", "/about", "/contact"];
  const isValidRoute = validPaths.includes(location.pathname);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">

      {/* 🌐 Global SEO */}
      <Helmet>
        <title>Fahim Abdullah | JavaScript Backend Developer</title>
        <meta
          name="description"
          content="I'm Fahim Abdullah — a JavaScript backend developer specializing in Node.js, Express, and MongoDB. Passionate about building clean, scalable, and fast backend systems."
        />
        <meta
          name="keywords"
          content="Fahim Abdullah, Backend Developer, JavaScript Developer, Node.js, MERN Stack, Express, MongoDB, React Developer"
        />
        <meta name="author" content="Fahim Abdullah" />

        {/* Open Graph */}
        <meta property="og:title" content="Fahim Abdullah | Backend Developer" />
        <meta property="og:description" content="JavaScript backend developer building high-performance web systems." />
        <meta property="og:image" content="/preview.jpeg" />
        <meta property="og:url" content="https://fahim.in" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fahim Abdullah | Backend Developer" />
        <meta name="twitter:description" content="Backend developer skilled in Node.js, Express, MongoDB." />
        <meta name="twitter:image" content="/preview.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://fahim.in" />
      </Helmet>

      {/* 🔔 Global toast notifications */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 16px",
            fontSize: "0.95rem",
            fontWeight: 500,
          },
          success: { iconTheme: { primary: "#0ea5e9", secondary: "#fff" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
        }}
      />

      {/* Navbar */}
      {isValidRoute && <Navbar />}

      {/* Page transition container */}
      <main className="pt-20 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            <Route
              path="/"
              element={
                <motion.div {...pageTransition}>
                  <Home />
                </motion.div>
              }
            />

            <Route
              path="/projects"
              element={
                <motion.div {...pageTransition}>
                  <Projects />
                </motion.div>
              }
            />

            <Route
              path="/contact"
              element={
                <motion.div {...pageTransition}>
                  <Contact />
                </motion.div>
              }
            />

            <Route
              path="/about"
              element={
                <motion.div {...pageTransition}>
                  <About />
                </motion.div>
              }
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <motion.div {...pageTransition}>
                  <NotFound />
                </motion.div>
              }
            />

          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      {isValidRoute && <Footer />}
    </div>
  );
};

export default App;
