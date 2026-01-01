"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Works() {
  return (
    <section
      id="works"
      className="w-full max-w-6xl mx-auto py-20 px-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-12"
      >
        Selected Works
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="group rounded-xl overflow-hidden 
                       bg-[rgb(var(--card))] 
                       hover:scale-[1.02] 
                       transition-transform duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-[rgb(var(--muted))] mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md
                               bg-[rgb(var(--card-hover))]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                className="inline-block text-sm font-medium 
                           text-[rgb(var(--accent))] 
                           hover:underline"
              >
                View Live →
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
