import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-tight"
        >
          We craft identity,
          <br />
          experience and presence.
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
