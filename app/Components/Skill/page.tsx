
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BsArrowRight,
  BsArrowUpRight,
  BsCheck2,
  BsCodeSlash,
  BsWindow,
  BsLayers,
} from "react-icons/bs";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

const services = [
  {
    number: "01",
    icon: BsWindow,
    title: "Business Websites",
    description:
      "Professional websites that communicate your value, build credibility, and make it easier for customers to discover and contact your business.",
    features: [
      "Responsive design",
      "Clear calls to action",
      "Performance and SEO foundations",
    ],
    link: "#contact",
    label: "Build my website",
  },
  {
    number: "02",
    icon: BsCodeSlash,
    title: "Landing Pages",
    description:
      "Focused, conversion-oriented pages for products, services, campaigns, and startups that need to turn visitors into enquiries.",
    features: [
      "Compelling page structure",
      "Mobile-first experience",
      "Lead generation forms",
    ],
    link: "#contact",
    label: "Build my landing page",
  },
  {
    number: "03",
    icon: BsLayers,
    title: "Full-Stack Applications",
    description:
      "Functional web applications with interactive interfaces, backend logic, APIs, and database integrations built around your requirements.",
    features: [
      "Frontend and backend development",
      "REST API integration",
      "Database-driven functionality",
    ],
    link: "#contact",
    label: "Discuss an application",
  },
];

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "Django REST Framework", icon: BsCodeSlash },
  { name: "Supabase", icon: SiSupabase },
  { name: "PostgreSQL", icon: SiPostgresql },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-28 overflow-hidden px-6 py-20 sm:px-10 lg:px-12 lg:py-28"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-yellow-400/[0.07] blur-[110px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}

        {/* Section heading */}
        <div className="mb-12 grid gap-5 sm:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-yellow-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted))] sm:text-sm">
                Services & solutions
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl lg:text-6xl">
              What can I build
              <br className="hidden sm:block" />{" "}
              <span className="text-yellow-500">for you?</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="max-w-xl text-base leading-7 text-[rgb(var(--muted))] sm:text-lg sm:leading-8 lg:justify-self-end lg:pb-1"
          >
            From your first business website to a complete web application, I turn
            ideas into polished, functional digital experiences designed around
            your goals.
          </motion.p>
        </div>


        {/* Service cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 28,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={reduceMotion ? {} : { y: -5 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgb(var(--muted)/0.17)] bg-[rgb(var(--muted)/0.035)] p-6 transition-colors duration-300 hover:border-yellow-500/40 hover:bg-[rgb(var(--muted)/0.06)] sm:p-8"
              >
                {/* Number */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-400/10 text-xl text-yellow-600 dark:text-yellow-400">
                    <Icon />
                  </span>

                  <span className="font-mono text-sm text-[rgb(var(--muted)/0.7)]">
                    / {service.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-[rgb(var(--text))]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))] sm:text-base">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[rgb(var(--text))]"
                    >
                      <BsCheck2
                        className="mt-0.5 shrink-0 text-yellow-500"
                        size={17}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--text))] transition-colors hover:text-yellow-600 dark:hover:text-yellow-400"
                  >
                    {service.label}
                    <BsArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Decorative corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full border border-yellow-500/10 transition-transform duration-500 group-hover:scale-150"
                />
              </motion.article>
            );
          })}
        </div>

        {/* Technology stack */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[rgb(var(--muted)/0.18)] pt-10 sm:mt-24 sm:pt-12"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600 dark:text-yellow-400">
                The technology behind the work
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-3xl">
                My tech stack
              </h3>
            </div>

            <p className="max-w-md text-sm leading-6 text-[rgb(var(--muted))]">
              Modern tools for building responsive interfaces, reliable
              backends, and data-driven applications.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.name}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: reduceMotion ? 0 : index * 0.045,
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--muted)/0.18)] bg-[rgb(var(--muted)/0.04)] px-4 py-3 text-sm font-medium text-[rgb(var(--text))] transition-colors duration-200 hover:border-yellow-500/40 hover:bg-yellow-400/5"
                >
                  <Icon
                    size={17}
                    className="shrink-0 text-[rgb(var(--muted))]"
                    aria-hidden="true"
                  />
                  {technology.name}
                </motion.div>
              );
            })}
          </div>

          {/* Closing CTA */}
          {/* <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-yellow-500/20 bg-yellow-400/[0.055] p-5 sm:p-6">
            <div>
              <h4 className="text-lg font-bold text-[rgb(var(--text))]">
                Have a project in mind?
              </h4>
              <p className="mt-1 text-sm leading-6 text-[rgb(var(--muted))]">
                Tell me what you're building and let's discuss how I can help.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-yellow-300 active:scale-95"
            >
              Start a conversation
              <BsArrowRight size={16} />
            </a>
          </div> */}
          
        </motion.div>
      </div>
    </section>
  );
}
