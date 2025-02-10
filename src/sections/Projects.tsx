"use client";
import Image from "next/image";
import CheckIcon from "../assets/icons/check-circle.svg";
import ArrowUpRight from "../assets/icons/arrow-up-right.svg";
import grainImage from "../assets/images/grain.jpg"; 
import { motion } from "framer-motion";
import notaktoImg from "@/assets/all-projects/notaktoImg.png";
import GlobegatherImg from "@/assets/project-images/GlobegatherImg.png";
import EnigmaPassImg from "@/assets/project-images/EnigmaPassImg.png";
import PortfoliaImg from "@/assets/project-images/PortfoliaImg.png";

const portfolioProjects = [
  {
    company: "HTML , Tailwind-CSS , React.js",
    title: "Notakto-tic",
    results: [
      { title: "Trinity-Tic-Tac-Toe" },
      { title: "Game Website" },
      { title: "Deployed on Netlify" },
    ],
    link: "https://notakto-tic.netlify.app/",
    git: "https://github.com/Rezul04/trinity_tic_tac_toe_js",
    image: notaktoImg,
  },
  {
    company: "HTML , Tailwind-CSS , React.js",
    title: "GlobeGather",
    results: [
      { title: "Real-time NEWS Website" },
      { title: "Delivers up-to-date and relevant news" },
      { title: "Personalized news feed" },
    ],
    link: "https://github.com/Rezul04/GlobeGather-Reactjs/",
    git: "https://github.com/Rezul04/GlobeGather-Reactjs/",
    image: GlobegatherImg,
  },
  {
    company: "HTML , Tailwind-CSS , React.js, Tries",
    title: "EnigmaPass",
    results: [
      { title: "Password Generator and Strength Detector website " },
      { title: "Password strength detection mechanism using the Trie Data Structure" },
      { title: "Offers Robust Password Protection" },
    ],
    link: "https://github.com/Rezul04/EnigmaPass/",
    git: "https://github.com/Rezul04/EnigmaPass/",
    image: EnigmaPassImg,
  },
  {
    company: "HTML , Tailwind-CSS , React.js",
    title: "Portfolia",
    results: [
      { title: "Portfolio-Builder Website" },
      { title: "Generate downloadable PDF versions of the portfolio" },
      { title: "Enables users to showcase their skills, projects, and achievements" },
    ],
    link: "https://github.com/Rezul04/Portfolia-Portfolio-builder-",
    git: "https://github.com/Rezul04/Portfolia-Portfolio-builder-",
    image: PortfoliaImg,
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section className="pb-16">
      <div className="container">
        <motion.div
          className="flex justify-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Real-World Results
          </p>
        </motion.div>
        <motion.h2
          className="font-serif text-3xl text-center mt-6 md:text-5xl"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="text-center text-white/60 mt-4 md:text-lg mx-w-md mx-auto lg:text-xl"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          See how I transformed concepts into engaging digital experiences.
        </motion.p>

        <div className="md:mt-20 flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project, index) => {
            return (
              <motion.div
                key={project.title}
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden border-2 border-white/20 sticky"
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage})`, 
                  }}
                ></div>

                <motion.div
                  className="lg:grid lg:grid-cols-2 gap-16"
                  whileHover={{ gap: "100px", paddingTop: "10px" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => {
                        return (
                          <li
                            key={result.title}
                            className="flex gap-2 text-sm text-white/50 md:text-base"
                          >
                            <CheckIcon className="size-5" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="flex flex-col md:flex-row md:gap-4">
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 transition ease-in-out delay-150 hover:bg-gray-950 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300">
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                      <a href={project.git} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6 transition ease-in-out delay-150 hover:bg-gray-950 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300">
                          <span>Github</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
