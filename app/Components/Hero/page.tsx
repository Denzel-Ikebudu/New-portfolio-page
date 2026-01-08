"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";
import profilePic from "../../assets/website-profile.png";
import { BsFilePdf } from "react-icons/bs"

export default function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      {/* TEXT CONTENT */}
      <div className="flex flex-col gap-4 font-bold text-3xl md:text-5xl">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-light"
        >
          Hello,
        </motion.span>

  
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "9ch" }}
          transition={{
          duration: 2,
          delay: 0.8,
          ease: "linear",
          }}
          className="overflow-hidden whitespace-nowrap border-r-2 border-yellow-400"
        >
          I&apos;m <span className="text-yellow-400">Denzel</span>
        </motion.span>

        {/* Role */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          Web Developer
        </motion.span>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
          className="text-base font-light max-w-md"
        >
          I am a skilled web developer with experience in creating visually
          appealing and user-friendly websites.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.5 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          {/* My Works */}
          <a href="#works">
            <button
              className="
              flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-slate-900 text-white
              dark:bg-slate-100 dark:text-slate-900 transition-all duration-300 hover:scale-[1.03] active:scale-95
            "
            >
              <BsBriefcase size={16} />
              My Works
            </button>
          </a>

          {/* Download Resume */}
          <a href="/resume.pdf" download>
            <button
              className="
              flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-slate-400
              text-slate-700 dark:text-slate-300 transition-all duration-300 hover:bg-slate-100 
              dark:hover:bg-slate-800 hover:scale-[1.03] active:scale-95">
              <BsFilePdf size={16}/>
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Image
          src={profilePic}
          alt="Profile picture"
          width={360}
          height={780}
          className="rounded-2xl object-cover w-70 h-90 bg-[rgb(var(--muted)/0.25)] transition-transform duration-300"
          priority
        />
      </motion.div>
    </section>
  );
}
