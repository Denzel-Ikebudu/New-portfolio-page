"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-4rem)] w-full max-w-4xl mx-auto
                 flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="text-3xl font-semibold mb-4">
        Interested in working together?
      </h2>

      <p className="text-base font-light mb-8 max-w-xl">
        Whether you need a portfolio, business website, or a modern web interface,
        feel free to reach out. I’m always open to discussing new ideas and
        opportunities.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-center gap-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full max-w-xl px-4 py-3 rounded-lg
                     bg-[rgb(var(--card))]
                     text-[rgb(var(--text))]
                     outline-none"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full max-w-xl px-4 py-3 rounded-lg
                     bg-[rgb(var(--card))]
                     text-[rgb(var(--text))]
                     outline-none"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full max-w-xl px-4 py-3 rounded-lg
                     bg-[rgb(var(--card))]
                     text-[rgb(var(--text))]
                     outline-none resize-none"
        />

        <button
          type="submit"
          disabled={sending}
          className={`mt-4 px-8 py-3 rounded-lg font-medium transition-all
            ${
              sending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-400 text-black hover:scale-105"
            }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
