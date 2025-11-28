import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: 'GEN',
      category: 'Branding, brand guide',
      image: 'Gen-01-scaled.jpg',
    },
    {
      title: 'Berrics',
      category: 'Strategy & Design, Identity, Interface',
      image: 'Berrics-1-scaled.jpg',
    },
    {
      title: 'Cariuma',
      category: 'Branding, Interactive Content',
      image: 'Cariuma-1-1-scaled.jpg',
    },
    {
      title: 'Zuso',
      category: 'Branding, UX/UI, Illustration, Animation',
      image: 'Zuso-1-scaled.jpg',
    },
    {
      title: 'Superela',
      category: 'App Design, Branding, Illustration, Motion, UX/UI',
      image: 'Superela-1-scaled.jpg',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="featured-works" className="py-16 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={`/src/assets/${project.image}`}
                  alt={project.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
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
