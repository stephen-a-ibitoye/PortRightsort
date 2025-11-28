import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50"
    >
      <motion.img
        src={logo}
        alt="Reino Studio"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-32 h-32"
      />
    </motion.div>
  );
};

export default LoadingScreen;
