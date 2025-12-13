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
    projectUrl: "",
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;

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
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 pointer-events-none w-[900px] h-[900px] bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl opacity-30" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight">
          Testimonials
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="self-center md:self-auto px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:opacity-95 transition-all"
        >
          + Add Review
        </motion.button>
      </div>

      {loading && (
        <p className="text-center text-gray-700 dark:text-gray-300">
          Loading reviews...
        </p>
      )}


      <div className="relative w-full overflow-hidden pb-8">
        <motion.div
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {reviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px]
                         max-w-[380px]
                         p-6 rounded-2xl bg-white/40 dark:bg-gray-800/40
                         backdrop-blur-xl border border-white/40 dark:border-white/10
                         shadow-xl hover:shadow-blue-500/20 transition-all"
            >
              {/* Reviewer */}
              <div className="mb-4">
                <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
                  {t.username}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t.positionOfReviewer}
                </p>
              </div>


              <div className="relative mb-4">
                <p
                  className="text-gray-700 dark:text-gray-300 leading-relaxed
                             text-sm sm:text-base
                             line-clamp-4
                             max-h-[6.5rem]
                             overflow-hidden"
                >
                  “{t.message}”
                </p>

                <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white/80 dark:from-gray-800/80 to-transparent pointer-events-none" />
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.star }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {t.project && (
                <a
                  href={t.project}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-sm underline hover:text-blue-600 dark:hover:text-cyan-400 transition"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>


      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-xl border border-white/20 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Add Review
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your Name"
                required
                onChange={(e) =>
                  setForm({ ...form, username: e.target.value })
                }
              />

              <input
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Position (e.g. Client / Director)"
                required
                onChange={(e) =>
                  setForm({
                    ...form,
                    positionOfReviewer: e.target.value,
                  })
                }
              />

              <textarea
                rows="3"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Your Review"
                required
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <input
                type="number"
                min="1"
                max="5"
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Star Rating (1–5)"
                required
                onChange={(e) =>
                  setForm({ ...form, star: Number(e.target.value) })
                }
              />

              <input
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                placeholder="Project URL (optional)"
                onChange={(e) =>
                  setForm({ ...form, projectUrl: e.target.value })
                }
              />

              <div className="flex justify-between pt-4">
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
                  Submit
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
