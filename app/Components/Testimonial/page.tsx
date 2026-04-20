"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { BsChatQuote } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Juanita Elaal Rock",
    role: "Relationship Coach and Author",
    text: "Working with Denzel was a game-changer for our platform. The attention to detail in the motion design is something you don't see every day.",
  },
  {
    id: 2,
    name: "Anukwu Chekwube",
    role: "Startup Founder",
    text: "He turned our complex Figma designs into a high-performance React application in record time. Professional, fast, and highly skilled.",
  },
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-[rgb(var(--bg))]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold"
          >
            Kind <span className="text-yellow-400">Words</span>
          </motion.h2>
          <p className="text-[rgb(var(--muted))] mt-2">Swipe to see what clients say</p>
        </div>

        {/* Carousel Container */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {testimonials.map((item) => (
              <motion.div
                key={item.id}
                className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl border border-[rgb(var(--card))] bg-[rgb(var(--card)/0.3)] backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <BsChatQuote className="text-yellow-400 mb-4" size={30} />
                  <p className="text-lg italic leading-relaxed text-[rgb(var(--text))]">
                    "{item.text}"
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-[rgb(var(--text))]">{item.name}</h4>
                  <p className="text-sm text-[rgb(var(--muted))]">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Swipe Indicator (Visible only on mobile) */}
        <div className="mt-8 flex justify-center md:hidden">
          <div className="w-20 h-1 bg-[rgb(var(--card))] rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-20, 20, -20] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1/2 h-full bg-yellow-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}