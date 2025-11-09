import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
      >
        404
      </motion.h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
