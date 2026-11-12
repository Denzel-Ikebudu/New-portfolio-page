
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BsArrowDownRight,
  BsArrowUpRight,
  BsFilePdf,
} from "react-icons/bs";
import profilePic from "../../assets/website-profile.png";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={
            reduceMotion
              ? { opacity: 0.6 }
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.8, 0.4],
                  x: [0, -20, 0],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-yellow-400/[0.10] blur-[120px] dark:bg-yellow-400/[0.08]"
        />

        <motion.div
          animate={
            reduceMotion
              ? { opacity: 0.3 }
              : {
                  opacity: [0.15, 0.4, 0.15],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-slate-400/[0.10] blur-[100px]"
        />

        {/* Fine grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-100px)] max-w-7xl items-center gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-12 lg:py-6">
        {/* TEXT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-start lg:mx-0"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              animate={
                reduceMotion
                  ? {}
                  : { scaleX: [1, 1.4, 1] }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-px w-8 origin-left bg-yellow-500"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))] sm:text-sm">
              Denzel Ikebudu · Web Developer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={reveal}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl text-[clamp(2.6rem,5.2vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.065em] text-[rgb(var(--text))]"
          >
            I build
            <br />
            websites that
            <br />

            <span className="relative inline-block text-yellow-500">
              move brands
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-1 left-0 h-[3px] w-[72%] origin-left rounded-full bg-yellow-500/70 sm:-bottom-2 sm:h-1"
              />
            </span>
            <br />
            forward<span className="text-yellow-500">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-lg text-base leading-7 text-[rgb(var(--muted))] sm:text-lg sm:leading-8"
          >
            I design and develop modern, responsive websites that help
            businesses present their value, build trust, and reach more
            customers.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#contact"
              whileHover={reduceMotion ? {} : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? {} : { scale: 0.96 }}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              Let's work together
              <BsArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="#works"
              whileHover={reduceMotion ? {} : { y: -3 }}
              whileTap={reduceMotion ? {} : { scale: 0.97 }}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-[rgb(var(--muted)/0.25)] px-6 py-3 text-sm font-medium text-[rgb(var(--text))] transition-colors duration-300 hover:border-yellow-500/60 hover:bg-[rgb(var(--muted)/0.07)]"
            >
              Explore my work
              <BsArrowDownRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          {/* Resume */}
          <motion.a
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            href="/CV-Denzel-Ikebudu.pdf"
            download
            className="mt-3 inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] transition-colors hover:text-yellow-600 dark:hover:text-yellow-400"
          >
            <BsFilePdf size={15} />
            Download résumé
          </motion.a>

          {/* Signature */}
          <motion.div
            variants={reveal}
            transition={{
              duration: 0.7,
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[rgb(var(--muted)/0.18)] pt-4"
          >
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-[rgb(var(--muted))]">
              Focused on
            </span>
            <span className="text-sm font-medium text-[rgb(var(--text))]">
              Design
            </span>
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            <span className="text-sm font-medium text-[rgb(var(--text))]">
              Development
            </span>
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            <span className="text-sm font-medium text-[rgb(var(--text))]">
              Experience
            </span>
          </motion.div>
        </motion.div>

        {/* ANIMATED PORTRAIT */}
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 24,
            scale: reduceMotion ? 1 : 0.98,
          }}
          animate={
            reduceMotion
              ? { opacity: 1, x: 0, scale: 1 }
              : {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  y: [0, -8, 0],
                }
          }
          transition={{
            opacity: { duration: 0.9, delay: 0.15 },
            x: { duration: 0.9, delay: 0.15 },
            scale: { duration: 0.9, delay: 0.15 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={reduceMotion ? {} : { scale: 1.015 }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[350px] lg:ml-auto lg:mr-0 lg:max-w-[380px]"
        >
          {/* Animated outline */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? {}
                : { rotate: [0, 3, 0, -3, 0] }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-4 translate-x-4 translate-y-4 rounded-[2rem] border border-yellow-500/25"
          />

          {/* Portrait frame */}
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[rgb(var(--muted)/0.15)] bg-[rgb(var(--muted)/0.12)] shadow-2xl shadow-black/10">
            <Image
              src={profilePic}
              alt="Denzel Ikebudu, web developer"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 380px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* Portrait nameplate */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 rounded-2xl border border-white/20 bg-black/45 p-4 text-white shadow-lg backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
              <div>
                <p className="text-lg font-bold tracking-tight">
                  Denzel Ikebudu
                </p>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">
                  Building for the web.
                </p>
              </div>

              <motion.span
                animate={
                  reduceMotion
                    ? {}
                    : { rotate: [0, 45, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black"
              >
                <BsArrowUpRight size={17} />
              </motion.span>
            </div>
          </div>

          {/* Floating accent ring */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? {}
                : { rotate: 360 }
            }
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-3 -top-3 -z-10 h-20 w-20 rounded-full border border-dashed border-yellow-500/40 sm:-right-5 sm:-top-5 sm:h-28 sm:w-28"
          />
        </motion.div>
      </div>
    </section>
  );
}
