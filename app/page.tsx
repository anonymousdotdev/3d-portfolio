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
      content: (
        <TimelineItem
        year="2021 - Present"
        title="Senior Full Stack Developer"
        company="TechNova Solutions"
        description="Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across projects."
      />
      ),
    },
    {
      title: "Early 2023",
      content: (
        <TimelineItem
        year="2021 - Present"
        title="Senior Full Stack Developer"
        company="TechNova Solutions"
        description="Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across projects."
      />
      ),
    },
    {
      title: "Changelog",
      content: (
        <TimelineItem
        year="2021 - Present"
        title="Senior Full Stack Developer"
        company="TechNova Solutions"
        description="Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across projects."
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
