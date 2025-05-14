import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import BottomTab from "@/components/main/BottomTab";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shah Hussain 🚀 ",
  description: "A Passionate Full Stack Developer 🇮🇳",
};

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
        <StarsCanvas />
        <Navbar />
        <div className=" mb-20">
        {children}
        </div>
        {/* <BottomTab /> */}
      <Header/>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
