"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop, textVariant } from "@/utils/motion";
import Image from "next/image";
import { styles } from "@/utils/styles";
import Title from "../sub/Title";

const OpenToWork = () => {
  return (
    <div className="">
    <div className="flex flex-row relative items-center justify-center  md:min-h-screen min-h-[460px]  w-full h-full">
    <motion.div variants={textVariant()} className=" absolute -top-10 mb-5 z-20 ">
        <p className={styles.sectionSubText}> What I love to work with! </p>
        <h2 className={`${styles.sectionHeadText}`}>
          <Title title="Open to global opportunities." />
        </h2>
      </motion.div>

     
      {/* <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div> */}

      <div className="w-full flex items-start justify-center absolute ">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/cards-video.webm/"
        />
      </div>
    </div>
    </div>
  );
};

export default OpenToWork;
