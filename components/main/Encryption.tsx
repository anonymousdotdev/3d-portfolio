"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop, textVariant } from "@/utils/motion";
import Image from "next/image";
import { styles } from "@/utils/styles";
import Title from "../sub/Title";

const Encryption = () => {
  return (
    <div className="">
    <div className="flex flex-row relative items-center justify-center  md:min-h-screen min-h-[460px]  w-full h-full">
    <motion.div variants={textVariant()} className=" absolute top-0 z-20 ">
        <p className={styles.sectionSubText}> What I focus on! </p>
        <h2 className={`${styles.sectionHeadText}`}>
          <Title title="Performance & Security" />
         
        </h2>
      </motion.div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center justify-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
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
          src="/encryption.webm/"
        />
      </div>
    </div>
    </div>
  );
};

export default Encryption;
