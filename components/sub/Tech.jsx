import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";
import Image from "next/image";
import Title from "./Title";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-8">
        <p className={styles.sectionSubText}>Technologies that I know!</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <Title title="My Skills" />
         
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div key={index} className="w-28 h-28">
            <h2>{tech.title}</h2>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
