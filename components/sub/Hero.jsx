import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import HiIcons from "../../assets/hi.webp";
import ComputersCanvas from "../canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1e57d8]" />
          <div className="w-1 sm:h-80 ml-2 h-40 bg-[#1e57d8]" />
        </div>
        <div className="">
          <h1
            className={`${styles.heroHeadText} text-white flex justify-start items-center italic`}
          >
            {" "}
            Hi{" "}
            <img
              src={HiIcons}
              alt="hi"
              className="w-10 md:w-20 md:h-20 h-10 mx-2"
            />
            , I'm
            <span className="text-gradient text-left mx-3">Shah</span>
          </h1>

          <p className="italic">
            I'm a Full Stack Developer with a passion for creating innovative
            and user-friendly web applications.
            <br className="sm:block" /> I specialize in building dynamic and
            responsive web applications from front-end to back-end.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute md:bottom-2 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
