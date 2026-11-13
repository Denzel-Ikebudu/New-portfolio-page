
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsArrowUpRight,
  BsArrowUpShort,
} from "react-icons/bs";

const socialLinks = [
  {
    name: "GitHub",
    icon: <BsGithub size={18} />,
    href: "https://github.com/Denzel-Ikebudu",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin size={18} />,
    href: "https://www.linkedin.com/in/denzel-ikebudu-09ab36290/",
  },
  {
    name: "X",
    icon: <BsTwitterX size={18} />,
    href: "https://x.com/Denzel_ikebudu",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[rgb(var(--card))] bg-[rgb(var(--bg))]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* TOP FOOTER */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold tracking-tight">
                Denzel<span className="text-yellow-400">.</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[rgb(var(--muted))]">
              I design and build modern digital experiences that help
              businesses establish their online presence and grow.
            </p>

            <p className="mt-5 text-sm font-medium">
              Available for freelance projects and collaborations.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3 text-sm text-[rgb(var(--muted))] transition-colors hover:text-yellow-400"
                >
                  {social.icon}
                  {social.name}
                  <BsArrowUpRight
                    size={12}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest">
              Information
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/#contact"
                className="w-fit text-sm text-[rgb(var(--muted))] transition-colors hover:text-yellow-400"
              >
                Contact
              </Link>

              <Link
                href="/Terms"
                className="w-fit text-sm text-[rgb(var(--muted))] transition-colors hover:text-yellow-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy"
                className="w-fit text-sm text-[rgb(var(--muted))] transition-colors hover:text-yellow-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[rgb(var(--card))] pt-7 sm:flex-row">

          <p className="text-xs text-[rgb(var(--muted))]">
            © {currentYear} Denzel Ikebudu. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[rgb(var(--muted))] transition-colors hover:text-yellow-400"
          >
            Back to top
            <BsArrowUpShort size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
