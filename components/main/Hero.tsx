import React from "react";
import HeroContent from "../sub/HeroContent";
import MainHero from "./MainHero";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full " id="about-me" >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute   top-[-700px] xl:top-[-420px] lg:top-[-357px]  h-full w-full left-0 z-[1] object-cover md:block hidden"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      {/* <HeroContent /> */}
      <MainHero/>
    </div>
  );
};

export default Hero;
