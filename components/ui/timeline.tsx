"use client";
import { textVariant } from "@/utils/motion";
import { styles } from "@/utils/styles";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Title from "../sub/Title";
import Image from "next/image";
import { IMAGE } from "@/assets";
import TimelineItem from "../sub/TimelineItem";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
const data = [
  {
    title:"October 2023 - Present",
    location:"Lucknow",
    content: (
      <TimelineItem
      year="2021 - Present"
      title="Full Stack Developer (Mobile & Web)"
      company="HealthATM India Pvt. Ltd. (YoloHealth)"
      description={`Spearheaded the development of the YoloHealth User App from scratch, enhancing user engagement
in the health-tech industry.
Utilized modern frameworks and best practices to deliver a robust and intuitive mobile application.
Enhanced the Lucknow Smart City Web Panel, optimizing navigation and usability.`}
    />
    ),
  },
  {
    title: "Nov 2022 - Sep 2023",
    location:"Gurgaon",
    content: (
      <TimelineItem
      year="2021 - Present"
      title="Frontend Developer 1"
      company="Z1Tech"
      description="Contributed to the development of Product VDO.AI, focusing on the frontend aspects of the project.
Built engaging landing pages using React, improving user retention and experience.
Designed and optimized the VDO.AI Dashboard, ensuring functionality and performance."
    />
    ),
  },
  {
    title: "Sep 2021 - Feb 2022",
    location:"Remote",
    content: (
      <TimelineItem
      year="Sep 2021 - Feb 2022"
      title="IBM Full Stack Developer Intern"
      company="IBM India"
      description="Led a team of 5 in designing and developing a project selected as one of the top 3 projects.
Contributed to both frontend and backend development, showcasing technical versatility.
Successfully deployed the project, demonstrating expertise in full-stack development."
    />
    ),
  },
  {
    title: "Sep 2021 - Feb 2022",
    location:"Lucknow",
    content: (
      <TimelineItem
      year="Sep 2021 - Feb 2022"
      title="Full Stack Developer Intern"
      company="Hindustan Aeronautics Limited Apprenticeship"
      description="Developed and maintained internal web applications using HTML, CSS, JavaScript, and Bootstrap, significantly streamlining internal workflows and documentation processes.
Collaborated closely with internal teams to understand user requirements, translating them into responsive and user-friendly web interfaces.
Implemented UI enhancements and optimized existing code to improve performance and usability across various devices.
Gained hands-on experience with version control systems like Git, and learned to work in a structured development environment."
    />
    ),
  },
];
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="  font-sans md:px-10"
      ref={containerRef}
    >
      

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
      <motion.div variants={textVariant()} className="pl-4">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} `}>
          {" "}
          <Title title="Experience" />{" "}
         
        </h2>
      </motion.div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
