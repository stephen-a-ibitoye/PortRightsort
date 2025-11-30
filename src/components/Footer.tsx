import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-black text-white py-16" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-4">Reino Studio</h3>
            <p className="text-gray-400">We build strategy, structure, and meaning.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><ScrollLink to="hero" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">Studio</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">Services</ScrollLink></li>
              <li><ScrollLink to="featured-works" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">Works</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">Contact</ScrollLink></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400">+55 21 98479-6999</p>
            <a href="mailto:contato@reinostudio.com.br" className="text-gray-400 hover:text-white">contato@reinostudio.com.br</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/reinostudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/company/reino-studio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
              <a href="https://wa.me/5521984796999" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaWhatsapp size={24} /></a>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Reino Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
