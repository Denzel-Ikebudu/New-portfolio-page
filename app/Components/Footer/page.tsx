"use client";

import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter, BsArrowUpShort } from "react-icons/bs";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[rgb(var(--card))] bg-[rgb(var(--bg))] py-12">
      <motion.div 
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8"
      >
        {/* Branding/Logo Area */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tighter">
            Denzel<span className="text-yellow-400">.</span>
          </h2>
          <p className="text-[rgb(var(--muted))] text-sm mt-2">
            Building digital experiences with precision and motion.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { icon: <BsGithub size={20} />, href: "https://github.com/Denzel-Ikebudu" },
            { icon: <BsLinkedin size={20} />, href: "https://www.linkedin.com/in/denzel-ikebudu-09ab36290/" },
            { icon: <BsTwitter size={20} />, href: "https://x.com/Denzel_ikebudu" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              variants={iconVariants}
              whileHover={{ y: -5, color: "rgb(var(--accent))" }}
              className="text-[rgb(var(--muted))] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Divider & Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[rgb(var(--card))] gap-4">
          <p className="text-xs text-[rgb(var(--muted))]">
            &copy; {currentYear} Denzel Ikebudu. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] transition-colors"
          >
            Back to top <BsArrowUpShort size={18} />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}