"use client";

import { IconType } from "react-icons";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { BsFileCode, BsBootstrap, BsArrowRepeat, BsFillLightningFill } from "react-icons/bs";
import { SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTypescript, SiSwiper } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

interface Skill {
  name: string;
  icon: IconType;
}
const skillsData: Skill[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: BsFileCode },
  { name: "React Js", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Bootstrap", icon: BsBootstrap },
  { name: "Framer Motion", icon: BsFillLightningFill },
  { name: "SwiperJS", icon: SiSwiper },
  { name: "RESTful API", icon: AiOutlineApi },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-6xl mx-auto text-center py-12 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
      <p className="max-w-3xl text-base font-light mb-8">
        I am a skilled and passionate web developer with experience in creating visually appealing and user-
        friendly websites. I have a strong understanding of modern web design principles and a keen eye for detail.
        I specialize in building responsive, high-performance interfaces using HTML, CSS, JavaScript, TypeScript, 
        React, and Next.js, with styling powered by Bootstrap and Tailwind CSS. I also work with Framer Motion for
        smooth animations, Swiper.js for interactive sliders, and integrate RESTful APIs to deliver dynamic, scalable
        web applications. I use Git and GitHub for version control and collaborative development.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {skillsData.map((skill, idx) => {
          const Icon = skill.icon as unknown as ComponentType<any>;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center p-4 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md"
            >
              <Icon
                size={40}
                className="mb-3 text-slate-900 dark:text-slate-100"
              />
              <h3 className="text-slate-900 dark:text-slate-100 font-medium">{skill.name}</h3>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
