import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Gen32 from '../assets/Gen-32-1.png';
import Berrics23 from '../assets/Berrics-23.jpg';
import Cariuma12 from '../assets/Cariuma-12.jpg';
import Superela8 from '../assets/Superela-8.jpg';
import Gen21 from '../assets/Gen-21-1.png';
import Berrics22 from '../assets/Berrics-22.jpg';
import Cariuma11 from '../assets/Cariuma-11.jpg';
import Superela23 from '../assets/Superela-23.jpg';

const works1 = [Gen32, Berrics23, Cariuma12, Superela8];
const works2 = [Gen21, Berrics22, Cariuma11, Superela23];

const OurWorks: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -innerWidth]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, innerWidth]);

  if (!innerWidth) {
    return null;
  }

  return (
    <section id="our-works" className="py-24 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Works
        </motion.h2>
      </div>
      <div className="relative h-[500px]">
        <motion.div
          style={{ x: x1 }}
          className="absolute top-0 left-0 flex space-x-8"
        >
          {works1.map((work, index) => (
            <img key={index} src={work} alt={`Work ${index + 1}`} className="h-64 rounded-lg" />
          ))}
        </motion.div>
        <motion.div
          style={{ x: x2 }}
          className="absolute bottom-0 right-0 flex space-x-8"
        >
          {works2.map((work, index) => (
            <img key={index} src={work} alt={`Work ${index + 1}`} className="h-64 rounded-lg" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorks;
