import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as ScrollLink } from 'react-scroll';

import MotionGif from '../assets/GIF_Motion.gif';
import WebGif from '../assets/GIF_Web.gif';
import BrandGif from '../assets/GIF_Brand.gif';

const services = [
  {
    title: 'Motion Graphics',
    description: 'Campaigns, Institutional and Corporate Videos, Digital and Interactive Experiences',
    gif: MotionGif,
  },
  {
    title: 'Web & Digital Product',
    description: 'Interface Design (UI), User Experience (UX), Mobile and App Design, Interactive Design, Prototyping',
    gif: WebGif,
  },
  {
    title: 'Brand Identity',
    description: 'Market Research, Brand Architecture, Brand Messaging, Development, Brand Guidelines, Naming and Slogan',
    gif: BrandGif,
  },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          What can we do for you
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center"
            >
              <img src={service.gif} alt={service.title} className="w-48 h-48 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <ScrollLink
            to="featured-works"
            smooth={true}
            duration={500}
            className="inline-block px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
          >
            View all Works
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
