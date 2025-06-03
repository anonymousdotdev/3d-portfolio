import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import BottomTab from "@/components/main/BottomTab";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shah Hussain 🚀 ",
  description: "A Passionate Full Stack Developer 🇮🇳",
};
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="../assets/logoShah.png" /> */}
      <link rel="shortcut icon" href="./logoShah.png" />
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden h-full `}
      >
             <ScrollProgress className="top-[65px]" />
        <StarsCanvas />
        <Navbar />
        <div className=" mb-20">
        {children}
        </div>
       <div className="fixed  w-full z-50 bottom-6">
       <BottomTab />
       </div>
      {/* <Header/> */}

        {/* <Footer /> */}
        <SmoothCursor />
      </body>
    </html>
  );
}
