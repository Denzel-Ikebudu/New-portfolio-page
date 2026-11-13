
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { BsWhatsapp, BsArrowUpRight } from "react-icons/bs";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_dr8tezb",
        "template_w9wnoth",
        form.current,
        "lw0bZyQP3JkaeoIfw"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
        setSending(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
        setSending(false);
      });
  };

  const whatsappNumber = "2347065746568";
  const whatsappMessage = encodeURIComponent(
    "Hello Denzel, I visited your portfolio and would like to discuss a website project."
  );

  return (
    <section
      id="contact"
      className="relative w-full border-t border-[rgb(var(--muted)/0.15)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Contact
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's make something
            <span className="text-yellow-400"> happen.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[rgb(var(--muted))]">
            Have an idea, a project, or a business that needs a better online
            presence? Tell me about it. I'd be glad to hear from you.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium leading-relaxed">
                Have a project in mind?
                <br />
                <span className="text-[rgb(var(--muted))]">
                  Let's talk about it.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-[rgb(var(--muted))]">
                Whether it's a portfolio, business website, e-commerce store,
                or custom web application, I'm open to discussing how we can
                bring your idea to life.
              </p>
            </div>

            {/* WHATSAPP ALTERNATIVE */}
            <div className="mt-12 rounded-2xl border border-[rgb(var(--muted)/0.15)] p-6 sm:p-7">
              <p className="text-sm text-[rgb(var(--muted))]">
                Prefer a quicker conversation?
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                Reach me directly on WhatsApp.
              </h3>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <BsWhatsapp size={19} />
                Chat on WhatsApp
                <BsArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: EMAIL FORM */}
          <div className="rounded-2xl border border-[rgb(var(--muted)/0.15)] p-6 sm:p-8">
            <div className="mb-7">
              <h3 className="text-xl font-semibold">
                Send me a message
              </h3>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                Fill in the form and I'll get back to you.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-[rgb(var(--muted)/0.15)] bg-[rgb(var(--background))] px-4 py-3 text-[rgb(var(--text))] outline-none transition-colors focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-lg border border-[rgb(var(--muted)/0.15)] bg-[rgb(var(--background))] px-4 py-3 text-[rgb(var(--text))] outline-none transition-colors focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about your project..."
                  required
                  className="w-full resize-none rounded-lg border border-[rgb(var(--muted)/0.15)] bg-[rgb(var(--background))] px-4 py-3 text-[rgb(var(--text))] outline-none transition-colors focus:border-yellow-400"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`mt-2 w-full rounded-lg px-6 py-3 font-medium transition-all ${
                  sending
                    ? "cursor-not-allowed bg-gray-400 text-black"
                    : "bg-yellow-400 text-black hover:-translate-y-1 hover:bg-yellow-300"
                }`}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
