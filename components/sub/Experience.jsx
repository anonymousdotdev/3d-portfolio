import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { Image } from "next/image";
import { styles } from "../../utils/styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { work } from "../../assets";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} w-full flex  gap-4`}>
          {" "}
          <Title title="Experience" />{" "}
          <Image alt="Experience" src={work} className="w-20 " width={"5rem"} />
        </h2>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
