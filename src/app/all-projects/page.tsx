"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  MessageCircle,
  Blocks,
  Zap,
  Earth,
  Car,
  BotMessageSquare,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { Footer } from "../../sections/Footer";
import notaktoImg from "../../assets/all-projects/notaktoImg.png";
import GlobegatherImg from "../../assets/project-images/GlobegatherImg.png";
import EnigmaPassImg from "../../assets/project-images/EnigmaPassImg.png";
import PortfoliaImg from "../../assets/project-images/PortfoliaImg.png";



export default function Page() {
  return (
    <div>
      <BackgroundBeamsWithCollision className="relative overflow-x-clip bg-gradient-to-t from-gray-900/20 to-gray-800/20 font-serif h-full">
        <section className="flex flex-col items-center justify-center mx-11 my-10 md:my-28" id="home">
          <motion.h1
            className="text-primary-green text-6xl md:text-[8.7vw] bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
          >
            Play.
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-primary-green max-w-[700px] text-center mt-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn", delay: 0.2 }}
          >
            A collection of tools and sites I&apos;ve created, designed to be helpful, fun, & sometimes just a little bit weird.
          </motion.p>
        </section>

        <div className="relative px-10 mt-40 overflow-x-clip font-serif">
          <BentoGrid className="lg:max-w-4xl mx-auto pb-60 z-10">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                link={item.link}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </BackgroundBeamsWithCollision>
      <BackgroundBeams />
      <Footer />
    </div>
  );
}

const Skeleton = ({
  image,
  icon,
}: {
  image: StaticImageData | string;
  icon: React.ElementType;
}) => (
  <div className="flex-1 min-h-[6rem] rounded-xl bg-gradient-to-b from-gray-900/10 to-gray-800/10 flex justify-center items-center">
    <Image src={image} alt="" className="object-contain w-full h-full" />
  </div>
);

const items = [
  {
    title: "Notakto-tic",
    description: "HTML, CSS, React.js, TailwindCSS, Game Theory",
    header: <Skeleton image={notaktoImg} icon={MessageCircle} />,
    icon: <MessageCircle className="h-4 w-4 text-neutral-500" />,
    link: "https://notakto-tic.netlify.app/",
  },
  {
    title: "Globegather",
    description: "HTML, CSS, React.js, TailwindCSS, Weather API",
    header: <Skeleton image={GlobegatherImg} icon={MessageCircle} />,
    icon: <Blocks className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Rezul04/GlobeGather-Reactjs/",
  },
  {
    title: "Enigma Pass",
    description: "HTML, CSS, React.js, TailwindCSS, Data Structures",
    header: <Skeleton image={EnigmaPassImg} icon={MessageCircle} />,
    icon: <Earth className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Rezul04/EnigmaPass/",
  },
  {
    title: "Portfolia",
    description: "HTML, CSS, React.js, TailwindCSS, Portfolio-Builder",
    header: <Skeleton image={PortfoliaImg} icon={MessageCircle} />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Rezul04/Portfolia-Portfolio-builder-",
  },
  

 
];
