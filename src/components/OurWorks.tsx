import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurWorks: React.FC = () => {
  const works = [
    'Gen-32-1.png',
    'Berrics-23.jpg',
    'Cariuma-12.jpg',
    'Zuso-11.jpg',
    'Superela-8.jpg',
    'Gen-21-1.png',
    'Berrics-22.jpg',
    'Cariuma-11.jpg',
    'Superela-23.jpg',
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="our-works" className="py-16 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={`/src/assets/${work}`}
                  alt={`Work ${index + 1}`}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
