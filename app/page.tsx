"use client"


import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";

import MyProjects from "@/components/main/MyProjects";
import Skills from "@/components/main/Skills";
import ServicesSection from "@/components/main/ServicesSection";
import CircularGallery from "@/components/main/ProjectWorks";
import About from "@/components/sub/About";
import { Works } from "../components/sub/";
import Experience from "../components/sub/Experience";
import Image from "next/image";
import { Tech } from "@/components/sub";
import { Timeline } from "@/components/ui/timeline";
import lscl from '../assets/company/LSCL.png'
import userapp from '../assets/company/YoloHealth+.png'
import growth from '../assets/company/growth.png'
import TimelineItem from "@/components/sub/TimelineItem";

export default function Home() {
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
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 ">
        <Hero />
        <About />
        <ServicesSection/>
        <Tech />
        {/* <Experience /> */}
        <div className="w-full">
      <Timeline data={data} />
    </div>
        <Encryption />
        <Works />
        

     
        {/* <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div> */}

      </div>
    </main>
  );
}
