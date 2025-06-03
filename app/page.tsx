"use client"


import Encryption from "@/components/main/Encryption";
import InfoDetails from "@/components/main/IntroDetails";
import Hero from "@/components/main/Hero";

import MyProjects from "@/components/main/MyProjects";
import Skills from "@/components/main/Skills";
import OpenToWork from "@/components/main/OpenToWork";
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
import Projects from "@/components/main/Projects";

export default function Home() {
 
  return (
    <main className="min-h-screen w-full px-6 md:px-16 py-12 md:py-20">
      
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <About /> */}
        <InfoDetails />
        <ServicesSection/>
        <Tech />
        <Timeline  />
        <Encryption />
        <Works />
        {/* <Projects/> */}
        <OpenToWork />
        

     
        {/* <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div> */}

      </div>
    </main>
  );
}
