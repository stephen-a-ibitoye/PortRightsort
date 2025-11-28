"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="studio" className="h-screen flex items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold"
      >
        We craft identity,
        <br />
        experience and presence.
      </motion.h1>
    </section>
  );
}
