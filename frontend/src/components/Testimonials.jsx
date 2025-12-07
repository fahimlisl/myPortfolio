import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    username: "",
    message: "",
    star: "",
    positionOfReviewer: "",
    projectUrl: ""
  });

  const BASE_URL = "http://localhost:8090/api/v1"; // <-- CHANGE THIS

  // FETCH REVIEWS
  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/review/getAll`);
      setReviews(res.data.data);
    } catch (err) {
      console.log("Failed to fetch reviews", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // SUBMIT REVIEW
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/review/register`, form);
      setOpen(false);
      fetchReviews();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* SAME HERO BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] pointer-events-none bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight mb-16">
        Testimonials
      </h2>

      {/* ADD REVIEW BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="px-5 py-2 rounded-lg font-medium bg-gradient-to-r 
                   from-blue-500 to-cyan-400 text-white shadow-lg 
                   shadow-blue-500/30 hover:opacity-90 transition-all
                   absolute right-6 top-20 md:right-20 md:top-24 z-10"
      >
        + Add Review
      </motion.button>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-700 dark:text-gray-300">
          Loading reviews...
        </p>
      )}

      {/* REVIEWS GRID */}
      <div className="grid md:grid-cols-3 gap-8 relative mt-12">
        {reviews.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/30 dark:bg-white/5 
                       backdrop-blur-xl border border-white/40 
                       dark:border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={`https://i.pravatar.cc/150?u=${t.username}`}
                className="w-14 h-14 rounded-full border border-white/40 dark:border-white/10"
                alt={t.username}
              />
              <div>
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
                  {t.username}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t.positionOfReviewer}
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.message}
            </p>

            {/* STARS */}
            <div className="flex gap-1 mt-3">
              {Array.from({ length: t.star }).map((_, idx) => (
                <span key={idx} className="text-yellow-500">★</span>
              ))}
            </div>

            {/* PROJECT LINK */}
            {t.project && (
              <a
                href={t.project}
                target="_blank"
                className="text-blue-500 text-sm underline mt-3 inline-block"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* MODAL FORM */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl w-[90%] max-w-md shadow-xl border border-white/20">
            
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Add Review
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your Name"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required
              />

              <input
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your Position (e.g. Director, Client)"
                onChange={(e) =>
                  setForm({ ...form, positionOfReviewer: e.target.value })
                }
                required
              />

              <textarea
                rows="3"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your Review"
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <input
                type="number"
                min="1"
                max="5"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Star (1–5)"
                onChange={(e) => setForm({ ...form, star: Number(e.target.value) })}
                required
              />

              <input
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Project URL (optional)"
                onChange={(e) =>
                  setForm({ ...form, projectUrl: e.target.value })
                }
              />

              {/* BUTTONS */}
              <div className="flex justify-between mt-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-5 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                >
                  Submit Review
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default Testimonials;
