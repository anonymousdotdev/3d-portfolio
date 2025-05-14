"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logoShah.png"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Profile from "../ui/profile";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        
          <div onClick={() => router.push("/")}>
          <Image
            src={logo}
            alt="logo"
            width={230}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          </div>

        <div className="">
          <Profile/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
