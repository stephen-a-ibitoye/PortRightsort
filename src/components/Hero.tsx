import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import backgroundImage from '../assets/studio-image.jpg';

const Hero: React.FC = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
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

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold leading-tight"
        >
          {"We craft identity, experience and presence.".split(" ").map((word, index) => (
            <span key={index} className="inline-block overflow-hidden">
              <motion.span variants={letter} className="inline-block">
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <ScrollLink to="featured-works" smooth={true} duration={500}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </motion.button>
        </ScrollLink>
        <ScrollLink to="featured-works" smooth={true} duration={500}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </motion.button>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
