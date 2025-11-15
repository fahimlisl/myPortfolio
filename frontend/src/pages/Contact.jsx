import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      toast.error("Email service is not configured properly ❌");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully 🚀");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Try again later ⚠️");
        }
      );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-24 overflow-hidden">


      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/40 to-transparent dark:via-gray-900/60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-400/25 to-blue-600/25 blur-3xl opacity-40 rounded-full"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
      >
        Let’s Connect
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-12 leading-relaxed"
      >
        Have a project idea, collaboration, or just want to say hi?  
        Feel free to drop a message — I’d love to connect with you 🚀
      </motion.p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl">

        {/* FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-200/40 dark:border-gray-700/40 flex flex-col gap-5"
        >

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-700 dark:text-gray-200 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              placeholder="Your name"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-200 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="reply_to"
              required
              placeholder="your@email.com"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-700 dark:text-gray-200 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here..."
              rows="5"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg 
            font-medium hover:from-blue-700 hover:to-cyan-500 transition-all 
            shadow-md shadow-blue-500/20"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center items-center lg:items-start gap-6 
          bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-lg 
          border border-gray-200/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Contact Info
          </h2>

          <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
            <p className="flex items-center gap-3">
              <Mail className="text-blue-500" size={20} />
              developerfahim134@gmail.com
            </p>

            <a
              href="https://github.com/fahimlisl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 dark:hover:text-cyan-400 transition-all"
            >
              <Github size={20} />
              github.com/fahimlisl
            </a>

            <a
              href="https://www.linkedin.com/in/fahim-abdullah-ba1441215/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-blue-500 dark:hover:text-cyan-400 transition-all"
            >
              <Linkedin size={20} />
              linkedin.com/in/fahim-abdullah
            </a>

            <p className="flex items-center gap-3">
              <Phone className="text-blue-500" size={20} /> +91 74071 18188
            </p>
          </div>

          <p className="mt-4 text-gray-500 text-sm max-w-xs text-center lg:text-left">
            I usually reply within a few hours — feel free to reach out anytime!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
