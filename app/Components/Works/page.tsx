"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Works() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="works"
      className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10"
    >
      {/* Heading */}
      <div className="mb-14 grid gap-5 md:mb-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-yellow-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))] sm:text-sm">
              Selected projects
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl lg:text-6xl">
            Built to work.
            <br />
            <span className="text-yellow-500">Designed to matter.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-base leading-7 text-[rgb(var(--muted))] sm:text-lg sm:leading-8 md:justify-self-end"
        >
          From business websites to interactive web applications, explore how I
          turn ideas into practical digital experiences.
        </motion.p>
      </div>

      {/* Featured projects */}
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6 }}
            className={`grid min-w-0 items-center gap-7 lg:grid-cols-2 lg:gap-12 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Real project screenshot */}
            <a
              href={
                project.liveUrl && project.liveUrl !== "#"
                  ? project.liveUrl
                  : undefined
              }
              target={
                project.liveUrl && project.liveUrl !== "#"
                  ? "_blank"
                  : undefined
              }
              rel="noopener noreferrer"
              aria-label={`Explore ${project.title}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-[rgb(var(--muted)/0.15)] bg-[rgb(var(--card))]"
            >
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                PROJECT {String(index + 1).padStart(2, "0")}
              </span>

              {project.liveUrl && project.liveUrl !== "#" && (
                <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-400 text-xl text-black transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </span>
              )}
            </a>

            {/* Project story */}
            <div className="py-2 lg:py-6">
              <p className="mb-4 text-sm font-medium text-yellow-500">
                {String(index + 1).padStart(2, "0")}{" "}
                <span className="mx-2 text-[rgb(var(--muted))]">/</span>
                Selected work
              </p>

              <h3 className="mb-4 text-3xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              <p className="max-w-xl text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">
                {project.description}
              </p>

              <div className="my-7 h-px w-full bg-[rgb(var(--muted)/0.18)]" />

              <p className="mb-5 text-sm leading-7 text-[rgb(var(--muted))]">
                Each project reflects my approach to building responsive
                interfaces, implementing useful functionality, and creating
                digital experiences around real user needs.
              </p>

              {project.liveUrl && project.liveUrl !== "#" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-b border-yellow-500 pb-2 text-sm font-semibold text-[rgb(var(--text))] transition-colors hover:text-yellow-500"
                >
                  Explore project
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="text-sm text-[rgb(var(--muted))]">
                  Demo unavailable
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 flex flex-col justify-between gap-6 rounded-2xl border border-[rgb(var(--muted)/0.16)] bg-[rgb(var(--card))] p-7 sm:mt-28 sm:flex-row sm:items-center sm:p-10"
      >
        <div>
          <h3 className="text-2xl font-bold text-[rgb(var(--text))] sm:text-3xl">
            Have something in mind?
          </h3>
          <p className="mt-2 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base">
            Let’s build a digital product that moves your business forward.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
        >
          Start a project
          <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </section>
  );
}