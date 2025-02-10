"use client";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Card from "@/components/Card/Card";
import bookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import { SiExpress, SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import smileMemoji from "../assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import mapImage from "../assets/images/map.png";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: SiJavascript,
  },
  {
    title: "TypeScript",
    iconType: SiTypescript,
  },
  {
    title: "React.js",
    iconType: SiReact,
  },
  {
    title: "CSS3",
    iconType: SiCss3,
  },
  {
    title: "HTML5",
    iconType: SiHtml5,
  },
  {
    title: "Github",
    iconType: SiGithub,
  },
  {
    title: "Express.js",
    iconType: SiExpress,
  },
  {
    title: "Node.js",
    iconType: IoLogoNodejs,
  },
  {
    title: "Next.js",
    iconType: SiNextdotjs,
  },
  {
    title: "Tailwind CSS",
    iconType: SiTailwindcss,
  },
  {
    title: "MongoDB",
    iconType: SiMongodb,
  },
];

const hobbies = [
  {
    title: "Travelling",
    emoji: "🌍",
    left: "50%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "10%",
    top: "39%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "35%",
    top: "32%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "45%",
    top: "70%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "2%",
    top: "23%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "0%",
    top: "0%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn More About Who I am, What Inspires Me and What I Do"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective and inspiring my creativity."
              />
              <div>
                <Image
                  className="w-40 mx-auto mt-2 md:mt-0"
                  src={bookImage}
                  alt="book cover"
                />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I used to craft exceptional
                digital experiences."
              />
              <ToolBoxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:40s]"
              />
              <ToolBoxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:35s]"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="My Hobbies"
                description="Explore my intersts and hobbies beyond digital realm"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full
                  gap-2 px-6 py-1.5 items-center absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="object-cover w-full h-full object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-['']
            after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-white/20 
            after:pointer-events-none"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <Image
                  src={smileMemoji}
                  alt="smile memoji"
                  className="size-20"
                />
                <div>Delhi</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
