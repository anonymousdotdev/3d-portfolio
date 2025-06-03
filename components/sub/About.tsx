"use client"
import { motion } from "framer-motion";

import { styles } from "../../utils/styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import {avatar2} from "../../assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { Tilt } from "react-tilt";


const About = () => {
  return (
    <div className="flex flex-col z-[30]">
     <div className="flex md:flex-row flex-col  justify-between items-center pr-4 ">
    <div>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Who I am </p>
        <Title title={"Introduction"} />

      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white  text-[17px] max-w-3xl  leading-[30px]"
      >
        I'm a Full Stack Web and Mobile App Developer with expertise in developing web applications
        using cutting-edge technologies like MongoDB, Express, React, and
        Node.js. From designing intuitive user interfaces to building scalable
        back-end systems, I take pride in delivering custom solutions that
        exceed expectations. I'm a quick leanrer and collaborator closely with
        client to create efficient,scalable and user-friendly solutions that
        solve real-world problems. Let's work together to bring your ideas to
        life!.
      </motion.p>
    </div>
    <Tilt className="  rounded-2xl hover:scale-50  gradient-border  md:mt-0 mt-8">
        <img src={avatar2.src} className="w-[250px] h-auto rounded-lg "/>
      </Tilt>
     </div>

      <div className="mt-24 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
