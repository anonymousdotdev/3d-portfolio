import React from "react";
import ProjectCard from "../sub/ProjectCard";
import CircularGallery from "./ProjectWorks";
const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    text: "Coding"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    text: "Team Work"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    text: "Web Development"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    text: "Programming"
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    text: "Mobile Apps"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    text: "UI/UX Design"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    text: "Database"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    text: "Cloud Computing"
  },
  {
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    text: "DevOps"
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    text: "AI/ML"
  }
];


const Projects = () => {
  return (
    <div
      className=""
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div style={{ height: '600px', position: 'relative' }} >
  <CircularGallery items={galleryItems} bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div> */}
    </div>
  );
};

export default Projects;
