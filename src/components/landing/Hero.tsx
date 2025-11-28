"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const text = "We craft identity, experience and presence.";

  return (
    <section id="studio" className="h-screen flex items-center justify-center text-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-6xl md:text-8xl font-bold z-20"
      >
        {text.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </section>
  );
}
