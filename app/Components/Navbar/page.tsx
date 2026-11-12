
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#skills" },
    { label: "Projects", href: "#works" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/denzel_ikebudu/",
      icon: "bi-instagram",
    },
    {
      label: "X",
      href: "https://x.com/Denzel_ikebudu",
      icon: "bi-twitter-x",
    },
    {
      label: "GitHub",
      href: "https://github.com/Denzel-Ikebudu",
      icon: "bi-github",
    },
  ];

  return (
    <header className="relative z-50 w-full px-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="sticky top-4 mx-auto mt-6 flex h-[64px] max-w-6xl items-center justify-between rounded-full border border-[rgb(var(--muted)/0.2)] bg-[rgb(var(--bg)/0.85)] px-4 shadow-lg shadow-black/[0.04] backdrop-blur-xl transition-colors duration-300 sm:mt-8 sm:px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Denzel Ikebudu home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--text))] text-sm font-bold text-[rgb(var(--bg))] transition-transform duration-300 group-hover:rotate-6">
            D
          </span>
          <span className="text-base font-bold tracking-tight sm:text-lg">
            Denzel<span className="text-[rgb(var(--accent))]">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-[rgb(var(--muted)/0.08)] p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[rgb(var(--muted))] transition-all duration-200 hover:bg-[rgb(var(--bg))] hover:text-[rgb(var(--text))] hover:shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social links and controls */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div className="hidden items-center gap-4 sm:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
                className="text-lg text-[rgb(var(--muted))] transition-all duration-200 hover:-translate-y-0.5 hover:text-[rgb(var(--accent))]"
              >
                <i className={`bi ${social.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>

          <span className="h-6 w-px bg-[rgb(var(--muted)/0.2)]" />

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[rgb(var(--muted)/0.12)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <i
              className={`bi ${open ? "bi-x-lg" : "bi-list"} text-xl`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-[calc(100%+12px)] w-full overflow-hidden rounded-3xl border border-[rgb(var(--muted)/0.2)] bg-[rgb(var(--bg))] p-3 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--muted)/0.1)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="my-2 border-t border-[rgb(var(--muted)/0.15)]" />

              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-[rgb(var(--muted))]">
                  Connect with me
                </span>

                <div className="flex items-center gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-lg text-[rgb(var(--text))] transition-colors hover:text-[rgb(var(--accent))]"
                    >
                      <i className={`bi ${social.icon}`} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
