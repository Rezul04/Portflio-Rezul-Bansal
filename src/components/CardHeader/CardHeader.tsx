import React from "react";
import StarIcon from "../../assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 mx:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
        >
          <StarIcon className="size-9 text-emerald-300" />
        </motion.div>
        <motion.h3
          className="font-serif text-3xl"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        >
          {title}
        </motion.h3>
      </div>
      <motion.p
        className="text-sm lg:text-base max-w-xs text-white/60 mt-2"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default CardHeader;
