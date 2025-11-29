import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about-us" className="py-24 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We blend technology and art to create innovative designs that open up new possibilities.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-400 space-y-6"
          >
            <p>
              At Reino Studio, we blend technology and art to create innovative designs that open up new possibilities. We understand that sensitivity and technique go hand in hand, working together to benefit your company and customers.
            </p>
            <p>
              Specializing in digital platforms, we also work across various mediums. From planning to development, we cover everything from visual identity to interactive installations. What sets us apart is our personalized approach.
            </p>
            <p>
              Our owners are actively involved throughout the design process, ensuring a passionate and results-driven experience. With our dedicated customer service, close collaboration, and streamlined process, we make things simple and efficient, without unnecessary bureaucracy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
