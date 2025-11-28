import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Motion Graphics',
      description: 'Campaigns, Institutional and Corporate Videos, Digital and Interactive Experiences',
      gif: 'GIF_Motion.gif',
    },
    {
      title: 'Web & Digital Product',
      description: 'Interface Design (UI), User Experience (UX), Mobile and App Design, Interactive Design, Prototyping',
      gif: 'GIF_Web.gif',
    },
    {
      title: 'Brand Identity',
      description: 'Market Research, Brand Architecture, Brand Messaging, Development, Brand Guidelines, Naming and Slogan',
      gif: 'GIF_Brand.gif',
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-16 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">What can we do for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <img src={`/src/assets/${service.gif}`} alt={service.title} className="w-full h-auto object-cover mb-4" />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
