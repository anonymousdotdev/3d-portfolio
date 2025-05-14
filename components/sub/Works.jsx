import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../utils/styles";
import { github, folder } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ProjectCardUI from "./ProjectCardUI";

import Image from "next/image";
import Title from "./Title";
import CircularGallery from "../main/ProjectWorks";
const Works = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText} w-full flex  gap-4`}>
          <Title title={"Projects"} />
          <Image src={folder} className="w-20 " />
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      {/* <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div> */}
      {/* <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCardUI key={index + "w"} index={index} project={project} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Works, "");
