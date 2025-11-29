import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Gen01 from '../assets/Gen-01-scaled.jpg';
import Berrics1 from '../assets/Berrics-1-scaled.jpg';
import Cariuma1 from '../assets/Cariuma-1-1-scaled.jpg';
import Superela1 from '../assets/Superela-1-scaled.jpg';

const projects = [
  {
    title: 'GEN',
    category: 'Branding, brand guide',
    image: Gen01,
  },
  {
    title: 'Berrics',
    category: 'Strategy & Design, Identity, Interface',
    image: Berrics1,
  },
  {
    title: 'Cariuma',
    category: 'Branding, Interactive Content',
    image: Cariuma1,
  },
  {
    title: 'Superela',
    category: 'App Design, Branding, Illustration, Motion, UX/UI',
    image: Superela1,
  },
];

const FeaturedProjects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="featured-works" className="py-24 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
