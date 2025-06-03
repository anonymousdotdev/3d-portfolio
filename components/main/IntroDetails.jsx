import { useState } from 'react';
import EarthCanvas from '../canvas/Earth';
import CustomButton from '../ui/custom-button';
import { MagicCard } from "@/components/magicui/magic-card";
import { Tilt } from 'react-tilt';
import {avatar2} from '../../assets';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import TechStack from "../sub/TechStack3d";
import { styles } from '@/utils/styles';
import Title from '../sub/Title';
// import Globe from 'react-globe.gl';
const InfoDetails = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shahhussaindev@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
       <motion.div variants={textVariant()} className='mb-8'>
    <p className={styles.sectionSubText}>Who I am </p>
        <Title title={"Introduction"} />

      </motion.div>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
        
          <div className="grid-container">
          <Tilt className="   flex justify-center    md:mt-0 mt-8">
        <img src={avatar2.src} style={{borderRadius:"20px"}} className=" rounded-2xl  w-[250px] h-[300px] object-contain"/>
      </Tilt>

            <div>
              <p className="grid-headtext">Hi, I'm Shah Hussain</p>
              <p className="grid-subtext">
               A Full Stack Developer (Web & Mobile) With 4 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
      
        </div>
      

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <TechStack />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <EarthCanvas />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in India, Lucknow and open to remote work worldwide.</p>
              <CustomButton name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[160px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">shahhussaindev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoDetails;
