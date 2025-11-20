import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const location = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };


  const validPaths = ["/", "/projects", "/about", "/contact"];
  const isValidRoute = validPaths.includes(location.pathname);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
      

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


      {isValidRoute && <Navbar />}


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


      {isValidRoute && <Footer />}
    </div>
  );
};

export default App;
