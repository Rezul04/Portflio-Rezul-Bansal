import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <motion.p
          className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
      </div>
      <motion.h2
        className="font-serif text-3xl text-center mt-6 md:text-5xl"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-center text-white/60 mt-4 md:text-lg mx-w-md mx-auto lg:text-xl"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
      >
        {description}
      </motion.p>
    </>
  );
};

export default SectionHeader;
