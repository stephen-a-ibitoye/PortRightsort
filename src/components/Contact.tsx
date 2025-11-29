import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-24 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          SAY HI!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-400 mb-8"
        >
          Tell us about your project. Let’s collaborate and make great stuff.
        </motion.p>
        <motion.a
          href="mailto:contato@reinostudio.com.br"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl font-bold hover:underline"
        >
          contato@reinostudio.com.br
        </motion.a>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 text-lg"
        >
          +55 21 98479-6999
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center space-x-6 mt-12"
        >
          <a href="https://www.instagram.com/reinostudio/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/reino-studio" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://wa.me/5521984796999" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaWhatsapp size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
