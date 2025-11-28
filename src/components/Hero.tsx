import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We craft identity,
        <br />
        experience and presence.
      </motion.h1>
    </section>
  );
};

export default Hero;
